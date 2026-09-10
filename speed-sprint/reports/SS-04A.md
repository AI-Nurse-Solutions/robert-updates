# SS-04A — Hermes assessment and presentation-only candidate

Date: September 10, 2026. Status: **SS-04 remains in progress / prototyped; do not install or activate.** Independent review and human evaluation pending. No merge or deployment.

## Identity and sources

Florence-X draft PR #21, branch `review/speed-sprint-ss04`, commit `2cea70146f393b5c0b09978e48d7c9f4e9846380`, tree `ff852a1c6600bcc19cb83cc8a8e1d85cd8b562cf`. Parent SS-03: `5b76fa7ff2357ceff398be7cd9fa0cd2c27a4316`. Nine added files; all 294 preceding tracked files unchanged.

Hermes Agent v0.21.1 / tag v2026.9.7, commit `2237be355906fbe6065ce1815711eee52b2d646e`. Annotated tag `9949d0d324a3a06ac238e01dd1c2103dbca09900` is unsigned. This is inspected source identity, not an observed installed desktop binary.

Selective static inspection: `apps/desktop/src/contrib/plugin.ts`, `types.ts`, `runtime-loader.ts`; desktop/SDK/API guides; desktop entry HTML; LICENSE. The machine-readable assessment records paths, available blob hashes and inspected ranges. The loader explicitly gives plugins full renderer authority; hash and error isolation are not sandboxing. The API guide describes already-executed tool outputs, so output inspection cannot authorize those effects beforehand. Native and browser-dashboard plugin contracts differ. A documentation/tree discrepancy about shipped plugins is retained, not silently resolved.

Upstream LICENSE declares MIT; dependency/package terms remain unassessed. No upstream binary, font or model weights bundled. New adapter code follows the project license. Existing public-excerpt attribution/reuse notes are unchanged; model/provider/data rights remain separate.

## Human need and smallest change

Primary pillar: **Capability**. The nurse should retain the same evidence and deliberation mission when its host changes. Knowledge supplies permitted evidence; Judgment retains the learner-first comparison; Contribution retains pins and reviewable history. Risk: treating software access, a plugin or checksum as authority or competence.

A reproducible builder pins the unchanged SS-03 HTML and embeds it in a default-disabled native pane candidate. It imports only `react/jsx-runtime`, registers one pane, and has no host-state, session, RPC, REST, socket, OS, storage, clipboard, memory, model or credential channel. There is no installer or live runtime connection.

The child iframe permits scripts and internal form events but not same-origin, popup, download or top-navigation access. Existing child CSP denies connections and form transmission. The parent plugin remains privileged; the whole Hermes app is NOT sandboxed by this design. Native inherited CSP and load/unload behavior need actual testing. Practice text stays in temporary page memory and clears on reload/remount; no portfolio is saved.

The browser integration preview explicitly says it is not Hermes Desktop. The unchanged standalone SS-03 workspace remains available without Hermes.

## Actual evidence

Remote run `34474479058`; tested PR merge `503d847493123a4180b20bfd9cde06acf3390fff`; artifact `10150913873`. SHA-256 `b02a3e756525807fd222684ad385c6f44a99f78cd240f66009fb9205cf302b9f` verified. Actual JUnit/output inspected; all 303 archived tracked files match the prepared tree.

- **536 full-suite pytest cases passed; zero failures/errors/skips.** All 504 earlier case identities retained, 32 added.
- Companion synthetic JSX/registration-host checks: **12 passed** locally/remotely. Not native React/Electron/Hermes execution.
- Earlier JavaScript transitions: **18 passed**; **12** JS-produced snapshots validated by Python.
- Existing synthetic HTTP workflow: **16 passed**, with deterministic model stub and development identity headers.
- Derived workspace and CandidateAction/EDENADecision schema checks: passed.
- **New lint failed:** two FURB167 `re.S` alias findings in the new builder.
- **Repository lint failed:** 22 total, consisting of those two plus the 20 unchanged held findings.
- Local selected Python cases: **325 passed**, overlapping the full suite.
- **Companion browser isolation verifier incomplete/failing; native host not run.**

## Failure history

The initial scripts-only sandbox blocked required form events. Allowing internal forms while retaining CSP restored the learning flow. A subsequent new verifier assertion was corrected to inspect the disabled textarea rather than the fieldset.

On the final bounded attempt the browser verifier printed nine intermediate checks, then failed with an execution-context-reset exception after a synthetic form-navigation probe. Final settled no-transmission, top-navigation, mobile and reload checks were not completed. Immediate request-count absence does not establish a final safe outcome. Cause unconfirmed; neither security breach nor isolation success claimed. Two companion repair/retest cycles were consumed. The incomplete test and new lint findings remain for the next slice; no check was weakened or suppressed.

## Kanban and boundary status

Canonical ledger revision 5: commit `0e757bd266a896e84ae0773624a8c96eddffce40`, blob `6f57d222232605b016b3cc3864b48e6d81d1a2d1`. SS-04 is `in_progress / prototyped / not_reviewed`; SS-05 stays planned; three of seven build increments remain delivered. All release/runtime/provider gates remain blocked.

Local Kanban checks: **46 Python tests, 18 JavaScript checks, 15 offline browser checks passed.** Prior revision-4 assertions remain against an immutable fixture; new checks verify incomplete work resumes without promotion. Two new bookkeeping assertions were corrected for CSS capitalization using underlying status text. All 27 original seeds plus the sprint link remain. These successful dashboard tests do not replace the companion's failing isolation check.

The local viewer retains the standalone SS-03 link. The companion frame preview was not added to its HTTP allowlist or used to weaken anti-framing policy. No live Pages deployment or user-computer installation occurred. Project artifacts include the candidate source, generated review files, updated board, detailed report and raw passing/failing evidence.

No patient/employer-confidential material, private project source, learner notes, credentials, model calls, paid service, cloud workspace, clinical pathway or policy-tier change introduced. Independent review, native isolation, full security/dependency assessment, authenticated oversight, live model portability, durable portfolio, nurse learning outcomes and WCAG conformance remain unestablished.

## Next step

**Resume SS-04**, not SS-05: determine the form/navigation context-reset cause, verify settled navigation and no-transmission behavior, repair the two builder lint aliases and obtain fresh relevant results. Installation stays blocked pending independent review and an observed native-host smoke test without widening host policy. Runtime traffic requires its own prior authorization, bounded tool/egress/cancellation mechanisms and outcome evidence.
