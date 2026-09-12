# S2-01D — Teaching-card verification repaired; separate dashboard contrast issue remains

September 11, 2026. **Both queued verification defects are resolved within local document scope. TC-001 remains v0.2, unchanged, with independent educator review pending.** Final visual inspection found a separate inherited dashboard-link contrast defect, recorded below and not repaired in this slice. S2-01 remains in Review, not delivered.

## Human need and baseline

The nurse must be able to inspect a teaching card and its source basis without a faulty verifier hiding evidence or misdiagnosing the artifact. Primary Capability; Knowledge preserves source passages and limits, Judgment separates testing from approval, Contribution preserves correction history. Main risk: false assurance from testing the wrong environment or changing evidence to obtain a pass.

Rechecked the connected revision-3 ledger, runbook, draft Florence-X PR #24, open issue #16 and draft planning PR #2; read the retained plans. All 176 manifest-listed files in the supplied S2-01C package matched their hashes. No application, teaching content or source interpretation was changed. No private Project excerpts are published here.

## The two repaired checks

The PDF check expected title-case pillar labels, although CSS renders them in capitals. Its previously unreached review-status assertion also needed the displayed capitalized Independent. The corrected test requires the exact displayed wording and retains all seven semantic/disclosure requirements. Seven negative cases remove each required term and confirm rejection. The PDF was not changed or regenerated.

The old browser verifier produced a 3405px document width in a 390px viewport. It loaded two differently CSP-protected artifacts consecutively into one browser document. The earlier card policy blocked the source-map stylesheet; the console recorded that violation and computed white-space was pre rather than pre-wrap.

A fresh document allows the unchanged map's own stylesheet. Its collapsed and fully expanded views fit at 320, 390, 768 and 1280 pixels. The repair isolates each document in a fresh browser page and checks actual stylesheet application and console errors. No unsafe-inline exception, policy relaxation, clipping, hidden passages or CSS edit was needed. The earlier layout diagnosis is corrected here, while its observed failure is retained.

## Actual final results

- **102 local planning/artifact pytest cases passed, with zero failures, errors or skips.** All 93 preceding identities retained; 9 added. The 85 older planning/HTTP cases are included, not additional.
- **13 document/browser groups passed**, retaining all 8 original groups and adding 5. Exact JSON and source passages, keyboard disclosure, stylesheet application and four-width collapsed/expanded reflow were checked. No requests, page exceptions or console/CSP errors were observed in the passing run.
- **3 separate real loopback HTTP checks passed:** exact artifact bytes, existing no-store/anti-framing headers, and POST denial.
- **35 retained JavaScript assertions, 10 Sprint 2 dashboard browser checks and 21 historical Sprint 1 browser checks passed.** All 27 original seeds plus the sprint link remain.
- All **six teaching-card/source-map deliverables are byte-identical** to S2-01C: card PDF/HTML/Markdown and source-map HTML/Markdown/JSON. Ten protected inputs, including the original Kanban, server, frozen walkthrough, formative kit and Sprint 1 ledger, are unchanged.
- The existing PDF was rendered and visually inspected: **one page, selectable text, no observed clipping**.
- The **820-case Florence-X application suite was not rerun**. Its prior result and the 20 held lint findings are historical, not fresh evidence for this increment.

Actual before/after JUnit identities and output files were inspected. Local Python 3.13.5, Node 22.16.0, Chromium 144.0.7559.96. agent-browser was unavailable; Playwright supplied-HTML tests and separate loopback HTTP checks were used. W3C Understanding Reflow informed the narrowed 320px presentation target. None of these checks establishes full browser/server integration, physical-device usability, screen-reader behavior, actual browser zoom, WCAG conformance, educator approval or learning benefit.

## Failure history

Fresh baseline: 92 passes and 1 PDF failure; the old browser verifier failed at the same source-map check. CSP/geometry diagnostics and original failures remain. The first corrected verification run passed 101 cases and the complete document/HTTP checks.

The initial revision-4 dashboard patch then stopped on an escaped source-anchor mismatch, leaving a local ledger/renderer mismatch. Tests detected it: 99 passes and 2 failures plus a browser ledger mismatch. Completing the intended renderer/current-version assertion and adding a history-preservation case produced the final 102 passes. No failed dashboard state was published, history rewritten, assertion skipped or rule suppressed. Two bounded repair/retest cycles were used.

## Visual postflight — open inherited issue

After final automated checks, visual inspection exposed almost invisible labels on the dashboard's two teaching-resource links. Computed values are foreground `rgb(255, 255, 255)` over background `rgb(255, 253, 248)`. The exact issue reproduces on both the preserved revision-3 dashboard and revision 4; it was not introduced by this verification repair.

The links still point to the correct unchanged card and source map, but passing interaction/reflow checks did not detect their poor contrast. The finding is preserved in `new-evidence/postflight-link-contrast.json` and the dashboard screenshot. It remains unrepaired because this slice reached its two-cycle limit. Direct document links are supplied in the conversation. Do not describe the entire dashboard as accessibility-verified or erase this finding behind passing test counts.

## Canonical record and next step

Sprint 2 **revision 4** ledger commit: `044472b61d9c7856dbb98d6b655ce59fb72bf046`; content blob: `a5fac33b67296a48f12bb172a265efba8bd71adc`. Local ledger bytes match. Prior history and incomplete verification are retained, with the latest record documenting the corrected diagnosis. The local dashboard displays that exact ledger. This postflight report adds an open presentation finding without changing tested ledger/task states.

Card PDF SHA-256: `93cd1a9121160d36781f3a844a78c9f2b21349d3d7d30cd153ae8e73dc3c00cf`. Source-map HTML SHA-256: `c5adc396a33098513f82d47ec14ae12791303504c17cea4a9f7937034922910e`. These identify bytes, not approval or effectiveness.

S2-01 remains review/not_reviewed; six later tasks stay planned; participants remain zero; all inherited gates remain blocked. No Florence-X code, held file, policy, permission, live model, native Hermes, cloud service, portfolio save, contribution, merge, deployment or user-computer installation changed. The public branch contains planning metadata and reports; local viewer/test repairs and detailed evidence are in the conversation package. No participant, patient or employer-confidential data was introduced.

**Next bounded repair:** correct the inherited dashboard-link contrast and add a direct regression for it, without changing the teaching material or review status. Then obtain topic/audience fit and independent educator review of TC-001 v0.2 under the existing formative kit. The one-page format is settled; do not repeat selection or manufacture human outcomes.
