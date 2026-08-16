---
name: program-slide-deck
description: Transform a webinar, public program, workshop, or planning brief into an audience-facing, browser-based slide deck published as a static GitHub Pages site for Zoom or live screen sharing. Produces an evidence-grounded narrative, responsive full-screen slides, keyboard and scroll navigation, source notes, guest-segment framing, audience exercises, and a privacy-honest feedback pathway.
version: "1.0"
status: reusable
primary_output: static-html-github-pages
reference_implementation:
  presentation: ../../beautiful-flight-presentation.html
  planning_archive: ../../beautiful-flight.html
---

# Program Slide Deck Skill

## 1. Purpose

Use this skill to convert a program plan into a polished **audience-facing presentation that runs directly in a browser**. The default deliverable is a single static HTML file committed to a GitHub repository and deployed through GitHub Pages.

This is optimized for:

- Zoom webinars and virtual conferences;
- public education programs;
- moderated interview programs;
- panel discussions;
- workshops and community forums;
- product-neutral educational demonstrations;
- evidence-led objection handling;
- programs that need a permanent planning archive and a separate presentation surface.

The presentation is designed to be **scrolled or advanced like slides** without requiring PowerPoint, Keynote, or presentation software.

---

## 2. When to Trigger This Skill

Use this skill when the user asks for any of the following:

- an audience-facing webinar deck;
- a presentation that can be scrolled through during Zoom;
- a static GitHub Pages slide deck;
- a browser presentation based on a run of show;
- a public-facing program deck derived from talking points;
- a visual deck plus feedback link or QR code;
- a slide deck that preserves the history of program planning;
- a reusable presentation format for a webinar series.

Do not default to this skill when the user explicitly requests a `.pptx`, Google Slides file, Canva design, or PDF-only deliverable. In those cases, use the appropriate slide-authoring workflow and optionally provide this HTML format as a companion.

---

## 3. Input Contract

Gather or infer the following from the user's materials:

| Input | Required | Notes |
|---|---:|---|
| Program title | Yes | Include series name and episode title where applicable |
| Program purpose | Yes | What the audience should understand or do by the end |
| Audience | Yes | General public, nurses, executives, students, entrepreneurs, etc. |
| Hosts and roles | Yes | Creator, moderator, co-moderator, guests |
| Run of show | Preferred | Timing, segments, transitions, audience exercise |
| Talking points | Preferred | The substantive content to convert into slides |
| Sources and statistics | Conditional | Required for factual or evidence-led claims |
| Brand direction | Preferred | Colors, voice, logo, tagline, visual tone |
| GitHub repository | Yes for publishing | Owner/repository and target branch |
| Target filename | Preferred | Use a descriptive kebab-case `.html` filename |
| Feedback destination | Preferred | Email address, form URL, or approved collection endpoint |
| Images | Optional | Must be licensed, user-supplied, generated, or otherwise authorized |

Ask a question only when a missing item blocks publication or creates a material ambiguity. Otherwise, make a defensible default and state it in the final delivery note.

---

## 4. Source-Grounding Rules

When the deck is based on uploaded files, meeting notes, prior planning pages, or other supplied material:

1. Treat those materials as the primary source.
2. Preserve their terminology, framing, role assignments, and program logic.
3. Do not silently replace their content with generic advice.
4. Do not invent statistics, quotations, dates, credentials, outcomes, or source claims.
5. If the source does not support a point, omit it or mark it as a proposal.
6. If current data are requested, verify them using authoritative sources and distinguish them from source-derived planning content.
7. Where two sources use different definitions or methods, disclose that instead of comparing the figures directly.

For healthcare programs, maintain explicit boundaries around PHI, clinical decision authority, employer-confidential information, and unapproved institutional use.

---

## 5. Core Design Doctrine

### 5.1 Audience first

The page is a presentation, not a memo pasted into full-screen boxes.

Each slide should communicate **one dominant idea** through:

- one declarative headline;
- one visual relationship, comparison, statistic, question, or exercise;
- no more than three supporting ideas unless the slide is intentionally a matrix;
- short source notes rather than academic footnote blocks;
- enough whitespace to remain legible during screen sharing.

### 5.2 Show, then explain

Prefer this order:

1. Question or tension
2. Evidence or visual
3. Interpretation
4. Practical implication
5. Audience action

### 5.3 Capability with boundaries

When presenting AI, healthcare, privacy, energy, safety, or regulated workflows:

- show what the system can do;
- state what it cannot or should not do;
- separate personal, community, professional, and institutional trust domains;
- preserve a visible human decision point;
- avoid promotional claims that exceed the evidence.

