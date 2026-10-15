# CLAUDE.md

## Glossary

- **Glossary content comes only from Lisa's exported Glossary. Never edit wording.** The export lives in `canon/H2E - Glossary.md`; pseudocode line breaks come from `canon/glossary-pseudocode.json`, read from the "H2E - Glossary" Google Doc. Run `node scripts/build-glossary.mjs` to regenerate `src/data/glossary.json`. Don't hand-edit that file.
- Unlocks (which chaplet opens each entry or locked line) live in `src/data/glossary-unlocks.ts`. "TBD" content never reaches the browser or the chat.
- The glossary page and the chat canon dictionary both read from `src/data/glossary.ts`.

## Character chat

- **Character chat prompts carry no spoilers.** Each character gets only what they know at their lens point.
- The prompts live in `src/pages/api/systemPrompt.ts`. The canon dictionary there is built from the Glossary and filtered to the chaplet the lens is set at.

## Story text

- **The manuscript is the source of truth for story text.** The site never edits chaplet prose on its own. Changes start in the manuscript ("H2E - Manuscript" in Google Drive) and are copied over.
- **Praetor pair names are lowercase:** cale, numa, vitus, mora, scaevus, lira, justa, dravon, orrin, vasta, foedus, verina. That holds even at the start of a sentence.
- **Each pair is root and fifth, and theLady is the third.**
- **Character names are lowerCamelCase as written** (desmondJohn, jessMartin, isidoreAbraham, theLady). Don't "correct" their capitalization.
