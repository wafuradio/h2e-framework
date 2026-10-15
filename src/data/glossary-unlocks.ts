// H2E // GLOSSARY UNLOCKS
// When each Glossary entry, and each locked line inside an entry, becomes visible.
// An unlock is the chaplet the reader must FINISH. "TBD" means the chaplet isn't
// written yet: TBD content never leaves the server and never reaches the chat.
//
// Keys match the reader's progress keys in localStorage (h2e_<key>_completed).
// Edit this file to change unlocks. The wording itself comes from canon/ via
// scripts/build-glossary.mjs. Never edit wording here.

import type { Unlock } from "./glossary-visibility.ts";

export const ENTRY_UNLOCKS: Record<Unlock, string[]> = {
  chaplet1: [
    "I/O", "Functionary", "Mortal", "trinus", "ella", "ApostasiaVitae()", "AssignareFatum()",
    "GhostRelayScan()", "MortalExpire()", "Perish()", "H2E Framework", "Glitch", "Deprecated",
    "Life Book (LB)", "Error", "Patch", "Cross-Framework Function", "Invocation", "Construct",
    "Terminal 13.7", "Ghost Relays", "Ghost Feed", "Thread", "Functions()",
  ],
  chaplet2: ["Waiting Quarters", "PreBorn", "desmondJohn", "jessMartin", "Born()", "The PreBorn Array"],
  chaplet3: ["The Realm Beyond", "The schematic", "The carrykeep"],
  chaplet35: ["theGuardians"],
  chaplet4: ["Edge of the System", "isidoreAbraham", "The glimmer cube", "The thumb toy"],
  chaplet45: [
    "Praetores", "Array", "theWitnesses", "theScribes", "theJudicants", "verina",
    "thePraevideo", "ProjectionLayer", "Render",
  ],
  chaplet5: ["DeprecatedVault", "foedus", "theKeepers"],
  chaplet55: ["Origin Logic", "Invocation Conflict", "Trinity"],
  chaplet6: ["The Grove of Accord", "Mediatrix", "theLady"],
  chaplet7: ["Mortal Layer", "Intercede()", "PurgeObject()"],
  TBD: ["Rollback()", "AbortiveTermination()", "Fragment"],
};

// Locked text inside an entry that has already unlocked.
//   text:      the exact words to hide (a sentence, a bullet, or a pseudocode line).
//              Straight and curly quotes are treated as the same.
//   fromLine:  pseudocode only. Hides the line starting with these words and every line after it.
// Each lock must match exactly once, or the build fails.
export type LineLock = { entry: string; unlock: Unlock } & ({ text: string } | { fromLine: string });

export const LINE_LOCKS: LineLock[] = [
  // Unlock with Rollback() (TBD)
  { entry: "AssignareFatum()", unlock: "TBD", text: "trinus can delay submission through a hold maintained by his active terminal session." },
  { entry: "AssignareFatum()", unlock: "TBD", text: "If the session ends during a Framework restart, the hold is lost. Recovery automatically submits the pending list." },
  { entry: "AssignareFatum()", unlock: "TBD", fromLine: "WHILE trinus's terminal session maintains the hold:" },
  { entry: "Mortal", unlock: "TBD", text: "Rollback() does not change the mortal or events in the mortal layer. It may restore an earlier Life Book record without causing those events to repeat." },
  { entry: "Mortal Layer", unlock: "TBD", text: "**Rollback():** Does not change mortals or events in this layer, even when Framework records return to an earlier state." },
  { entry: "Life Book (LB)", unlock: "TBD", text: "Rollback() may restore an earlier version of the record without changing events in the mortal layer." },
  { entry: "Praetores", unlock: "TBD", text: "Authorize Rollback() by Praetorian quorum." },
  { entry: "PurgeObject()", unlock: "TBD", text: "Earlier saved Framework states are unaffected." },
  { entry: "PurgeObject()", unlock: "TBD", text: "// Earlier saved Framework states remain unchanged." },

  // Chaplet 6
  { entry: "ApostasiaVitae()", unlock: "chaplet6", text: "Intercede() may change the circumstances surrounding the choice, never the choice itself." },

  // The third (TBD)
  { entry: "Mediatrix", unlock: "TBD", text: "The class's harmonic role is the third, audible when a Mediatrix's voice joins the Praetores' root and fifth." },
  { entry: "theLady", unlock: "TBD", text: "When her voice joins the Praetores' root and fifth, it supplies the third." },
  { entry: "Praetores", unlock: "TBD", text: "When theLady speaks with them, her voice supplies an audible third, giving mercy a place within the harmony of enforcement." },
];
