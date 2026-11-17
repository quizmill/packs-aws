# packs-aws — rules for every pack in this repo

Public repo of quizmill learning packs for AWS certifications, one pack per
top-level directory, each deployed as its own app. Write commit messages, PR
bodies and comments in terms of what a change does for a learner or pack
author.

- **One directory is one pack**, named after its pack id. A new pack is a
  new directory with `pack.json` and `questions.json`; CI and the deploy
  workflow discover it. Don't add per-pack workflows.
- **`aws-clf`, `aws-genai` and `aws-aif` are generated samples.** Never edit
  the files listed in their `.derived.json`; change the question in
  `quizmill/packs-aws-full` and the sample follows on merge. Their
  `README.md`, `NOTICE.md` and `LICENSE` are edited here. A sample has the
  same pack id and question ids as its full bank (there is no `-full` id),
  so a learner's progress carries over when the full bank is unlocked.
- **A pack's own `CLAUDE.md` adds to these rules** (`aws-saa/CLAUDE.md`):
  provenance, id scheme, item-writing style. `aws-aif/CLAUDE.md` only says
  what is still edited here; its authoring rules moved with the bank.
- **Ids are stable.** Learner progress is keyed on question ids and on the
  pack id. Never renumber or reuse a question id, never rename a pack id or
  its directory.
- **Provenance.** Questions are original, written from the public AWS docs
  and exam guides, or adapted from a source whose licence allows it and is
  reproduced in the pack's `NOTICE.md`. Never import AWS official practice
  questions, Skill Builder items or exam dumps, and check a community bank's
  provenance before adapting from it.
- **Before a PR:** `npx --yes quizmill@latest validate <dir>` passes for
  every pack you touched (on Node 22: `mise exec node@22 -- npx …`).
- **No screenshots, build output or generated files** other than the
  samples CI writes.
