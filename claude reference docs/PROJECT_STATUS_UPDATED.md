# H2E Framework - Project Status
*Last Updated: January 7, 2026 - 10:15 AM*

---

## ðŸŒ Live Site Information

- **Primary URL:** https://h2eframework.com (custom domain)
- **Netlify URL:** https://inquisitive-kringle-70d06b.netlify.app
- **Status:** LIVE âœ“
- **GitHub Repo:** https://github.com/wafuradio/h2e-framework

---

## ðŸ› ï¸ Tech Stack

### Core Technologies
- **Astro** (v5.16.6) - Static site framework
- **Tailwind CSS** - Styling framework
- **Node.js** (v24.12.0) - Runtime environment
- **npm** (v11.6.2) - Package manager

### Deployment & Hosting
- **Netlify** - Hosting platform (auto-deploys from GitHub)
- **GoDaddy** - Domain registrar (DNS points to Netlify)
- **GitHub** - Version control & deployment trigger

### Development Environment
- **VS Code** - Code editor
- **Terminal** - Command line interface
- **Git** - Version control

---

## ðŸ“‚ Current Site Structure

```
h2e-framework/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ pages/
â”‚   â”‚   â”œâ”€â”€ index.astro          // Homepage (terminal intro)
â”‚   â”‚   â”œâ”€â”€ terminal.astro       // Full interactive interface
â”‚   â”‚   â”œâ”€â”€ glossary.astro       // NEW - Glossary (placeholder)
â”‚   â”‚   â””â”€â”€ registry.astro       // NEW - Object Registry
â”‚   â””â”€â”€ styles/
â”‚       â””â”€â”€ global.css           // Tailwind imports
â”œâ”€â”€ public/
â”‚   â”œâ”€â”€ sounds/                  // Audio files
â”‚   â”‚   â”œâ”€â”€ ambient-server-room.mp3
â”‚   â”‚   â”œâ”€â”€ boot-sequence.mp3
â”‚   â”‚   â”œâ”€â”€ prologue-narration.mp3
â”‚   â”‚   â””â”€â”€ prologue-ambience.mp3
â”‚   â””â”€â”€ images/
â”‚       â”œâ”€â”€ characters/          // Character portraits
â”‚       â”‚   â”œâ”€â”€ desmondJohn.png
â”‚       â”‚   â”œâ”€â”€ jessMartin.png
â”‚       â”‚   â”œâ”€â”€ isidoreAbraham.png
â”‚       â”‚   â””â”€â”€ trinus.png
â”‚       â””â”€â”€ ghost-feed/          // NEW - Realm visuals (placeholder)
â”œâ”€â”€ H2E_INTERFACE_RULES.md       // Canonical design principles
â”œâ”€â”€ astro.config.mjs
â”œâ”€â”€ tailwind.config.mjs
â””â”€â”€ package.json
```

---

## âœ… Pages Built

### 1. Homepage (`/`)
**Purpose:** Landing page with story hook  
**Features:**
- Black terminal aesthetic
- Green "// H2E Framework" header
- Terminal window with three colored dots (red/yellow/green)
- Story premise (3-sentence version)
- "ACCESS FRAMEWORK" button â†’ links to `/terminal`
- Footer

**Content:**
> "What if existence is simply a program? Before he is born, desmondJohn is caught in a system that does not allow exceptions. Someone inside it knows better."

---

### 2. Terminal Interface (`/terminal`)
**Purpose:** Main story navigation and interactive experience  
**Status:** Phase 2A Complete, Phase 2B In Progress

**Features:**

#### Boot Sequence (6 seconds)
- "H2E FRAMEWORK v3.2"
- "TERMINAL 13.7 // I/O BORDER NODE"
- Authentication animation
- Progress bar loading

#### Audio Gate Screen
- "ENTER TERMINAL" button appears after boot
- User clicks â†’ Unlocks audio permission
- Ambient server room sound starts looping
- Necessary for browser autoplay restrictions

