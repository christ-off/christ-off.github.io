---
layout: post
lang: en
title: Devoxx Belgium 2026
excerpt: My takeaways from Devoxx Belgium 2026 on architecture, AI agents, security and developer tooling.
category: conference
tags: ['Devoxx', 'Java', 'AI', 'LLM']
published: true
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gc5fF6pGhDA?si=AbVxASaDAkIxHeaF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Legend

- ❤️Talks I highly recommend (check the topic though)
- ⏱️Talks I recommend but need time to dive in
- 🚨Urgent stuff to do right now! 
- 💡Ideas tools to apply
- ⚠️Topics that may not be applicable. They may require deep organizational changes
- ☠️Killer talks

## Architecture and AI

First... Do we still need architecture? Do we still need to define boundaries?  
Answer is yes with a real case: "The port of Rotterdam"

### ⏱️ Taming Microservice Overload: Our Journey to Modular Monoliths by Mario Klaver

A real RETEX from the Port Of Rotterdam about being overwhelmed by too many microservices, and the way out of it.  
No need to watch unless you believe that "your microservices have good boundaries"  

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/v86SfHA5ISw?si=iaqEBrNrI4jMIhZe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 💡🚨⚠️❤️ From Developer to Builder: A Spec Driven Development Deep Dive by Simon Martinelli

Now that I have your attention... Do you remember the time when we were doing specs, use cases and more?  

![Morpheus says: "What if I told you ... you can do use cases again?"](/assets/posts/devoxxbe2026/what_if_use_cases.jpg)

I **highly** recommend watching the video. It shows a process from specs to code through requirements, use cases, and more.

> The developer does not disappear. The work moves up one level.

Yes, this process heavily relies on AI, with the help of you, the builder.  
The builder reads, modifies, validates documents and does not *validate* huge Pull Requests.  
Yes, we generate documents. Always up-to-date documents, if you stick to the rule: edit documents, then generate artifacts.  

> From "Knowledge in the head" to "Knowledge in the repository"

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/z8lal-Yt_04?si=SOlQjOoLlNzSNX2X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### More info on this topic

I have links for you:

