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

Let's create template with the tools I need and then use it with a local LLM

## Create a template from a running sandbox

You can start a Sandbox and create a template out of it
Reference : ["Saving a sandbox as a template"](https://zvezdochetu.github.io/docker-docs-course/ai/sandboxes/customize/templates/#saving-a-sandbox-as-a-template)

Warning : You will "capture" the sandbox from a running one. A kind of model.  
If you store credentials they will be part of the sandbox.  
Don't do that or at least don't distribute.

* Create a mountless sandbox ```sbx create --name claude-base claude```
  Mountless as I don't want to mount a drive at this stage
* Before installing tools we need to allow some websites
  ```
  sbx policy allow network "cdn.playwright.dev,playwright.download.prss.microsoft.com,example.com"
  ```
  Both hosts are enabled for all sandboxes.
  ```example.com``` will allow do some tests
* Run it ```sbx run --name claude-base```
* Get inside it to run bash commands with : ```sbx exec -it claude-base bash```
* Install the tools you need. And I need ...
  * RTK : ```curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh```
  * Playwright and Chromium:
    ```
       npm install -g playwright
       npm install -g @playwright/cli@latest
       playwright-cli install --skills -g
       playwright-cli install-browser chrome-for-testing --with-deps
    ```
  * Ruby and Jekyll are used to build my static websites
    Outside the sandbox before installing
    ```
      sbx policy allow network "ports.ubuntu.com,rubygems.org,index.rubygems.org"
    ```
    Install Ruby...
    ```
      sudo apt-get update
      sudo apt-get install -y ruby-full build-essential zlib1g-dev     
    ```
    Note : Commands to use inside the project ( later )
    ```
      bundle config set --local path vendor/bundle   # in your site dir; avoids sudo gem installs
      bundle install                                 # Gemfile: gem "github-pages", "~> 232", group: :jekyll_plugins
      bundle exec jekyll serve
    ```
* Exit the bash
* Exit the sandbox
* If it is still running (it should stop ), stop the sandbox ( one way is to start ```sbx``` and stop the sandbox from the TUI )
* Save the sandbox ```sbx template save claude-base claude-template:v1```
* It creates a snapshot of your sandbox
* useful commands :
  ```
     sbx template ls
     sbx template rm claude-template:v1
  ```
* Start a new sandbox based on the template with a new name on the current folder : ```sbx run -t claude-template:v1 --name my-sandbox claude .```

## Claude in a Sandbox using a local LLM

I use omlx.ai to run Claude locally.
Of course, you will need a powerful machine to do so and you need a "good enough model"
I use 
-  Qwen3.6-35B-A3B · bf16
   I reach between 40 and 78 tokens/s when generating content
   [Here is how a 40 tokens/s looks like](https://mikeveerman.github.io/tokenspeed/?rate=40&mode=code)  
- Qwen3.8-Flash-Next-oQ4e-mtp · 4bit
  To be tested

### Use the local API

#### Reference : 

- I did not used this one as it tried to always use llmman.
  I don't want to use it now
  ["Connect a custom endpoint"](https://docs.docker.com/ai/sandboxes/configuration/models/#connect-a-custom-endpoint)
- Found that doc ["Run Claude Code in a Docker Sandbox with Docker Model Runner"](https://docs.docker.com/guides/claude-code-sandbox-model-runner/)

#### Procedure

1. Start OMLX and load the model you want
2. Open OMLX Web Dashboard
3. Allow local connection to port 8000 : ```sbx policy allow network localhost:8000```
4. It suggests me ```ANTHROPIC_BASE_URL='http://127.0.0.1:8000' ANTHROPIC_AUTH_TOKEN='3121' ANTHROPIC_DEFAULT_OPUS_MODEL='Qwen3.8-Flash-Next-oQ4e-mtp' ANTHROPIC_DEFAULT_SONNET_MODEL='Qwen3.6-35B-A3B-bf16' ANTHROPIC_DEFAULT_HAIKU_MODEL='Qwen3.6-35B-A3B-bf16' API_TIMEOUT_MS=3000000 CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1 claude --disallowedTools LSP```
5. Let's reuse this when running the sandbox ( but with host.docker.internal instead of 127.0.0.1 )
   See ["Accessing host services from a sandbox"](https://docs.docker.com/ai/sandboxes/workflows/development/#accessing-host-services-from-a-sandbox)
6. Run the sandbox ( the first time from template using ```-t my-template:v1```)
   ```
   sbx run --name sandbox-name -e ANTHROPIC_BASE_URL='http://host.docker.internal:8000' -e ANTHROPIC_DEFAULT_OPUS_MODEL='Qwen3.6-35B-A3B-bf16' -e ANTHROPIC_DEFAULT_SONNET_MODEL='Qwen3.6-35B-A3B-bf16' -e ANTHROPIC_DEFAULT_HAIKU_MODEL='Qwen3.6-35B-A3B-bf16' -e API_TIMEOUT_MS=3000000 -e CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1 claude .
   ```
7. You should see that Claude uses the right model ```Using Qwen3.6-35B-A3B-bf16 (auto-updated) · /model```
8. Test Claude and have a look at ["OMLX dashboard"](http://127.0.0.1:8000/admin/dashboard?tab=status)

## MCP

I need also to configure MCPs 

### IntelliJ

This will give the Sandboxed Claude access to Intellij IDEA through it's own MCP

1. We will use : ```http://127.0.0.1:64342/stream```
2. Add IntelliJ as a MCP : ```sbx mcp add intellij --url http://127.0.0.1:64342/stream```
   Ignore the warnings
3. Start the Sandbox
4. The MCP is added to the mcp gateway

## References

- ["Don't let your agents roam free in the wild: Mini Me gets its `sbx` kit"](https://mini-me.org/p/20261010-mini-me-sbx-kit)
- ["Running AI agents with customized templates using docker sandbox"](https://andrewlock.net/running-ai-agents-with-customized-templates-in-docker-sandbox/)
