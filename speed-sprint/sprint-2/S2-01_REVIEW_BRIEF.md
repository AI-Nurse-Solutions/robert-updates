# S2-01 — Begin with the nurse's purpose

**Speed Sprint 2: From Prototype to Professional Value**  
**Preparation date:** September 11, 2026, Pacific Time.  
**State:** Prepared for product review. S2-01 is incomplete; no independent approval or participant result exists.

## The first conversation

Robert, complete this sentence in your own words:

> I would use this mission to ______; today I do that by ______.

The proposed starting mission is to evaluate an AI-generated professional-learning resource and prepare a source-linked review note. That is a proposal to test against your purpose, not an agreed user need. There is no need to prepare patient stories, employer documents, or personal reflections. A short description of the task and the present difficulty is enough.

Then open **SS07B_Learning_Walkthrough.html** in the activation package. Use only public or invented nonclinical text. Describe the first point that prevents or complicates the task you named. Product-owner feedback will be kept distinct from independent review and participant observations.

## Frozen review target

- Repository: AI-Nurse-Solutions/florence-x; draft PR #24.
- Code head: `7cfd6ced1d3400bd14224fdefa611478031ea2f9`.
- Tree: `0223fc23c0f2a7fef0ec53715cc6708dddf98495`.
- Walkthrough SHA-256: `461114cd4ca3f68b2faa32591b3610985bb0b69a43625cfe067f460464b5f389`.
- Mission: `mission.public-learning.0001`; mission SHA-256 `e3cf03292e21a46b5a3f6297b29da8354e087473995084abe8b9150106e50072`.
- Practice pack: `learner-first-practice`, version `0.1.0`.
- Evidence pack: `public-ai-resource-review`, version `0.1.0`.

The supplied CI archive was checksum-checked and its 339 tracked source files reconstructed to the pinned tree. The frozen walkthrough matches the archived build. This is artifact-identity verification, not a new run of the 820 repository tests, a signature, independent review, or deployment authorization.

The underlying learning application is unchanged. No live model runs, no portfolio is saved, and nothing is submitted. Its architecture selector previews placements; it does not move data. The note excludes the initial interpretation and optional reflection, but deliberately includes the recorded reason, alternative and consequence. Those fields must still be non-sensitive. Reload or confirmed clear loses temporary entries.

## Reuse the existing review, not another questionnaire

The exact existing protocol is **SS07_FORMATIVE_KIT.md**, from `docs/evaluation/SS07_FORMATIVE_KIT.md` at the pinned head (Git blob `9904e3b1ef710904d8b675cb4cd17f5d432034ac`). It remains unchanged. It contains the five tasks, blank worksheet, independent-versus-prompted observations and stop conditions. This brief is a cover sheet, not an additional required assessment.

Before participant observation, establish the independent reviewer's suitability and willingness, the disposition on this exact exercise, voluntary participation, permitted observations, custodian, access, storage and deletion date. No invitations, bookings, consent, recording or collection have been initiated. Do not put completed worksheets, names or private feedback into the public Kanban or code repository. Product discussion in this chat is not an in-application private research store.

## Three questions for reviewer inspection

These are development-agent observations and explicit hypotheses, **not user findings**. Do not read suggested answers to a participant before their own interpretation.

| ID | What is inspectable in the frozen build | What remains untested | Pillars |
|---|---|---|---|
| RQ-01 | The mission and three exercises are fixed. | Whether this particular task is useful enough for the intended nurse to return. | Judgment, Knowledge |
| RQ-02 | The introductory guide explains both actual browser-only operation and future-placement previews; the canonical draft retains older “upcoming” limitation text. | Whether that combination creates confusion or excess reading burden. | Knowledge, Capability |
| RQ-03 | The practice pack contains omission, competing-findings and unsupported-certainty cases, with no clearly supported-agreement case in that inspected set. | Whether the exercise balance encourages warranted reliance rather than indiscriminate distrust. | Judgment, Contribution |

Source locations: `apps/mission-walkthrough/guide.html`, `guide.js`, and `examples/learning_deliberation/practice-pack.json`, all at the pinned head. No case, wording or interface was changed in response to these hypotheses. Prioritization waits for product purpose and actual reviewer/user evidence.

## Responsibility and disposition

Robert is the product owner, not automatically the independent reviewer. The independent nurse educator/reviewer is **not confirmed**. Issue #16 has no assigned maintainer in the retrieved record; an authorized maintainer must accept that responsibility through the permitted process. No person was assigned or contacted by this preparation. Runtime/security and provider authorizations remain separate.

A review disposition should identify the exact build, scope examined, findings and remaining limitations. “Suitable for this bounded formative exercise,” “revise,” and “hold” are not permission for clinical use, native activation, live inference, hosting or saving. A blank or absent review is pending, never approved.

## What closes S2-01

Use the original S2-01 acceptance criteria: a genuinely agreed learning purpose; clearly separated product feedback, developer observations and independent review; agreed handling of voluntary observations; accepted maintainer responsibility; and the frozen baseline. The current preparation establishes the baseline and review materials only.

**Current counts:** Product-owner observations received: 0. Independent review dispositions: 0. Nurse participants observed: 0. These are counts of recorded evidence, not claims that no one has privately used the product.

**Next:** obtain the product purpose and review arrangements. No automatic promotion to S2-02, no fabricated observations, and no new autonomous feature build.

## Four-pillar intent

Knowledge makes the source and evidence limits visible. Judgment lets the nurse determine what is worth improving. Capability preserves a repeatable, bounded experience. Contribution makes future criticism attributable without exposing private reflection. The possible harm is turning a review into another burden or mistaking founder approval for independent assurance.