#### Priority Alert Screen
- 3 PreBorn entities listed (desmondJohn, jessMartin, isidoreAbraham)
- "Track Their Signal" button â†’ jumps to story
- "Access Full Logs" button â†’ reveals full interface

#### Full Interface
**Left Panel - Story Archives:**
- Prologue: Confessions âœ“ (Full dual-mode access)
- Chaplet 1: The Grit of I/O âœ“ (Preview available)
- Chaplets 2-5 (coming soon)

**Right Panel - Reference Materials:**
- Object Registry (links to `/registry`)
- Glossary (links to `/glossary`)
- System Logs (modal placeholder)

**System Control:**
- Sound toggle (ON/OFF with localStorage persistence)
- Volume control (inline with sound toggle)
- Return to index link

#### Interactive Features

**ðŸŽ§ Streamlined Audio Player:**
- Big centered â–¶ï¸ play button
- iTunes-style draggable scrubber
- Progress bar with time display (e.g., "0:31 / 3:24")
- Inline play/pause button after playback starts
- Apple-style volume control (click speaker to reveal slider)
- Status: Framework ready, Prologue audio complete

**ðŸ“– Read Mode:**
- Terminal-style text viewer
- Gray header bar with colored dots (â—â—â—)
- Command prompt: `$ cat PROLOGUE_Confessions.txt`
- White text on black background
- Red dot closes window
- Scrollable content

