// H2E // GLOSSARY BUILD
// Converts Lisa's Glossary export into src/data/glossary.json.
// Wording is copied exactly. Only Markdown escapes and layout are cleaned up.
//
// Inputs (both in canon/):
//   H2E - Glossary.md          Markdown export of the "H2E - Glossary" Google Doc
//   glossary-pseudocode.json   Pseudocode blocks read from the same Doc. The Markdown
//                              export flattens their line breaks, so the line layout
//                              comes from here. The script checks that the words match.
//
// Run after every new export:  node scripts/build-glossary.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const md = readFileSync(`${root}canon/H2E - Glossary.md`, "utf8");
const pseudocode = JSON.parse(readFileSync(`${root}canon/glossary-pseudocode.json`, "utf8"));

const SECTIONS = {
  "Realms": "realms",
  "Classes": "classes",
  "Objects": "objects",
  "Artifacts": "artifacts",
  "Functions": "functions",
  "Foundational Architecture": "foundational",
  "Terminology": "terminology",
};

const unescape = (s) => s.replace(/\\([\-+\[\]()*_#.!`])/g, "$1");
const cleanHeading = (s) => unescape(s.replace(/\{#.*?\}/g, "").replace(/\*\*/g, "")).trim();
const squash = (s) => s.replace(/\\-/g, "-").replace(/\s+/g, "");
const slug = (s) => s.toLowerCase().replace(/[()]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const sections = [];
const entries = [];
let section = null;
let entry = null;
let para = [];

function target() {
  if (entry) return entry.blocks;
  if (section) return (section.intro ??= []);
  return null;
}

function flush() {
  if (!para.length) return;
  const blocks = target();
  const lines = para;
  para = [];
  if (!blocks) return;

  if (lines[0].startsWith("|")) {
    const cell = lines[0].replace(/^\|\s?/, "").replace(/\s?\|$/, "");
    const block = pseudocode.find((p) => squash(p) === squash(unescape(cell)));
    if (!block) throw new Error(`No pseudocode in canon/glossary-pseudocode.json matches the block in "${entry?.title}". Re-read it from the Doc.`);
    blocks.push({ type: "pseudo", lines: block.split("\n") });
    return;
  }
  if (lines.every((l) => /^\*\s/.test(l))) {
    blocks.push({ type: "list", items: lines.map((l) => unescape(l.replace(/^\*\s+/, "").trimEnd())) });
    return;
  }
  blocks.push({ type: "p", lines: lines.map((l) => unescape(l.trimEnd())) });
}

const all = md.split("\n");
let started = false;
for (const raw of all) {
  const line = raw.replace(/\r$/, "");
  if (line.startsWith("[image")) break;

  const h1 = line.match(/^# (.*)$/);
  const h2 = line.match(/^#{2,3} (.*)$/);

  if (h1) {
    flush();
    const title = cleanHeading(h1[1]);
    if (!title) continue;
    if (title.startsWith("Appendix")) break; // The Appendix is not published.
    if (title === "Realms") started = true;
    if (!started) continue;
    const id = SECTIONS[title];
    if (!id) throw new Error(`Unknown Glossary section "${title}". Add it to SECTIONS.`);
    section = { id, title };
    sections.push(section);
    entry = null;
    continue;
  }
  if (!started) continue;

  if (h2) {
    flush();
    const title = cleanHeading(h2[1]);
    if (title === section.title) {
      entry = null; // Section introduction, e.g. "Objects".
      continue;
    }
    entry = { id: slug(title), title, section: section.id, blocks: [] };
    entries.push(entry);
    continue;
  }

  if (line.trim() === "" || line.trim() === "---" || line.startsWith("![")) {
    flush();
    continue;
  }
  if (/^\|\s*:?-+/.test(line)) continue; // Table divider under a pseudocode cell.
  para.push(line);
}
flush();

const used = entries.flatMap((e) => e.blocks.filter((b) => b.type === "pseudo")).length;
if (used !== pseudocode.length) {
  throw new Error(`Used ${used} of ${pseudocode.length} pseudocode blocks. Check canon/glossary-pseudocode.json.`);
}

writeFileSync(`${root}src/data/glossary.json`, JSON.stringify({ sections, entries }, null, 2) + "\n");
console.log(`Wrote ${entries.length} entries in ${sections.length} sections to src/data/glossary.json`);
