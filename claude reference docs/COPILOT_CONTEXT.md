# COPILOT CONTEXT - H2E Framework Project
*Essential context for GitHub Copilot when working on this codebase*

---

## 🌍 What is H2E?

H2E (short for "H2E Framework") is a **philosophical sci-fi multimedia story** told through an interactive terminal interface. Think of it as a **diegetic terminal experience** where users access a compromised system to read a story about existence as code.

---

## 📖 Story World Overview

### **Core Concept**
"What if existence is simply a program, an Object within a vast celestial system?"

The story explores fate, free will, and divine logic through **code-as-theology metaphors**.

### **Main Characters**

**PreBorn Class** (Unresolved constructs awaiting fate)
- `desmondJohn` - Age 13, logical leader, carries responsibility
- `jessMartin` - Age 10, defiant rebel, questions everything
- `isidoreAbraham` - Age 7, innocent believer, quiet faith

**System Entities**
- `trinus` - Functionary at Terminal 13.7, executes AssignareFatum()
- `foedus` - Fallen Praetor, deprecated enforcer, now exile
- `theLady` - Mediatrix class, can Intercede() and override fate
- `thePraetores` - Winged enforcers, appear in pairs, sing in harmony

### **Key Functions (Like Methods)**
- `AssignareFatum()` - Assigns PreBorn to Born() or Perish()
- `Born()` - Instantiates PreBorn into mortal life
- `Perish()` - Deletes PreBorn before instantiation
- `ApostasiaVitae()` - Suicide function (forbidden)
- `Intercede()` - Divine override (only theLady can execute)

### **Realms (Like Directories)**
- **I/O** - Input/output staging, Terminal 13.7 location
- **Waiting Quarters** - PreBorn storage before fate assignment
- **The Array** - Praetores enforcement plane
- **Grove of Accord** - Exception handling, theLady's domain
- **Realm Beyond** - Glitch terrain, unstable zone
- **Edge of System** - foedus's sanctuary, deprecated zone

---

## 🎨 Design Philosophy - CRITICAL

### **This is NOT a marketing website**
It's a **diegetic terminal** - everything must feel like accessing a real compromised system.

### **Core Rules** (from H2E_INTERFACE_RULES.md)

**Text-first. Audio optional. No autoplay. Ever.**
- Default state is quiet, readable, stable
- Sound requires user interaction
- Never force audio on users

**Cold, Restrained, Clinical**
- No playful microcopy
- No "Enjoy!" or "Discover!" language
- System language: ACCESS, RETRIEVE, INVOKE, EXECUTE
- No cute animations or bouncy effects

**Minimal Motion**
- Slow motion only
- Glitch effects: brief, under 1 second
- Never stack animations

