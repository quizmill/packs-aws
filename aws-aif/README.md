# aws-aif — a quizmill learning pack

Practice for the **AWS Certified AI Practitioner (AIF-C01)** exam
(65 questions, 90 min, pass 700/1000, scaled). This pack is a
**30-question sample** of the full 200-question bank: AI and ML
fundamentals, generative AI, applications of foundation models, responsible
AI, and security, compliance and governance for AI on AWS, across the Easy,
Hard and Very hard tiers, with the 30 concept cards the questions link to.

Live at <https://aws-aif.quizmill.dev>.

The sample and the full bank are **one pack with one id**, `aws-aif`. The
app's upgrade card (on Home, and in Settings → Packs) links to the full
bank, and a licence key entered under **Packs → Have a licence key?**
unlocks it **in place**: the 30 questions become the 200, under the same
pack and the same question ids, so every answer given in the sample
carries over.

> **If you used this app when it had all 200 questions** (before November
> 2026): your answers are kept. The app now shows the 30 sample questions,
> so your history on those 30 is in front of you as before; your answers to
> the other 170 stay stored, out of sight, and come back with their
> questions when you unlock the full bank.

> **Unofficial.** Not affiliated with or endorsed by AWS. This is community
> study material — every question is `reviewStatus: "draft"`; cross-check
> against the AWS docs and the official practice set.

## Where the questions come from

Every question is **original** (`source: "original"`), written for the full
bank from the public AWS documentation and the official exam guide — no
community banks, official practice questions or dumps. Each one's
`sourceRef` is the AWS doc page it rests on, and its explanation ends with
a "Read more" link to it. Every distractor carries a one-line note saying
why it is wrong, shown under it once the answer is checked. See
[`NOTICE.md`](NOTICE.md).

The 30 here are copied **verbatim, by id**, from the full bank, with the 30
concept cards in `concepts.json` they link to by `conceptId` (the full bank
has 52: Bedrock, prompt engineering, RAG, Guardrails, agents, SageMaker AI,
the governance services and more). Ids are the full bank's own
(`aws-aif-<tier>-d<domain>-<n>`), so every id in the sample exists in the
full bank.

## Categories & tiers

The categories are the exam guide's five content domains, with its
weights. The sample is drawn in proportion to them, and the full bank
follows the blueprint mix exactly:

| Domain | Weight | Sample (Easy / Hard / Very hard) | Full bank (Easy / Hard / Very hard) |
| --- | --- | --- | --- |
| 1 · Fundamentals of AI and ML | 20% | 6 (2 / 3 / 1) | 40 (16 / 16 / 8) |
| 2 · Fundamentals of Generative AI | 24% | 7 (3 / 3 / 1) | 48 (19 / 19 / 10) |
| 3 · Applications of Foundation Models | 28% | 9 (4 / 3 / 2) | 56 (22 / 22 / 12) |
| 4 · Guidelines for Responsible AI | 14% | 4 (2 / 1 / 1) | 28 (11 / 11 / 6) |
| 5 · Security, Compliance, and Governance for AI Solutions | 14% | 4 (1 / 2 / 1) | 28 (11 / 11 / 6) |
| **Total** | | **30 (12 / 12 / 6)** | **200 (79 / 79 / 42)** |

### How the sample was chosen

- **Every domain and every tier**, in roughly the full bank's mix: 12
  Easy, 12 Hard, 6 Very hard.
- **13 of the guide's 14 task statements** (1.1 – 5.2, tagged `task-N.N`)
  have at least one question; task 4.2 is in the full bank only, which
  covers all 14.
- **Both answer formats.** Three of the 30 are "Select TWO" (16 of the 200
  in the full bank).
- **One concept per question**: the 30 questions link to 30 different
  concept cards.

The sample is generated from the full bank: `pack.json`, `questions.json`,
`concepts.json` and `scenarios.json` here are written by CI and never edited
by hand (see `.derived.json`). A fix to one of these 30 is made in the full
bank and arrives here on merge; new questions go to the full bank only.
Report a problem with a question as an issue on this repo.

## Quality bar

The whole bank, these 30 included, passes the quizmill quality gate
(`quizmill/admin` evals, judged on `claude-fable-5-1`, rubric v1): every
question is solved blind and its key confirmed, the options are judged on
their own for giveaways, and each item is reviewed against the item-writing
rubric. Result over all 200 questions: 0 fatal, 0 major, 0 keys not
confirmed, 0 solve disagreements, minor flaws on 1% (ceiling 10%), and lint
clean of errors.

## Use it

Open <https://aws-aif.quizmill.dev>, or add it to any quizmill app from
the pack library (it is listed in the quizmill pack registry as
`aws-aif`). From the command line:

```
npx quizmill run ./aws-aif   # from a checkout of quizmill/packs-aws
npx quizmill run .        # http://localhost:3000
npx quizmill validate .   # schema + cross-reference checks
```

`.github/workflows/deploy.yml` builds the pack onto the quizmill engine
(static app in `aws-aif-app/`, named after the manifest id) and publishes
it to Cloudflare Pages (project `aws-aif`, custom domain
`aws-aif.quizmill.dev`) on every push to `main` and daily. `.github/workflows/ci.yml` validates every PR.
