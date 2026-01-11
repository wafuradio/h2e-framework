# H2E Framework - Project Status
*Last Updated: January 10, 2026 - Evening Session*

---

## 🌐 Live Site Information

- **Primary URL:** https://h2eframework.com (custom domain)
- **Netlify URL:** https://inquisitive-kringle-70d06b.netlify.app
- **Status:** LIVE ✅
- **GitHub Repo:** https://github.com/wafuradio/h2e-framework

---

## 🛠️ Tech Stack

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

## 📂 Current Site Structure

```
h2e-framework/
├─ src/
│  ├─ pages/
│  │  ├─ index.astro          // Homepage (terminal intro)
│  │  ├─ terminal.astro       // Full interactive interface ✅
│  │  ├─ glossary.astro       // Glossary with 23 terms ✅
│  │  └─ registry.astro       // Object Registry (7 characters) ✅
│  └─ styles/
│     └─ global.css           // Tailwind imports
└─ public/
   ├─ sounds/                  // Audio files
   │  ├─ ambient-server-room.mp3
   │  ├─ boot-sequence.mp3
   │  ├─ prologue-narration.mp3
   │  └─ prologue-ambience.mp3
   ├─ images/
   │  ├─ characters/           // Character portraits
   │  │  ├─ desmondJohn.png
   │  │  ├─ jessMartin.png
   │  │  ├─ isidoreAbraham.png
   │  │  └─ trinus.png
   │  └─ ghost-feed/           // Realm visuals
   │     └─ io.mp4             // ✅ Working video
```

---

## ✅ COMPLETED FEATURES (January 10, 2026 Session)

### **Terminal Interface - Phase 2B Complete**
- ✅ Boot sequence (6 seconds) with session skip
- ✅ Audio gate for browser autoplay
- ✅ Sound toggle with localStorage persistence
- ✅ Volume control (inline slider)
- ✅ EXIT SYSTEM button with confirmation modal
- ✅ Unload animation (2-second progress bar)
- ✅ Session management (boot shows on return after exit)
- ✅ All emoji icons fixed (🔇/🔊/🎧/📄/▶️/⏸)

### **Ghost Feed Modal - Keyboard-Only Navigation**
- ✅ Terminal command: `/ghost_feed [1-6]`
- ✅ Keyboard navigation (UP/DOWN arrows)
- ✅ Visual highlighting (green background on selected realm)
- ✅ "Currently observing" display with realm status
- ✅ Video support for I/O realm (io.mp4 playing)
- ✅ Signal quality indicators per realm
- ✅ All 6 realms listed and navigable
- ✅ ESC key closes modal
- ⏳ Only 1/6 realms has video (need 5 more)

### **Glossary Page - Complete Redesign**
- ✅ 23 terms with full definitions
- ✅ 4 categories: Functions, Terminology, Praetores, Concepts
- ✅ Search functionality
- ✅ Filter buttons
- ✅ CLEAR button (red, resets everything)
- ✅ Empty state on load
- ✅ Sectioned display for ALL view
- ✅ Modal system for full definitions
- ✅ Terminal-style navigation button
- ✅ Fixed Astro CSS scoping with `is:global`

### **Object Registry Page**
- ✅ 7 character cards with portraits
- ✅ Organized into 4 sections
- ✅ Terminal-style navigation button
- ✅ Click handlers ready for modal expansion
- ⏳ Character modals not yet implemented

### **Exit System Flow**
- ✅ ⏻ EXIT SYSTEM button (red, top-right header)
- ✅ Confirmation modal ("Really exit?")
- ✅ CANCEL / EXIT buttons
- ✅ Unload screen with progress bar
- ✅ Clears sessionStorage
- ✅ Stops all audio
- ✅ Redirects to homepage
- ✅ Boot sequence shows on next visit

---

## 📊 Content Status

### **Story Content**
✅ **Prologue: Confessions** - Complete
- Full text available
- Audio narration (ElevenLabs placeholder)
- Ambient sound bed
- Dual-mode access (Audio + Read)

