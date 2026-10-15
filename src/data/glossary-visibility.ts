// H2E // GLOSSARY VISIBILITY
// Types and unlock rules shared by the server and the glossary page's browser script.
// Holds no Glossary text, so importing it in the browser can't leak locked content.

export type Unlock =
  | "chaplet1" | "chaplet2" | "chaplet3" | "chaplet35" | "chaplet4" | "chaplet45"
  | "chaplet5" | "chaplet55" | "chaplet6" | "chaplet7" | "TBD";

// Reading order. A reader who has finished a chaplet has finished everything before it.
export const CHAPLET_ORDER = [
  "prologue", "chaplet1", "chaplet2", "chaplet25", "chaplet3", "chaplet35",
  "chaplet4", "chaplet45", "chaplet5", "chaplet55", "chaplet6", "chaplet7", "chaplet8",
];

// A line is split into segments so a single locked sentence can be hidden.
// `u` is set only on segments with their own lock.
export type Segment = { t: string; u?: Unlock };
export type Line = Segment[];
export type Block =
  | { type: "p"; lines: Line[] }
  | { type: "list"; items: Line[] }
  | { type: "pseudo"; lines: Line[] };
export type Entry = { id: string; title: string; section: string; unlock: Unlock; blocks: Block[] };
export type Section = { id: string; title: string; intro?: Line[][] };

/** True when finishing `chaplet` means `unlock` is open. TBD is never open. */
export function isUnlockedAt(unlock: Unlock | undefined, chaplet: string): boolean {
  if (!unlock) return true;
  if (unlock === "TBD") return false;
  const reached = CHAPLET_ORDER.indexOf(chaplet);
  return reached >= 0 && CHAPLET_ORDER.indexOf(unlock) <= reached;
}

/** Keeps only what `open` allows. Lines and blocks emptied by a lock disappear. */
export function filterEntry(entry: Entry, open: (u: Unlock | undefined) => boolean): Entry | null {
  if (!open(entry.unlock)) return null;
  const keep = (line: Line): Line | null => {
    const visible = line.filter((s) => open(s.u));
    return visible.length || !line.every((s) => s.u) ? visible : null;
  };
  const blocks: Block[] = [];
  for (const b of entry.blocks) {
    if (b.type === "list") {
      const items = b.items.map(keep).filter((l): l is Line => l !== null);
      if (items.length) blocks.push({ type: "list", items });
    } else {
      const lines = b.lines.map(keep).filter((l): l is Line => l !== null);
      // A lock at the end of pseudocode leaves the blank line before it behind.
      while (lines.length && lines[lines.length - 1].every((s) => !s.t.trim())) lines.pop();
      if (lines.length) blocks.push({ type: b.type, lines });
    }
  }
  return { ...entry, blocks };
}
