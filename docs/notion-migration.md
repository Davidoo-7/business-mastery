# Notion → Business Mastery migration plan

## Current capabilities
- You can capture and organize notes directly in the Knowledge Inbox.
- You can import **individual Markdown or text files**, or **flat JSON note lists**, and classify them into the five disciplines.
- No connection to Notion has been made and no user notes have been migrated yet.
- Notion ZIP export ingestion, rich block rendering, attachment handling and direct synchronization are **not implemented** in this static version.

## Recommended future workflow
1. Inventory the relevant Notion databases and pages; identify source links, dates, owners and tags.
2. Export Markdown/CSV or use an authorized Notion connector in a read-only discovery phase.
3. Preserve provenance: Notion page ID, title, URL, timestamps, original text and media pointers.
4. Map each source into a **Discipline → Track → Knowledge note**. Leave uncertain classifications in an inbox for review.
5. Run duplicate detection by page ID / canonical URL and compare near-duplicate notes manually.
6. Import into a review queue, **not directly into published lessons**.
7. Curate high-value notes into short lessons with a takeaway, examples, practice scenario and knowledge check.
8. Only enable ongoing synchronization if there is a clear conflict-resolution policy and a suitable private backend.

## Security and privacy
The current app is browser-local. Do not put confidential internal Notion pages, credentials, or customer records into this public GitHub repository. Private notes entered in your browser are **not** part of the Git-tracked source files. Before adding cloud sync, implement authentication, access control, backups and an explicit source-of-truth policy.

## Next platform evolution
- Better search across imported source notes, curated lessons and personal annotations
- Source citations and original-page links in lesson views
- Review queue with draft → edited → published status
- Optional account-based storage and multi-device sync
- Notion ZIP/Markdown directory import or authorized Notion API connector
- AI-assisted categorization with human confirmation before publishing