### 5.4 Evidence before persuasion

Statistics should introduce a question, not end the argument. Every non-obvious quantitative claim should have an on-slide source label and a source register near the end of the deck or in the companion planning archive.

---

## 6. Default Narrative Architecture

Use an 18–30 slide structure for a 45–75 minute program. Adapt the sequence to the program rather than forcing every slide into every deck.

### Recommended sequence

1. **Title** — series, episode, hosts, date
2. **Central question** — the one question the audience will carry
3. **Audience promise** — what they will understand or be able to do
4. **Program boundaries** — what the session is and is not
5. **Why now** — adoption, search, workforce, policy, or market signal
6. **Definition** — define the central concept in plain language
7. **Comparison** — old model versus new model
8. **Professional use cases**
9. **Personal or adjacent use cases**
10. **System map** — components and relationships
11. **Deployment or delivery options**
12. **Benefits**
13. **Limitations and caveats**
14. **Objection clinic introduction**
15. **Objection 1** — concern, evidence, responsible response
16. **Objection 2**
17. **Objection 3**
18. **Guest introduction** — evidence-led context, not hype
19. **Guest journey** — before, build, result, lesson
20. **Failure or limitation** — what did not work
21. **Transferable method** — what the audience can reproduce
22. **Audience exercise**
23. **First-use specification or worksheet**
24. **Q&A triage** — safe, governed, prohibited, or needs escalation
25. **Five takeaways**
26. **Closing doctrine or call to action**
27. **Feedback QR / link**
28. **Sources** or source-access link

### Search-aligned framing

When the program is meant for a general audience, write major section titles as natural questions:

- What is it?
- How does it work?
- Can it help me?
- Is it safe?
- What are the tradeoffs?
- What should I do next?

These question forms are useful editorial patterns. Do not claim they are high-volume keywords unless current search data support that claim.

---

## 7. Segment Patterns

### 7.1 Evidence-led opening

Open with one or two verified statistics, then interpret cautiously.

**Pattern:**

> “X% of [defined population] reported [specific behavior]. That does not prove [overclaim]. It tells us [limited implication]. Tonight we are asking [program question].”

### 7.2 Objection Clinic

Use the same four-part structure for every objection:

1. **The concern**
2. **What the evidence supports**
3. **What should not be claimed**
4. **What responsible practice looks like**

This format prevents defensiveness and turns objections into design requirements.

### 7.3 Guest or founder segment

Introduce the guest with context that makes the story relevant to the audience.

Recommended sequence:

1. The wider workforce or market context
2. The problem the guest experienced
3. What was fragmented before
4. What the guest built
5. What the system made visible
6. What the AI assisted with
7. What remained human
8. What failed or required correction
9. Three instructions for the audience

Never frame AI as the founder, clinician, author, or accountable decision-maker when the human performed those functions.

### 7.4 Audience exercise

End the teaching portion with a structured action. A strong default is:

- Purpose
- Approved inputs
- AI role
- Prohibited actions
- Human approval gate
- Definition of done

The audience should leave with a usable specification, not merely inspiration.

---

## 8. Audience-Facing Copy Standards

### Headlines

- Use declarative or interrogative headlines.
- Prefer 4–12 words.
- Make the conclusion visible in the headline when the evidence is settled.
- Use a question when the slide opens exploration.

### Body text

- Prefer 18–32 words per text block.
- Avoid paragraphs longer than four lines at presentation width.
- Convert complex material into comparisons, pathways, diagrams, or staged reveals.

### Statistics

Display:

- the number prominently;
- the defined population or denominator;
- the date or study period when material;
- a one-sentence interpretation;
- a short source label.

### Source labels

Use a small visible footer such as:

`Source: Pew Research Center, June 2026`

Link the source label when publishing as HTML. Include a source register or companion archive for full titles and methodological notes.

### Claims to avoid

Do not use:

- “proves” when the study is observational or correlational;
- “everyone,” “always,” or “never” unless the statement is a defined governance rule;
- “secure,” “private,” “compliant,” “ethical,” or “validated” without naming the basis;
- unsupported ROI, savings, adoption, or outcome claims;
- unexplained acronyms on first use.

---

## 9. HTML Presentation Specification

The default implementation is a **single self-contained HTML file** with embedded CSS and JavaScript. Avoid external frameworks unless the user specifically requests them.

### 9.1 Layout

Use full-viewport slides:

```css
html {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.slide {
  min-height: 100svh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: grid;
  align-items: center;
  position: relative;
  padding: clamp(56px, 7vw, 112px);
  overflow: hidden;
}
```

Use `100svh` rather than only `100vh` to behave better on mobile browsers.

