# Reference Materials Implementation Guide

## What I've Created

### 1. **Ghost Feed AI Prompts** (`ghost-feed-ai-prompts.md`)
Complete guide with:
- AI tool recommendations (Runway, Pika, Leonardo, Kling)
- Budget options ($0-$12/month)
- Detailed prompts for 4 priority realms:
  - I/O (decaying server room)
  - Waiting Quarters (sterile limbo)
  - Realm Beyond (glitching reality)
  - Edge of System (corrupted void)
- Technical specs (resolution, file size, format)
- Post-processing workflow
- File naming conventions

### 2. **Glossary Page** (`glossary.astro`)
- Terminal-styled layout
- "Coming Soon" placeholder
- Ready for future content migration
- Commented-out example structure

### 3. **Object Registry Page** (`registry.astro`)
- Grid layout with 7 character cards
- Grouped by type (PreBorn, Functionaries, Deprecated, Enforcers)
- Click handlers ready (currently show alerts)
- Can be connected to existing modal system

---

## How to Deploy Reference Pages

### Step 1: Add Pages to Astro

Copy the `.astro` files to your pages directory:

```bash
cp glossary.astro /path/to/h2e-framework/src/pages/
cp registry.astro /path/to/h2e-framework/src/pages/
```

### Step 2: Test Locally

```bash
npm run dev
```

Then visit:
- http://localhost:4321/glossary
- http://localhost:4321/registry

### Step 3: Update Terminal Links

In `terminal.astro`, find the Reference Materials section (around line 970) and update:

```html
<div class="reference-links">
    <a href="/registry" class="reference-link">Object Registry</a>
    <a href="/glossary" class="reference-link">Glossary</a>
    <a href="#" class="reference-link" onclick="showSystemLogs(); return false;">System Logs</a>
</div>
```

Links should already be there, but verify they point to the right pages.

### Step 4: Deploy

```bash
git add .
git commit -m "Add Reference Materials pages (Glossary, Object Registry)"
git push
```

Netlify will auto-deploy.

---

## Future Enhancements

### For Object Registry:
1. **Connect to Modal System**
   - Replace `alert()` with actual modal calls
   - Reuse the character profile modal from terminal.astro
   - Load character data from shared JSON or inline

2. **Add Character Images**
   - Use existing PNGs from `/public/images/characters/`
   - Display in cards or modals

3. **Add More Characters**
   - thePraevideo
   - Individual Praetores (Cale, Numa, Vitus, Mora, etc.)
   - ella (if you want to reveal her)

### For Glossary:
1. **Populate with Terms**
   - Copy from manuscript glossary section
   - Format as glossary-term divs
   - Organize alphabetically or by category

2. **Add Search/Filter**
   - JavaScript search box
   - Filter by category (Functions, Classes, Terminology)

3. **Add Pronunciation Audio** (future)
   - Record pronunciation for complex terms
   - Add play buttons

---

## Ghost Feed Visuals - Next Steps

### Priority Order (Recommended):

1. **Start with 2 realms for testing:**
   - I/O (most important - it's where trinus is)
   - Edge of System (visually striking - foedus's realm)

2. **If those work well, add:**
   - Realm Beyond (glitchy, abstract)
   - Waiting Quarters (sterile, liminal)

3. **Later if needed:**
   - The Array (Praetores realm)
   - Grove of Accord (theLady's realm)

### Recommended Tool: **Runway Gen-3**
- $12/month for unlimited standard generations
- Best quality for cinematic/atmospheric content
- Generate 3-4 variations per realm
- Cancel after one month

**Alternative (Free):** Leonardo.ai
- 150 tokens/day free
- Motion feature available
- Less cinematic but good enough
- Generate 2 realms per day

---

## Installation Checklist

### Reference Materials:
- [ ] Copy `glossary.astro` to `/src/pages/`
- [ ] Copy `registry.astro` to `/src/pages/`
- [ ] Test locally (npm run dev)
- [ ] Verify links work from terminal
- [ ] Deploy to production

### Ghost Feed Visuals (Future):
- [ ] Choose AI tool (Runway recommended)
- [ ] Generate I/O realm visual (3-4 variations)
- [ ] Generate Edge of System visual (3-4 variations)
- [ ] Convert to GIF (under 5MB each)
- [ ] Place in `/public/images/ghost-feed/`
- [ ] Test in terminal Ghost Feed modal
- [ ] Generate remaining realms if satisfied

---

## Questions?

Let me know if you need:
- Help connecting registry cards to character modals
- Different visual style for the pages
- More detailed AI prompts for specific realms
- Help with post-processing the generated videos

Ready to deploy when you are! 🚀