⏳ **Chaplet 1: The Grit of I/O** - Preview only
- Opening paragraphs available
- Full text pending

⏳ **Chaplets 2-7** - Outlined but not accessible

### **Character Profiles**
✅ Complete profiles with attributes:
1. desmondJohn (PreBorn, 13) - Image ✅
2. jessMartin (PreBorn, 10) - Image ✅
3. isidoreAbraham (PreBorn, 7) - Image ✅
4. trinus (Functionary) - Image ✅
5. foedus (Deprecated Praetor) - No image
6. theLady (Mediatrix) - No image
7. thePraetores (Enforcers) - No image

### **Ghost Feed Realm Visuals**
- ✅ I/O - io.mp4 (working)
- ⏳ Waiting Quarters - Needed
- ⏳ The Array - Needed
- ⏳ Grove of Accord - Needed
- ⏳ Realm Beyond - Needed
- ⏳ Edge of System - Needed

AI prompts already written in `ghost-feed-ai-prompts.md`

### **Glossary Terms**
- ✅ 23 terms defined
- ⏳ ~20-30 more terms from manuscript

---

## 🎯 BACKLOG - Prioritized

### **HIGH PRIORITY - Content Creation**

**1. Ghost Feed Realm Visuals** (2-4 hours)
- Generate 5 more videos/GIFs using AI tools
- Tools: Runway Gen-3 ($12), Leonardo.ai (FREE), Pika ($10)
- Prompts ready: `/ghost-feed-ai-prompts.md`
- Priority realms: Waiting Quarters, Realm Beyond, Edge of System

**2. Expand Glossary** (1-2 hours)
- Add ~20-30 more terms from manuscript
- Organize by category
- Improve search/filter UX

**3. Story Content** (Ongoing)
- Full text for Chaplets 1-7
- Audio narration (replace ElevenLabs with Izaak)
- Studio ready for recording

---

### **MEDIUM PRIORITY - Features**

**4. Character Modal System** (2-3 hours)
- Connect Registry cards to profile popups
- Show full character dossier
- Add remaining character images

**5. Terminal Commands** (1 hour)
- `/echo foedus` - Search deprecated archives
- Additional lore commands

**6. Chapter Navigation** (1-2 hours)
- Forward/back buttons
- Chapter menu
- Progress tracking

---

### **LOWER PRIORITY - Nice to Have**

**7. Email Capture System**
**8. CMS Integration** (TinaCMS or Decap)
**9. Analytics Integration**
**10. Mobile Optimization** (Ghost Feed touch controls)
**11. Additional Audio** (per-realm ambience, character voices)

---

## 🔧 Development Workflow

### **Local Development**
```bash
cd Desktop/h2e-framework
npm run dev                    # Start dev server at localhost:4321
code .                         # Open VS Code
# Edit files in src/pages/
# Ctrl+C to stop server
```

### **Deployment**
```bash
git add .
git commit -m "Description"
git push                       # Auto-deploys via Netlify (1-2 min)
```

### **Cache Management** (when needed)
```bash
rm -rf .astro dist node_modules/.vite
npm run dev
# Test in incognito: http://localhost:4321
```

---

## 📚 Key Learnings & Technical Notes

### **Astro CSS Scoping Issue** (CRITICAL)
**Problem:** Dynamically generated HTML (via JavaScript) doesn't receive Astro's scoped CSS.

**Solution:** Use `<style is:global>` for any page with JS-generated content.

**When to use:**
- Pages with `innerHTML` or `createElement`
- Modal content
- Dynamic cards/lists
- Interactive components

**Examples:**
- ✅ Glossary: Used `is:global` - works perfectly
- ✅ Registry: Used `is:global` from start - no issues
- ✅ Terminal: Static content, scoped styles work fine

### **Browser Autoplay Restrictions**
- Audio requires user interaction before playing
- Solution: Audio gate screen ("ENTER TERMINAL" button)
- `muted` and `autoplay` attributes for video work without interaction

### **SessionStorage vs LocalStorage**
- **sessionStorage** - Clears when tab/browser closes (boot sequence)
- **localStorage** - Persists forever (sound preferences, command history)

