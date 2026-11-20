# Business Mastery — Learning Academy

An independent, static, responsive learning platform for mastering leadership, hiring, recruiting, culture, training, and building teams that scale. The first course is **People & Leadership**, structured around notes from an Alex Hormozi × Steven Bartlett interview. It is an educational interpretation, not an official or affiliated product.

## What's inside

- Four guided chapters containing **12 lessons**.
- Actionable principles and examples, based on the interview.
- Knowledge checks **plus 12 realistic decision scenarios** with explanations and retries.
- A practice lab for revisiting the scenarios independently.
- Three editable worksheets: **Stop · Start · Keep**, **Consultant hiring canvas**, and **Document · Demonstrate · Duplicate**.
- Persistent completions, knowledge-check answers, scenario progress, lesson reflections, and worksheet drafts via browser `localStorage`.
- Automatic migration of existing progress from the original `business-mastery-v1` key to `business-mastery-v2`.
- Exportable lesson notes; copyable worksheets.
- Responsive navigation and keyboard-accessible controls.

## Run locally

Open `index.html` in a browser, or from the project root:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

No packages, build process, server database, or accounts are necessary.

## File structure

```text
business-mastery/
├── index.html       # Application shell and navigation
├── styles.css       # Responsive design system
├── content.js       # Original 12-lesson source-derived content
├── learning.js      # Chapter structure, practice cases, worksheet schemas
├── app.js           # Navigation, interactive learning and browser state
├── .gitignore
└── README.md
```

## Progress and privacy

Browser data is saved **only on the current device/browser**. It does not sync through GitHub and is not uploaded to a server. Export important notes regularly. Worksheet content can be copied for backup.

## Recommended Git workflow

From your local repository in Cursor:

```bash
git status
git pull --ff-only
# Copy the updated files into this folder (do not replace .git)
git add index.html styles.css app.js learning.js README.md .gitignore
git commit -m "feat: build interactive Business Mastery academy"
git push origin main
```

When making further changes, **pull before editing** and inspect `git status` before staging. If `git pull --ff-only` rejects a merge, resolve the divergence rather than forcing a push.

## Future directions

- More collections: Strategy, Marketing, Sales, Finance, Systems.
- Short mastery exercises and spaced review.
- Optional authentication and cross-device sync **only if** that becomes worth the complexity.