### 9.2 Typography

Use system fonts by default for reliability:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Use responsive type with `clamp()`:

```css
.slide h1 { font-size: clamp(2.8rem, 7vw, 7rem); }
.slide h2 { font-size: clamp(2rem, 4.6vw, 4.8rem); }
.slide p  { font-size: clamp(1.05rem, 1.8vw, 1.6rem); }
```

### 9.3 Navigation controls

Provide:

- scroll navigation;
- keyboard navigation;
- previous and next controls;
- current slide / total slide indicator;
- progress bar;
- full-screen button;
- slide-index menu;
- direct hash navigation where practical.

Keyboard defaults:

| Key | Action |
|---|---|
| `Space`, `Enter`, `ArrowDown`, `PageDown` | Next slide |
| `ArrowUp`, `PageUp`, `Backspace` | Previous slide |
| `Home` | First slide |
| `End` | Last slide or feedback slide |
| `F` | Toggle full screen |
| `M` | Toggle slide menu |
| `Escape` | Close menu or exit full screen |

Do not intercept keystrokes while the user is typing in an input, textarea, select, or editable element.

### 9.4 Slide tracking

Use `IntersectionObserver` to update:

- current slide number;
- active menu item;
- progress bar;
- URL hash;
- document title if useful.

### 9.5 Full screen

Use the standard browser Fullscreen API:

```js
async function toggleFullscreen() {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen();
  } else {
    await document.exitFullscreen();
  }
}
```

### 9.6 Accessibility

Required:

- semantic headings;
- visible focus states;
- sufficient color contrast;
- `aria-label` on icon-only controls;
- an `aria-live` region for slide number changes;
- no essential information conveyed by color alone;
- reduced-motion support;
- logical reading order;
- descriptive link text;
- alt text for meaningful images.

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
```

### 9.7 Print behavior

Provide a print stylesheet so the deck can become a handout:

```css
@media print {
  .controls, .progress, .slide-menu { display: none !important; }
  .slide {
    min-height: auto;
    break-after: page;
    page-break-after: always;
  }
}
```

### 9.8 Offline resilience

Prefer:

- embedded CSS and JS;
- local repository assets;
- no runtime dependence on third-party presentation libraries;
- no critical content loaded only from remote APIs.

A remote source link may be used for citations, but the slide itself should render without it.

---

## 10. Visual System

Use a restrained design system with CSS variables.

Recommended default palette:

```css
:root {
  --navy: #10213f;
  --navy-2: #1a3158;
  --teal: #0f766e;
  --teal-2: #14b8a6;
  --gold: #b7791f;
  --gold-2: #d4a017;
  --cream: #f8f6f0;
  --paper: #ffffff;
  --ink: #1f2937;
  --muted: #667085;
  --line: #e4e7ec;
}
```

Use only the user's brand colors when supplied. Do not overload the deck with decorative gradients, animation, or stock imagery. Visual hierarchy should come from scale, contrast, spacing, and composition.

Preferred visual devices:

- large numerical cards;
- split-screen comparisons;
- process arrows;
- concentric or layered systems;
- three-option decision cards;
- risk or trust-domain matrices;
- audience prompt cards;
- guest-story timelines;
- closing principle stacks.

---

## 11. Feedback Pattern for Static GitHub Pages

GitHub Pages is static and does not store submissions by itself. Never imply that a static form is storing data unless a real backend or external service is configured.

### Default feedback options

1. **External form URL** supplied by the user — preferred for structured collection.
2. **Email preparation** using `mailto:` with the form values encoded in the message body.
3. **Copy feedback** button that copies the structured response to the clipboard.
4. **QR code** on the final slide that links to the planning archive feedback section or external form.

### Privacy disclosure

Place a visible notice near the form:

> “This static page does not store submissions. The email option opens your mail application, and the copy option keeps the response on your device until you paste it elsewhere.”

Do not collect PHI, clinical case details, passwords, access tokens, or confidential institutional information through the feedback form.

---

## 12. Planning Archive Companion

For complex programs, maintain two separate pages:

### Audience presentation

- concise;
- visual;
- one idea per slide;
- designed for screen sharing;
- includes only essential citations.

### Planning archive

- run of show;
- moderator introductions;
- talking points;
- source register;
- planning history;
- feedback form;
- downloadable or printable production brief.

Link the two pages to each other. The presentation should include a small “Planning archive” or “Sources” control that does not distract from the live program.

---

## 13. GitHub Publishing Workflow

### 13.1 Repository inspection

Before writing:

1. Confirm the target repository.
2. Read the repository root.
3. Identify the default branch.
4. Check whether the target filename already exists.
5. Check for an existing GitHub Pages workflow or Pages branch configuration.
6. Preserve existing site navigation and assets unless the user asks for integration changes.

### 13.2 File creation

- Use a new descriptive path such as `program-name-presentation.html`.
- Do not overwrite an existing file without fetching its current SHA and using the repository update action.
- Use a clear commit message, for example:

`Add audience presentation deck for <Program Name>`

### 13.3 GitHub Pages deployment

A repository using GitHub Actions can deploy the entire root with a workflow similar to:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - id: deployment
        uses: actions/deploy-pages@v4
```

