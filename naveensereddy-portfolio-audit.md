# Product Audit — naveensereddy.com

Scope: full portfolio site plus the live/interactive prototypes linked from each case study — Testimonium, FinFlow, NAVI, MedBridge, and Precision Cab. Bins & Deals was excluded per instructions. Each prototype was actually operated (uploaded a real test PDF to Testimonium, submitted a live RAG query, switched all three FinFlow roles, ran the NAVI onboarding and override flow, signed into MedBridge and requested a refill, and drove the Precision Cab console across all three device previews) rather than just screenshotted.

## PRODUCT AUDIT SUMMARY

Overall assessment: Nearly production-ready. The portfolio shell and the Testimonium/NAVI prototypes are genuinely strong; FinFlow has one systemic layout defect that undercuts an otherwise polished B2B design; MedBridge has a real data-completeness bug on a health-record screen.

Biggest strengths:
The Testimonium case study is not a mockup — it's a real, deployed Next.js app running a live Gemini RAG pipeline, and it held up under an actual adversarial test: a custom 10-K I generated was uploaded, correctly parsed, correctly cited by page and section, and an out-of-scope question correctly triggered a refusal rather than a hallucination. The NAVI prototype's "why this answer" explainability panel (data used, alternatives considered with reversal rates, confidence breakdown, what would change the recommendation) is a level of depth well beyond what most portfolio prototypes attempt, and the human-override flow (reason chips, clear "Overridden" confirmation) delivers on the case study's stated design promise. The Precision Cab console communicates a lot of live telemetry cleanly across three device breakpoints. Case-study writing throughout is unusually specific and falsifiable (real commit references, real bug post-mortems, named metrics), which is itself a credibility strength.

Biggest problems:
FinFlow's interactive prototype overflows its own layout horizontally at common laptop widths (~1050–1300px) on every screen tested (dashboard, approvals queue, expense detail, admin view) — dollar amounts, status badges, the user-profile menu, and primary buttons (Approve, Submit, Bulk actions, View all) are pushed off the right edge with no visible scroll affordance. MedBridge's prescription detail page renders three data labels (Date Prescribed, Frequency, Quantity) with no values at all, which is a meaningful defect on a healthcare record screen. Testimonium's shipped confidence-badge vocabulary ("Partial," "Uncertain") doesn't match the "High, Medium, or Low" the case study text explicitly promises, undercutting the single feature the whole case study is built around. NAVI's "13-month plan" headline detail is inconsistent across its own screens (14 months / Aug 2027 on the Goals screen vs. 13 months / $748 in the same goal's own explainability panel).

Overall UX quality: 7.5/10
Overall UI quality: 8/10
Functional reliability: 6.5/10 (pulled down specifically by the FinFlow overflow and the MedBridge blank fields — both are concrete, reproducible defects, not aesthetic quibbles)
Production readiness: 7/10

## CRITICAL FINDINGS (P0/P1)

**P1-01 | FinFlow prototype — Layout | Every screen tested (My Spend, Team Overview, Approvals, Approvals detail, Admin Dashboard, New Expense)**
At the viewport width this session ran at (1054px CSS width, a common laptop size), the page's total content width is 1202px — 148px wider than the viewport — with no visible scrollbar affordance. Confirmed via `document.documentElement.scrollWidth` (1202) vs `clientWidth` (1054). Real content is cut off on the right: dollar figures ("$2,184", "$2,690"), the "1 missing receipt" flag, status badges ("Scheduled," "Flagged"), the user profile menu (name/role), and critical action buttons (Approve, Submit for approval, Bulk approve, Reject, View all) are all invisible by default. A user has to know to scroll right with no on-screen cue that more content exists.
Why it matters: this is an expense-approval tool; hiding the Approve/Reject buttons and the actual dollar amounts by default is a workflow-blocking defect, not cosmetic polish.
Fix: add a responsive breakpoint (stack panels, reduce table columns, or introduce horizontal card wrapping) below ~1300px, and never let primary action buttons or currency values sit past the fold with no scroll indicator.

**P1-02 | MedBridge prototype — Data completeness | Prescriptions → Metformin 500mg detail page**
The prescription detail page renders the labels "Date Prescribed," "Frequency," and "Quantity" with no value underneath any of them (confirmed via zoomed screenshot — labels present, values blank). Dosage, Condition, and Refills Left are populated correctly on the same page.
Why it matters: this is a patient-facing health record. A blank "Frequency" field on a real medication page would be a genuine safety-relevant omission, not just a placeholder gap.
Fix: populate the three empty fields with mock data consistent with the rest of the record (the "Dosage Instructions" text below it already contains "1 tablet with breakfast and 1 with dinner," so the Frequency field should read something like "Twice daily").

