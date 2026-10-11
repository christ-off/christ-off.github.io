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

I use omlx.ai to run Claude locally.
Of course, you will need a powerful machine to do so and you need a "good enough model"
I use 
-  Qwen3.6-35B-A3B · bf16
   I reach between 40 and 78 tokens/s when generating content
   [Here is how a 40 tokens/s looks like](https://mikeveerman.github.io/tokenspeed/?rate=40&mode=code)  
- Qwen3.8-Flash-Next-oQ4e-mtp · 4bit
  I start using it 
  Will keep you posted

## Build the Sandbox

There are many Sandboxes already avalaible.  
There are many options
There are many kits to extend a Sandbox
I need some tools to be installed : 

- RTK to reduce my tokens usage : https://www.rtk-ai.app/
- AWS CLI ? I won't the purpose of the Sandbox is to block dangerous actions.
- Playwright with browsers 
- ...
  
### 


curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/master/install.sh | sh

## References

- ["Don't let your agents roam free in the wild: Mini Me gets its `sbx` kit"](https://mini-me.org/p/20261010-mini-me-sbx-kit)
