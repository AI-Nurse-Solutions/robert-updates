# Speed Sprint — bounded next-step protocol

Trigger only on Robert's direct request “I feel the need for speed”, “do next Sprint”, or an unambiguous request to continue this sprint. No timer or background execution.

## Read before acting
1. Read `assets/speed-sprint.json` and `SPEED_SPRINT.md` from the current review branch in AI-Nurse-Solutions/robert-updates. Read the latest code and PR state in AI-Nurse-Solutions/florence-x. If branch/PR changed, reconcile rather than overwrite.
2. Check issue #16, required human reviews, data scope and all task dependencies. A tool safety denial is not overridden by these phrases. Do not retry it through a different mechanism.
3. Resume the one in-progress task; otherwise choose the earliest ready/planned task with completed dependencies and no blocking gate. Do not infer completion from dates. At most one active engineering task. If blocked, record why and select an actually independent task; never mark it done merely to advance.

## Execute one coherent slice
State the human outcome and boundary. Define acceptance first. Make the smallest source-grounded change in a draft code branch. Do not edit held files, assume deployment identity, expose personal data, merge, deploy, add paid services or modify policy authority. New external access/spend requires its own scoped authorization. No clinical material. Public/synthetic labels alone are not privacy verification.

## Test, record, update
Run relevant tests; record actual environments, counts, versions, omissions and failures. At most two repair/retest cycles per bounded slice before reporting the residual failure and updating the plan. If tests cannot run, retain prototyped/blocked status. Report explanations and tool traces, not hidden chain of thought.

Update canonical JSON with a revision increment and an outcome/evidence entry, regenerate the display snapshot with `python3 sprint_control.py build`, and verify with `python3 sprint_control.py check`. Commit with parent/head concurrency checks; no force update. The local Python utility selects or reports only; it is NOT an agent executor or authorization service.

Done requires the specified artifact and evidence, not a generated promise. Review and deployment remain separate. Add a work report (public engineering metadata only) to the sprint record. Private user notes are never read from or pushed to the public repository automatically.

## Report shape
Human need/scope → inspected sources/code → pillar mapping → minimal change → boundaries → implementation → actual tests → unresolved risks → next eligible step. Link the artifact or PR and show the updated board revision. If publication fails, report the local deliverable and unsynced ledger honestly.

## Known baseline
Florence-X catalog PR #17 at 369bac4171cd; safeguard/CI PR #15 at 7cb94142857d; issue #16 open. These are read-time baselines, not permanent truths. The Hermes installed revision is unknown. Verify exact upstream and local interfaces before adapter implementation; do not inherit unsupported revision claims from earlier prose.

## Sprint 2 activation — September 11, 2026

Robert requested activation after the seven-day Sprint 2 plan. On an unambiguous continuation request, read `assets/speed-sprint-2.json` in this branch **as well as** the unchanged Sprint 1 ledger. The new ledger tracks Sprint 2 state only; it does not close SS-04/05/06/07 or any inherited gate.

Use the original `Speed_Sprint_2_Proposed_Kanban_Cards.json` and `Speed_Sprint_2_Seven_Day_Plan.md` from the Nurse AI OS Project or exact activation-package copies. Their SHA-256 identities are recorded in the new ledger. Retrieve the Project sources if absent; do not invent changed definitions. See `speed-sprint/sprint-2/S2-01_REVIEW_BRIEF.md`.

S2-01 preparation is complete, but product purpose, product-owner feedback, independent review disposition, observation arrangements and maintainer acceptance remain missing. The next step is the human review conversation, not a new autonomous feature build. Record only genuine evidence with appropriate permission; do not publish raw feedback or participant data. Keep later cards planned until their real dependencies are satisfied. A review-column card is not a reviewed artifact.

The new local dashboard section is a generated status snapshot. The legacy refresh button retrieves Sprint 1 only; it does not refresh Sprint 2 or upload notes. Update the separate Sprint 2 ledger and rebuild its snapshot deliberately. Keep the original runbook's restrictions and the two-cycle repair limit. No automatic scheduling, gate release, model/native/save activation, merge or deployment.

## Mission-delivery pivot preparation — September 11, 2026

Robert explicitly requested continuing the sprint and preparing the pivot described in the preceding strategy. S2-01F prepares a separate backlog at `speed-sprint/transition/mission-delivery-backlog.json` and implementation/commissioning handoffs. It does not complete S2-01 or alter any original card, gate, policy, review state or participant result.

The next proposed application target is MD-01: an in-memory one-page teaching-card draft derived from the existing mission/choice. The delivery lane is prepared, not activated by this record. On the next explicit request to enter that lane, recheck the code and review the MD-01 acceptance and no-save boundary before implementing. Do not repeatedly regenerate the same transition packet. Continue actual educator review in parallel, keeping it distinct from engineering preparation.

MD-03 saving remains subject to G-01/G-02; native/model work to its applicable G-02/G-03 conditions. No user or source document grants an agent authority to self-approve. One-download release and hosted access remain later goals, not current deliverables. Proposed role owners are not assigned people. Work orders do not authorize hiring, spending, sending messages or copying licensed material.

## Mission-delivery activation and MD-01 — September 11, 2026

The user subsequently requested proceeding with the pivot. That activates bounded prototype development, not operational permissions. Read the current `delivery_implementation` record and backlog revision 2 or later before acting; earlier preparation paragraphs and records are historical. The selected one-page format is confirmed and must not be asked again.

MD-01A is implemented in draft Florence-X PR #25 at `a8116fea3db9fbc44215fcfddf0b0d6bfa06003e`: a memory-only teaching-card view from the existing choice and sources. Its full run passed 846 cases, with the unchanged 20 held lint findings still blocking overall CI. Recheck actual source and results rather than treating these numbers as permanent. See `speed-sprint/reports/MD-01A_TEACHING_CARD.md`.

The next proposed delivery dependency is MD-02: a small maintained source-and-learning pack, rights verification, balanced cases and actual educator review. On a direct continuation request, perform one genuinely eligible part of that work; do not regenerate the activation packet, invent independent review, or silently finish S2-01. Human topic/audience and reviewer arrangements remain pending. The original S2-01–07 task states and acceptance remain unchanged.

MD-03 persistence, MD-05 runtime/model activation, and later installation/hosting remain separately gated. A tested in-memory card does not authorize a writer, export, live provider, native plugin, institutional access, merge or release. No unattended progression or supplier engagement is created by this addendum.