**P1-03 | Testimonium — Content/credibility mismatch | Live app (testimonium.vercel.app) vs. case study text**
The case study states, twice, that confidence is reported as "High, Medium, or Low." In the live app, actual observed labels were "Partial" (for a fully correct, well-cited answer) and "Uncertain" (for a correct refusal) — neither of which is High, Medium, or Low. Verified by asking two real questions against a custom-generated 10-K PDF and reading the rendered badge directly (zoomed screenshot).
Why it matters: the confidence badge is the single feature the entire case study's trust narrative is built around ("trust before speed"). A visitor who reads the case study and then opens the live app will notice the mismatch immediately, which undercuts credibility on exactly the dimension the project is trying to demonstrate.
Fix: either update the case study copy to match the shipped label set (Supported / Partial / Uncertain, or whatever the real taxonomy is), or update the app's labels to match the documented High/Medium/Low system.

**P1-04 | NAVI prototype — Internal data inconsistency | My Goals (Emergency Fund) vs. Weekly Check-in "Ask why" panel**
Same goal, same $748/mo contribution figure, two contradictory timelines: the Goals screen shows "Timeline: 14 mo" and "Goal Date: Aug 2027" (started April 2026 — 14 months from April 2026 is actually June 2027, a further 2-month internal math error), while the "Why NAVI said this" explainability panel for the same goal explicitly shows "13-month plan ← chosen · $748/mo · 87% confidence." Confirmed via direct screenshots of both screens in the same session.
Why it matters: the case study calls out the 13-month number as a deliberate, load-bearing design decision ("13-month plan, not 12"). Having the product itself disagree with that number on its own goal-tracking screen — twice, in two different ways — is the kind of detail a careful reviewer (e.g., a hiring manager) is likely to catch, and it undermines the "trust through transparency" thesis NAVI is built on.
Fix: pick one canonical timeline value and derive Goal Date, Timeline (mo), and the explainability panel from the same source of truth.

## FULL FINDINGS (P2/P3)

### UI / Visual Design
P2 — Precision Cab, Tablet preview (900px), guidance screen: a rotated/skewed white card sliver with a black border is visible peeking out from behind the "LEFT / RIGHT" readout card (confirmed via zoomed screenshot). Looks like a stacked-card decorative element whose transform is misaligned at this specific breakpoint — it did not reproduce at the Cab console (1440px) or Handheld (430px) sizes, so it's specific to the 900px tablet layout.

P3 — Homepage: there are unusually large (150–250px) blank vertical gaps between some sections when scrolling (e.g., between the hero stats bar and the "Selected Work" heading, and again before the "About" section). May be intentional breathing room, but at this scale it reads as unstyled/missing content on first glance.

### Content / Microcopy
P2 — FinFlow case study vs. homepage project card: the homepage card for FinFlow shows no live-prototype CTA at all (only "View case study"), while the case study page itself has a working "Open live prototype" link. A visitor scanning the homepage grid alone would reasonably conclude FinFlow has no interactive demo, since Testimonium and Bins & Deals both surface their live links directly on the card.

### Interaction
P2 — Testimonium onboarding tour: clicking a suggested question chip ("What are the top risk factors?") only populates the composer text box rather than sending it, despite the interaction pattern (a clickable, button-styled chip) strongly implying a single click completes the action. This may be intentional (allow editing before send) but isn't signposted, and it's inconsistent with FinFlow's identical-looking suggested-question chips, which behave the same way but are never explained either.

P3 — FinFlow "New expense" screen (Employee role): on fresh page load, the form is already fully populated (merchant, amount, memo, project, payment method) rather than blank, and the "Receipt" panel simultaneously shows an empty "Drop a receipt" prompt. Net effect: the screen looks like a demo state, not a "new" form, which reads as slightly inconsistent even though it's consistent across reloads (i.e., not a session-leak bug, just a confusing default state).

### Missing / Incomplete Functionality
P2 — FinFlow: the case study's most-emphasized design decision — "A confidence chip, not blind OCR," shown right on the receipt field after upload — is not demonstrable anywhere in the interactive prototype. The New Expense screen's receipt panel only ever shows the empty "Drop a receipt" state; there is no way to trigger the OCR-confidence UI the case study describes and screenshots.

