# SS-05B — Documented provider-specific offline codecs

September 10, 2026. **Offline codec increment implemented/tested within subset scope; independent review pending. Overall SS-05 live model substitution remains blocked/prototyped, not delivered.** No live provider, credentials, model, native Hermes, portfolio write, merge or deployment.

## Identity

Code: AI-Nurse-Solutions/florence-x draft PR #22, `review/speed-sprint-ss05`.

- Baseline: `0ff906b41a2614da0ea1fb4b46bf5b073f2489cf`.
- Head: `89e88aa241b7fa68aacf5bed0e255c73db101862`.
- Tree: `4aa74d7171e34c48a7b88a639dc00dfc9165eb3b`.
- CI-tested merge: `086f37231136dda7388469a1609653932f5c1476`.
- Final run: `34523227060`; artifact `10170559144`.
- Artifact SHA-256: `bdd6b43e730fa675e07c628a53389856e2a41665b1ab7cb0acf8b4d152485c2c`.
- Ledger revision 8: commit `dc9550a540e8be8b9a9205ec9e2a708c35a7ece9`, blob `428f3b888357f91e3572f097ae7a67bc40c9b033`; local bytes match.

## Human need, pillars and findings

The nurse's mission, selected source context and ability to challenge an output must remain independent of a provider's response format. Primary pillar **Capability**; Knowledge preserves source identity/applicability, Judgment preserves unverified proposals and human review, Contribution preserves traceable formats and failure evidence. Risk: schema compatibility mistaken for model quality, truth, privacy or execution authority.

Official Ollama Chat, Structured Outputs and Modelfile documentation and OpenAI Chat Completions/Structured Outputs request-response documentation were inspected. The register also pins Ollama `api/types.go` at commit `ea8d65004affdae6464af1c73a55eb34f5a67eb1`, blob `7ea9022be92ec29fe13cba4685d2f84b8d6cfcf5` (lines 80–290), and OpenAI SDK `src/openai/types/chat/chat_completion.py` exact fetched blob `9372c4a68c72cd6781bee9f77ba153cf22234b6d`. These are reference sources, not installed model/server identities or full upstream audits.

The source register records official URLs, dates, available immutable identifiers, rights and limitations. Webpage byte-download attempts failed, so no full-page hash is fabricated. No vendor SDK/source implementation, binary or model weights are copied. Existing short public excerpts retain attribution and reuse notes; provider/model terms remain separate.

Ollama's inspected guide excludes Cloud structured outputs. OpenAI Chat Completions is not Responses or every OpenAI-compatible endpoint. `store=false` is a request field, not a zero-retention guarantee. Model names and responses used here are authored fixtures, not actual provider outputs.

## Minimal implementation

Seven new files provide provider-codec records, pure preparation/decoding, source register, fixtures, tests, a report builder and RFC. One existing branch-scoped CI workflow gains two verification steps. All 311 other baseline files are unchanged, including original tests, policies, canonical workspace, Hermes companion and held files.

Prepare a non-streaming text/JSON-schema request for Ollama `/api/chat` or OpenAI `/v1/chat/completions`. Only the supplied task and selected passage IDs/text/version/hash/applicability enter the wire body. Canonical mission/request/spec hashes remain in Nurse AI OS records. No SOUL, reflection, owner identity, conversation memory, endpoint URL or credential is read. Serialization is not admission or permission to transmit.

Decoding requires exact request/spec/body binding, expected model metadata, a supported complete assistant-text response and canonical proposal validation. Unknown fields, tools, multimodal content, duplicate/malformed/oversized JSON, source mismatches and approval-label escalation stop. Refusal, incomplete, unsupported, invalid, provider error and over-budget results remain distinct. Missing usage stays unknown rather than free inference. Named diagnostics are explicitly discarded; raw thinking, refusal text and error contents are not propagated.

Every non-success stops without routing or fallback; the module has no transport or callback path. Valid structure and source membership do not establish entailment: false-but-well-formed test content remains not_verified and requires human review. Existing OfflineAdmission/routing contracts are unchanged and are not promoted into EDENA or authenticated approval.

The generated report reuses three prior learning questions through two documented-format subsets. Matching authored proposals are expected by construction, not evidence of equal model performance. Requests, results and source records are inspectable.

## Actual verification and repairs

**723 full-repository pytest cases passed; zero failures/errors/skips. All 626 preceding identities retained; 97 new cases.** Actual JUnit, archive checksum and all 319 archived source files were checked against the prepared tree.

New codec lint and provider-format demonstration passed. Retained companion browser14, synthetic JSX12, JavaScript18, Python parity12 and synthetic HTTP16 passed. Workspace and existing action/decision schema comparisons passed. **Overall CI still fails on exactly the same 20 findings in seven held files.** No gate weakened.

First remote run `34522732212` passed 723 cases but caught two new import lint findings. The follow-up removes an unused test import and orders demo imports after an explicit code-owned workspace path setup. Reordering had exposed reliance on another module's path side effect during local direct execution; the explicit setup restores that use. All 97 codec cases and the standalone demo passed again; generated JSON/HTML bytes are unchanged and match final CI. No codec behavior, assertion, lint rule or held file was changed to conceal failure.

Local selected collection: 516 passed, overlapping full CI. Static report: eight offline Chromium checks passed, including exact displayed JSON, keyboard inspection, 390px layout and no observed requests/exceptions. Browser checks use supplied HTML, not live-provider or browser/server integration. Existing warnings and expected browser-denial logs remain visible. Remote Python 3.12.14/Ruff 0.16.6/Node22.23.2/OPA1.20.2; local Chromium144.0.7559.96, remote152.0.7977.0. Environment/dependency records accompany raw evidence.

## Kanban and boundaries

Revision 8 keeps SS-04 and SS-05 blocked/prototyped/not_reviewed; three of seven build increments remain delivered. All G-01/G-02/G-03 gates remain blocked. SS-06 becomes independently ready for **contract/failure-test preparation only**; operational portfolio writes remain barred by G-01/G-02.

Local dashboard: 60 Python tests, 26 JavaScript checks and 18 current offline browser checks passed. All 17 prior revision-7 browser checks and earlier ledger assertions are retained against immutable fixtures. Original 27 Seed Garden entries plus sprint link preserved. The new provider report has a fixed read-only local route; security/anti-framing/write-denial controls remain unchanged. No live Pages UI deployment or user-computer installation occurred.

Live model/provider conformance, authenticated admission, actual process cancellation/deadlines, cumulative budgets, durable audit, native Hermes, professional review, nurse learning/review burden and WCAG conformance remain unverified. Public labels/hashes are not privacy classifiers or sandboxing. No private project source, learner notes, patient/employer-confidential material, policy-tier change, held-file retry or paid provider use.

**Next:** SS-06 contract and failure suite; no operational save. The sprint command does not waive native-host, live-provider, review, budget or release gates.