Do not replace a working workflow unnecessarily.

### 13.4 Verify deployment

After committing:

1. Capture the commit SHA.
2. Check the GitHub Pages workflow run tied to the commit.
3. Wait for a completed success result when possible.
4. Verify the public URL.
5. Confirm the presentation loads, controls work, and local assets resolve.

For a standard project site, the expected URL is:

`https://<owner>.github.io/<repository>/<filename>.html`

If the repository has a custom domain, use the custom-domain URL instead.

---

## 14. Quality Assurance Checklist

### Content

- [ ] The deck follows the actual program plan.
- [ ] Names, titles, dates, and roles are correct.
- [ ] Claims are supported by supplied sources or verified research.
- [ ] Methodological caveats appear where needed.
- [ ] No PHI or confidential institutional information appears.
- [ ] The audience leaves with one clear action.

### Slide design

- [ ] One dominant idea per slide.
- [ ] Text remains readable at Zoom screen-share size.
- [ ] No slide depends on hover.
- [ ] No content is clipped at 16:9 or common laptop dimensions.
- [ ] Mobile layout remains usable.
- [ ] Sources are visible without dominating the slide.
- [ ] Color contrast is acceptable.

### Controls

- [ ] Scroll navigation works.
- [ ] Keyboard navigation works.
- [ ] Full screen works.
- [ ] Menu/index works.
- [ ] Slide counter and progress bar update correctly.
- [ ] Inputs do not trigger slide navigation while typing.
- [ ] Print layout creates one slide per page.

### Feedback and links

- [ ] Feedback destination is correct.
- [ ] Static-form limitations are disclosed.
- [ ] QR code or feedback link resolves.
- [ ] Planning archive link resolves.
- [ ] Source links open safely in a new tab.

### Deployment

- [ ] File committed to the intended repository and branch.
- [ ] Deployment workflow completed successfully.
- [ ] Public URL loads.
- [ ] Assets use correct relative paths.
- [ ] Final delivery includes commit SHA and control instructions.

---

## 15. Output Contract

When the work is complete, report:

1. **Live presentation URL**
2. **Repository file path**
3. **Commit SHA**
4. **Deployment status**
5. **Slide count**
6. **Presentation controls**
7. **Feedback mechanism**
8. **Any known limitation or assumption**

Do not claim the page is live until the deployment is confirmed or clearly state that deployment is still pending.

---

## 16. Reusable Build Prompt

Use this prompt as the internal work order when invoking the skill:

> Build an audience-facing browser slide deck for **[program title]** based primarily on **[planning brief, talking points, files, and sources]**. The audience is **[audience]** and the program promise is **[promise]**. Create a coherent narrative of approximately **[slide count]** full-screen slides, with one dominant idea per slide. Preserve the source terminology and role assignments. Verify any current statistics requested by the user and cite authoritative sources on-slide. Include program boundaries, practical examples, objection handling, guest framing, an audience exercise, closing principles, and a feedback pathway. Implement the deck as one responsive, accessible, self-contained HTML file with scroll snap, keyboard navigation, slide counter, progress bar, full-screen mode, slide index, print styling, reduced-motion support, and a link to the planning archive. Publish it to **[GitHub repository/path]**, verify GitHub Pages deployment, and return the live URL, commit SHA, controls, and known limitations.

---

## 17. Reference Implementation

This skill was abstracted from the **In Beautiful Flight** webinar workflow:

- Planning archive: `beautiful-flight.html`
- Audience presentation: `beautiful-flight-presentation.html`
- Repository: `AI-Nurse-Solutions/robert-updates`

The reference implementation demonstrates:

- a 30-slide scrollable webinar deck;
- keyboard and full-screen controls;
- current-slide tracking;
- evidence-led AI adoption, privacy, critical-thinking, and energy sections;
- a moderator and guest segment;
- audience exercise and trust-domain triage;
- QR-linked feedback;
- deployment through the repository's existing GitHub Pages workflow.

---

## 18. Final Principle

> **Demonstrate capability. Meet objections with evidence. Leave every audience member with one safe action.**
