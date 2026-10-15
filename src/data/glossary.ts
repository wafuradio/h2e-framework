// H2E // GLOSSARY DATA
// The one place the site reads the Glossary from. Used by src/pages/glossary.astro
// and by the chat canon dictionary in src/pages/api/systemPrompt.ts.
//
// glossary.json is generated from canon/ by scripts/build-glossary.mjs (wording).
// glossary-unlocks.ts says when each entry and locked line becomes visible.
// Mismatches between the two fail the build rather than showing locked text.

import raw from "./glossary.json" with { type: "json" };
import { ENTRY_UNLOCKS, LINE_LOCKS } from "./glossary-unlocks.ts";
import { filterEntry, isUnlockedAt, type Block, type Entry, type Line, type Section, type Unlock } from "./glossary-visibility.ts";

type RawBlock = { type: "p" | "pseudo"; lines: string[] } | { type: "list"; items: string[] };
type RawEntry = { id: string; title: string; section: string; blocks: RawBlock[] };
type RawSection = { id: string; title: string; intro?: RawBlock[] };

const normalize = (s: string) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');

const entryUnlock = new Map<string, Unlock>();
for (const [unlock, titles] of Object.entries(ENTRY_UNLOCKS) as [Unlock, string[]][]) {
  for (const title of titles) entryUnlock.set(title, unlock);
}

function lockLine(text: string, entry: string, matches: Map<number, number>): Line {
  let line: Line = [{ t: text }];
  LINE_LOCKS.forEach((lock, i) => {
    if (lock.entry !== entry || !("text" in lock)) return;
    const next: Line = [];
    for (const seg of line) {
      const at = seg.u ? -1 : normalize(seg.t).indexOf(normalize(lock.text));
      if (at < 0) {
        next.push(seg);
        continue;
      }
      matches.set(i, (matches.get(i) ?? 0) + 1);
      const end = at + lock.text.length;
      if (at > 0) next.push({ t: seg.t.slice(0, at) });
      next.push({ t: seg.t.slice(at, end), u: lock.unlock });
      if (end < seg.t.length) next.push({ t: seg.t.slice(end) });
    }
    line = next;
  });
  return line;
}

function lockBlock(block: RawBlock, entry: string, matches: Map<number, number>): Block {
  if (block.type === "list") {
    return { type: "list", items: block.items.map((t) => lockLine(t, entry, matches)) };
  }
  const lines = block.lines.map((t) => lockLine(t, entry, matches));
  if (block.type === "pseudo") {
    LINE_LOCKS.forEach((lock, i) => {
      if (lock.entry !== entry || !("fromLine" in lock)) return;
      const from = block.lines.findIndex((t) => normalize(t.trim()).startsWith(normalize(lock.fromLine)));
      if (from < 0) return;
      matches.set(i, (matches.get(i) ?? 0) + 1);
      for (let n = from; n < lines.length; n++) lines[n] = [{ t: block.lines[n], u: lock.unlock }];
    });
  }
  return { type: block.type, lines };
}

function build() {
  const data = raw as { sections: RawSection[]; entries: RawEntry[] };
  const matches = new Map<number, number>();
  const problems: string[] = [];

  const entries: Entry[] = data.entries.map((e) => {
    const unlock = entryUnlock.get(e.title);
    if (!unlock) problems.push(`"${e.title}" has no unlock in glossary-unlocks.ts`);
    return { ...e, unlock: unlock ?? "TBD", blocks: e.blocks.map((b) => lockBlock(b, e.title, matches)) };
  });

  for (const title of entryUnlock.keys()) {
    if (!entries.some((e) => e.title === title)) problems.push(`Unlock listed for "${title}", but the Glossary has no such entry`);
  }
  LINE_LOCKS.forEach((lock, i) => {
    const n = matches.get(i) ?? 0;
    const what = "text" in lock ? lock.text : lock.fromLine;
    if (n !== 1) problems.push(`Line lock in "${lock.entry}" matched ${n} times (needs exactly 1): "${what}"`);
  });
  if (problems.length) throw new Error(`Glossary unlocks don't match the Glossary:\n- ${problems.join("\n- ")}`);

  const sections: Section[] = data.sections.map((s) => ({
    id: s.id,
    title: s.title,
    intro: s.intro?.map((b) => ("lines" in b ? b.lines : b.items).map((t) => [{ t }])),
  }));
  return { sections, entries };
}

export const GLOSSARY = build();

// ---------------------------------------------------------------------------
// Visibility
// ---------------------------------------------------------------------------

/** Everything except TBD content. This is all that is ever sent to the browser. */
export function publicGlossary() {
  const notTBD = (u: Unlock | undefined) => u !== "TBD";
  return {
    sections: GLOSSARY.sections,
    entries: GLOSSARY.entries.map((e) => filterEntry(e, notTBD)).filter((e): e is Entry => e !== null),
  };
}

// ---------------------------------------------------------------------------
// Chat canon dictionary
// ---------------------------------------------------------------------------

const plain = (line: Line) => line.map((s) => s.t).join("").replace(/\*\*|\*/g, "").replace(/\s{2,}/g, " ").trim();

/**
 * The canon dictionary for a chat whose lens is set at the end of `chaplet`.
 * Only entries and lines the reader has unlocked by finishing that chaplet.
 */
export function canonDictionary(chaplet: string): string {
  const open = (u: Unlock | undefined) => isUnlockedAt(u, chaplet);
  const out: string[] = [];
  for (const e of GLOSSARY.entries) {
    const visible = filterEntry(e, open);
    if (!visible) continue;
    const lines: string[] = [];
    for (const b of visible.blocks) {
      if (b.type === "list") lines.push(...b.items.map((l) => `- ${plain(l)}`));
      else if (b.type === "pseudo") lines.push(...b.lines.map((l) => l.map((s) => s.t).join("")).filter((t) => t.trim()));
      else lines.push(...b.lines.map(plain).filter(Boolean));
    }
    out.push(`${e.title}\n${lines.join("\n")}`);
  }
  return out.join("\n\n");
}
