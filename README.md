# Business Mastery — Interactive Learning Library

An elegant, static, mobile-friendly learning website for practical business concepts. The first collection is **People & Leadership**, based on notes from the Alex Hormozi × Steven Bartlett interview.

## Includes
- 12 focused lessons on culture, feedback, training, hiring, recruiting, and delegation
- Dedicated deep-dive on the consultant approach to executive recruiting
- Knowledge checks with immediate feedback
- Progress tracking and personal notes saved in browser localStorage
- Search, category filters, learning path and notes export
- Dark responsive design with no build step or framework dependencies

## Run locally
Open `index.html` in your browser. For a more reliable local preview use `python -m http.server 8000`, then visit `http://localhost:8000`.

## GitHub Pages deployment
1. Create a GitHub repository and upload `index.html`, `styles.css`, and `content.js` in the repository root.
2. Under **Settings → Pages → Build and deployment**, choose **Deploy from a branch** and select `main` / `(root)`.
3. GitHub Pages will give you the site URL once deployment completes.

**Important:** GitHub Pages sites can be publicly accessible even when the repository is private depending on account/product setup. Do not publish private notes or internal company details without checking the visibility of the deployed site. The learning website works locally without publishing it.

## Editing lessons
All content lives in the `lessons` array in `content.js`. Each lesson supports a module, title, tagline, takeaway, article sections, examples and a short multiple-choice knowledge check. The app is intentionally simple to maintain.

## Attribution and scope
This is an independent study aid paraphrasing concepts discussed in a podcast interview. It is not affiliated with, endorsed by, or published by the interview guests. The material includes interpretation and teaching examples. Claims and anecdotes should be checked against the source when used in formal training. 