### **Inline Styles > CSS Classes**
- When CSS specificity wars happen, use `element.style.property = value`
- Inline styles always win
- Example: Ghost Feed keyboard navigation highlighting

---

## 🚨 Known Issues

### **RESOLVED ✅**
- ~~Tailwind CSS not loading~~
- ~~JavaScript onclick not working~~
- ~~DNS propagation~~
- ~~Browser caching issues~~
- ~~CSS inheritance overriding styles~~
- ~~Emoji corruption (double-encoding)~~
- ~~Ghost Feed dropdown clicks not working~~
- ~~Exit system session management~~

### **CURRENT ISSUES**
- None! Everything working as designed.

---

## 💡 Design Philosophy

### **H2E Interface Rules** (CANONICAL)
See: `H2E_INTERFACE_RULES.md`

**Core Principles:**
- Text-first. Audio optional. No autoplay. Ever.
- Cold, restrained, clinical aesthetic
- Default state is quiet, readable, stable
- Minimal motion. Slow motion only.
- Sound is telemetry, not mood
- System language (ACCESS, RETRIEVE, INVOKE) not consumer language
- Diegetic terminal experience, not marketing site

---

## 🎨 Audio Production

### **Current Audio Files**
- ✅ `ambient-server-room.mp3` (2-3min loop, -18dB mix)
- ✅ `prologue-narration.mp3` (ElevenLabs placeholder)
- ⏳ `boot-sequence.mp3` (planned)
- ⏳ `prologue-ambience.mp3` (planned)

### **ElevenLabs Settings Used**
- Speed: Slightly slower than default
- Stability: 70%
- Similarity: 80%
- Style Exaggeration: 25-30%
- Speaker Boost: ON

### **Studio Available**
Full recording studio ready for:
- Character voice profiles
- Praetores harmonics (root + fifth intervals)
- theLady's "disruptive third" note
- Terminal ambient sounds
- System sound effects

**Next Step:** Record Prologue with Izaak

---

## 📈 Project Completion Estimates

### **Core Experience: 85% Complete**
- ✅ Terminal interface
- ✅ Story access framework
- ✅ Character system
- ✅ Ghost Feed system
- ✅ Reference materials
- ⏳ Content population needed

### **Content: 30% Complete**
- ✅ Prologue (full)
- ⏳ 6 chapters outlined but not accessible
- ⏳ Glossary partial
- ⏳ 1/6 Ghost Feed visuals

### **Polish: 60% Complete**
- ✅ Navigation working
- ✅ Audio system functional
- ✅ Exit flow complete
- ⏳ Mobile optimization needed

---

## 🎯 Immediate Next Actions

**Recommended Priority:**

1. **Generate Ghost Feed Visuals** (Quick win, high impact)
   - Use AI tools with existing prompts
   - 2-4 realms: Waiting Quarters, Realm Beyond, Edge of System
   - Makes existing feature feel complete

2. **Expand Glossary** (Content depth)
   - Add ~20 terms from manuscript
   - Improves reference utility

3. **Deploy Current State** (Ship it!)
   - Everything working and polished
   - Can iterate with more content later

---

## 📞 Important Accounts & Credentials

- **GitHub Username:** wafuradio
- **Netlify:** Connected via GitHub OAuth
- **GoDaddy:** Domain registered (h2eframework.com)
- **Project Location:** `Desktop/h2e-framework`

---

## 📝 Notes for Future Sessions

1. H2E is Book 1 of a series (Book 2 framework exists)
2. Story still evolving - endings not final
3. Terminal interface is PRIMARY delivery method
4. Traditional novella is secondary/backup
5. All character specs in `H2E_Character_Sheets.docx`
6. Full manuscript in `H2E_-_Manuscript_20251218__1_.docx`
7. **Version timestamps** in code help track deployment
8. **Test localhost first** before assuming production updated
9. **H2E_INTERFACE_RULES.md is CANONICAL** - all UI decisions align with it
10. **Ghost Feed is keyboard-only by design** - more terminal-authentic

---

*End of Status Document*
