# SS-05A — Offline inference contracts and no-silent-fallback verification

Date: September 10, 2026. **Offline contract increment implemented/tested; overall SS-05 in progress/prototyped/not reviewed.** No live model, provider, native Hermes, portfolio action, merge or deployment.

## Identity

Florence-X draft PR #22, branch `review/speed-sprint-ss05`. Parent `99091417438b30d56ac93b5c9d9b5488238b8c00`; first candidate `a4e371a0c778153866f73170e6a33958f29cb8f3`; final head `0ff906b41a2614da0ea1fb4b46bf5b073f2489cf`; tree `cfa9e2f6ae1b33a49146a9d5d3c6c94155b01777`.

Final CI run `34493321448`, tested merge `1dda0daef288ccde7a767a11745b4bf7161fbe18`, artifact `10158768475`. Archive SHA-256: `e53546cc0e987ace88b650965e145131df248743ecd7eb2b5a25a18f177d6ad7`. Checksum, actual JUnit identities and 312 archived tracked files verified; the reconstructed Git tree equals the candidate. Eight files added, one optional ModelRouter entrypoint added; the other 303 baseline files, including prior tests/policies and all held files, unchanged.

Ledger revision 7: commit `5e7a00e91ddfebce384f602a75345cd1c7b17570`, blob `8b899d061317f3bec94cecc54a5f9bed6ea32bb8`. Local ledger exactly matches that committed blob.

## Human need and smallest change

Preserve the nurse's mission/source context and ability to challenge output when the model interface changes; failure must not silently move context to another destination. Primary pillar: **Capability**. Knowledge supplies pinned evidence and limits; Judgment keeps human review and explicit stop behavior; Contribution preserves attribution and versioned correction evidence. Risk: mistaking fixture parity for real-model quality, privacy or competence.

Canonical contracts live in `florence_core.schemas.inference`; source spans reuse CatalogSource. The existing model-router package gets an optional `ModelRouter.plan_inference` path plus pure replay normalization. The legacy router, Ollama adapter and API/orchestrator are not rewired or certified by these tests. The old allow_cloud flag supplies no new admission.

**OfflineAdmission is a test fixture, not EDENA authorization, human identity or an ApprovalRecord.** It binds exact request/model-profile hashes, simulated destinations, validity interval and one-attempt/test-budget limits, outside the adapter. Selection filters admission/destination/profile, feature/capacity and fixture suitability before invented cost/latency ranking. Explicit profile selection cannot silently be replaced. Replay rechecks admission rather than accepting an earlier plan as authority.

Two invented envelopes normalize JSON-in-text and object responses. They are not actual vendor protocols. Both execute in memory; device/cloud locations, token/time/cost fields are synthetic. A timeout, refusal, cancellation, unavailable or invalid response stops after one fixture read; missing admission consumes no response. Unknown tools, malformed/duplicate-key data, foreign source IDs and budget overruns do not yield an accepted proposal.

A structurally valid proposal stays unverified and needs human review. One negative fixture deliberately contains a false interpretation despite valid citations; parsing does not promote it to truth. No semantic-entailment service is claimed.

## Actual evidence

- **626 full-suite pytest cases passed; zero failures/errors/skips. All 536 previous identities retained; 90 added.**
- New contracts lint, existing companion lint, generated workspace and CandidateAction/EDENADecision schema checks passed.
- **Whole-repository lint remains failed with the same 20 held-file findings.** No gate or assertion was weakened.
- Three fixed SS-03 tasks replayed across two invented adapters with identical canonical requests; two missing-admission/timeout probes passed. No live model call.
- Retained companion browser **14**, synthetic JSX host **12**, JavaScript **18**, Python parity **12**, and synthetic HTTP workflow **16** passed in CI. These use supplied HTML, fixtures and development identity headers, not native Hermes or authenticated review.
- Fresh local selected collection **419 passed**, overlapping CI. Locally generated report JSON/HTML exactly matches final CI output.
- Static report browser verification **8 passed**: disclosure, task count, stop result, JSON equality, no live claim, keyboard access, 390px reflow and no observed request/page error.
- Updated local Kanban **55 Python, 23 JavaScript and 17 offline browser checks passed**. All 27 original seeds and the sprint link retained.

The first full run passed tests but found four new lint issues (generic syntax, dict literal, imports). One lint-only repair corrected them; report bytes and behavior remained unchanged. Local Ruff installation was unavailable; lint success is a remote result. Existing warnings remain visible.

The SS-04B package omitted the original board-preservation fixture required by an existing test. The interrupted dashboard run exposed the missing file. The exact fixture was recovered from SS-04A, not reconstructed from the current board; the original assertion was retained. Final fresh dashboard tests pass, and the fixture accompanies the new package.

## Data, authority and remaining limits

The example uses the admitted fixed SS-02 public source pack and SS-03 synthetic questions, not private interpretations/reflections, SOUL or session history. Source-appraisal and reuse limits are unchanged. Public labels and hashes are not a privacy classifier; frozen validation is not a sandbox. No private Project text, patient/employer material, credentials, provider spend or policy-tier change was introduced.

No real vendor compatibility, model inference, transport, credential broker, authenticated EDENA admission, actual deadline/cancellation, cumulative budgets, durable audit or complete egress enforcement exists in this path. Fixture usage fields are not operational measurements. No nurse-learning outcome, review-cost result, portfolio persistence, secure cloud hosting or WCAG conformance is established.

Browser tests use supplied self-contained HTML with Playwright/Chromium; agent-browser was unavailable. No security restriction was bypassed. Actual loopback HTTP tests are separate, not proof of full browser/server integration, live refresh, real-origin clipboard/storage or assistive-technology usability.

## Kanban and next step

SS-05 stays **in progress/prototyped/not reviewed**, SS-04 stays blocked, SS-06 planned, and all G-01/G-02/G-03 gates blocked. Delivered count remains three of seven build increments. The report is a fixed local link; only its exact path was added to the read-only server allowlist. Existing security/anti-framing headers and write denial remain unchanged. Revision-6 assertions are preserved against an immutable fixture; new tests cover revision 7 without authority inflation.

This planning PR updates metadata/reports, not the live Pages UI or the user's computer. No installation, automatic local-note synchronization, merge or deployment.

**Next: SS-05B, actual provider-specific offline codecs based on inspected official interfaces.** Live transport and model comparisons require separate access, budget and authorization. Do not call fixture parity live model substitution or skip to portfolio execution.
