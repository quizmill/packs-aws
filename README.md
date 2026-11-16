# packs-aws — quizmill practice packs for the AWS certifications

Every directory here is one [quizmill](https://github.com/quizmill/quizmill)
learning pack, deployed as its own installable practice app.

| Directory | Exam | App | What it is |
|---|---|---|---|
| [`aws-clf`](aws-clf) | Cloud Practitioner (CLF-C02) | [aws-clf.quizmill.dev](https://aws-clf.quizmill.dev) | 30-question sample of the paid bank |
| [`aws-genai`](aws-genai) | Generative AI Developer – Professional (AIP-C01) | [aws-genai.quizmill.dev](https://aws-genai.quizmill.dev) | 30-question sample of the paid bank |
| [`aws-saa`](aws-saa) | Solutions Architect – Associate (SAA-C03) | | free bank |
| [`aws-aif`](aws-aif) | AI Practitioner (AIF-C01) | [aws-aif.quizmill.dev](https://aws-aif.quizmill.dev) | free bank |
| [`aws-arch-pro`](aws-arch-pro) | Solutions Architect – Professional (SAP-C02) | [aws-arch-pro.quizmill.dev](https://aws-arch-pro.quizmill.dev) | free bank |

These packs are unofficial and not affiliated with or endorsed by AWS. Each
pack carries its own `README.md`, and its own `LICENSE` and `NOTICE.md`
where it has them.

## Use a pack

```
git clone https://github.com/quizmill/packs-aws && cd packs-aws
npx quizmill run aws-saa        # http://localhost:3000
npx quizmill validate aws-saa   # schema + cross-reference checks
```

## Two kinds of pack

- **Free banks** (`aws-saa`, `aws-aif`, `aws-arch-pro`) are edited here.
  Issues and pull requests are welcome.
- **Samples** (`aws-clf`, `aws-genai`) are generated. Their `pack.json`,
  `questions.json`, `concepts.json` and `scenarios.json` are written by CI
  from the paid bank, so a pull request that changes them fails CI. Each
  has a `.derived.json` naming the generated files. Report a problem with a
  sample question as an issue here and it is fixed at the source.

## Add a pack

Create a directory named after the pack id with a `pack.json` and
`questions.json`, and push to `main`. CI validates it and the deploy
workflow creates the Cloudflare Pages project `<directory>` and publishes
the app. There is no list of packs to update: every directory with a
`pack.json` is a pack. Attach the `<directory>.quizmill.dev` domain to the
new Pages project in Cloudflare once.

`deploy.json` only lists packs whose Pages project has a different name
from their directory.

## History

This repo combines the former `pack-aws-clf`, `pack-aws-genai`,
`pack-aws-saa`, `pack-aws-aif` and `pack-aws-arch-pro` repos, with their
commit history kept under each directory (`git log -- aws-saa`).
