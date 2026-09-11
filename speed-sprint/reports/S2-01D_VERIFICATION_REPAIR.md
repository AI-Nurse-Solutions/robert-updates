# S2-01D — Teaching-card document verification repaired

September 11, 2026. **Both queued verification defects are resolved within local document scope. TC-001 remains v0.2, unchanged, with independent educator review pending.** S2-01 is still in Review, not delivered. No participant outcome or operational authority is inferred.

## Human need and source baseline

The nurse must be able to inspect the teaching card and its source basis without a faulty verifier hiding evidence or misdiagnosing the artifact. Primary Capability; Knowledge preserves source passages and limits, Judgment separates testing from approval, Contribution preserves correction history. The risk is false assurance from testing the wrong environment or altering evidence to obtain a pass.

Rechecked the connected revision-3 ledger, runbook, draft Florence-X PR #24, open issue #16 and draft planning PR #2. Read the retained plans. All 176 manifest-listed files in the supplied S2-01C package matched their hashes. The original source basis, teaching content and application are unchanged; no private Project excerpts are published here.

## Corrected diagnosis and minimal repair

The PDF check expected title-case pillar labels, while its CSS renders them in capitals. Its previously unreached review-status check also needed the displayed capitalized Independent. The assertion now requires the exact displayed wording while retaining all seven semantic/disclosure checks. Seven negative cases remove each required term and confirm rejection. No PDF content or typography was changed.

The old browser verifier reproduced a 3405px document width in a 390px viewport. It loaded two differently CSP-protected artifacts consecutively into the same browser document. The first card's security policy blocked the source map's stylesheet; the console recorded that violation, and computed white-space was pre rather than pre-wrap.

In a fresh document, the unchanged source-map stylesheet applies and all panels fit at 320, 390, 768 and 1280 pixels. The repair isolates each document in a fresh browser page and explicitly checks stylesheet application and console errors. All earlier checks remain. No CSP exception, unsafe-inline permission, clipping, hidden content or CSS edit was needed. The previous report's layout diagnosis is corrected, not silently erased.

## Actual final verification

- **102 local planning/artifact pytest cases passed; zero failures, errors or skips.** All 93 previous case identities retained; 9 added. The 85 retained planning/HTTP cases are included, not additional.
- **13 document/browser verification groups passed**, retaining all 8 original groups and adding 5. Complete JSON and source passages match the unchanged mapping record; native keyboard disclosure works. Collapsed and fully expanded source-map views fit at all four widths without horizontal clipping. No requests, page exceptions or console/CSP errors were observed in the passing run.
- **3 separate actual loopback HTTP checks passed:** exact artifact bytes with existing no-store/anti-framing headers, and POST denial.
- **35 retained JavaScript assertions, 10 Sprint 2 dashboard browser checks and 21 historical Sprint 1 browser checks passed.** All 27 original seeds plus the sprint link remain.
- All **six card/source-map artifacts are byte-identical** to S2-01C: card PDF/HTML/Markdown and source-map HTML/Markdown/JSON. Ten protected inputs, including the original Kanban, server, walkthrough, formative kit and Sprint 1 ledger, also remain byte-identical.
- The existing PDF was rendered and visually inspected: **one page, selectable text, no observed clipping**.
- The **820-case Florence-X suite was not rerun**. Its prior result and the 20 held lint findings remain historical, not new evidence from this increment.

Actual before/after JUnit identities and output files were inspected. Local Python 3.13.5, Node 22.16.0 and Chromium 144.0.7559.96. agent-browser was unavailable; Playwright supplied-HTML tests and separate real loopback HTTP tests were used. No full browser/server, physical-device, browser-zoom, screen-reader or WCAG-conformance claim. W3C Understanding Reflow informed the 320px presentation target; it does not certify this artifact.

## Failures preserved

Fresh baseline: 92 passes and 1 PDF failure; the prior browser verifier failed at the same source-map overflow check. CSP and geometry diagnostics are preserved. First corrected verification: 101 cases and all document/HTTP checks passed.

The initial revision-4 dashboard patch then stopped on an escaped source-anchor mismatch, leaving a local ledger/renderer mismatch. Tests caught it: 99 passes and 2 failures, plus a browser ledger mismatch. Completing the intended renderer/current-version assertion and adding history-preservation coverage produced the final 102 passes. The ledger history was not rewritten. No failed state was published, assertion skipped or rule suppressed. Two bounded repair/retest cycles were used.

## Canonical record and handoff

Sprint 2 ledger **revision 4**, commit `044472b61d9c7856dbb98d6b655ce59fb72bf046`, Git blob `a5fac33b67296a48f12bb172a265efba8bd71adc`; local ledger bytes match. Prior history and incomplete verification are retained, with the latest record explaining the corrected diagnosis. The local dashboard displays the new state and retains its fixed read-only links. Viewer/test repairs and detailed evidence ship in the conversation package; the repository receives planning metadata and this report only.

Card PDF SHA-256: `93cd1a9121160d36781f3a844a78c9f2b21349d3d7d30cd153ae8e73dc3c00cf`. Source-map HTML SHA-256: `c5adc396a33098513f82d47ec14ae12791303504c17cea4a9f7937034922910e`. Hashes establish byte identity, not approval or effectiveness.

S2-01 remains review/not_reviewed; six later tasks remain planned; participants remain zero; all inherited gates remain blocked. No Florence-X code, held file, policy, permission, live model, native Hermes, cloud service, portfolio save, submission, merge, deployment or user-computer installation changed. No participant, patient or employer-confidential data was introduced.

**Next:** obtain topic/audience fit and independent educator review of the exact TC-001 v0.2 card and source companion under the existing formative kit. The teaching-card format is settled; do not repeat its selection or manufacture human outcomes.