**Terminal Aesthetic**
- Green text on black (#00ff41 on #0a0a0a)
- Monospace fonts (Share Tech Mono, Courier Prime)
- System errors feel real, not cute
- No "Oops!" messages

**Color Logic**
- **Green (#00ff41)** - System/normal
- **Cyan** - Cross-system/exceptions
- **Red (#ff4444)** - Warnings only
- Don't add new colors without reason

---

## 🛠️ Tech Stack

- **Astro 5.16.6** - Static site framework
- **Tailwind CSS** - Styling
- **Vanilla JavaScript** - No frameworks (React/Vue/etc)
- **Node.js 24.12.0**
- **Deployed on Netlify** - Auto-deploys from GitHub

---

## 📂 File Structure

```
h2e-framework/
├─ src/
│  ├─ pages/
│  │  ├─ index.astro       // Homepage (terminal intro)
│  │  ├─ terminal.astro    // Main story interface
│  │  ├─ glossary.astro    // Reference terms
│  │  └─ registry.astro    // Character profiles
│  └─ styles/
│     └─ global.css        // Tailwind imports
└─ public/
   ├─ sounds/              // Audio files
   └─ images/              // Character portraits, realm visuals
```

---

## ⚙️ Key Technical Patterns

### **Astro CSS Scoping**
When creating content with `innerHTML` or JavaScript:
```astro
<style is:global>
  /* Styles for JS-generated content */
  .modal-content { ... }
</style>
```

Without `is:global`, Astro scopes CSS and JavaScript-generated HTML won't be styled.

### **Modal System Pattern**
```javascript
function showModal(content) {
  document.getElementById('modal-body').innerHTML = content;
  document.getElementById('modal').classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

// ESC key closes modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
```

### **Audio Management**
```javascript
let soundEnabled = false;
let ambientSound = null;

function initializeSounds() {
  ambientSound = new Audio('/sounds/ambient-server-room.mp3');
  ambientSound.loop = true;
  ambientSound.volume = 0.75;
}

// Never autoplay - require user interaction
document.getElementById('enter-btn').addEventListener('click', () => {
  if (soundEnabled && ambientSound) {
    ambientSound.play().catch(e => console.log('Audio failed:', e));
  }
});
```

### **Session vs Local Storage**
```javascript
// Boot sequence - clear on browser close
sessionStorage.setItem('h2e_terminal_booted', 'true');

// Sound preferences - persist forever  
localStorage.setItem('h2e_sound_enabled', 'true');
localStorage.setItem('h2e_volume_level', '75');
```

---

## 🎯 Common Tasks & Patterns

### **Adding a New Glossary Term**
```javascript
const glossaryData = {
  functions: [
    {
      term: "NewFunction()",
      pronunciation: "/new-FUNK-shun/",
      category: "Functions",
      shortDesc: "Brief description here",
      fullDesc: "Full explanation here..."
    }
  ]
};
```

### **Adding a Character to Registry**
```javascript
const characterData = {
  preborn: [
    {
      name: "characterName",
      title: "Title/Class",
      status: "Active | Deprecated | etc",
      image: "/images/characters/name.png",
      attributes: {
        class: "PreBorn | Functionary | etc",
        age: "13 cycles",
        // ... other attributes
      },
      description: "Character bio..."
    }
  ]
};
```

### **Creating a New Modal**
```javascript
window.showCustomModal = function() {
  document.getElementById('modal-body').innerHTML = `
    <div class="custom-content">
      <h2 style="color: #00ff41; margin-bottom: 20px;">Title</h2>
      <p style="color: #ddd; line-height: 1.8;">Content here...</p>
    </div>
  `;
  
  document.getElementById('content-modal').classList.add('active');
};
```

---

## 🚨 Common Pitfalls to Avoid

### **1. Don't Break Terminal Aesthetic**
❌ Bad:
```html
<button class="btn-primary bg-blue-500 rounded-lg">Click Me!</button>
```

✅ Good:
```html
<button class="story-btn" style="border: 1px solid #00ff41; color: #00ff41; background: transparent;">ACCESS</button>
```

### **2. Don't Auto-Play Audio**
❌ Bad:
```javascript
const audio = new Audio('/sounds/ambient.mp3');
audio.play(); // Breaks user control
```

✅ Good:
```javascript
const audio = new Audio('/sounds/ambient.mp3');
// Wait for user interaction
document.getElementById('play-btn').onclick = () => audio.play();
```

### **3. Don't Use Consumer Language**
❌ Bad: "Enjoy the story!" / "Discover more!" / "Oops!"

✅ Good: "ACCESS CONTENT" / "RETRIEVE DATA" / "ERROR: INVALID INPUT"

### **4. Don't Add Playful Animations**
❌ Bad:
```css
.button:hover {
  transform: scale(1.1) rotate(5deg);
  animation: bounce 0.5s infinite;
}
```

✅ Good:
```css
.button:hover {
  background: rgba(0, 255, 65, 0.1);
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
}
```

---

## 📚 Key Documents

When making design decisions, reference:
- `H2E_INTERFACE_RULES.md` - Design philosophy (CANONICAL)
- `H2E_-_Manuscript_20251218__1_.docx` - Full story text
- `H2E_Character_Sheets.docx` - Character details & visual specs
- `PROJECT_STATUS_JAN10_2026.md` - Current feature status

---

## 🎵 Audio Specifications

### **Sound Types**
- **Ambient** - Server room hum, background noise (loop, -18dB)
- **Narration** - Story voiceover (clear, foreground)
- **UI Sounds** - Subtle clicks, system beeps (very quiet)

### **Audio Settings**
- Narration volume: 0.8 (80%)
- Ambience volume: 0.3 (30%)
- Always `loop = true` for ambient
- Always `muted` for video with autoplay

---

## 🎨 Color Palette

```css
/* Primary Colors */
--system-green: #00ff41;      /* Main UI, terminal text */
--system-bg: #0a0a0a;         /* Background */
--system-red: #ff4444;        /* Warnings, errors */
--system-cyan: #00d4ff;       /* Cross-system, exceptions */

/* Neutrals */
--text-primary: #ddd;         /* Body text in modals */
--text-secondary: #888;       /* Muted text */
--border: #333;               /* Dividers, borders */
```

---

## 🔧 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy (automatic via GitHub push)
git add .
git commit -m "Description"
git push
```

---

## 💡 When You Need Help

**Ask Claude for:**
- Architecture decisions ("How should I structure this feature?")
- Design philosophy questions ("Is this too playful?")
- Complex debugging (Astro scoping issues, audio race conditions)
- Story integration (connecting narrative to UI)

**Use Copilot for:**
- Writing repetitive code (adding glossary terms)
- Quick CSS tweaks (changing colors, spacing)
- Autocompleting function patterns
- Learning syntax as you code

---

## 🎯 Current Priority Features

1. **Email capture system** - Sign up for story updates
2. **Character modal system** - Click Registry cards for full profiles
3. **Ghost Feed realm visuals** - 5 more videos/GIFs needed
4. **Glossary expansion** - ~20 more terms from manuscript
5. **Chapter navigation** - Forward/back through story

---

*This document teaches Copilot the H2E world. Keep it open when coding!*