- [Slides](/assets/devoxxbe2026/slides_From_Developer_to_Builder.pdf_1791183450803.pdf) 
- [Spec-Driven Development and the AI Unified Process](https://rabauer.dev/en/blog/ai-unified-process/)
  with video and repository!
- [The blog of the author](https://martinelli.ch/blog/)

## AI Tooling and Frameworks

### ❤️💡 Groma.md

Driving the code by documentation is a good starting point.  
But you need a map and [Groma.md](https://github.com/MrLesk/groma.md) provides it:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/_dcauZC9ST8?si=UT86Y9tOax5u-95R&amp;start=672" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 💡 From AI to Agent: A Field Guide to Agentic Patterns in LangChain4j

You can manually call LLMs to do one task after another, or, worse, run multiple agents at once and make them vote...  Or...  
Use the power of LangChain4j to make those Agents work together without writing a "Kube for Agents"

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IXcQYp51PLM?si=5YtHbu_UEwNmt0dZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### More links

- ["LangGraph4j Gives Your Java AI Workflow the Control a Loop Can't"](https://rabauer.dev/en/blog/langgraph4j-agents/)

### "Architecture" Guardrails

I went to "Stopping AI Generated Architectural Drift: Deterministic Guardrails for Agentic Coding by Sasha Podl"

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/K3kD89Y1YCk?si=1lAjAWE7mwSQrHSb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

And I thought "Honestly, I am, we are, not going to write those ArchUnit tests and maintain that"
Happily, the same day, a few minutes later...

#### 💡❤️Testing Architecture Made Simple by Gunter Rotsaert

There is a great tool to quickly put in place architecture tests: [Taikai](https://enofex.github.io/taikai/) 

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/asAxisu6EQ0?si=XkxH0KesSP0mrDRJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### AI Security 

#### Our AI Agent Trusts Strangers Let Me Show You by Elder Moraes

This 30-minute talk is a good introduction.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/j3aEB0i3Up8?si=DPiPCvWfygd0WILK&amp;start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

But I recommend Brian Vermeer even more.

#### 🚨☠️ AI Security Deep Dive, Securing Agents and AI Applications by Brian Vermeer

> Every piece of text is an attack surface
> Documents, comments, error messages, chat history, web pages, logs ... and much more

Not convinced?
Watch either the 2h49 talk by Brian Vermeer:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5AaJ3H9fG6M?si=9yYL-JAyMiUXENcf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Or this one (49 min), also by Brian Vermeer.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/c4F7Iy3XqaY?si=XWoQMW5G8DnXIMZ_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

After this talk you will feel the urgent need to at least sandbox your coding agent!  
Some irresponsible IT companies, like Microsoft, are working to make matters worse: ["Microsoft is about to let Copilot loose on your file system"](https://www.theregister.com/personal-tech/2026/10/07/microsoft-is-about-to-let-copilot-loose-on-your-file-system/5301763).  
Some companies have noticed the danger ["Updates to Full Disk Access in macOS"](https://developer.apple.com/news/?id=p6zjojqw) but it's not enough!  
Think about credentials, data leaks, destroying AWS PROD.  
One way to go is to put your agent into a sandbox.  

#### Sandbox for Agent

The one that seems to lead the pack is ["Docker Sandbox"](https://docs.docker.com/ai/sandboxes/)  
I have tested that right away, and it works on my machine!  
Follow the ["Run locally"](https://docs.docker.com/ai/sandboxes/get-started/) guide.

On my side, there is still a lot of work to be done. I need an agent with tools (rtk, playwright...).
I may then create a config ["Sandbox environment files"](https://docs.docker.com/ai/sandboxes/configuration/environment-files/) or a template.
**Work in progress on my side.** 

## Tools

We still need tools, reliable and efficient ones. 

Spring is the workhorse of our apps.

### Introduction to Spring AI by Timo Salm

Want a 40-minute introduction to Spring AI instead of a 3-hour one?  
Then this talk is for you  

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JzFelLDiVJQ?si=8XtxaNf6GisxN7dT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Of course Josh Long was there: Spring and Spring Security are improving.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1PtdpItmzTo?si=J1cHkU3LogxiQ-TN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W-OKVLMtPAw?si=RA4A4Yr4wSpm_uB6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### ❤️💡🚨 "Java script"

You need to manage files locally, copy stuff. Is it more than a single command?
You start to write a bash file, a Python script...
But you only write bash and Python twice a year.  
Yeah, you can use Claude. But you won't master what's generated.  
And why run something you don't even understand?  

Do you have Java installed? Even better, do you have Java 25?  
You can write simple, non-verbose code, and run it locally. It will run fast!

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pgVJWp-SjxI?si=mera3eqJ3fVGIs5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

["Java Script (No, Not That One): Modern Automation with Java"](https://lomagnette.github.io/talks/java-script-no-not-that-one-modern-automation-with-java/)

### Dev Containers: the ultimate toolbox for developers?

Coding is fun, but development setup is hell (and have you tried to set up a project after a few months on a new machine?)  
There is a solution: "Dev Containers: the ultimate toolbox for developers? by Stéphane Philippart"  
**Warning**: Made for VSCode, "works" on IntelliJ

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/eyJ5LO-Kyuw?si=_FAxz-wTYzJ8jcwu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

- The steps are here: [Dev Containers talk steps](https://github.com/philippart-s/dev-containers-talk)
- [Sources](https://github.com/philippart-s/dev-containers-template-talk)

### 💡 🚨 When ORM Becomes OMG: Performance Pitfalls in JPA and Friends by Jos Roseboom

Yes I learned new stuff about JPA:
- Connection Pools are cool. I can make them better, more efficient
- I can retrieve data more efficiently (go way further than "Lazy Loading")

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ePBmAdRYl10?si=2CKwGCcrAhr5xjsn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The code repo is here ["Fun Fact Store"](https://github.com/JosRoseboom/funfactstore)

### 💡 ⚠️ Hands-On Lab: From Code to Control, Master Deployments with Feature Flagging and OpenFeature

Want to switch behaviour in production, even on the fly?  

It was a good "Hands-On Lab":
- [Feature-Flag Workshop](https://blog.touret.info/feature-flag-workshop/)
- [Git Repo](https://github.com/alexandre-touret/feature-flag-workshop)

There is a conference about the same topic.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ij5RsREpjBg?si=FfsQ4Z1Sqeh9dBzT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### ⚠️ Java on Kubernetes Without Container Images: The WebAssembly Way by Bruno Borges

You remember Log4j? Trying to do an inventory. Rebuilding en masse...
What if I told you that you can deploy the application, runtime and dependencies independently, and swap them?

**WARNING**  
This requires a cultural change. "System" will become responsible for the stack:
- "your" runtime
- "your" dependencies
You (dev) keep the application responsibility.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fszyRIZXjQM?si=csXF1rTTTHOAkjWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Other talks

You'll have to play this video at 0.5x. Victor Rentea is excessive but you'll see some good stuff like automatic checks of architecture schemas.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BOcNjR2lBus?si=0HneRxQ9dUiXITw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

This guy builds private clusters to run LLMs locally.
He also builds those for banks that want their own stable, private LLM.  

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rv2KpWgb0Mw?si=E-L-yKxj0W3xvZKu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Takeaways

- From developers to builders
- We can rethink the way we build applications
- Agents and LLMs are red flags waving in front of bad actors
- Do not forget "how to develop", and that includes server access, logs, command-line tools

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/RlJaauOvcG0?si=ZFRUj4zpRdEwoDI_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
