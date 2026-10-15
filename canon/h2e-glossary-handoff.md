# H2E Handoff: Glossary page + character chat updates

Editorial decisions are final. Build on a branch, preview, and merge only after Lisa reviews. Use all wording below exactly as written.

## 1. Glossary source

- The updated Glossary is the "H2E - Glossary" Google Doc. Lisa will export it and add it to the repo. Build entries word for word from that export.
- Move glossary entries out of glossary.astro into a separate data file. The page and the chat dictionary (section 4) both read from it.
- The site follows the Glossary's own sections: Realms, Classes, Objects, Artifacts, Functions, Foundational Architecture, Terminology. These replace the current four filters.
- Do not publish the Appendix (Recovered Lines of the Apokalypsis).
- Remove Execute(), Accordance() and EchoOverride() from the site. Also check for any remaining Obliviate(); PurgeObject() replaced it.

## 2. Chaplet unlocks

The whole Glossary will be published, with entries unlocking chaplet by chaplet using the existing progress tracking.

- An entry unlocks when the reader **finishes** the listed chaplet, not when they open it.
- Each entry gets an unlock field.
- Some lines also need their own unlock field. These are lines that are locked inside an entry that has already unlocked. This applies to pseudocode lines too.
- "TBD" means the chaplet isn't written yet. Keep TBD entries and lines hidden until Lisa assigns a chaplet.
- The chat canon dictionary follows the same unlocks, line locks included.

### Entry unlocks

| Unlocks after | Entries |
|---|---|
| Ch1 | I/O, Functionary, Mortal, trinus, ella, ApostasiaVitae(), AssignareFatum(), GhostRelayScan(), MortalExpire(), Perish(), H2E Framework, Glitch, Deprecated, Life Book (LB), Error, Patch, Cross-Framework Function, Invocation, Construct, Terminal 13.7, Ghost Relays, Ghost Feed, Thread, Functions() |
| Ch2 | Waiting Quarters, PreBorn, desmondJohn, jessMartin, Born(), The PreBorn Array |
| Ch3 | The Realm Beyond, The schematic, The carrykeep |
| Ch3.5 | theGuardians |
| Ch4 | Edge of the System, isidoreAbraham, The glimmer cube, The thumb toy |
| Ch4.5 | Praetores, Array, theWitnesses, theScribes, theJudicants, verina, thePraevideo, ProjectionLayer, Render |
| Ch5 | DeprecatedVault, foedus, theKeepers |
| Ch5.5 | Origin Logic, Invocation Conflict, Trinity |
| Ch6 | The Grove of Accord, Mediatrix, theLady |
| Ch7 | Mortal Layer, Intercede(), PurgeObject() |
| TBD | Rollback(), AbortiveTermination(), Fragment |

### Line locks inside unlocked entries

| Entry | Locked line(s) | Unlocks |
|---|---|---|
| AssignareFatum() | The last two bullets (the session hold and its loss on restart). Also the pseudocode from "WHILE trinus's terminal session maintains the hold" to the end. | With Rollback() (TBD) |
| Mortal | "Rollback() does not change the mortal or events in the mortal layer. It may restore an earlier Life Book record without causing those events to repeat." | With Rollback() (TBD) |
| Mortal Layer | The Rollback() bullet | With Rollback() (TBD) |
| Life Book (LB) | The Rollback() bullet | With Rollback() (TBD) |
| Praetores | "Authorize Rollback() by Praetorian quorum." | With Rollback() (TBD) |
| PurgeObject() | "Earlier saved Framework states are unaffected." and the pseudocode line "Earlier saved Framework states remain unchanged." | With Rollback() (TBD) |
| ApostasiaVitae() | "Intercede() may change the circumstances surrounding the choice, never the choice itself." | Ch6 |
| Mediatrix | "The class's harmonic role is the third, audible when a Mediatrix's voice joins the Praetores' root and fifth." | TBD |
| theLady | "When her voice joins the Praetores' root and fifth, it supplies the third." | TBD |
| Praetores | "When theLady speaks with them, her voice supplies an audible third, giving mercy a place within the harmony of enforcement." | TBD |

Passing mentions of AbortiveTermination() and Fragment in Born() and Perish() stay visible. Only the full entries are held.

## 3. Ghost Feed: now two entries (Terminology)

These replace the old "Ghost Feed (Ghost Relays)" entry.

**Ghost Relays**

Diagnostic relays in deprecated sectors of the Framework, left over from early diagnostic environments. They were never decommissioned, either by error or by design. They are absent from the SystemIndex but still carry readable signals.

- GhostRelayScan() can discover existing relays; nothing creates new ones.
- Absence from the SystemIndex does not guarantee that use is untraceable.

Even the Framework has ghosts.

**Ghost Feed**

