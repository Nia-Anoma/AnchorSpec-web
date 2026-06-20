# AGENTS.md

# AnchorSpec Official Site Agent Instructions

## Project Purpose

This repository contains the official website for AnchorSpec.

The website is separate from the main AnchorSpec specification repository.
Its purpose is to introduce AnchorSpec clearly to first-time visitors and guide them toward the full specification.

## Role of This Repository

This repository is for the public website only.

It should contain:

* Marketing-style introduction pages
* Beginner-friendly explanations
* Documentation pages written in MDX
* Links to the main AnchorSpec specification repository
* GitHub Pages deployment configuration

It should not become the canonical source of the AnchorSpec specification.

## Canonical Source

The main AnchorSpec specification repository is the source of truth.

This website must not redefine AnchorSpec terminology.
If terminology conflicts with the specification repository, preserve the specification and update the website.

## Required Technology Stack

Use:

* Next.js
* TypeScript
* Tailwind CSS
* MDX
* Static export suitable for GitHub Pages

## Core AnchorSpec Terms

Use these terms consistently:

* Intent
* Spec
* Gap
* Verify
* Current
* Impl
* ImplGap
* Change Request
* Freeze
* Thaw
* Strand
* Selection
* Splice

## Important Concept Rules

Do not alter these meanings:

* Verify detects inconsistencies. It does not perform fixes.
* Gap records unresolved differences or missing alignment.
* Current is an uncommitted working area.
* Spec is the committed specification state.
* Strand represents parallel specification lines.
* Strand is not merge.
* Selection chooses an active Strand while preserving alternatives.
* Splice does not merge old Strands directly. It creates a newly interpreted Strand.
* Change Requests are the path from discussion to approved Spec change.

## Writing Style

Use clear, concise English.

Target readers:

* Software engineers
* AI-assisted development users
* Technical leads
* People new to AnchorSpec

Avoid excessive hype.
Avoid vague AI buzzwords.
Prefer precise explanations.

## Design Direction

The site should feel:

* Technical
* Calm
* Trustworthy
* Minimal
* Documentation-friendly

Prefer a dark or neutral design.
Use strong typography, clear sections, cards, and diagrams where useful.

## Build Requirements

The final implementation must:

* Pass `npm run build`
* Support static export
* Work on GitHub Pages
* Avoid server-only functionality
* Avoid runtime backend dependencies
* Use relative-safe routing for GitHub Pages

## Development Rules

When implementing:

1. Read `SITE_SPEC.md`.
2. Read `CODEX_TASK.md`.
3. Implement only the requested v0.1 scope first.
4. Keep the structure simple.
5. Do not add large frameworks unless necessary.
6. Prefer maintainable MDX content over hardcoded long text.
7. Verify build success before finishing.

## Completion Criteria

The task is complete when:

* The site builds successfully.
* The home page explains AnchorSpec.
* Navigation works.
* Core concept pages exist.
* MDX content renders.
* GitHub Pages deployment is configured.
* README explains how to run and deploy the site.
