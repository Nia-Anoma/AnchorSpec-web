# CODEX_TASK.md

# Codex Task: Implement AnchorSpec Official Site v0.1

## Task Summary

Implement the first official AnchorSpec website in this repository.

Use the requirements from:

* `AGENTS.md`
* `SITE_SPEC.md`

The website must be built with:

* Next.js
* TypeScript
* Tailwind CSS
* MDX
* Static export for GitHub Pages

## Repository Type

This is the website repository only.

The main AnchorSpec specification repository is separate and should be treated as the canonical source of truth.

Do not copy the entire specification into this site.
Only create beginner-friendly introduction and documentation pages for v0.1.

## Implementation Scope

Create a working static website with the following pages:

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

## Required Project Setup

If the project is empty, initialize it as a Next.js project.

Required setup:

* Next.js App Router
* TypeScript
* Tailwind CSS
* MDX support
* Static export
* GitHub Pages compatible build
* ESLint if practical

## GitHub Pages Requirements

Configure static export.

Use `next.config` or equivalent configuration.

The generated output should be suitable for GitHub Pages.

Add GitHub Actions workflow for GitHub Pages deployment if possible.

The workflow should:

1. Install dependencies
2. Build the site
3. Upload the static output
4. Deploy to GitHub Pages

## Suggested File Structure

Use a simple maintainable structure like:

```text
app/
  layout.tsx
  page.tsx
  docs/
    page.tsx
    what-is-anchorspec/
      page.mdx
    core-concepts/
      page.mdx
    lite-edition/
      page.mdx
    advanced-concepts/
      page.mdx
    examples/
      page.mdx
    faq/
      page.mdx

components/
  Header.tsx
  Footer.tsx
  Container.tsx
  ConceptCard.tsx

content/
  optional-mdx-content

.github/
  workflows/
    deploy.yml

public/
  optional-assets
```

A different structure is acceptable if it remains simple and maintainable.

## Required UI

Implement:

* Global header
* Footer
* Home page hero
* Documentation navigation
* Responsive layout
* Concept cards
* Simple call-to-action buttons
* Clean documentation typography

## Design Direction

Use a calm technical design.

Recommended style:

* Dark or neutral theme
* Strong readable typography
* Subtle borders
* Card-based sections
* Minimal decoration
* No heavy animation

## Content Requirements

Use the copy and page requirements from `SITE_SPEC.md`.

You may refine wording for clarity, but do not change AnchorSpec terminology.

Important rules:

* Verify detects. It does not fix.
* Strand is not merge.
* Splice creates a newly interpreted Strand.
* The website is not the canonical specification.
* Do not claim AnchorSpec guarantees success.

## Placeholder GitHub URL

If the canonical specification repository URL is unknown, use this placeholder:

```text
https://github.com/OWNER/AnchorSpec
```

Mark it with a clear TODO comment.

## README Requirements

Update or create `README.md`.

It must include:

```text
# AnchorSpec Official Site

## Development

npm install
npm run dev

## Build

npm run build

## Deployment

This site is configured for GitHub Pages.
```

Also mention where to update the canonical GitHub repository URL.

## Package Scripts

Ensure these scripts exist:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "next lint"
  }
}
```

If `next lint` is not supported by the installed Next.js version, use a compatible lint script or omit lint with explanation.

## Build Verification

Before finishing, run:

```bash
npm run build
```

If possible, also run:

```bash
npm run lint
```

Fix any errors.

## Do Not Implement

Do not implement:

* Authentication
* Backend API
* CMS
* Blog system
* Search
* Analytics
* Internationalization
* Version switcher
* Full specification mirror

## Final Response Expected From Codex

When finished, report:

1. Files created or changed
2. Build result
3. Any TODOs
4. How to run locally
5. How GitHub Pages deployment is configured
