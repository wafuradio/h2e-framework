# H2E Framework - Project Status
*Last Updated: December 27, 2024*

---

## 🌐 Live Site Information

- **Primary URL:** https://h2eframework.com (custom domain)
- **Netlify URL:** https://inquisitive-kringle-70d06b.netlify.app
- **Status:** LIVE ✅
- **GitHub Repo:** https://github.com/wafuradio/h2e-framework

---

## 🛠 Tech Stack

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

## 📁 Current Site Structure

```
h2e-framework/
├── src/
│   ├── pages/
│   │   ├── index.astro          // Homepage (terminal intro)
│   │   └── terminal.astro       // Full interactive interface
│   └── styles/
│       └── global.css           // Tailwind imports
├── public/                      // Static assets (future: images, audio)
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## ✅ Pages Built

### 1. Homepage (`/`)
**Purpose:** Landing page with story hook  
**Features:**
- Black terminal aesthetic
- Green "// H2E Framework" header
- Terminal window with three colored dots (red/yellow/green)
- Story premise (3-sentence version)
- "ACCESS FRAMEWORK" button → links to `/terminal`
- Footer

**Content:**
> "What if existence is simply a program? In a universe ruled by divine logic, desmondJohn learns his mother's suicide will erase him before he's even born. With the Praetores enforcing an irreversible fate, his only hope lies with foedus—a fallen enforcer who knows the system's secrets."

---

### 2. Terminal Interface (`/terminal`)
**Purpose:** Main story navigation and interactive experience  
**Features:**

#### Boot Sequence (6 seconds)
- "H2E FRAMEWORK v3.2"
- "TERMINAL 13.7 // I/O BORDER NODE"
- Authentication animation
- Progress bar loading

#### Priority Alert Screen
- 3 PreBorn entities listed (desmondJohn, jessMartin, isidoreAbraham)
- Clickable character names → opens profiles
- "Track Their Signal" button → jumps to story
- "Access Full Logs" button → reveals full interface

#### Full Interface (after Priority Alert)
**Left Panel - Story Archives:**
- Prologue: Confessions ✅
- Chaplet 1: The Grit of I/O ✅
- Chaplet 2: AssignareFatum() (preview only)
- Chaplet 3: The Realm Beyond (preview only)
- Chaplet 3.5: INSERTION [CORRUPTED - glitching]
- Chaplet 4: Presence in the Shadows (preview only)
- Chaplet 5: Journey to the Grove (preview only)

**Right Panel - Object Registry:**
- trinus [FUNCTIONARY]
- foedus [DEPRECATED - ACCESS RESTRICTED] 🔴
- theLady [MEDIATRIX - ⚠ ANOMALY DETECTED] 🟠
- desmondJohn [PREBORN - STATUS: PENDING]
- jessMartin [PREBORN - STATUS: PENDING]
- isidoreAbraham [PREBORN - STATUS: PENDING]
- thePraetores [ENFORCERS - PAIRED]

**System Logs Panel:**
- System log entries
- Ghost feed status
- Glossary link (placeholder)
- Terminal command hint

#### Interactive Features
**Character Profiles (Modal):**
- Full character dossier with:
  - Name, class, status, age
  - Description
  - Detailed attributes
  - Placeholder for 3D model image

**Story Chapters (Modal):**
- Prologue and Chaplet 1 have full text
- Others show "Chapter content loading..."

**Hidden Terminal:**
- Press ` (backtick) to activate
- Type `help` for command list
- Secret commands:
  - `/ghost_feed` - Access hidden observation relays
  - `/echo foedus` - Search deprecated archives
  - `/trace verina` - Attempt record recovery

**Ghost Feed Background:**
- Subtle floating SVG elements (ELLA, GROVE, VAULT)
- Atmospheric effect

---

## 🎨 Design System

