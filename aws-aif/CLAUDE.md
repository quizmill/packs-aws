# aws-aif — a generated sample

The 30-question sample of the AWS Certified AI Practitioner (AIF-C01)
bank. Public repo: write commit messages, PR bodies and comments in terms
of what a change does for a learner or pack author. The root `CLAUDE.md`
applies; this file adds what is specific to this directory.

## What is edited here, and what is not

- **Generated, never edited here:** `pack.json`, `questions.json`,
  `concepts.json`, `scenarios.json` and `.derived.json`. CI writes them
  from the full bank in `quizmill/packs-aws-full` (directory `aws-aif`),
  and a PR that changes one of them fails CI.
- **Edited here:** `README.md`, `NOTICE.md`, `LICENSE` and this file.
- **A fix to a question or concept card** — wording, key, distractor,
  explanation, `sourceRef` — is made in the full bank and arrives here on
  merge. So is a change to which 30 questions are in the sample, and to
  the manifest (categories, exam numbers, the upgrade card). The authoring
  rules (provenance, item-writing style, the quality checks) live in the
  full bank's `aws-aif/CLAUDE.md`.
- New questions go to the full bank only.

## Ids

- The sample and the full bank are one pack: both have the pack id
  `aws-aif`, and the sample's question ids are the bank's own
  (`aws-aif-<tier>-d<domain>-<n>`). Learner progress is keyed on both, so
  answers given in the sample are still there once the full bank is
  unlocked. Never rename the directory.
- This directory held all 200 questions until November 2026. Learners from
  then have answers stored against ids the sample no longer shows; they
  reappear on unlock. Don't describe those ids as removed.

## Keep the README true

`README.md` quotes numbers that come from the generated files: 30
questions, 30 concept cards, the per-domain and per-tier table, the count
of "Select TWO" items, the task statements covered, and the full bank's
size (from `upgrade.title` in `pack.json`). When a regenerated sample
changes them, update the README in a PR of its own.

## Before a PR

- Validator green, on Node 22, from the repo root:
  `mise exec node@22 -- npx --yes quizmill@latest validate aws-aif`.
  Quote its output in the PR.
- **No screenshots, PNGs, build output or other generated files** in this
  repo. Describe how the engine renders a change in a sentence instead.
