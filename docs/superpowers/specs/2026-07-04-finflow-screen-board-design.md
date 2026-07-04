# FinFlow Full Screen Board — Design Spec

Date: 2026-07-04

## 1. Goal

Give the FinFlow case study a genuine "designer's Figma board" artifact: a single page holding every real screen from the FinFlow prototype, grouped and annotated the way a working design file actually looks, with a real pan/zoom canvas to explore it.

This is **not** a fabricated deliverable. The source is a real, working interactive prototype (`FinFlow Prototype.html`, in `All Projects/FinFlow-B2B Expense Management Dashboard/`) and real project docs already written for this project. The board surfaces that existing work; it does not invent new screens or notes.

## 2. Source material

- **Screens**: captured live from `FinFlow Prototype.html` (a self-contained bundled React app, confirmed running via local preview). It has:
  - A role switcher: **Finance Admin**, **Manager**, **Employee**
  - Per `docs/05-information-architecture.md`: Finance Admin sidebar = 3 groups / 12 items, Manager = 2 groups / 7 items, Employee = 2 groups / 7 items (26 nav destinations total)
  - Remaining screens to reach ~48 come from key sub-states per role: expense detail drawer, new report modal, approval detail, onboarding/sign-in, empty/error states, etc. — captured wherever the prototype actually has a distinct state, not padded artificially. Final count may land near-but-not-exactly 48; real coverage takes priority over hitting an exact number.
- **Annotations**: pulled from the real docs already written for this project:
  - `docs/06-design-decisions.md` — structured per feature area (Problem / Design Challenge / Options Considered / Final Decision / UX Rationale / Business Rationale / Expected Impact) → primary source for per-screen note text
  - `docs/08-accessibility-review.md` — accessibility-specific notes where relevant to a screen
  - `docs/09-before-vs-after.md` — before/after framing for screens that changed significantly
  - `docs/05-information-architecture.md` — sidebar/section structure, used to drive board grouping
  - `docs/01-business-context.md` + `docs/10-product-strategy.md` — source for the cover frame (origin, problems, features)

## 3. Deliverable structure

### 3.1 Screenshot capture
- Drive the already-running local prototype via the preview browser tool.
- Switch role tabs, click every nav item, capture key sub-states.
- Fixed viewport: 1440×900 (matches the prototype's own design width).
- Save to new folder `case-finflow/img/board/`, named `<role>-<screen>.png` (e.g. `admin-dashboard.png`, `manager-approvals.png`, `employee-submit-expense.png`).

### 3.2 Board page — `case-finflow/board.html`
- New standalone static HTML file. Vanilla JS + embedded `<style>`, no framework — matches the rest of the site.
- **Cover frame** (first thing visible): project origin, problems, key features — short, grounded copy from `01-business-context.md` / `10-product-strategy.md`, styled like a real Figma cover frame.
- **Three role sections** (Finance Admin, Manager, Employee), each a labeled "frame" group containing that role's screens in nav order.
- Each screen = one card: screenshot image + label chip (screen name) + a note card beside/below it with the real grounded annotation text.
- **Pan/zoom canvas**: an inner `.board-canvas` positioned via `transform: translate() scale()`. Drag-to-pan, wheel/trackpad pinch-to-zoom, clamped min/max zoom, a "reset view" button. Board loads at a small overview scale (whole board visible), then the user can zoom freely — no separate lightbox mode.
- Visual language: reuse the site's fonts/accent-gold/type scale, but on a warm-gray canvas background (Figma-canvas feel) rather than the dark case-study background.

### 3.3 Entry point
- One new CTA button in `case-finflow/index.html` (placed near the top/hero or by the process archive): **"Open the full screen board (N screens) →"**
- Opens `board.html` in a new tab (`target="_blank"`), so the case study page itself is untouched otherwise.

## 4. Verification plan
- Load `board.html` in the preview browser; confirm all captured images render (zero broken `<img>` / 404s via `preview_network`).
- Confirm drag-to-pan and wheel-zoom actually transform the canvas (`preview_eval` checking computed `transform` before/after simulated events).
- Confirm cover frame and all three role-section labels are present and legible (`preview_snapshot`).
- Confirm the new entry-point link in `case-finflow/index.html` navigates to `board.html` correctly.
- Screenshot the final board for a quick visual sanity check.

## 5. Explicit non-goals
- No changes to MedBridge, NAVI, or Bins & Deals in this pass.
- No fabricated screens or notes — everything traces back to the real prototype or the real docs.
- Not replacing the existing case-finflow archive/process section — this is an additive, separate artifact.
