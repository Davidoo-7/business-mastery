# Business Mastery — The Business Learning Workspace

A private-first, responsive learning application organized into five business disciplines:

1. **Marketing** — positioning, customer attention, campaign testing and diagnosis
2. **Sales** — offers, pipeline management, first response and customer lifetime value
3. **Operations** — process quality, constraints, SOPs, continuous improvement
4. **Team Building** — culture, recruiting, hiring, leadership and coaching
5. **Strategy & Product** — business models, product validation, focus and leverage

## What's inside (v3)

- A personal dashboard and five topic-specific dashboards
- **29 curated lessons**, organized into topic tracks
  - The original **12 Team Building** lessons are preserved under their original IDs
  - **17 new starter lessons** across the other four modules, adapted from the Alex Hormozi × Steven Bartlett transcript supplied for this project
- **29 decision scenarios**, lesson quizzes, actions and reflective notes
- Global search, topic filters, bookmarks, curriculum and progress tracking
- **7 interactive worksheets** in the playbook toolkit
- **Knowledge Inbox**: capture, edit, classify and delete personal notes
- Import individual **Markdown, text, or JSON note-list files** into the inbox
- Export/restore a complete workspace **JSON backup**, or export study notes as Markdown
- Responsive reading interface, usable without a JavaScript build pipeline

## Run locally

Open a terminal in the root of this repository and run:

```bash
python -m http.server 8000
```

Open http://localhost:8000 in your browser. The app is static (HTML, CSS, vanilla JS); no npm installation, server database or account is required.

Open `index.html` directly if needed, but localhost is recommended for more predictable browser storage behavior.

## Content architecture

```text
business-mastery/
├── index.html        # Application shell
├── styles.css        # Responsive UI
├── app.js            # Navigation and interactions
├── content.js        # Original 12 Team Building lessons
├── learning.js       # Original cases, actions and worksheets
├── catalog.js        # Five modules + 17 new lessons + additional exercises
├── docs/
│   ├── taxonomy.md
│   ├── knowledge-schema.md
│   └── notion-migration.md
└── README.md
```

To add a lesson, define its content in `catalog.js`, add the ID to the correct `moduleCatalog[].tracks[].ids` list, and provide a decision scenario under `additionalCases`. The existing team-building lesson IDs are stable to preserve browser progress.

## Personal data and backups

Your completions, bookmarks, responses, lesson notes, worksheets and inbox items live in **localStorage in your current browser**. They are **not** automatically synced to GitHub, Notion or another device. Use **Knowledge Inbox → Download full backup** to keep a copy, and **Restore a backup** to import it later.

The app migrates saved progress from `business-mastery-v2` (or `business-mastery-v1`) on first load. Do not delete browser data before exporting a backup.

The Knowledge Inbox importer currently supports `.md`, `.markdown`, `.txt`, and JSON arrays of notes (or an object with a `notes`/`items` array). It does **not** currently connect to Notion's API or parse Notion ZIP exports. See `docs/notion-migration.md` for the planned migration.

## Provenance

The initial learning content is an independent educational adaptation of the transcript supplied for the project (Alex Hormozi in conversation with Steven Bartlett). It is **not an official course or verbatim transcript**. The content in Marketing, Sales, Operations and Strategy & Product is a starter curriculum; the user's private Notion content has **not yet been imported**.

## Local ↔ GitHub workflow

Before editing locally:

```bash
git pull --ff-only
```

After your changes:

```bash
git status
git add index.html styles.css app.js content.js learning.js catalog.js README.md docs .gitignore
git commit -m "feat: expand business mastery into five learning disciplines"
git push origin main
```

If Cursor has unrelated changes, inspect `git status` carefully before staging. The repo URL is https://github.com/Davidoo-7/business-mastery.
