# S2-01F — Mission-delivery pivot handoff

Prepared September 11, 2026. Planning preparation complete; implementation lane not activated. Sprint 2 revision 6 preserves all original tasks, review evidence and gates. Detailed editable plan, MD-01 handoff, asset work orders and first-run blueprint are in the conversation transition package; the local dashboard links to those full copies.

## Outcome and current continuation

Target: a nurse starts without technical help, identifies a learning goal, examines permitted sources, makes a defensible teaching decision, builds a one-page card, closes the application and returns to the same work with source and review history intact. Educator/preceptor is the working first audience from the preceding recommendation, not a newly approved topic or observed market finding. The one-page format is confirmed and must not be asked again.

The review line stays open: topic/audience fit, independent educator disposition, observation arrangements and accepted maintainer responsibility remain missing. S2-01 remains Review and the other six original cards stay Planned. No participants or endorsements are invented. Reuse the existing formative kit and frozen TC-001 v0.2/source-map pair. The earlier contrast and document-verification repairs are not reopened.

## Actual source-code gap, not an assumed feature list

Inspected baseline: Florence-X PR #24 at `7cfd6ced1d3400bd14224fdefa611478031ea2f9`, tree `0223fc23c0f2a7fef0ec53715cc6708dddf98495`.

`apps/mission-walkthrough/guide.js` assembles a temporary review note from the validated current choice. It has no in-application teaching-card builder or save path. The conversation-generated teaching card is a separate artifact.

`schemas/mission.py` constrains MissionRecord to a draft at goal_identified. `schemas/deliberation.py` explicitly declares memory-only, unauthenticated practice without execution permission. `schemas/portfolio.py` and `portfolio_contract.py` evaluate synthetic, non-authorizing save assertions and do not implement storage. These records cannot become operational simply by flipping persistence or approval labels.

`schemas/catalog.py` supports learning_guide, evidence_note and reflection_template, with plain-text/Markdown payloads, lowercase identifiers and x.y.z semantic versions. Display label TC-001 v0.2 is not directly valid canonical input. Preserve that label and exact source bytes while proposing an explicit canonical identity/version mapping; do not loosen validation or backdate review. All schemas above are under packages/florence-core/florence_core/.

`scripts/build_mission_walkthrough.py` composes the exact pinned earlier workspace at checked source anchors. Keep that discipline; no new generic orchestrator or silent pin removal is warranted.

## MD-01 — first proposed implementation

Derive an in-memory teaching-card presentation from the same internal validated choice and selected source context, keeping the supporting review note. Prefer a learning_guide Markdown payload and a bounded derived presentation rather than arbitrary HTML or a parallel decision store. Any new canonical mapping is a reviewed engineering change, not something this preparation already performed.

Acceptance: all four choice paths remain genuine; reject/withhold do not turn into endorsed recommendations; initial interpretation, reflection, SOUL and history are excluded; user text is rendered as text; sources, AI disclosure, authored instructional design and pending-review labels remain visible. Changed goal, source, audience or choice makes the derivative stale. Pause blocks assembly; clear/reload retain their disclosed losses. One-page overflow must be explicit rather than clipped or shrunk to unreadability. Preserve keyboard/source navigation and original tests. No export, clipboard, download, save, publication, live model or native execution is added in MD-01.

Educator review remains necessary before content-use or benefit claims. MD-01 is the next proposed code target, not an activated task in this record.

## Prepared delivery sequence

1. MD-01: in-application teaching-card draft, no writer.
2. MD-02: small maintained source-and-learning pack with actual rights, balanced cases, independent review and owner. This can run beside engineering.
3. MD-03: owned private save/close/reopen with authentic authorization/audit, actual read-back, idempotency, conflict and crash/unknown-outcome recovery; G-01/G-02 remain required.
4. MD-04: progressive discovery and a revisable plan using real registered assets. Self-report, task evidence and independent assessment remain different.
5. MD-05: identified Hermes presentation assessment, then optional separately authorized inference; G-02/G-03 apply to their respective scopes. No silent cloud fallback.
6. MD-06: one identified-platform installer with protected signing/update chain, clean-machine setup, state-preserving upgrade, rollback/uninstall, and no developer setup required from the nurse.
7. MD-07: role packs and later hosted personal access on the same core, with independently tested ownership/isolation, retention/deletion and recovery.