### Color Palette
```css
Background:    #0a0a0a (almost black)
Primary text:  #00ff41 (Matrix green)
Error/Alert:   #ff4444 (red)
Warning:       #ffaa00 (orange)
Accent:        #00d9ff (cyan)
Muted:         #888888 (gray)
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

## 📖 Content Status

### Full Content Available
✅ **Prologue: Confessions**
- Complete text
- Formatted with line breaks
- Italicized quote

✅ **Chaplet 1: The Grit of I/O**
- Opening paragraphs
- Establishes Terminal 13.7
- Introduces trinus
- Ends with "[Chapter continues...]"

### Preview/Placeholder
⏳ Chaplets 2-5 (listed but not full content)

---

## 👥 Character Profiles (Complete)

All 7 characters have full profiles with attributes:

1. **desmondJohn** (PreBorn, 13 cycles)
   - Oldest sibling, logical, burdened by responsibility

2. **jessMartin** (PreBorn, 10 cycles)
   - Middle sibling, defiant, questions everything

3. **isidoreAbraham** (PreBorn, 7 cycles)
   - Youngest, empathetic, golden-haired, cherub-like

4. **foedus** (Deprecated Praetor)
   - Fallen enforcer, broken wings, code visionary
   - Former subclass: thePraevideo

5. **theLady** (Mediatrix)
   - Southeast Asian, late 50s-60s
   - Missing/deformed fingers on one hand
   - Adds "forbidden fifth" to Praetores harmony

6. **trinus** (Functionary)
   - Operates Terminal 13.7
   - Middle-aged, stocky, salt-pepper hair
   - **KEY: Deprecated Trinity class - WAS CHRIST**

7. **thePraetores** (Enforcers)
   - Always in pairs
   - Root + Third harmonic pattern
   - Silver skin, crystal wings

---

## 🔑 Major Story Reveals & Decisions

### Confirmed Canon
✅ **trinus is Christ** - Deprecated Trinity class, memory-wiped, recycled into functionary  
✅ **foedus gets erased** - Punished for helping the children (Chaplet 9)  
✅ **foedus returns** - Rollback restores him; he doesn't remember being deleted (Chaplet 13)  
✅ **The Framework is failing** - Built by a deprecated Creator who abandoned it  
✅ **ApostasiaVitae() is suicide** - Forbidden function from foreign system (Hell Framework)  
✅ **Mother = ella** - Her suicide triggers PreBorn erasure  

### Still Being Decided
🤔 **Children's final fate:**
   - Option A: Born with Trisomy 21 (Down syndrome as mutation cost)
   - Option B: Stuck as anomaly in the system while Praetores try to correct
   - Current lean: Leave unresolved in Book 1

🤔 **Ella's outcome:**
   - Stranger at checkout interrupts her suicide momentum
   - She lives, but we don't know if permanently or temporarily

---

## 🎵 Audio Production Notes

**Studio Available:** Full recording studio ready for:
- Character voice profiles
- Praetores harmonics (root + fifth intervals)
- theLady's "disruptive third" note
- Terminal ambient sounds
- System sound effects

**NOT YET IMPLEMENTED** - Future phase

---

## 🚀 Workflow Established

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

---

## 🐛 Known Issues & Fixes

### FIXED ✅
- ~~Tailwind CSS not loading~~ → Added `import '../styles/global.css'` to frontmatter
- ~~JavaScript onclick not working~~ → Changed functions to `window.functionName` with `is:inline` script tag
- ~~DNS propagation~~ → Custom domain fully connected

### Current Issues
None reported! 🎉

---

## 📋 Next Steps / Roadmap

### Immediate Priorities
- [ ] Add full text for Chaplets 2-5
- [ ] Create character images (3D models or illustrations)
- [ ] Add audio files:
  - [ ] Terminal ambient hum
  - [ ] Boot sequence sounds
  - [ ] Praetores harmonics
  - [ ] theLady's fifth note

### Short-term Goals
- [ ] Build Glossary page with hover definitions
- [ ] Add more terminal commands and secrets
- [ ] Create Realms page (visual maps of I/O, Grove, etc.)
- [ ] Add navigation between chapters
- [ ] Progress tracking (mark chapters as read)

### Medium-term Goals
- [ ] Add TinaCMS or Decap CMS for visual editing
- [ ] Embed actual character images
- [ ] Create interactive terminal typing effects
- [ ] Add more Ghost Feed visual elements
- [ ] Build email capture for updates

### Long-term Vision
- [ ] Complete Book 1 content
- [ ] Prepare Book 2 framework
- [ ] Create pitch package for film/TV:
  - [ ] Sizzle reel (2-3 min audio demo)
  - [ ] Visual lookbook (PDF with character art)
  - [ ] One-page synopsis
  - [ ] Proof of audience (email list, analytics)

---

## 🎯 Target Audience

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

## 💡 Key Insights & Learnings

### What's Working
✅ Terminal aesthetic is **visually striking**  
✅ Code-as-theology concept is **unique and compelling**  
✅ Character profiles add **depth without overwhelming**  
✅ Hidden terminal commands create **engagement/discovery**  
✅ Iterative development allows **story to evolve**  

### Development Philosophy
- Build as you write (web experience IS part of creative process)
- Test with audience feedback
- Don't wait for perfection
- Use AI (Claude) to generate code, not write it manually
- Keep learning curve manageable

---

## 📞 Contact & Credentials

### Important Accounts
- **GitHub Username:** wafuradio
- **Netlify:** Connected via GitHub OAuth
- **GoDaddy:** Domain registered (h2eframework.com)

### Local Setup
- **Project Location:** `Desktop/h2e-framework`
- **Node Version:** v24.12.0
- **npm Version:** v11.6.2

---

## 📝 Notes for Future Claude Sessions

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

---

## 🎨 Design References

### Visual Inspiration
- Terminal aesthetic: https://term.ooo/
- Narrative + code: https://www.robinsloan.com/lab/bad-radio/
- Dark sci-fi motion: https://www.straffeparis.com/

### Comparable Works (for pitching)
- **The Good Place** meets **The Matrix**
- **Arrival** meets **Inside Out**
- Philosophical sci-fi with emotional stakes

---

## ⚠️ Important Reminders

1. **Never delete this file** - it's your continuity anchor
2. **Update after major changes** - keep it current
3. **Reference in new chats** - "Check PROJECT_STATUS.md"
4. **Story is fluid** - endings/details may change
5. **You have full creative control** - I'm here to execute your vision
6. **Ask questions** - better to clarify than assume

---

*End of Status Document*
