#!/usr/bin/env node
// List the packs in this repo as JSON: [{ dir, id, project, app }].
// Every top-level directory with a pack.json is a pack.
//
//   node scripts/plan.mjs                  every pack
//   node scripts/plan.mjs --since <sha>    packs whose pack files changed since <sha>
//   node scripts/plan.mjs --only <dir>     one pack
//
// `project` is the Cloudflare Pages project: the directory name, unless
// deploy.json says otherwise. `app` is where `quizmill build` writes.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const value = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : null);
const overrides = JSON.parse(fs.readFileSync(path.join(root, 'deploy.json'), 'utf8'));
const PACK_FILES = ['pack.json', 'questions.json', 'concepts.json', 'scenarios.json'];

let packs = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((e) => e.isDirectory() && !e.name.startsWith('.'))
  .filter((e) => fs.existsSync(path.join(root, e.name, 'pack.json')))
  .map((e) => {
    const { id } = JSON.parse(fs.readFileSync(path.join(root, e.name, 'pack.json'), 'utf8'));
    return { dir: e.name, id, project: overrides[e.name]?.project ?? e.name, app: `${id}-app` };
  })
  .sort((a, b) => a.dir.localeCompare(b.dir));

const only = value('--only');
if (only) {
  packs = packs.filter((p) => p.dir === only);
  if (packs.length === 0) {
    console.error(`no pack directory "${only}"`);
    process.exit(1);
  }
}

const since = value('--since');
if (since && !/^0+$/.test(since)) {
  let changed = null;
  try {
    changed = execFileSync('git', ['diff', '--name-only', since, 'HEAD'], { cwd: root, encoding: 'utf8' })
      .split('\n')
      .filter(Boolean);
  } catch {
    // Unknown base (force push, shallow clone): fall through and take every pack.
  }
  // A change to the deploy recipe itself redeploys everything.
  const all = changed?.some((f) => f === 'deploy.json' || f === '.github/workflows/deploy.yml');
  if (changed && !all) {
    packs = packs.filter((p) => PACK_FILES.some((f) => changed.includes(`${p.dir}/${f}`)));
  }
}

console.log(JSON.stringify(packs));
