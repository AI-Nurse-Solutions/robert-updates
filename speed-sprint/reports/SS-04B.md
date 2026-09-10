# SS-04B — Browser verification complete; native gate remains open

September 10, 2026. SS-04 remains **blocked / prototyped / not_reviewed**, not delivered. No installation, runtime activation, merge or deployment.

## Human need, scope and pillars

Keep the nurse's evidence and deliberation workflow inspectable when its host changes, and distinguish a blocked operation from lost work and actual recovery. Primary Capability; Knowledge supplies source/limit awareness, Judgment preserves learner-first choice, Contribution preserves reproducible failure/correction evidence. Passing software tests do not establish nurse competence or native-host safety.

## Verified identity

Florence-X draft PR #21, branch `review/speed-sprint-ss04`.

- Previous head: `2cea70146f393b5c0b09978e48d7c9f4e9846380`.
- Head: `99091417438b30d56ac93b5c9d9b5488238b8c00`.
- Tree: `bcd5c889464a42cb4dc1b39dc8e3bd35af0df735`.
- Tested PR merge: `0e630557fc3b5ec980eda4b835fae4ad10cd0883`.
- Verification run: `34477143762`; artifact: `10152054596`.
- Archive SHA-256: `643c722964077b06a2a5be307810c1cd9fe2bfa1bc92ddd01dfae93fcbacf125`.
- Ledger revision 6: commit `2f706bc2bd8ac4a4ee19be489b550c2592e1f1d3`; blob `56ee8ba67d80f543a0bb71b0d8c9899249351b9a`.

## Reproduced finding and smallest repair

The original browser verifier failed again. Chromium logged form-action and frame-src denials, created no observed Playwright request, and replaced the child with `chrome-error://chromewebdata/`. The verifier then queried the discarded execution context. A separate top-navigation probe in a live child raised SecurityError. Removing the synthetic form was not the cause: both retained/removed variants produced the blocked error document.

Check live-frame controls first, then await the destructive form probe's navigation commit and load event. Require policy-denial evidence, the local error URL, no observed request after settlement and an intact parent. Record the absent workbench as availability loss. Explicit test-driver reload restores the fixed mission and clears unsaved practice; it is not automatic recovery or durable persistence.

No ignored exception, unconditional retry, acceptance-test sleep, sandbox/CSP expansion or success claim for lost work. The test transport counts attempted requests before aborting them, and any attempt fails the no-request check. Results persist even on failure. Replace the two new re.S aliases with re.DOTALL. Add the browser verifier to blocking CI using Playwright 1.57.0.

Four files modified, one RFC added; 299 previous files unchanged. All 304 archived source files match the locally prepared tree. The generated plugin, preview, child workspace, source/upstream pins and seven held files are unchanged. Existing pytest cases, policies and original CI remain intact.

## Actual results

- Full repository: **536 passed; zero failures/errors/skips**, all 536 prior case identities retained.
- **14 browser checks passed locally and in CI**, with one successful local repeat. Actual recorded Chromium: local 144.0.7559.96, remote 152.0.7977.0.
- Companion synthetic JSX/host **12 passed**; earlier JS **18** and Python parity **12** passed; synthetic HTTP **16 passed** with model stub/development identity headers.
- Companion lint, generated workspace, CandidateAction/EDENADecision schema checks passed.
- **Overall CI still fails on exactly the same 20 held-file lint findings.** The two new findings are gone; no checks suppressed.
- Local focused Python: **325 passed**, overlapping the full suite. Local Ruff installation failed on DNS; lint evidence is remote, not a claimed local pass.
- Local Kanban: **50 Python tests, 20 JavaScript checks and 15 offline browser checks passed**.

Archive checksum, actual JUnit/browser JSON/output and all source bytes were inspected. Browser testing uses supplied HTML, not native Hermes or Electron. No observed browser request is not proof of all possible egress or hostile-host containment. Expected policy-denial messages and warnings remain in evidence.

## Kanban and remaining gates

Revision 6 keeps native integration blocked, not completed. Earlier revision-5 assertions remain against an immutable fixture. Four new Python and two new JS cases verify the current block, unchanged delivered count and independent successor. All 27 original Seed Garden records and the existing sprint link remain. The local board/launcher are updated; no live Pages interface or user computer was changed. Server allowlist and anti-framing policy unchanged.

The candidate must not be installed yet. Required: identified native desktop build, independent review, parent-CSP/load/unload smoke tests, and separately enforced runtime admission/tool/egress/cancellation controls. Private portfolio saving, authenticated authority, real-model comparison, nurse learning outcomes, browser/server integration and accessibility conformance remain unverified. Practice is temporary and can be lost when the child navigates.

No credentials, paid providers, private Project text, patient/employer-confidential material, model calls, clinical pathway or policy-tier changes introduced.

## Next eligible work

**SS-05 offline model-adapter contracts and no-silent-cloud-fallback tests** is ready, not implemented. Its recorded dependency is SS-03, so it can proceed independently while native SS-04 remains blocked. G-02 and G-03 remain closed for unapproved live provider activity. Exactly three of seven build increments remain delivered. The next sprint command does not mark native integration complete or authorize installation.
