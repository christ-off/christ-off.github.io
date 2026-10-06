---
layout: post
lang: en
title: Devoxx Belgium 2026
excerpt: TOTO
category: conference
tags: ['Devoxx', 'Java', 'AI', 'LLM']
published: false
---

## Main links

The conference companion is neither an IOS Application, neither an Android Application.  
It's a powerful webapp : [The Devoxx Companion](https://m.devoxx.com/events/dvbe26)

## AI

### AI Tooling and Frameworks

#### From AI to Agent: A Field Guide to Agentic Patterns in LangChain4j

You can manually call LLMs to do one task after another or worse multiple agents at once, make them vote,...  Or...  
Use the power of LangChain4j to make those Agents work together without writing a "Kube for Agents"

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IXcQYp51PLM?si=5YtHbu_UEwNmt0dZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Introduction to Spring AI by Timo Salm

Want a 40 minutes introduction to StringAI instead of a 3 hours one ?  
Then this talk is for you  
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JzFelLDiVJQ?si=hbxLdZHRt-Z8Ashh&amp;start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Guardrails

I went to "Stopping AI Generated Architectural Drift: Deterministic Guardrails for Agentic Coding by Sasha Podl"

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/K3kD89Y1YCk?si=K8fYCtXGjYwhmtlN&amp;start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

And I tought "Honestly, I am, we are not going to write those ArchUnit tests and maintain that"
Happily, the same days a few minutes later ...

Testing Architecture Made Simple

TODO

### AI Security 

This 30 minutes talk is a good introduction : "our AI Agent Trusts Strangers Let Me Show You by Elder Moraes"

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/j3aEB0i3Up8?si=DPiPCvWfygd0WILK&amp;start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

It's a good talk but a security talk must be frightening.  
So I recommend the longer ( and surprisingly more fun !)

TODO

Afer this talk you will feel the urgent need to at least Sandbox your Coding Agent.  
The one that seems to lead the pack is ["Docker Sandbox"](https://docs.docker.com/ai/sandboxes/)  
I have tested that right away, and it works on my machine !  
Follow the ["Run locally"](https://docs.docker.com/ai/sandboxes/get-started/)

#### Docker Sandbox nextsteps

I need to have a look at kits to have my Coding Agent and the right tools with it ( like Playwright ).  
I may then create a config ["Sandbox environment files"](https://docs.docker.com/ai/sandboxes/configuration/environment-files/)  
The Claude Kit is bound to use Anthropic endpoints.  
But I like to use a local coding LLM using my dear friend [OMLX](https://omlx.ai/)  
**Work in progress on my side** 
 
## Tools

AI Everywhere ? Well sometimes we need deterministic tools... 

## "Java script"

You need to manage files locally, copy stuff. It's more than a single command.  
You start to write a bash file, a Python script, ...
But you write bash and Python 2 times a year.  
Yeah you can use Claude. But you won't master what's generated.  
And why running something you don't even understand ?  

You have java installed ? Even better you have Java 25 ?  
You can write simple, non-verbose code, and run it locally. It will run fast !

["Java Script (No, Not That One): Modern Automation with Java"](https://lomagnette.github.io/talks/java-script-no-not-that-one-modern-automation-with-java/)

## Dev Containers: the ultimate toolbox for developers ?

Coding is fun but development setup is hell ( and have you tried to setup a project after a few months on a new machine )

TODO VIDEO