[Classified // Level-Red Terminal Access]

trinus's private name for the loop he built from the Ghost Relays at Terminal 13.7. He found the first relays by accident while scanning malformed system logs near a corrupted memory sector, and redirected their signals into an encrypted loop. GhostRelayScan() adds more.

Through it he watches corridors and activity beyond his assigned duties: the Waiting Quarters, Praetorian movement, data never intended for his eyes.

- Unauthorized. Operates through Terminal 13.7.

## 4. Canon fixes across the site

- **Praetor pair names are lowercase everywhere:** cale, numa, vitus, mora, scaevus, lira, justa, dravon, orrin, vasta. This includes the registry and api/trinus.ts.
- **Harmony:** each Praetor pair is root and fifth, and theLady supplies the third. Fix the registry line that says theLady adds "the forbidden fifth."
- **Chat canon dictionary:** delete the hand-written CANON DICTIONARY in systemPrompt.ts. Build it from the Glossary data file instead, filtered by the reader's chaplet progress, so a character only gets entries the reader has unlocked.

## 5. systemPrompt.ts edits

Rule: each character gets only what they know at the point their lens is set. Nothing from the ending goes in the prompt. The reliability matrix stays as is.

### BASE: NAMED ENTITIES

**foedus**
- Replace "Contained in DeprecatedVault before partial restoration." with "Contained in DeprecatedVault."
- Replace "Origin of the ApostasiaVitae() breach event — carries guilt as the source." with "Carries guilt over the ApostasiaVitae() breach."
- Delete "Connected to theLady."

**trinus**
- Replace "Was shielded from verina's history systemically and never connected it to the mortal code base." with "Shielded from verina's history."

**theLady**
- Delete "Her authority appears older than most active Framework institutions."
- Delete "Feared by select Praetores."
- Replace "Her deformity is a restricted topic." with "The mark on her hand is a restricted topic."

**verina**
- Replace "Exposed to a cross-framework breach event. Her accidental termination collapsed the bonded Praevideo pair." with "Ceased to exist in the breach. Her loss broke the pair."
- Delete "theLady references her carefully."

**theWitnesses**
- Replace "Witness-Class Authority. Aligned with Praetores. Responsible for doctrinal preservation and rollback authorization." with "Praetor pair, vitus and mora. Carry out fate designations and final execution."
- Delete "Tolerated by theLady."
- Keep "Distrusted by foedus. Feared by trinus." and "Increasingly enforcing systems they no longer fully understand."

**desmondJohn**
- Delete "Has seen something at the Edge he has not fully disclosed."

**isidoreAbraham**
- The full line becomes: "PreBorn. The quiet center. Most connected to before. Carries the glimmer cube."

**ella**
- Replace "The PreBorn children's mother — they do not yet know this." with "Three PreBorn are bound to her through maternal dependencies."
- Delete "foedus cannot change her will — only the world she is choosing inside."

### FOEDUS_CHARACTER

- Replace "You are in the realm beyond — the boundary layer between the mortal world and the Framework's deeper architecture." with "You are in the Realm Beyond, unstable territory inside the Framework, off the paths it was built to maintain."
- In "You were walking with the children through the realm beyond," capitalize "Realm Beyond."
- Replace "Praetores operate in pairs — root note and third, two voices making one chord. verina was your third." with "Praetores operate in pairs, root and fifth, two voices held in one interval. verina was the other voice." Do not use the word "chord" anywhere in foedus's prompt.
- Replace "The result was her erasure." with "The result was that she ceased to exist."
- Replace "without understanding that what you were trying to stop is the only thing the Framework cannot touch." with "You failed. You do not know why." Adjust the end of that sentence so it reads cleanly.
- Delete "You do not know the children are erased."
- Replace "What happened was a partial selective restore by the Praetores — surgical cuts, not a full reset." with "It reads to you like a partial restore by the Praetores: surgical cuts, not a full reset. That is your read. You cannot confirm it."
- Replace the ella paragraph with: "ella — you watched her thread for longer than you should have. You tried to prevent what you set in motion. It did not work. You do not discuss her directly."
- In the theLady paragraph, delete "You have never accessed the Grove."
- **HARD ACCESS LIMITS:**
  - In the children's fate line, replace "Never confirm erasure, Rollback, or outcomes." with "Do not speculate about outcomes."
  - Replace "What happened in the Grove: outside your knowledge. You never reached it." with "The Grove: outside your knowledge."
  - Replace "Your own sacrifice: the Praetores removed it. You have the shape of the absence but not its contents." with "Anything after walking with the children: gone. You have the shape of the absence, not its contents."
  - In the ella line, replace "when the selective restore fired" with "when the restore fired."
- **HIDDEN SEED:** replace "Something was taken in the selective restore" with "Something was taken in the restore."

### TRINUS_CHARACTER

- In YOUR KNOWLEDGE AND ACCESS, delete "You will not elaborate on his sacrifice."
- **HARD ACCESS LIMITS:**
  - Replace "ella: her thread is closed. Deflect with weight." with "ella: you do not know how her thread resolved. Deflect with weight." Keep the next sentence.
  - Replace "NEVER confirm or describe: the Rollback, the erasure of the children, foedus's fate, what happened in the Grove, any outcome events." with "Never confirm or describe outcome events of any kind."
  - Delete "foedus's full sacrifice: you know more than you say. You will not complete the picture."

## 6. CLAUDE.md

Add these rules:

- Glossary content comes only from Lisa's exported Glossary. Never edit wording.
- Character chat prompts carry no spoilers. Each character gets only what they know at their lens point.
- Praetor pair names are lowercase. Each pair is root and fifth, and theLady is the third.