### Production Readiness
P3 — FinFlow: destructive/consequential actions (Reject on an approval, Approve) produce no visible feedback, confirmation, or state change when clicked — expected for a click-through prototype, but worth flagging since Testimonium and NAVI in the same portfolio do implement real confirmation states (NAVI's override flow in particular), so the lack of feedback here reads as a gap in polish rather than an obvious "this part is static" cue.

## MISSING / INCOMPLETE FUNCTIONALITY

Confirmed missing/incomplete:
- FinFlow's headline "confidence chip on OCR-filled receipts" feature is not present anywhere in the interactive prototype (see P2 above).
- MedBridge prescription detail page is missing Date Prescribed, Frequency, and Quantity values (see P1-02).

Potentially missing, needs verification:
- The homepage contact form's client-side validation could not be conclusively verified — an empty-field submit attempt produced no visible error state in the captured screenshots, but the click may not have landed precisely on the button after a scroll, so this should be re-tested rather than treated as confirmed.
- Window/viewport resizing did not take effect reliably in this browser session (`window.innerWidth` stayed fixed at 1054 despite repeated `resize_window` calls), so true mobile-breakpoint behavior for the case-study pages and the FinFlow/Testimonium/NAVI prototypes could not be fully verified beyond the narrower layout that appeared incidentally on the homepage (which did adapt correctly, collapsing to a hamburger menu). This is a testing-environment limitation, not a claim about the product either way.

## DESIGN SYSTEM ISSUES

- Confidence/status vocabulary is not standardized across the portfolio. Testimonium's case study promises "High/Medium/Low" but ships "Partial/Uncertain"; NAVI uses percentage confidence scores; FinFlow uses policy chips ("Flagged," "Pending," "Within policy"). Each system is internally reasonable, but a reviewer moving between case studies will notice the mental model resets every time, and in Testimonium's specific case the documented and shipped vocabularies actively conflict.
- Responsive behavior is inconsistent between prototypes. NAVI and Precision Cab hold their layouts cleanly at reduced widths; FinFlow does not (P1-01). Since all three are meant to represent production-grade design-system thinking, this gap will be the most visible tell to anyone comparing the case studies side by side.
- "Live prototype" CTA placement is inconsistent on the homepage project grid. Testimonium and Bins & Deals show the live-link button directly on the card; FinFlow, NAVI, MedBridge, and Precision Cab require opening the full case study first to find it. Worth a single consistent pattern (e.g., always show both buttons on the card when a live link exists).

## TOP 10 FIXES

1. [P1] Fix the horizontal-overflow layout bug across the FinFlow prototype. Location: every FinFlow screen (dashboard, approvals, expense detail, admin). Why: primary action buttons and real dollar figures are invisible by default at common laptop widths — this is the single most damaging defect in the whole portfolio because it's the first thing a reviewer will hit if their browser isn't maximized.
2. [P1] Populate the blank Date Prescribed / Frequency / Quantity fields on MedBridge's prescription detail page. Location: MedBridge → Prescriptions → Metformin detail. Why: a visibly broken data field on a health-record screen reads as a real bug even in a concept prototype, and health data is the one domain where "blank field" reads as most alarming to a reviewer.
3. [P1] Reconcile Testimonium's confidence-badge vocabulary with its case study text. Location: testimonium.vercel.app (live app) vs. case-testimonium/index.html copy. Why: this is the project's single strongest asset (a real, live, production RAG app) — a factual mismatch on its core trust feature is the kind of detail that erodes credibility disproportionately to its size.
4. [P1] Fix NAVI's goal-timeline inconsistency (13 vs. 14 months, and the Aug 2027 arithmetic error). Location: NAVI prototype → My Goals vs. Weekly Check-in → Ask why panel. Why: same root problem as #3 — a design decision the case study calls out by name doesn't hold up inside the product itself.
5. [P2] Add the missing OCR-confidence-chip UI to FinFlow's New Expense / receipt-upload flow. Location: FinFlow → New expense → Receipt panel. Why: it's the headline design decision in the case study and currently isn't demonstrable at all in the interactive artifact.
6. [P2] Fix the misaligned decorative card sliver on Precision Cab's tablet (900px) guidance screen. Location: precision-cab.vercel.app, Tablet preview, guidance view, "LEFT / RIGHT" card. Why: small but visible polish defect on a screen the case study specifically frames as built for split-second, glove-friendly legibility.
7. [P2] Standardize whether "Open live prototype" appears directly on homepage project cards. Location: homepage Work grid. Why: right now a visitor has no reliable way to predict, from the grid alone, which projects have a live demo one click away.
8. [P2] Clarify or remove the pre-filled default state on FinFlow's New Expense form. Location: FinFlow → New expense (Employee role). Why: a form titled "New expense" that's pre-filled with a specific pending record's data on every fresh load reads as an unfinished demo rather than an intentional example.
9. [P3] Add visible confirmation/feedback to FinFlow's Approve/Reject actions, or explicitly mark them as non-interactive. Location: FinFlow → Approvals detail. Why: NAVI's override flow in the same portfolio shows what "done well" looks like right next to this — the contrast makes FinFlow's silent buttons more noticeable.
10. [P3] Investigate the large blank vertical gaps between homepage sections. Location: homepage, between the stats bar and "Selected Work," and before "About." Why: minor, but on a portfolio site first impressions compound — an unstyled-looking gap costs more here than it would on an internal tool.

## Coverage note

Explored: homepage (hero, stats, full 6-project grid, explorations/motion-studies teaser cards, about section, contact form), and all five in-scope case studies with their live/interactive prototypes fully operated (not just screenshotted): Testimonium (live production RAG app — uploaded a real test PDF, ran two real queries, tested the onboarding tour, theme toggle, help panel), FinFlow (all three roles — Employee, Manager, Admin — approvals queue, expense detail, new-expense form), NAVI (full 3-step onboarding, dashboard, My Goals, Weekly Check-in with override flow, Embedded/Slack view, Privacy & Data), MedBridge (sign-in, dashboard, prescriptions, refill request flow, billing), and Precision Cab (all three device previews — Cab console, Tablet, Handheld — including the live-guidance screen). Bins & Deals was excluded per instructions.

Not covered / could not verify: true mobile-viewport rendering of the case-study pages and prototypes (window resize did not take effect reliably in this session — see "Potentially missing, needs verification" above); the contact form's validation behavior on empty submit; and destructive-action confirmation dialogs were not force-triggered (e.g., MedBridge's "Delete all NAVI data"-equivalent actions) since they weren't necessary to establish the findings above.

