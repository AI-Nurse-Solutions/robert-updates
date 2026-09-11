# SS-06A — Truthful portfolio contract and offline failure evidence

Date: September 10, 2026, Pacific Time. **The offline increment is implemented/tested within scope; operational SS-06 saving remains blocked/prototyped/not_reviewed. No portfolio was saved.** No merge, deployment, live model, native installation or professional-competence claim.

## Human need, source/code findings and pillar mapping

A nurse must be able to distinguish a prepared resource, an intended save, an approval, a tool's success claim and outcome evidence. Primary pillar **Contribution**; Knowledge retains sources/disclosure, Judgment separates learning choices from save approval, and Capability requires bounded attempts and recovery. Risks: simulated receipts mistaken for persistence, metadata burden and portfolios mistaken for competence.

Read the current runbook, ledger revision 8, PR #22 and open issue #16. Recovered all 319 baseline source files from the supplied package and verified their Git blob/mode identities against tree `4aa74d7171e34c48a7b88a639dc00dfc9165eb3b`. Existing CatalogArtifact supplies provenance; EvidenceBundle/ToolCallRecord do not themselves establish full private-portfolio read-back. Existing HumanReview does not establish every proposed portfolio binding or expiry. Reuse the catalog; do not rewrite old schemas, policy tiers, workflow permissions or held files.

## Identity

- Draft Florence-X PR #23; branch `review/speed-sprint-ss06`.
- Baseline: `89e88aa241b7fa68aacf5bed0e255c73db101862`.
- Final head: `16d3f04d81af367311e2302ddc3b5bd605a763a0`.
- Final tree: `358dc8ca30fdc357554f167d29b073719281dda5`.
- CI-tested PR merge: `a2249f1e043f4fc3af797ca2e08e5754b96f05b4`.
- Run: `34564740931`; artifact: `10185626045`.
- Artifact SHA-256: `85f5cb5a00c8382b1189d86dc782e77d3254d4463d13449e25e5a8a5a42b11a6`.
- Ledger revision 9: commit `977c00fec67397bb71943a296d5b914122f1fdfd`, blob `70193d628a5078a3d57ced224fd390c89730ca31`; local bytes match.

Eight files added; all 319 existing tracked files unchanged. All 327 archived source files matched the prepared candidate. The seven held files and all prior tests/workflows/policies remain untouched.

## Minimal implementation

PortfolioEnvelope reuses CatalogArtifact and binds mission, owner, workspace, inert destination, purpose and a selected learning-decision digest. It remains owner-only, unsubmitted, unreviewed and not a competence claim. The example uses an existing synthetic catalog guide; it reads no browser reflection or actual nurse portfolio. The learning-decision link is authored fixture metadata, not proof of a human decision.

SaveIntentFixture, SavePolicyFixture and SaveApprovalFixture represent the proposed chain in synthetic form, not real EDENA decisions or authenticated approvals. SaveAttemptFixture is a supplied dispatch assertion, not an ExecutionReceipt. SaveReadBackFixture supplies a complete envelope and content; the assessor compares these inputs without querying a store. All fixtures state offline_contract_test and no_execution_permission. There is no store adapter, filesystem/network callback, credential, live-enablement switch or writer.

Current guard failures, historical dispatch-time failures and byte/metadata evidence are separate outputs. Later expiry or revocation cannot erase earlier matching evidence; matching bytes cannot grant permission or make a bad approval valid. A create-only identity binds owner/workspace/destination/artifact ID/version. Changes at the same target conflict rather than overwrite. A tool's success claim without read-back remains unknown. In-flight, interrupted and absent observations require reconciliation without automatic retry. Matching supplied bytes remain readback_matches_fixture, never a successful save. A failure report with matching bytes remains explicitly contradictory.

The assessor issues zero storage operations and zero successful receipts in every scenario. Repeated evaluation is side-effect free, not a claim of atomic reservation or exactly-once execution. Report generation writes development output files only, not a professional portfolio.

