# MD-01B — Warn before leaving unsaved learning work

Completed September 14, 2026, Pacific Time. **Implemented and tested within the memory-only browser prototype; independent review and operational saving remain pending.** The complete work report, acceptance criteria, code/patch and actual evidence are in the conversation package.

## Human need and source baseline

Give a nurse an opportunity to avoid accidentally discarding a developing teaching card. Primary Capability; Knowledge supplies honest limitations, Judgment preserves the genuine leave/stay decision, Contribution preserves the existing source-linked draft while the page remains open. Risks: nuisance warnings and false assurance of durable protection.

Rechecked Sprint 2 revision 10, backlog revision 5, runbook, draft PR #25 and its comments, and open/unassigned issue #16. The retrieved comment is automated, not independent review. The seven held files were not edited or retried. Inspected the actual MD-01A projection, UI, builder, deliberation state machine and tests at a8116fea3db9fbc44215fcfddf0b0d6bfa06003e. The supplied CI archive checksum and 349 baseline source blobs were verified.

The existing IoC and architecture texts supply draft purpose/boundary commitments, not validation or authority. No doctrine conflict was reconciled and no private Project passage was published. MDN beforeunload guidance and Chrome Page Lifecycle documentation informed conditional registration and browser-support disclosures. Their autosave advice was not adopted because this scope does not authorize storage.

## Smallest change

The teaching-card UI reads whether already-held practice state, drafts or meaningful pending field edits contain work. It copies no learner text into a new record, log, URL or service. A beforeunload listener is registered only while needed and removed after confirmed clear or reversion of all pending edits on an otherwise clean page.

A supported browser may ask before leaving. Cancelling keeps the current page and its exact unsaved work; confirming permits departure and loss. Source inspection, ordinary edits and assembly do not themselves cause dialogs. Pausing or starting a new round does not forget retained history. Existing choices, source bindings, exclusions, card layout and draft limits remain unchanged.

The page discloses that mobile app termination, crashes, power loss or suppressed events may bypass the warning. This is not a save or recovery mechanism. It does not implement MD-03 continuity or MD-04 onboarding.

Three files changed: apps/teaching-card/ui.js, apps/teaching-card/panel.html and the existing teaching-card verification workflow. One new browser verifier was added. All other 346 baseline files, including held files, sources, original tests and policy/schema files, remain byte-identical.

## Actual verification

**Fresh full CI: 846 tests passed, zero failures/errors/skips; all 846 prior exact identities retained.** No new pytest cases are claimed. New lint passes. Overall CI fails on the same 20 held findings; its lint log is byte-identical to the preceding run.

**13 new warning-browser groups passed locally and in CI.** Five actual browser reload prompts were cancelled (pending text and all four card choices), preserving the exact checked content. A sixth was confirmed and permitted departure. Synthetic event probes separately checked conditional handler state. The same regression fails against the original page because pending work does not request a warning.

The unchanged card browser suite19, integrated journey19, note-focus5 and projection32 checks passed locally; the existing remote workflow also passed those and the retained companion, portfolio-report, transitions, offline demos and synthetic HTTP checks. Local composition26 cases overlap the full846.

Current dashboard: **8 invariant/browser/HTTP groups passed**, checking exact metadata, unchanged task states, seven original Sprint 2 and seven delivery cards, fixed preview route, four-width reflow and write denial. **72 retained planning tests and35 retained JavaScript assertions passed.** No combined count is presented as a new application suite. Desktop/mobile panels were visually inspected; no clipping observed in the inspected panels.

## Identity, environment and limits

Code commit85129703c5dcf1ae446335d7782a850734e6cd34; tree32a5d5973bef9e09682311c400e23078716ded44; draft PR #25. Run34815810609; tested merge76ecc513e32062112af4c67d0e4d2b30b08b7dec; artifact10336491062. ZIP SHA-256 ddae79dbba15a394ceabaf05a2740d1240fcd4bc9f072861e296bc4a6171a2ea verified. Actual JUnit identities inspected; all350 archived source files match. Local/CI generated HTML is identical, SHA-25613c1c7eef5fbb96dee4661f930268585225ae6f3b7daf43262da6da648a23e75.

Local Chromium144.0.7559.96; remote Chromium143.0.7499.4/Python3.12.14/Node22.23.2/Ruff0.16.6. Local Ruff and agent-browser unavailable. Direct browser file-origin access was blocked by administrator policy and left blocked. Tests use permitted supplied HTML and actual about:blank reloads, with separate Python loopback HTTP checks. No deployment-origin, physical-device, native-Hermes, crash-recovery, screen-reader or full accessibility claim.

The first exploratory cancelled-reload probe waited for a replacement document and timed out while the page remained. The final verifier observes the dialog and exact retained content directly; no timeout counts as a pass. An initial dashboard selector included legacy Sprint 1 tasks; restricting it to Sprint 2 preserved both seven-card requirements. One dashboard-verifier repair/retest cycle was used; application checks passed on the first implemented candidate. Failures remain in the package.

## Canonical record and remaining dependency

Sprint 2 revision11: commitce070244a7713801bd075b25c0dafa95d16eb446; blobc1303335b17b8693eeef9e4a0eb83693982e725c. Local bytes and embedded board match. All preceding ledger fields/history are retained with one appended refinement; delivery backlog revision5 remains unchanged. No original task, review status, participant count or gate is promoted.

No deployment, merge, installer, source admission, writer, export, model, native activation, credentials, supplier engagement, institutional access or user-computer change. Actual participants remain zero. Live Pages is unchanged.

Next substantive dependencies remain actual MD-02 educator disposition/stewardship and MD-03 maintainer/security decisions with permitted issue#16 resolution. The warning is a limited usability improvement, not a substitute for verified save-and-return or a reason to repeat completed design preparation.