**Character Profiles (Modal):**
- Full character dossier with:
  - Character portrait image (PNG, 3x5" proportions)
  - Name, class, status, age
  - Description
  - Inline attributes
  - Clean terminal-style formatting

**Hidden Terminal (Backtick Key):**
- Press ` to activate
- Commands implemented:
  - `help` - Shows available commands
  - `clear` - Clears output
  - `/ghost_feed [1-6]` - Access observation relays
  - `/echo foedus` - Search deprecated archives (placeholder)
- Command history with localStorage (up/down arrows)
- Escape key closes terminal

**ðŸŒ Ghost Feed Modal (Phase 2A - COMPLETE):**
- Terminal command: `/ghost_feed` or `/ghost_feed [1-6]`
- Custom terminal-style dropdown with 6 realms:
  1. I/O (92% OPTIMAL)
  2. Waiting Quarters (78% STABLE)
  3. The Array (65% MONITORED - PRAETORES ACTIVE)
  4. Grove of Accord (54% INTERFERENCE DETECTED)
  5. Realm Beyond (31% DEGRADED)
  6. Edge of System (12% CRITICAL)
- Dynamic signal quality bars
- Status messages per realm
- Placeholder system ready for animated GIFs
- File structure: `/public/images/ghost-feed/[realm-name].gif`

---

### 3. **NEW** - Glossary Page (`/glossary`)
**Purpose:** System terminology database  
**Status:** Placeholder page ready for content

**Features:**
- Terminal-styled layout
- "Coming Soon" message
- Back link to terminal
- Structure ready for future glossary entries
- Commented example format included

**To Do:**
- Migrate glossary content from manuscript
- Add search/filter functionality
- Organize by category (Functions, Classes, Terminology)

---

### 4. **NEW** - Object Registry Page (`/registry`)
**Purpose:** Character/entity database  
**Status:** Functional with 7 characters, ready to expand

**Features:**
- Grid layout with character cards
- 4 sections:
  - PreBorn Entities (desmondJohn, jessMartin, isidoreAbraham)
  - System Functionaries (trinus)
  - Deprecated/Restricted (foedus, theLady)
  - Enforcers (thePraetores)
- Each card shows: Name, Status, Class, Description
- Click handlers ready (currently alerts)
- Terminal-styled aesthetic

**To Do:**
- Connect cards to character profile modal system
- Add more characters (individual Praetores, ella, etc.)
- Add character images to cards

---

## ðŸŽ¨ Design System

### Color Palette
```css
Background:       #0a0a0a (almost black)
Primary text:     #00ff41 (Matrix green)
Read mode text:   #ffffff (white)
Quotes:           #aaaaaa (gray italic)
Header bar:       #3a4a5a (slate gray)
Error/Alert:      #ff4444 (red)
Warning:          #ffaa00 (orange)
Accent:           #00d9ff (cyan)
Muted:            #888888 (gray)

Colored dots:
- Red:            #ff5f56 (clickable - closes window)
- Yellow:         #ffbd2e (decorative)
- Green:          #27c93f (decorative)
```

### Typography
- **Primary:** 'Share Tech Mono' (Google Fonts)
- **Secondary:** 'Courier Prime' (Google Fonts)
- **Fallback:** 'Courier New', monospace

### Visual Effects
- Scanline animation on header
- Pulsing borders on alerts
- Glitch effect on corrupted elements
- Hover states with glow effects
- Float animation on ghost feed

---

## ðŸ“ Content Status

### Full Content Available
âœ“ **Prologue: Confessions**
- Complete text
- Available in both Audio and Read modes
- Formatted with line breaks
- Italicized opening quote
- ElevenLabs narration (placeholder for Izaak's final recording)
- Ambient server room sound

âœ“ **Chaplet 1: The Grit of I/O**
- Opening paragraphs
- Establishes Terminal 13.7
- Introduces trinus
- Preview only - full text pending

### Preview/Placeholder
â³ Chaplets 2-5 (listed but not full content)

---

## ðŸ‘¥ Character Profiles (Complete)

All 7 characters have full profiles with attributes:

1. **desmondJohn** (PreBorn, 13 cycles) âœ“ Image added
2. **jessMartin** (PreBorn, 10 cycles) âœ“ Image added
3. **isidoreAbraham** (PreBorn, 7 cycles) âœ“ Image added
4. **trinus** (Functionary) âœ“ Image added
5. **foedus** (Deprecated Praetor) - Image ready to add
6. **theLady** (Mediatrix) - Image ready to add
7. **thePraetores** (Enforcers) - Image ready to add

**Character images auto-load** - Just drop PNG files in `/public/images/characters/` with correct filename

---

## ðŸ”§ Major Story Reveals & Decisions

### Confirmed Canon
âœ“ **trinus is Christ** - Deprecated Trinity class, memory-wiped, recycled into functionary  
âœ“ **foedus gets erased** - Punished for helping the children (Chaplet 9)  
âœ“ **foedus returns** - Rollback restores him; he doesn't remember being deleted (Chaplet 13)  
âœ“ **The Framework is failing** - Built by a deprecated Creator who abandoned it  
âœ“ **ApostasiaVitae() is suicide** - Forbidden function from foreign system (Hell Framework)  
âœ“ **Mother = ella** - Her suicide triggers PreBorn erasure  

### Still Being Decided
ðŸ¤” **Children's final fate:**
   - Option A: Born with Trisomy 21 (Down syndrome as mutation cost)
   - Option B: Stuck as anomaly in the system while Praetores try to correct
   - Current lean: Leave unresolved in Book 1

ðŸ¤” **Ella's outcome:**
   - Stranger at checkout interrupts her suicide momentum
   - She lives, but we don't know if permanently or temporarily

---

## ðŸŽµ Audio Production Notes

**Studio Available:** Full recording studio ready for:
- Character voice profiles
- Praetores harmonics (root + fifth intervals)
- theLady's "disruptive third" note
- Terminal ambient sounds
- System sound effects

**Current Audio Files:**
- âœ“ `ambient-server-room.mp3` (2-3min loop, 44.1kHz, 128-192kbps, -18dB mix)
- âœ“ `prologue-narration.mp3` (~3-4min, 192kbps, ElevenLabs placeholder)
- ðŸ”² `boot-sequence.mp3` (planned - 6sec, matches visual boot animation)
- ðŸ”² `prologue-ambience.mp3` (planned - same duration, -20dB, decay sounds)

**Location:** `/public/sounds/`

**Status:** Framework fully implemented and working, awaiting final narration from Izaak

**ElevenLabs Settings Used:**
- Speed: Slightly slower than default
- Stability: 70%
- Similarity: 80%
- Style Exaggeration: 25-30%
- Speaker Boost: ON

---

## ðŸ”„ Workflow Established

### Local Development
1. Navigate to project: `cd Desktop/h2e-framework`
2. Start dev server: `npm run dev`
3. Open VS Code: `code .`
4. Edit files in `src/pages/`
5. Preview at `http://localhost:4321/`
6. Stop server: `Ctrl+C`

### Deployment
1. Make changes in VS Code
2. Save files
3. Test locally with `npm run dev`
4. Stop dev server (`Ctrl+C`)
5. Stage changes: `git add .`
6. Commit: `git commit -m "Description of changes"`
7. Push to GitHub: `git push`
8. Netlify auto-deploys (1-2 minutes)
9. Check live site: https://h2eframework.com

### Cache Management (When Needed)
If code changes aren't appearing:
```bash
cd Desktop/h2e-framework
rm -rf .astro
rm -rf dist
rm -rf node_modules/.vite
npm run dev
```

Then test in **incognito/private browser window** at `http://localhost:4321`

---

## âš ï¸ Known Issues

### FIXED âœ“
- ~~Tailwind CSS not loading~~
- ~~JavaScript onclick not working~~
- ~~DNS propagation~~
- ~~Browser caching issues~~
- ~~CSS inheritance overriding styles~~
- ~~Close button appearing on Read mode~~
- ~~Audio player too many clicks~~
- ~~Distracting cycling text in audio player~~
- ~~No progress indicator during playback~~
- ~~Can't scrub through audio~~
- ~~Play button not aligned with progress bar~~
- ~~Character profile placeholder images~~
- ~~Attributes displaying on separate lines~~

### Current Issues - Phase 2B

**ðŸ”² Ghost Feed Keyboard Navigation (IN PROGRESS)**
- Dropdown visual highlighting not working
  - CSS classes being added correctly
  - But `!important` flags not overriding styles
  - `rgba(0,0,0,0)` background instead of green
- Arrow key navigation not responding
  - Event listener attached
  - But keys not being captured
  - Browser window scrolls instead
- **Status:** Paused for later debugging
- **Next approach:** Try different CSS specificity or native `<select>` element

**Known Technical Details:**
- `.highlighted` class exists on DOM elements (verified in console)
- `updateHighlight()` function executes (console logs confirm)
- `handleDropdownKeydown()` function defined but not triggering
- Likely issue: CSS scoping with dynamically injected modal content

---

## ðŸ“‹ Next Steps / Roadmap

### Immediate Priorities
- [ ] Deploy Reference Materials pages (Glossary + Object Registry)
- [ ] Generate Ghost Feed visuals for 2-4 realms (AI tools)
- [ ] Get final narration from Izaak for Prologue

### Short-term Goals (Phase 2 Completion)
- [ ] Fix keyboard navigation in Ghost Feed dropdown
- [ ] Record remaining chapter narrations
- [ ] Add full text for Chaplets 2-5
- [ ] Populate Glossary with manuscript content
- [ ] Connect Object Registry cards to character modal system
- [ ] Add foedus, theLady, praetores character images
- [ ] Implement `/echo foedus` command functionality

### Medium-term Goals
- [ ] Add TinaCMS or Decap CMS for visual editing
- [ ] Create interactive terminal typing effects
- [ ] Build email capture for updates
- [ ] Add navigation between chapters
- [ ] Progress tracking (mark chapters as read)

### Long-term Vision
- [ ] Complete Book 1 content
- [ ] Prepare Book 2 framework
- [ ] Create pitch package for film/TV:
  - [ ] Sizzle reel (2-3 min audio demo)
  - [ ] Visual lookbook (PDF with character art)
  - [ ] One-page synopsis
  - [ ] Proof of audience (email list, analytics)

---

## ðŸŽ¯ Target Audience

**Primary:** Geeks who appreciate:
- Philosophical sci-fi (The Matrix, The Good Place, Arrival)
- Code-as-theology metaphors
- Complex worldbuilding
- Experimental storytelling formats

**Secondary:**
- Literary fiction readers (experimental form)
- Tech/programmer audiences (code metaphors)
- Speculative fiction fans (metaphysical systems)

---

## ðŸ’¡ Key Insights & Learnings

### What's Working
âœ“ Terminal aesthetic is **visually striking**  
âœ“ Code-as-theology concept is **unique and compelling**  
âœ“ Character profiles add **depth without overwhelming**  
âœ“ Hidden terminal commands create **engagement/discovery**  
âœ“ Iterative development allows **story to evolve**  
âœ“ **Dual-mode reading system** gives users agency and choice  
âœ“ **Clean terminal UX** (colored dots instead of buttons) feels authentic  
âœ“ **Streamlined audio player** reduces friction and improves UX  
âœ“ **Draggable scrubber** provides professional audio control  
âœ“ **Character images** bring the story to life visually  
âœ“ **Ghost Feed system** creates immersive world exploration  
âœ“ **Reference Materials** provide scalable content structure

### Development Philosophy
- Build as you write (web experience IS part of creative process)
- Test with audience feedback
- Don't wait for perfection
- Use AI (Claude) to generate code, not write it manually
- Keep learning curve manageable
- **Inline styles over CSS classes** when inheritance becomes an issue
- **Version timestamps** are essential for cache-busting during development
- **Iterate based on user experience** - multiple rounds of refinement are normal
- **Keep it simple** - remove distracting elements
- **Pause when stuck** - Fresh perspective often solves problems faster

### Recent Technical Learnings
- **Browser caching is aggressive** - need multiple strategies
- **CSS inheritance in Astro** can override styles unexpectedly
- **Class name mismatches** between CSS and JavaScript cause silent failures
- **Testing on localhost vs production** requires discipline
- **Console logging version numbers** helps confirm code is loading
- **Flexbox layout** is perfect for inline audio controls
- **Event listeners for drag** need proper cleanup
- **isDragging flag** prevents auto-update conflicts during manual scrubbing
- **File naming convention** allows automatic image loading
- **Dynamic content CSS issues** - `!important` doesn't always work with injected HTML
- **Keyboard event capturing** - Need to prevent default browser behavior
- **CSS specificity wars** - Sometimes simpler solutions (native elements) work better

### CRITICAL: Astro CSS Scoping Issues (January 9, 2026)
**Problem Pattern:** Dynamically generated HTML (via JavaScript) doesn't receive Astro's scoped CSS.

**Symptoms:**
- CSS appears correct in file
- Elements render but have no styling
- Console shows correct computed values for parent container
- Child elements (cards, etc.) have no borders, colors, or layout
- Astro adds `data-astro-cid-xxxxx` attributes that break styling on dynamic content

**Root Cause:** Astro's default scoped styles only apply to elements that exist in the `.astro` file at build time. JavaScript-generated HTML doesn't get the scoping attributes, so scoped CSS doesn't match.

**Solution:** Add `is:global` to style tag:
```astro
<style is:global>
  /* All styles here will apply globally, including to JS-generated content */
</style>
```

**When to use `is:global`:**
- Any page with JavaScript-generated content (modals, cards, lists)
- Pages using `innerHTML` or `createElement`
- Dynamic content from arrays/objects
- Interactive components built with vanilla JS

**Examples from this project:**
- ✅ Object Registry: Used `is:global` from start - worked perfectly
- ❌ Glossary: Initially scoped - cards had no styling until `is:global` added
- ✅ Terminal: Static content, scoped styles work fine

**Additional Grid Layout Gotchas:**
- Setting `grid.style.display = ''` leaves empty style attribute - use `removeAttribute('style')` instead
- `!important` can help force grid display when other CSS interferes
- Always check computed styles in console to verify CSS is actually applying
- `minmax(380px, 1fr)` for 3 columns needs ~1200px+ width - use `minmax(320px, 1fr)` for narrower screens

**Debugging Workflow:**
1. Check console for version timestamp (confirms new code loaded)
2. Check computed styles on parent container (is grid working?)
3. Check computed styles on child elements (is CSS applying?)
4. If parent works but children don't → Astro scoping issue → Add `is:global`

**Rule of thumb:** If you're building cards/lists with JavaScript, use `is:global` from the start.

---

## ðŸ“ž Contact & Credentials

### Important Accounts
- **GitHub Username:** wafuradio
- **Netlify:** Connected via GitHub OAuth
- **GoDaddy:** Domain registered (h2eframework.com)

### Local Setup
- **Project Location:** `Desktop/h2e-framework`
- **Node Version:** v24.12.0
- **npm Version:** v11.6.2

---

## ðŸ“„ Notes for Future Claude Sessions

When starting a new conversation:
1. I've been developing H2E for 18 months with ChatGPT
2. This is Book 1 of a series (Book 2 framework exists)
3. Story is still evolving - endings not final
4. Terminal interface is the PRIMARY delivery method
5. Traditional novella is secondary/backup
6. Audio studio available for any sound work needed
7. All character specs are in "H2E_Character_Sheets.docx"
8. Full manuscript is in "H2E_-_Manuscript_20251218__1_.docx"
9. I'm learning web development as I go - explain things simply
10. I prefer working with you (Claude) to generate code I can paste
11. **Version timestamps** in code help track what's deployed
12. **Always test on localhost first** before assuming production is updated
13. **Character images** can be added without code changes - just drop PNGs in folder
14. **H2E_INTERFACE_RULES.md is CANONICAL** - All interface decisions must align with these principles
15. **Take feedback before generating** - Don't spin cycles with multiple iterations without user input

---

## ðŸŽ¨ Design References

### Visual Inspiration
- Terminal aesthetic: https://term.ooo/
- Narrative + code: https://www.robinsloan.com/lab/bad-radio/
- Dark sci-fi motion: https://www.straffeparis.com/

### Comparable Works (for pitching)
- **The Good Place** meets **The Matrix**
- **Arrival** meets **Inside Out**
- Philosophical sci-fi with emotional stakes

---

## âš¡ Important Reminders

1. **Never delete this file** - it's your continuity anchor
2. **Update after major changes** - keep it current
3. **Reference in new chats** - "Check PROJECT_STATUS.md"
4. **Story is fluid** - endings/details may change
5. **You have full creative control** - I'm here to execute your vision
6. **Ask questions** - better to clarify than assume
7. **Check version timestamps** - Console should show current version when testing
8. **Test on localhost:4321** - NOT the production site during development
9. **Clear caches when stuck** - rm -rf .astro, then restart dev server
10. **Character images are automatic** - just name PNGs correctly and drop in folder
11. **Don't spin cycles** - Get feedback before iterating on broken features

---

## ðŸŽ‰ Session Summary (January 7, 2026 - Morning)

### Major Accomplishments:

**âœ… Phase 2A - Ghost Feed Modal System (COMPLETE)**
- Full Ghost Feed modal with 6 realms
- Custom terminal-style dropdown (non-native)
- Dynamic signal quality indicators per realm
- Placeholder GIF system ready (`/public/images/ghost-feed/`)
- Terminal command: `/ghost_feed` and `/ghost_feed [1-6]`
- Command history with localStorage persistence

**âœ… Reference Materials Foundation (COMPLETE)**
- Created Glossary page with "Coming Soon" placeholder
- Created Object Registry page with 7 characters
- Both pages styled to match terminal aesthetic
- Ready to deploy and expand with content
- Implementation guide provided

**âœ… Ghost Feed AI Prompts (COMPLETE)**
- Detailed prompts for 4 priority realms (I/O, Waiting Quarters, Realm Beyond, Edge of System)
- Tool recommendations: Runway Gen-3 ($12), Leonardo.ai (FREE), Pika ($10), Kling ($20)
- Technical specifications: 800x600px, 3-5 sec loops, under 5MB
- Post-processing workflow documented
- Budget breakdown provided

**ðŸ”² Phase 2B - Keyboard Navigation (PAUSED)**
- Visual highlighting not rendering (CSS specificity issue)
- Arrow keys not responding (event capture issue)
- Console debugging shows classes being added correctly
- Decision: Pause for fresh perspective, not abandoned

### Files Created This Session:
1. `ghost-feed-ai-prompts.md` - Complete guide for generating realm visuals
2. `glossary.astro` - Glossary page with placeholder content
3. `registry.astro` - Object Registry page with 7 characters
4. `reference-materials-guide.md` - Implementation instructions
5. `terminal-phase2a-fixed-css.astro` - Ghost Feed with attempted CSS fixes (keyboard nav still broken)

### Deployment Status:
- âš ï¸ **NOT YET DEPLOYED** - Reference pages ready to copy to `/src/pages/`
- Ghost Feed modal ready but keyboard nav needs work
- Current production terminal: Phase 1 (from January 6)

### Next Session Goals:
- Deploy Reference Materials pages
- Generate 2-4 Ghost Feed realm visuals with AI tools
- Revisit keyboard navigation with different approach
- Connect Object Registry to character modal system

---

## ðŸŽ‰ Session Summary (January 9, 2026 - Evening)

### Major Accomplishments:

**âœ… Glossary Page - Complete Redesign & Debug**
- Fixed JavaScript syntax errors (apostrophes in data strings breaking onclick handlers)
- Implemented event delegation pattern (data attributes instead of inline onclick)
- Redesigned UX to match Registry style:
  - Empty state on page load
  - Sectioned display for ALL category with orange headers
  - Compact cards (120px min-height, 2-line ellipsis on descriptions)
  - 3-column grid layout (minmax 320px)
- Added CLEAR button (red) to reset all filters and search
- Reordered filter buttons: Functions, Terminology, Praetores, Concepts, ALL, CLEAR
- **CRITICAL FIX**: Added `is:global` to style tag to fix Astro scoping issue
  - Dynamic JavaScript-generated cards weren't receiving scoped CSS
  - Cards now show proper borders, hover effects, and styling

**âœ… UX Improvements**
- No buttons highlighted on page load
- CLEAR removes all highlighting and shows empty state
- Modal system working (click cards to see full definitions)
- Glossary now matches Registry visual style

### Files Modified:
- `/src/pages/glossary.astro` - Complete redesign with proper styling

### Technical Breakthroughs:
1. **Astro Scoping Issue Identified** - Any page with JS-generated content needs `is:global`
2. **Grid debugging workflow** - Use `removeAttribute('style')` not `style.display = ''`
3. **Event delegation pattern** - More robust than inline onclick for dynamic content

### Deployment Status:
- âš ï¸ **NOT YET DEPLOYED** - Glossary ready to copy to project
- Test locally first, then deploy to production

### Known Issues:
- None! Glossary is fully functional

### Next Session Priorities:
1. Deploy updated glossary.astro to production
2. Test all functionality (search, filters, modals, CLEAR)
3. Add remaining glossary content from manuscript
4. Generate Ghost Feed realm visuals

---

*End of Status Document*