## Actual verification and failure history

**802 full-repository pytest cases passed; zero failures/errors/skips. All 723 preceding case identities retained; 79 added.** Downloaded archive checksum, actual JUnit identities, report/browser/JS/HTTP results and source bytes were inspected.

New lint passed. Fourteen authored scenario reports match local and CI output byte-for-byte. Report browser **8** passed locally and remotely. Retained companion browser **14**, simulated JSX host **12**, JavaScript transitions **18**, Python validation of snapshots **12**, and synthetic HTTP workflow **16** passed. Workspace snapshot and existing action/decision schema comparisons passed.

**Whole-repository lint still fails on exactly the same 20 findings in seven held files. Overall CI is not clean.** The original test job still stops at lint; the dedicated workflow actually runs the full collection and keeps lint blocking.

Local selected collection: **591 passed**, overlapping CI. All **79** new cases passed again after the final import-only repair. Initial setup caught an unsupported strict-Literal constraint; explicit before-validation prevents control coercion. A malformed copied-instance test exposed a serializer warning; validation now precedes serialization. The final local selected run has no warnings.

First remote run `34564314134` passed 802 tests but found two new import-only lint issues. Follow-up removes the unused SaveScenario import and an extra import separator. No contract behavior, assertion, old file or lint rule changed. First artifact `10185500232`, SHA-256 `34e83359e00c6bf53a29741c90358012defbca3a2403f38931481f385d58dbe3`, and its failures are preserved. The final remote Starlette/AnyIO deprecation warning remains visible.

Local Python3.13.5/pytest9.0.2/Pydantic2.13.4; remote Python3.12.14/pytest9.1.1/Pydantic2.13.5/Ruff0.16.6/Node22.23.2/OPA1.20.2. Local Ruff was unavailable. New report Chromium143.0.7499.4 remotely and144.0.7559.96 locally; retained companion verifier selects Chromium152.0.7977.0 remotely. These are separately recorded environments, not a native Hermes test. Browser checks use supplied HTML, not full browser/server or accessibility conformance testing.

## Kanban and gates

Revision9 keeps SS-04, SS-05 and operational SS-06 **blocked/prototyped/not_reviewed**. All G-01/G-02/G-03 gates remain blocked. SS-07 is independently ready for walkthrough/evaluation preparation. Delivered count remains three of seven build increments; setup is separate.

Local dashboard: **64 Python cases, 29 JavaScript assertions and 19 current offline browser checks passed**. All 18 prior revision8 browser checks were repeated against the exact original snapshot; historical ledger and acceptance assertions retained. Original27 Seed Garden entries plus the existing sprint link remain. One fixed report path was added to the read-only allowlist; security, no-store, anti-framing and write-denial controls are unchanged.

The public planning PR contains metadata/reports, not live Pages UI. No user-computer installation or local notes upload occurred. The Project package supplies the updated board, source, patch, acceptance criteria, report and raw passing/failing evidence.

## Limitations and next step

No actual store observation, authenticated policy/approval/audit, atomic reservation, concurrency, crash durability, encryption, deletion/retention, signed receipt, operational retry budget or real-store recovery is implemented. Fixture dates/revocations and observations are supplied assertions, not independently obtained facts. Hashes are not privacy, authenticity, truth or durability guarantees. Tests do not prove nurse understanding, professional review, educational benefit or competence.

No patient/employer-confidential material, private Project source, learner reflections, credentials, model calls, provider spending, native Hermes activation, clinical/institutional route, policy-tier change, held-file retry, merge or deployment.

**Next: SS-07 integrated walkthrough and formative evaluation preparation.** Show the available learning stages and blocked live/native/save steps explicitly. Do not treat a demo as complete end-to-end operation or invent participant results. Operational portfolio work still requires the separate G-01/G-02 gates and real storage/authorization/recovery evidence.
