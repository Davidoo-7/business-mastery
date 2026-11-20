# Knowledge Inbox import schema (v3)

A flat JSON list of notes can be imported through **Knowledge Inbox → Import files**. The app also accepts `{ "notes": [...] }` and `{ "items": [...] }`.

Example:

```json
[
  {
    "title": "How to choose a head of sales",
    "body": "Ask five experts, compare metrics, identify behavior and revenue impact.",
    "module": "team-building",
    "source": "Notion · Recruiting notes",
    "tags": ["hiring", "recruiting", "leadership"],
    "createdAt": "2026-11-20T12:00:00Z"
  }
]
```

Allowed `module` values:
- `marketing`
- `sales`
- `operations`
- `team-building`
- `strategy-product`

`title`, `body`, `module`, `source`, `tags` and `createdAt` are optional for the basic importer, but meaningful values are strongly recommended. Missing or unknown modules default to **Strategy & Product**, so review imported notes before relying on classifications.

Each JSON or text import remains an uncurated **knowledge note**, not a lesson. It does not create a quiz or practice scenario automatically. The app limits files to 1 MB each and accepts up to 30 files per import action.

The full workspace backup is a different format:

```json
{
  "format": "business-mastery-backup",
  "version": 3,
  "exportedAt": "2026-11-20T12:00:00Z",
  "state": {
    "completed": [], "answers": {}, "cases": {}, "notes": {},
    "toolkit": {}, "bookmarks": [], "inbox": [], "lastLesson": null
  }
}
```

Use **Restore a backup** for the full format, not the ordinary note importer. Restoring replaces current browser state after confirmation; export current data first.
