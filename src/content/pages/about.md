---
title: About Prompt Injection Report
description: OWASP LLM01 tracked and explained — direct and indirect prompt injection techniques and defenses.
---

Prompt Injection Report covers OWASP LLM01 in depth — direct and indirect prompt injection techniques, model-specific behaviors that create exploitable conditions, taxonomy, PoCs against real applications, and the detection and mitigation strategies that actually work.

## What we cover

- **Direct prompt injection** — instruction override, role confusion, and system prompt extraction techniques
- **Indirect prompt injection** — retrieval-augmented attacks, web content injection, and multi-step exploitation chains
- **Model-specific behaviors** — how different LLMs handle injection attempts and which conditions are exploitable
- **PoC analysis** — documented proof-of-concept attacks against real LLM applications, with disclosure timelines
- **Detection and mitigation** — what actually reduces injection risk, including input sanitization, output filtering, and architectural patterns

## Who reads this

Security researchers, application developers, and red teamers working on LLM-integrated systems where prompt injection is the primary attack surface.

## Stay current

Subscribe to the RSS feed for new technique coverage. If you have a reproducible prompt injection finding, contact the editorial desk — responsible disclosure guidance is available.

## Featured reading

- [When Prompt Injection Becomes a Regulatory Failure: Liability Surfaces for Foundation Model Deployers](/posts/prompt-injection-regulatory-liability/)