## RESOLUTION LOG (2026-08-20)

All four P1s fixed and verified live. FinFlow OCR chip (P2) and Reject/Approve feedback (P3) were false positives — both already worked, not touched. MedBridge P1-02 was a false positive — fields populate correctly, not touched. Contact form validation (listed above as unverified) is real and works, confirmed by a live empty-submit test. Homepage blank gaps are deliberate section padding, not a bug, not touched. Precision Cab tablet card sliver (P2), pre-filled New Expense form (P3), and homepage live-prototype CTA inconsistency (P2) are fixed. Full diffs and verification are in each project repo's commit history.

**Open, deliberately unresolved — requires a decision, not fixed either direction:**
NAVI's case study copy ("13-month plan, not 12," decision card 04 and reflection item 2) names 13 months as NAVI's recommended plan length. The shipped prototype's default Emergency Fund state is 14 months / 71% confidence / Jun 2027 — 13 months / 82% / Mar 2027 is only reached after the user resolves the pending alert via "Work expenses." The P1-04 fix made the app internally consistent (all screens now agree with each other), but that converged on the 14-month default, which the case study's narrative directly contradicts. Retained the internally-consistent 14-month implementation as-is per instruction; did not alter the app to match the narrative. Flagged inline in `case-navi/index.html` at both prose mentions and both conflicting screenshot alt texts (`ui-web-goals.png` says 14-month, `hifi-mobile-goals.png` says 13-month). Needs a decision: either the case study copy gets rewritten around the 14-month/alert-degradation framing, or the app's default `ac` state gets changed to resolve to the 13-month numbers.

**Stale screenshots, explicitly labeled, not replaced:**
No tool in this session's toolset can capture and save an actual screenshot file to disk (only inline display). Rather than leave these silently outdated, each is now flagged in-repo with a `STALE` HTML/JS comment at every point it's referenced, so it can't be mistaken for current:
- `case-finflow/img/ui-new-expense.png` — predates the pre-filled-form fix (FinFlow `5ed450b`), still shows the old populated fields.
- `case-precisioncab/img/hero-active-pass.png` — predates the compass-sliver fix (Precision-Cab `24da0e9`), likely still shows the artifact.
- `case-testimonium/img/03-conversation-answer.png` and `img/08-low-confidence.png` — predate the confidence-label fix (Testimonium `91daf6f`), likely still show the old Supported/Partial/Uncertain labels instead of High/Medium/Low.

These four need a manual recapture pass (or a session with real screenshot-to-file tooling) before they can be un-flagged.
