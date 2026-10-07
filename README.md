# Web Application Development — Lab 1 Homework 1

**Student:** Nguyễn Tất Tấn Tài
**Course:** Web Application Development (2025–2026)
**Lab:** Lab 1 — Modern Web Foundations & AI-Assisted Engineering

---

## 📋 Project Overview

A production-grade portfolio website built with **Vanilla HTML5 + Modern CSS + ES6+ JavaScript** — no frameworks, no CDN, no external libraries.

This project demonstrates **atomic task decomposition** and **contract-first engineering** with AI assistance. Every task was isolated, verified, and committed independently to prove architectural discipline.

---

## 🎯 Deliverables

- Semantic HTML5 landmark tree (zero `<div>` for structure)
- Responsive layout at 375px (mobile-first)
- WCAG 2.2 AA accessibility conformance
- Persistent dark/light theme via `localStorage`
- Native form validation with `role="status"` feedback
- Native `<dialog>` with focus restoration

---

## 🏗️ Architecture

### Tech Stack
- Vanilla HTML5
- Modern CSS (custom properties, Grid, Flexbox, container-relative units)
- ES6+ JavaScript (const, arrow functions, IIFE modules)
- No build step, no bundler

### File Structure

web-lab1-homework1/
├── index.html              # Single-page portfolio
├── css/
│   ├── reset.css           # Box-sizing + base normalization
│   ├── tokens.css          # Design tokens (:root + .dark-theme)
│   ├── layout.css          # Page shell + flex nav + grid cards
│   └── components.css      # Reusable components (card, badge, button, form)
├── js/
│   ├── theme.js            # Persistent theme toggle (localStorage)
│   ├── form.js             # Native form validation feedback
│   └── dialog.js           # Native <dialog> open/close
├── project-rules.md        # Architectural constraints
├── TASK_DECOMPOSITION.md   # WBS + contracts (committed before code)
├── CHAT_LOG.md             # AI-assisted workflow log
└── README.md               # This file

---

## 🚀 Local Development

### Requirements
- Any modern browser (Chrome, Firefox, Edge, Safari)
- [VS Code](https://code.visualstudio.com/) with [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension

### Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Tantai152/web-lab1-homework1.git
   cd web-lab1-homework1
   ```
2. Open the folder in VS Code.
3. Right-click `index.html` → Open with Live Server.
4. Browser opens at http://localhost:5500.

⚠️ **Strict ban:** Never open `index.html` via `file:///....` This breaks CSP, ES modules, and browser APIs.

---

## 🔒 Contracts

### Theme Contract
- **Storage key:** `theme`
- **Values:** `"dark" | "light"`
- **Class applied:** `<html class="dark-theme">` (dark) / no class (light)
- **ARIA:** `#theme-btn[aria-pressed="true|false"]` synced with state
- **Hydration order:** `localStorage` → `prefers-color-scheme` → apply

### Form Contract
- **Status element:** `#form-status[role="status"][aria-live="polite"]`
- **States:** `data-state="idle|submitting|success|error"`
- **Rendering:** `textContent` only — zero `innerHTML` for user input
- **Validation:** Native Constraint Validation API

### DOM Contract
- Exactly one `<h1>` per document
- Zero `<div>` for structural layout
- Semantic landmarks: `<header>`, `<nav aria-label>`, `<main id>`, `<footer>`
- Skip-link targeting `#main-content`

### Security Contract
- Strict CSP via `<meta http-equiv="Content-Security-Policy">`
- Zero inline event handlers (`onclick=`, `oninput=`, ...)
- Zero `innerHTML` with user input
- Zero `var` declarations

---

## ✅ Verification Checklist

| Check | Command | Expected |
|-------|---------|----------|
| No `<div>` for structure | `grep -c "<div" index.html` | 0 |
| Exactly one `<h1>` | `grep -c "<h1" index.html` | 1 |
| No inline handlers | `grep -rn "on[a-z]*=" .` | empty |
| No `innerHTML` | `grep -rn "innerHTML" js/` | empty |
| No `var` | `grep -rnE "\bvar\b" js/` | empty |
| No hardcoded colors | `grep -rnE "#[0-9a-fA-F]{3,8}" css/components.css` | empty |

### Manual Tests
- ✅ 375px viewport: no horizontal scrollbar
- ✅ Tab navigation: skip-link → theme-btn → nav → cards → form → dialog
- ✅ Esc closes `<dialog>`, focus restored to trigger
- ✅ Theme toggle persists across F5 reload
- ✅ Form submit: invalid blocked, valid shows success status
- ✅ Lighthouse: Performance 100, Accessibility 100, Best Practices 100, SEO 100

---

## 🧠 Engineering Principles

- **Decompose before prompting.** WBS written before any code.
- **Contract-first.** Define data attributes and interfaces before implementation.
- **One prompt = one task = one file = one commit.**
- **Verify in isolation before integrating.**
- **AI writes boilerplate; the engineer verifies correctness.**
- *"AI can generate code. Developers are responsible for proving that it is correct."*

---

## 📚 References

- [MDN Web Docs](https://developer.mozilla.org/) — primary Web API reference
- [web.dev](https://web.dev/) — Core Web Vitals & performance budgets
- [W3C / WHATWG](https://www.w3.org/) — HTML & CSS specifications
- [WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/) — Accessibility guidelines

---

## 📄 License

Academic coursework — not licensed for reuse.
