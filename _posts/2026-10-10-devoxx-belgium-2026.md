---
layout: post
lang: en
title: Devoxx Belgium 2026
excerpt: TOTO
category: conference
tags: ['Devoxx', 'Java', 'AI', 'LLM']
published: false
---

## Legend

- ❤️Talks I highly recommend ( check the topic tough )
- ⏱️Talks I recommend but need time to dive in
- 🚨Urgent stuff to do right now ! 
- 💡Ideas tools to apply
- ⚠️Topics that may not be applicable. They may require deeps organization changes 

## AI 

### Architecture and AI

First... Do we still need architecture ? Do we still need to define boundaries ?  
Answer is yes with a real case : "The port of Rotterdam"

### ⏱️ Taming Microservice Overload: Our Journey to Modular Monoliths by Mario Klaver

A real RETEX from the Port Of Rotterdam about "We are drawn by too many microservices" and the way out it.  
Not necessary to watch unless you believe that "our microservices have good boundaries"  

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/v86SfHA5ISw?si=iaqEBrNrI4jMIhZe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 💡🚨⚠️❤️ From Developer to Builder: A Spec Driven Development Deep Dive by Simon Martinelli

Now that I have your attention...Do you remember the time when we were doing specs, uses cases and more ?  

![Morpheus says : "What if I told you ... you can do use cases again ?"](/assets/posts/devoxxbe2026/what_if_use_cases.jpg)

I **highly** recommend whatching the vidéo : "From Developer to Builder: A Spec Driven Development Deep Dive by Simon Martinelli"  
It shows a process from specs to code through requirements, use cases

> The developer does not disappear. The work moves up one level.

Yes this process heavily uses AI with the help of the builder.  
The builder reads, modify, validates documents not huge Pull Request.  
Yes we generate documents. Up-To-Date documents.  

> From "Knowledge in the head" to "Knowledge in the repository"

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/z8lal-Yt_04?si=SOlQjOoLlNzSNX2X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Don't like vidéos ?

I have links for you :

- [Slides](/assets/devoxxbe2026/slides_From_Developer_to_Builder.pdf_1791183450803.pdf) 
- [Spec-Driven Development and the AI Unified Process](https://rabauer.dev/en/blog/ai-unified-process/)
  with video and repository !
- [The blog of the author](https://martinelli.ch/blog/)

### AI Tooling and Frameworks

#### ❤️💡Groma.md

https://github.com/MrLesk/groma.md

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
So I highly recommend the longer ( and surprisingly more fun !)

There a 3 hours version but here is a 50 minutes one

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/c4F7Iy3XqaY?si=4uYLxerkiGwkh88_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 
Every text, document, skill, markdown, input can now be weaponized against you.  
Afer this talk you will feel the urgent need to at least Sandbox your Coding Agent.  
Some IT company are irresponsible actor like Microsoft : ["Microsoft is about to let Copilot loose on your file system"](https://www.theregister.com/personal-tech/2026/10/07/microsoft-is-about-to-let-copilot-loose-on-your-file-system/5301763).  
Some companies have noticed ["Updates to Full Disk Access in macOS"](https://developer.apple.com/news/?id=p6zjojqw).  
But that's not enough ( think about credentials, data leaks).  
On way to go is to put your agent in to a sandbox.  

#### Sandbox for Agent

The one that seems to lead the pack is ["Docker Sandbox"](https://docs.docker.com/ai/sandboxes/)  
I have tested that right away, and it works on my machine !  
Follow the ["Run locally"](https://docs.docker.com/ai/sandboxes/get-started/)

There is still a lot of work to be done. I need an Agent but tools ( rtk, playwrigh ... ).
I may then create a config ["Sandbox environment files"](https://docs.docker.com/ai/sandboxes/configuration/environment-files/) or a template
**Work in progress on my side** 

## Tools

AI Everywhere ? Well sometimes we need deterministic tools... 

### "Java script"

You need to manage files locally, copy stuff. It's more than a single command.  
You start to write a bash file, a Python script, ...
But you write bash and Python 2 times a year.  
Yeah you can use Claude. But you won't master what's generated.  
And why running something you don't even understand ?  

You have java installed ? Even better you have Java 25 ?  
You can write simple, non-verbose code, and run it locally. It will run fast !

["Java Script (No, Not That One): Modern Automation with Java"](https://lomagnette.github.io/talks/java-script-no-not-that-one-modern-automation-with-java/)

### Dev Containers: the ultimate toolbox for developers ?

Coding is fun but development setup is hell ( and have you tried to setup a project after a few months on a new machine )  
There is a solution : "Dev Containers: the ultimate toolbox for developers? by Stéphane Philippart"  
** Warning ** : Made for VSCode, "works" on IntelliJ

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/eyJ5LO-Kyuw?si=_FAxz-wTYzJ8jcwu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

- The steps are here : [Dev Containers talk steps](https://github.com/philippart-s/dev-containers-talk)
- [Sources](https://github.com/philippart-s/dev-containers-template-talk)

### 💡 🚨 When ORM Becomes OMG: Performance Pitfalls in JPA and Friends by Jos Roseboom

Yes I learned new stuff about JPA :
- Connection Pools are cool. I can make them better, more efficient
- I can retrieve data more efficiently ( go way further than "Lazy Loading")

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ePBmAdRYl10?si=2CKwGCcrAhr5xjsn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The code repo is here ["Fun Fact Store"](https://github.com/JosRoseboom/funfactstore)

### 💡 ⚠️ Hands On Lab : From code to control: master deployments with Feature Flagging and OpenFeature

Switch behaviour in production even on the fly
It was a good "Hands On Lab" :
- https://blog.touret.info/feature-flag-workshop/
- https://github.com/alexandre-touret/feature-flag-workshop 

### ⚠️ Java on Kubernetes Without Container Images: The WebAssembly Way By Bruno Borges

You remember Log4J ? Trying to do an inventory. Rebuilding en masse, ...
What if I told you that you can deploy application, runtime, dependencies independently ? and swap them ?

**WARNING**  
This requires a cultural change. "System" will become in charge of the stack : 
- "your" runtime
- "your" dependencies
You ( dev  ) keep the application responsability.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fszyRIZXjQM?si=csXF1rTTTHOAkjWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 💡Spring

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W-OKVLMtPAw?si=_kox2HnebTbYIUya" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Takeaways

- From Developpers to builders
- We can rethink the way we build applications
- Agents and LLM are literally red flags waving in front of bad actors
- Do not forget "how to develop" and how includes access server, logs, command line tools
