# TASK DECOMPOSITION — HW1: Production Portfolio

## Project Info
- **Student:** Nguyễn Tất Tấn Tài
- **Course:** Web Application Development — Lab 1
- **Deliverable:** Production Portfolio (HW1)
- **Minimum commits:** 4 atomic milestones (M1–M4) + build commits

## Contracts

### HTML Contract
- Exactly one `<h1>` in document.
- Zero `<div>` for structure — use `section`, `article`, `header`, `footer`, `figure`.
- Landmarks: `<header>`, `<nav aria-label="Primary">`, `<main id="main-content">`, `<footer>`.
- Skip-link: `<a href="#main-content" class="skip-link">Skip to main content</a>`.
- Project cards: `<article class="project-card" data-category="...">` with `<header>`, `<p>`, `<footer>`.
- Image: `width`, `height`, `alt`, `loading="lazy"`, `decoding="async"`.
- Form: `<label for="id">` matched with `<input id="id">`.
- Status output: `<p role="status" aria-live="polite" id="form-status">`.
- Native `<dialog id="a11y-dialog">` for accessibility statement.

### State Contract
- localStorage key: `theme`. Values: `"dark"` | `"light"`.
- Hydration order: localStorage → prefers-color-scheme → apply.
- `<html class="dark-theme">` when dark; no class when light.
- `#theme-btn` has `aria-pressed="true|false"` synced with theme.
- Form status: `#form-status` with `data-state="idle|submitting|success|error"`.

### Accessibility Contract
- Landmarks: header, nav, main, footer.
- Skip-link visible on `:focus`.
- `:focus-visible` outline 3px on every interactive element.
- Contrast tokens (light + dark) manually verified >= 4.5:1.
- All images have descriptive `alt`.

### Security Contract
- Zero `onclick=` / `oninput=` / any inline handler.
- Zero `innerHTML` with user input.
- `<meta http-equiv="Content-Security-Policy">` in `<head>`.

### Performance Contract
- All media have `width` + `height` (prevents CLS).
- `loading="lazy"` for below-fold images.
- `decoding="async"`.
- System fonts only (no webfont CDN).

## WBS Table

| ID | Sub-task | Output file | Contract summary | Acceptance criteria | Commit message |
|----|----------|-------------|------------------|---------------------|----------------|
| H1-00 | Define WBS and contracts (docs first) | `TASK_DECOMPOSITION.md`, `project-rules.md` | Docs committed before any code | Both files exist, all contracts named | `docs(spec): define WBS and component contracts` |
| H1-01 | Build semantic DOM tree | `hw1-portfolio/index.html` | HTML Contract above | 1 h1, 0 div, landmarks pass DevTools A11y tree | `feat(html): build semantic landmark tree` |
| H1-02 | Box-sizing reset | `hw1-portfolio/css/reset.css` | Normalize only, no color, no hex | `*{box-sizing:border-box}`, no horizontal overflow at 375px | `feat(css): box-sizing reset and base normalization` |
| H1-03 | Design tokens | `hw1-portfolio/css/tokens.css` | `:root` + `html.dark-theme`, contrast >= 4.5:1 | Zero hex outside token block, contrast pass both modes | `feat(css): define light and dark design tokens` |
| H1-04 | Layout: flex nav + grid cards | `hw1-portfolio/css/layout.css` | `repeat(auto-fit, minmax(280px, 1fr))`, nav flex | 375px no h-scroll, desktop ok | `feat(css): add flex nav and responsive project grid` |
| H1-05 | Component styling | `hw1-portfolio/css/components.css` | Badge, card, button, form, focus ring | Focus visible, form states distinguishable | `feat(css): style reusable portfolio components` |
| H1-06 | Theme toggle | `hw1-portfolio/js/theme.js` | localStorage `theme`, aria-pressed sync | Toggle no errors, F5 preserves theme | `feat(js): add persistent theme toggle` |
| H1-07 | Form validation feedback | `hw1-portfolio/js/form.js` | Native Constraint Validation + `data-state` | Submit updates status via textContent | `feat(js): add native form validation feedback` |
| H1-08 | Native dialog | `hw1-portfolio/js/dialog.js` | `showModal()` / `close()` native | Esc closes, focus restored | `feat(js): native dialog for a11y statement` |
| H1-M1 | WCAG 2.2 AA audit | (fix tokens + html) | Contrast >= 4.5:1, 1 h1, landmark tree | Lighthouse A11y >= 95 | `fix(a11y): contrast & landmarks` |
| H1-M2 | Focus trap audit | (fix skip-link, dialog) | Tab order correct, no escape | Keyboard trap prevention verified | `fix(nav): keyboard trap prevention` |
| H1-M3 | Strict CSP audit | (add meta CSP, remove inline) | Zero inline handler in grep | `grep -rn "on[a-z]*=" .` empty | `fix(sec): enforce strict CSP and zero inline handlers` |
| H1-M4 | Lighthouse 100 audit | (add dims, lazy, async) | LCP < 2.0s, CLS = 0, INP < 200ms | 4 categories = 100 | `perf: optimize assets` |

## Verification Gates
- After H1-00: docs committed, no code yet.
- After H1-01: DevTools A11y tree shows landmarks, 0 div, 1 h1.
- After H1-03: contrast checker >= 4.5:1 both modes.
- After H1-08: full keyboard Tab flow works, Esc closes dialog.
- After H1-M4: Lighthouse 4 categories = 100.
-
## M1 — WCAG 2.2 AA Audit (2026-10-07): Lighthouse A11y score 100. Contrast >= 4.5:1 both modes. 1 h1. Landmarks pass.
## M2 — Focus Trap Audit (2026-10-07): Tab flow correct. Esc closes dialog. Focus restored. No keyboard trap.
