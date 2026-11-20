# Business Mastery — Your business learning workspace

A private-first static learning application organized into **six disciplines**:

1. **Marketing** — positioning, attention, campaign testing and diagnosis
2. **Sales** — offers, sales execution, pipeline management, customer success
3. **Operations** — SOPs, constraints, quality, measurable execution
4. **Team Building** — culture, recruiting, hiring, leadership and coaching
5. **Strategy** — business fundamentals, first principles, prioritization and focus
6. **Product** — product discovery, customer surplus, models versus methods, retention and sustainable scaling

## Contents

- Six dashboards and discipline-specific learning tracks
- **36 lessons** with knowledge checks, scenarios, practical action prompts, and saved progress
- An eight-lesson **Product** curriculum (including an existing product-discovery lesson moved from Strategy without changing its ID)
- Video-derived [Product source notes](docs/sources/product-retention-hormozi.md) and an in-app source-notes page
- Interactive **Retention Lab** to compare monthly churn scenarios for recurring products
- Two new Product worksheets: Customer Surplus Audit and Retention Improvement Plan
- Full library search, bookmarks, practice lab, worksheets, personal reflections and Knowledge Inbox
- Local browser storage with portable JSON backup and selected file imports for future Notion migration

## Run locally

From the repository root:

```bash
python -m http.server 8000
```

Open http://localhost:8000 in your browser. No dependencies or build step are needed.

## Key files

- `index.html`: app shell and script loading
- `styles.css`: styles and mobile layout
- `content.js`, `learning.js`: original team-building lesson content
- `catalog.js`: six-discipline taxonomy and earlier lessons
- `product.js`: Product lessons, decision cases, worksheets and video-note source catalog
- `product-ui.js`: video-notes reader and interactive retention calculator
- `app.js`: navigation, lesson rendering, interactive learning and browser state
- `docs/sources/product-retention-hormozi.md`: detailed source-derived notes and caveats
- `docs/taxonomy.md`: discipline/track structure and curation principles
- `docs/notion-migration.md`: future import mapping

## Data, compatibility and security

The app stores progress, notes and worksheet entries in the browser (`localStorage`, key `business-mastery-v3`). It does not upload them to GitHub, and there is no account or server database. The prior 12 Team Building lesson IDs are unchanged; the existing `strategy-product-love` ID is also unchanged and now appears under Product. Existing progress and saved work are retained in the same browser.

**Important:** The GitHub repository may be public. Do not commit confidential Notion notes, customer records, or credentials to this repository. Export and back up your browser data regularly.

## Source boundaries

The existing Team Building and early business lessons are adapted from the user-supplied Alex Hormozi / Steven Bartlett transcript. The new Product curriculum comes from a separate user-supplied Alex Hormozi video transcript. Lessons attribute the relevant source in the app. Scenarios, calculators, and domain-specific examples are teaching adaptations, not claims from the speaker.

The video argues for products that customers keep buying and cites 1–2% monthly churn as an aspiration for certain recurring models. This is not a benchmark for every industry. The video's staged revenue ranges are illustrative, and the video mentions—but does not detail—an eight-Cs framework.
