# SITE_SPEC.md

# AnchorSpec Official Site v0.1 Site Specification

## Intent

Create the first official website for AnchorSpec.

The website should help a first-time visitor understand:

1. What AnchorSpec is.
2. Why it exists.
3. What problem it solves.
4. The basic structure of AnchorSpec.
5. Where to read the full specification.

The v0.1 site should prioritize clarity over completeness.

## Target Audience

Primary audience:

* Developers using AI coding tools
* Technical leads managing AI-assisted development
* People interested in specification-driven development
* People who have experienced context drift, unclear requirements, or unstable AI implementation loops

Secondary audience:

* Researchers
* Product managers
* Engineering managers
* AI workflow designers

## Site Positioning

AnchorSpec is an AI-native development protocol for keeping intent, specification, implementation, gaps, and verification aligned during human-AI collaborative development.

It is not just a documentation style.
It is not just a prompt template.
It is not an implementation framework.
It is a protocol for managing specification state and reasoning boundaries.

## v0.1 Site Structure

Create the following pages:

```text
/
  Home

/docs
  Documentation index

/docs/what-is-anchorspec
  What is AnchorSpec?

/docs/core-concepts
  Core Concepts

/docs/lite-edition
  Lite Edition

/docs/advanced-concepts
  Advanced Concepts

/docs/examples
  Examples

/docs/faq
  FAQ
```

## Global Navigation

Navigation items:

* Home
* Docs
* Core Concepts
* Lite Edition
* Examples
* FAQ
* GitHub

The GitHub item should link to the main AnchorSpec specification repository.
If the exact URL is not known, use a placeholder value and mark it clearly in the code or content.

## Home Page

Purpose:

Introduce AnchorSpec in a short, compelling, technical way.

Required sections:

1. Hero
2. Problem
3. What AnchorSpec Provides
4. Core Model
5. Why It Matters
6. Link to Documentation
7. Link to GitHub

Suggested hero copy:

```text
AnchorSpec

An AI-native specification protocol for keeping intent, implementation, gaps, and verification aligned.
```

Suggested supporting copy:

```text
AI can generate code quickly, but speed alone does not preserve intent.
AnchorSpec helps human-AI development teams keep specifications explicit, changes traceable, and verification separated from modification.
```

Primary CTA:

```text
Read the Docs
```

Secondary CTA:

```text
View on GitHub
```

## Documentation Index

Purpose:

Give readers a simple path through the site.

Required sections:

* Start here
* Core concepts
* Lite Edition
* Advanced concepts
* Examples
* FAQ

Suggested copy:

```text
Start with the basic model, then move to Lite Edition if you want the minimum usable form.
Advanced concepts such as Strand, Selection, and Splice can be read after the core model is understood.
```

## What is AnchorSpec?

Purpose:

Explain AnchorSpec without assuming prior knowledge.

Must include:

* AnchorSpec is a protocol.
* AnchorSpec separates intent, specification, implementation, gaps, and verification.
* AnchorSpec helps prevent context drift and accidental reinterpretation.
* AnchorSpec is designed for AI-assisted development.

Must avoid:

* Claiming that AnchorSpec guarantees project success.
* Claiming that AnchorSpec prevents all bugs.
* Claiming that AnchorSpec replaces human judgment.

## Core Concepts Page

Purpose:

Explain the core model.

Include these concepts:

### Intent

The original purpose, goal, or vision.

### Spec

The committed specification state.

### Gap

A recorded mismatch, uncertainty, missing decision, or unresolved difference.

### Current

The working area before commitment.

### Impl

The implementation state.

### ImplGap

A gap between implementation and specification.

### Verify

A detection process that checks alignment.
Verify does not fix.
Detected issues become Gap or ImplGap.

### Change Request

A structured proposal to change Spec.

Recommended diagram:

```text
Intent -> Spec -> Impl
   \       ^       |
    \      |       v
     ---- Gap <- Verify
```

The actual implementation may use a better visual layout.

## Lite Edition Page

Purpose:

Explain the smallest useful AnchorSpec structure.

Lite Edition should include:

* Spec
* Gap
* Impl

Suggested copy:

```text
Lite Edition is the minimum practical form of AnchorSpec.
It is useful when a project does not yet need Strand, Selection, Splice, or full verification lanes.
```

Must explain:

* Lite is for starting small.
* Lite can later evolve into the full model.
* Lite should not redefine the core concepts.

## Advanced Concepts Page

Purpose:

Introduce advanced AnchorSpec concepts without overwhelming beginners.

Include:

### Strand

Parallel specification lines that may conflict.
Strands are preserved rather than prematurely merged.

### Selection

The act of choosing an active Strand while recording alternatives and reasons.

### Splice

A reinterpretation operation that creates a new Strand from prior material.
Splice is not a direct merge.

### Freeze

Fixes a Spec version as a stable reference point.

### Thaw

Reopens a frozen Spec for further implementation or change.

## Examples Page

Purpose:

Show practical usage.

Include at least two examples:

1. Small feature development
2. AI-generated implementation review

Example 1 should show:

```text
Intent:
Add a documentation page for Lite Edition.

Spec:
The page explains Spec, Gap, and Impl.

Gap:
Examples are not yet included.

Impl:
Create /docs/lite-edition page.
```

Example 2 should show:

```text
Spec:
The contact form must validate email input.

Impl:
The generated implementation accepts any string.

Verify:
Detected mismatch.

ImplGap:
Email validation is missing.
```

## FAQ Page

Required questions:

### Is AnchorSpec a framework?

No. It is a specification protocol.

### Does AnchorSpec replace project management tools?

No. It can work alongside existing tools.

### Does Verify fix problems automatically?

No. Verify detects mismatches. Fixes must be handled through Gap, ImplGap, or Change Request.

### Is AnchorSpec only for software development?

The first target is AI-assisted software development, but the model may apply to other specification-heavy workflows.

### Is Lite Edition enough?

For small projects, yes. Larger projects may need the full model.

## Visual Design

Use:

* Dark or neutral background
* Clear typography
* Cards for concepts
* Simple diagrams
* Minimal animation
* Responsive layout

Avoid:

* Excessive gradients
* Overly playful visuals
* Heavy animation
* Cluttered documentation pages

## Technical Requirements

Use:

* Next.js App Router
* TypeScript
* Tailwind CSS
* MDX content files
* Static export
* GitHub Pages deployment

The site must work with:

```bash
npm install
npm run dev
npm run build
```

## GitHub Pages Notes

Configure the project for static export.

Use GitHub Actions for deployment if appropriate.

The implementation should include a clear README section explaining:

1. Local development
2. Build
3. GitHub Pages deployment

## Out of Scope for v0.1

Do not implement:

* User accounts
* Search
* Blog system
* CMS
* Backend API
* Comments
* Analytics
* Internationalization
* Version switcher
* Full specification mirror

These can be added later.

## v0.1 Success Criteria

The site is successful when:

* A first-time visitor can understand AnchorSpec in five minutes.
* The site explains the core model without distorting terminology.
* The site points readers to the canonical specification repository.
* The site can be deployed to GitHub Pages.
