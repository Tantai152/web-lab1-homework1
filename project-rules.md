# Project Architectural Constraints

## Tech Stack
- Vanilla HTML5 + modern CSS + ES6+ JavaScript only.
- No jQuery, Bootstrap, Tailwind, or any external CDN.
- Live Server at http://localhost:5500 ONLY. `file:///` is banned.

## Code Standards
- `const` by default; `let` only if reassigned. `var` is banned.
- Never use `innerHTML` for user input (XSS risk). Use `textContent`.
- Semantic HTML over generic `<div>` for structure.
- Zero inline event handlers (`onclick=`, `oninput=`, ... are banned).
- CSP enforced via `<meta http-equiv="Content-Security-Policy">`.

## Accessibility (WCAG 2.2 AA)
- Exactly one `<h1>` per document, no heading-level skipping.
- Full keyboard Tab + Enter navigation.
- Visible focus (`:focus-visible` outline 3px).
- Contrast >= 4.5:1 for normal text.
- All `<img>` have `alt` + `width` + `height`.
- All `<input>` have explicit visible `<label for="...">`.

## Responsiveness
- Mobile-first: verify at 375px viewport before desktop.
- No horizontal scrollbar at 375px.

## Workflow
- Atomic commits only. One task = one commit.
- Monolithic dumps (multi-file, multi-concern in a single commit) = 0 pts.
- Docs (`TASK_DECOMPOSITION.md`) committed BEFORE any code.
