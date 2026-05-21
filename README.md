# LBC Learning

Exam-grade study modules for University of Indonesia (FEB) finals — concept-free,
reading-first lessons with worked examples, searchable glossaries and practice
questions. A static course hub built by Legacy Bridge Capital, open to everyone.

```
.
├── index.html          ← the hub (course picker)
├── courses.js          ← course registry the hub renders cards from
├── serve.js            ← static dev server (node serve.js)
├── engine/
│   ├── study.css        ← shared, token-driven reading theme
│   └── study.js         ← the engine: renders one course from window.COURSE
└── courses/
    ├── _template/       ← copy this to add a course (documented schema)
    └── statlan/         ← Statistika Lanjutan (live demo course)
```

## Run locally

```bash
node serve.js          # → http://127.0.0.1:4173/
# or
npm run serve
# Windows: double-click Quickstart.bat
```

No build step — it's a static site. Deploys to Vercel as-is (`vercel.json`).

## How it works

Each course is **data, not code**. A course folder is a thin `index.html` that
loads the shared engine plus a `course.js` defining one `window.COURSE` object.
The engine renders four hash-routed views from it:

- `#/overview` — landing: course blurb, objectives, unit cards, progress
- `#/unit/<id>` — a lesson (sections → cards; supports KaTeX math + tables + callouts)
- `#/glossary` — searchable term list
- `#/quiz` — practice questions with reveal-able worked answers

Progress (completed units) is saved per course in `localStorage`. Math is rendered
with KaTeX (loaded from CDN); charts are optional via a `COURSE.charts` hook.

## Add a course

1. Copy `courses/_template/` → `courses/<your-slug>/`.
2. Fill in `course.js` (the schema is documented inline in the template).
3. Add a matching entry to `courses.js` with the same `slug` and `status: 'ready'`.

That's it — the hub picks it up automatically.
