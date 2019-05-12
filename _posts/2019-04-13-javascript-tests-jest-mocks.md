---
layout: post
title: "Javascript unit tests : 'Injecting mocks' with Jest"
excerpt: How to replace a module, a function by a mock when testing
category: dev
published: true
tags: ["Javascript", "Tests"]
image: /assets/posts/2019-04-13-javascript-tests-jest-mocks.png
---

## Purpose of this post

With a module A requiring a module B  
When I want to test A  
Show how to replace B by a mock using JestJS

## Context

I am a Java developper. I am a heavy user of [Mockito](https://site.mockito.org/).  
Often, I need to test a service and replace external systems, injected into my service, by Mocks.  
I use ["Inject Mocks"](https://static.javadoc.io/org.mockito/mockito-core/2.27.0/org/mockito/InjectMocks.html).

I need to do this in Javascript.  
As I write "lambdas" for AWS.  
I need to test them and avoid calling S3, SNS, DynamoDB, ...

Let's say we have a "Father" and a "Son".   
"Son" is required by "Father" 

## Simple test : everything is synchronous

##### father.js

{% highlight JavaScript %}
'use strict';
const son = require('./son');
exports.saysWithSon = () => {
    return "-- Father : I am your father " + son.says();
};
{% endhighlight %} 

##### son.js

{% highlight JavaScript %}
'use strict';

exports.says = () => {
    return "-- Son : Nooo";
};
{% endhighlight %} 

##### father.test.js

{% highlight JavaScript %}
'use strict';

const father = require('./father');

// We require the son module
const son = require('./son');

// IMPORTANT : We ask jest to mock the son module
jest.mock('../son');

describe('Testing Father with Son', () => {

    test('should say', () => {
        // Given
        // We replace son.says by another implementation
        son.says.mockImplementation( () => "XXXX");
        // When
        let say = father.saysWithSon();
        // Then
        expect(say).toBe("-- Father : I am your father XXXX");
        // instead of 
        // "-- Father : I am your father -- Son : Nooo" 
        // without mocks
    });

});
{% endhighlight %}
K
## asynchronous test with callbacks

Mocking a function with a callback is easy

##### father.js

{% highlight JavaScript %}
'use strict';

const son = require('./son');

exports.saysToSon = ( callback ) => {
    son.reply( (sonsaid) => callback("-- Father : I am your father " + sonsaid));
};
{% endhighlight %}

##### son.js

{% highlight JavaScript %}
'use strict';

exports.reply = (callback) => {
    callback("-- I say : Noo");
};
{% endhighlight %}

##### father.test.js

{% highlight JavaScript %}
'use strict';

const tested = require('./father');
const son = require('./son');

jest.mock('./son');

describe('Testing Father with Son', () => {

    test('should say', (done) => {
        // Given
        son.reply.mockImplementation( (callback) => { callback("XXXX"); });
        // Then
        function callback(data) {
            expect(data).toBe("-- Father : I am your father XXXX");
            done();
        }
        // When
        tested.saysToSon(callback);
    });

});
{% endhighlight %}

## Reference

- See [JestJS Mock Functions](https://jestjs.io/docs/en/mock-functions) docs
- My Repo : https://github.com/christ-off/POCJest

## TODO

I should update this post to add Promises