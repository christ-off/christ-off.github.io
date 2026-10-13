---
layout: post
lang: en
title: Claude with a local LLM in a sandbox
excerpt: TOTO
category: conference
tags: ['Security', 'AI', 'LLM']
published: false
---

## Purpose of this page 

I want to customize the docker Sandbox for Agent I will use to code

## Create a template from a running sandbox

You can start a Sandbox and create a template out of it
Reference : ["Saving a sandbox as a template"](https://zvezdochetu.github.io/docker-docs-course/ai/sandboxes/customize/templates/#saving-a-sandbox-as-a-template)

Warning : You will "capture" the sandbox from a running one. A kind of model.  
If you store credentials they will be part of the sandbox.  
Don't do that or at least don't distribute.

* Create a mountless sandbox ```sbx create --name claude-with-tools claude```
  Mountless as I don't want to mount a drive at this stage
* Run it ```sbx run --name claude-with-tools```
* Get inside it to run bash commands. On a  ```sbx exec -it claude-with-tools bash```
* Install the tools you need. And I need ...
  * RTK : ```curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh```
  * Playwright :
    ```
       npm install -g playwright
       playwright-cli install --skills -g
    ```
* Exit the bash
* Exit the sandbox
* Stop the sandbox ( onway is to start ```sbx``` and stop the sandbox from the TUI )
* Save the sandbox ```sbx template save my-sandbox my-template:v1```
* It creates a snapshot of your sandbox
* useful commands :
  ```
     sbx template ls
     sbx template rm my-template:v1
  ```
* Start a new sandbox based on the template : ```sbx run -t my-template:v1 claude```

## Claude in a Sandbox using a local LLM

I use omlx.ai to run Claude locally.
Of course, you will need a powerful machine to do so and you need a "good enough model"
I use 
-  Qwen3.6-35B-A3B · bf16
   I reach between 40 and 78 tokens/s when generating content
   [Here is how a 40 tokens/s looks like](https://mikeveerman.github.io/tokenspeed/?rate=40&mode=code)  
- Qwen3.8-Flash-Next-oQ4e-mtp · 4bit
  I start using it 
  Will keep you posted

TO COME

## References

- ["Don't let your agents roam free in the wild: Mini Me gets its `sbx` kit"](https://mini-me.org/p/20261010-mini-me-sbx-kit)
- ["Running AI agents with customized templates using docker sandbox"](https://andrewlock.net/running-ai-agents-with-customized-templates-in-docker-sandbox/)