These are dependency-ordered work packages, not seven guaranteed calendar days. Human review and allowed engineering design can progress in parallel; missing human evidence must never be fabricated to advance a card.

## Four commission-ready work orders

WO-01, Knowledge: a health-sciences librarian supplies search/appraisal method, versions, claim passages, applicability and a rights register. Record retrieval, quotation, adaptation, commercial redistribution and training rights separately. Unknown remains unknown; online availability is not a license.

WO-02, Judgment: educator/instructional designer and a reviewer distinct from the author supply objective–activity–assessment alignment, balanced examples, omission checks and an exact-version review disposition. A generated card is not an approved protocol or proof of learning.

WO-03, Capability: core and release engineers extend the existing mission, then authorized storage and onboarding, then packaging. Preserve existing Hermes home/state; no blanket import of memories, skills, credentials or jobs. Initial OS/architecture and rights/dependency inventory must be settled before release.

WO-04, Contribution: independent security/accessibility review and voluntary formative observations produce actual findings, scope limitations and retest evidence. Agree on custodian, storage/access/deletion before observation. No raw participant feedback or private reflection enters public source control.

No person is assigned, contacted, contracted or paid. Role owners are needed responsibilities, not accepted appointments. Full work orders in the local package include acceptance and potential harms.

## Five roles, one core

Discovery candidates from the preceding strategy: students—Open RN, AACN Essentials and NCSBN references; staff nurses—AHRQ TeamSTEPPS and specialty resources; leader-managers—AONL, IHI and TeamSTEPPS; educators—AACN toolkit, QSEN, INACSL and AHRQ health-literacy resources; allies—NIST SSDF, OWASP and W3C. Candidate capabilities are respectively concept/transfer exercises, peer-teaching rehearsal, synthetic improvement proposals, reviewed teaching-design assets, and bounded technical/documentation contributions.

This is not a fresh rights/content/compatibility audit. Reverify editions, permitted use and code/model/content rights before bundling or adoption. NCBI discovery, Docling ingestion and H5P learning content remain candidates, not installed dependencies. Do not build five separate products.

## First-run specification

Ask progressively about goal, current role/perspective, intended audience, self-described starting point, available time/access needs, assistance/data preferences and the proposed plan. Questions can be skipped or revised; do not request sensitive narratives. Show why each real mission fits the goal and constraints.

Keep user-approved preferences (optionally projected into a SOUL file), proposed journey and operational authorization separate. Role selection grants no licensure, credentials or institutional access. Raw interview retention is off by default. No invented courses, reviewers, scores or auto-enrolment. Retention and inference are explicit, understandable decisions, not side effects of answering questions.

## Preserved boundaries and maturity

Nurse AI OS owns canonical records; Florence-X coordinates missions; EDENA evaluates policy; enforcement points control boundaries; Hermes and models are replaceable adapters. The personal route excludes patient data, confidential employer/learner information, EHR access and clinical execution. A paid account or secure cloud does not change that boundary.

IoC and the OS/Harness outline supply draft design commitments, not empirical validation or deployment authorization. The two treatise framings and three-zone/four-tier doctrine conflicts remain unresolved; no policy is rewritten. Institutional work requires its separate institution-controlled process.

This preparation changes planning metadata and the local planning viewer only. No Florence-X source, held file, teaching artifact, live inference, native runtime, save, installer, hosted service, merge or deployment is changed. Value is measured through understanding, defensible judgment, useful completion/recovery and reviewed contribution—not token or artifact counts. Actual human outcomes remain unmeasured.
