# H2E Framework - Ghost Feed Visual Generation Guide

## Overview
Creating animated visual loops for 6 realm observation feeds in the H2E terminal interface. These should feel like security camera feeds or surveillance relays showing glimpses of different parts of a failing cosmic computer system.

---

## Technical Specifications

### File Requirements
- **Format:** GIF (looping) or MP4 (for higher quality, can convert to GIF later)
- **Resolution:** 800x600px or 1024x768px (4:3 aspect ratio works best for terminal aesthetic)
- **Duration:** 3-5 seconds (seamless loop)
- **File Size:** Under 5MB for web performance
- **Style:** Grainy, surveillance camera aesthetic with terminal green (#00ff41) color grading

### Visual Style Guidelines
- **Color Palette:** Predominantly blacks, grays, and terminal green (#00ff41)
- **Grain/Noise:** Add 15-20% film grain or static overlay
- **Scan Lines:** Horizontal CRT scanlines for authentic terminal feel
- **Glitch Effects:** Occasional brief digital artifacts (1-2 frames)
- **Contrast:** High contrast, slightly blown-out highlights
- **Motion:** Slow, subtle movements (camera drift, particle float, flickering lights)

---

## Recommended AI Tools

### Option 1: Runway Gen-3 (RECOMMENDED)
- **Best for:** High-quality cinematic results
- **Cost:** $12/month (Unlimited Standard generations) or $76/month (Unlimited Relaxed + Fast hours)
- **Strengths:** Best motion quality, good at abstract/surreal environments
- **Limitations:** 5-10 second clips (trim to 3-5 seconds)
- **Website:** https://runwayml.com

### Option 2: Pika Labs
- **Best for:** Stylized, artistic results
- **Cost:** $10/month (700 credits) or $35/month (2000 credits + faster generation)
- **Strengths:** Great for glitch aesthetics, good control over style
- **Limitations:** Shorter clips (3-4 seconds native)
- **Website:** https://pika.art

### Option 3: Kling AI
- **Best for:** Longer, more stable loops
- **Cost:** Free tier available, $20/month pro
- **Strengths:** Better at maintaining consistency in loops
- **Limitations:** Sometimes less "cinematic" than Runway
- **Website:** https://klingai.com

### Option 4: Leonardo.ai (Motion)
- **Best for:** Budget-friendly option
- **Cost:** Free tier (150 tokens/day), $12/month (8500 tokens)
- **Strengths:** Good control, easier to iterate
- **Limitations:** Motion can be more subtle
- **Website:** https://leonardo.ai

### My Recommendation
Start with **Runway Gen-3** for 2-3 realms to see if you like the quality. If budget is tight, use **Leonardo.ai** which has a generous free tier. You can generate multiple versions and pick the best.

---

## Post-Processing Tools

### For Converting/Optimizing:
1. **CloudConvert** (you already use this) - https://cloudconvert.com
   - Convert MP4 → GIF
   - Resize if needed
   - Compress file size

2. **ezgif.com** (Free online tool)
   - GIF optimization
   - Add effects (scanlines, grain)
   - Trim/crop/loop

3. **Photoshop** or **After Effects** (if you have them)
   - Add scanlines overlay
   - Color grade to terminal green
   - Add film grain
   - Export optimized GIF

---

## AI PROMPTS FOR EACH REALM

### 1. I/O Realm
**Essence:** Decaying server room, flickering lights, burnt circuits, analog chaos

**Runway/Pika Prompt:**
```
Surveillance camera POV inside a failing server room. Rows of old computer terminals with dim green CRT monitors. Flickering fluorescent lights cast harsh shadows. Tangled cables hang from ceiling. Burnt circuit boards visible. Occasional sparks. Heavy film grain. Slow camera drift right. Smoke or dust particles float in air. Terminal screens show scrolling green text. Dark, claustrophobic. Cyberpunk aesthetic but analog and decaying. 1980s technology. High contrast, desaturated except for green monitors.
```

**Style Keywords:** `film noir lighting, security camera footage, CRT monitors, server room, industrial decay, green phosphor glow, 1980s computing, surveillance aesthetic`

**Negative Prompt:** `people, faces, bright colors, clean, modern, polished, sunny, outdoors`

---

### 2. Waiting Quarters
**Essence:** Sterile, clinical, fluorescent-lit limbo, rows of empty bunks, emotional flatness

**Runway/Pika Prompt:**
```
Security camera view of institutional dormitory. Rows of simple metal bunks with thin mattresses. Fluorescent ceiling lights create flat, shadowless illumination. Antiseptic white walls. Empty and quiet. Slight camera sway. No movement except occasional light flicker. Neutral beige and sage green tones. Clinical hospital or military barracks aesthetic. Lonely, waiting room atmosphere. High angle surveillance view. Film grain texture.
```

**Style Keywords:** `institutional architecture, fluorescent lighting, clinical setting, empty dormitory, neutral colors, surveillance camera, liminal space, waiting room`

**Negative Prompt:** `people, children, warm lighting, cozy, decorations, windows, nature`

---

### 3. Realm Beyond
**Essence:** Glitching reality, fractal distortion, unrendered geometry, impossible spaces

**Runway/Pika Prompt:**
```
Abstract digital environment fracturing and glitching. Geometric shapes appear and disappear. Green wireframe structures floating in void. Corrupted 3D rendering artifacts. Recursive patterns folding in on themselves. Scan lines and digital noise. Dark background with occasional bursts of green code. Reality breaking down into pixels. Dreamlike and unsettling. Slow rotation. Matrix-style aesthetic but broken and unstable. Digital decay.
```

**Style Keywords:** `digital glitch art, wireframe geometry, fractals, corrupted rendering, matrix aesthetic, abstract void, green phosphor, recursive patterns, digital decay`

**Negative Prompt:** `realistic, photographic, people, nature, clear structures, stable, organized`

---

### 4. Edge of the System
**Essence:** Corrupted void, flickering light structures, recursive decay, foedus's sanctuary

**Runway/Pika Prompt:**
```
Dark corrupted void with flickering fragments of broken code. Distant unstable light structures pulse and fade. Black oil-like surface ripples slowly. Occasional green text fragments drift past. Abandoned data space. Shadows deeper than black. Feeling of being outside reality. Minimal movement - just slow pulsing and drifting. Heavy shadows. Mercury-like liquid floor. Dystopian and ominous. Security camera with heavy signal interference.
```

**Style Keywords:** `corrupted void, liquid metal, signal interference, abandoned space, heavy shadows, green terminal text, pulsing lights, unstable environment, surveillance static`

**Negative Prompt:** `bright, clean, organized, people, nature, buildings, clear sky, daytime`

---

## Workflow Steps

### Step 1: Generate (15-30 min per realm)
1. Go to your chosen AI tool (Runway recommended)
2. Paste the prompt
3. Add style keywords
4. Add negative prompt
5. Set duration to 3-5 seconds
6. Generate 3-4 variations
7. Pick the best one

### Step 2: Download & Review (5 min)
- Download as MP4 (highest quality)
- Review on black background
- Check loop point (does it loop smoothly?)

### Step 3: Convert to GIF (5-10 min)
Using CloudConvert or ezgif.com:
- Upload MP4
- Convert to GIF
- Settings: 800x600px, 15-20 fps, optimize for file size
- Target: Under 5MB

### Step 4: Add Terminal Effects (Optional, 10-15 min)
If you have Photoshop/After Effects:
- Add scanline overlay (horizontal lines, 50% opacity)
- Add film grain (15-20%)
- Color grade: boost greens, crush blacks
- Add subtle vignette

OR use ezgif.com:
- "Effects" → Add grain/noise
- "Overlay" → Add scanline image
- Adjust colors toward green

### Step 5: Test in Terminal (2 min)
- Place GIF in `/public/images/ghost-feed/`
- Name it: `io.gif`, `waiting-quarters.gif`, `realm-beyond.gif`, `edge-of-system.gif`
- Test in browser - does it loop smoothly? Is file size okay?

---

## File Naming Convention

```
/public/images/ghost-feed/
  ├── io.gif                    (I/O realm)
  ├── waiting-quarters.gif      (The Waiting Quarters)
  ├── array.gif                 (The Array)
  ├── grove-of-accord.gif       (Grove of Accord)
  ├── realm-beyond.gif          (The Realm Beyond)
  └── edge-of-system.gif        (Edge of the System)
```

---

## Budget Estimate

### Option A: Runway ($12/month)
- Unlimited standard generations
- Generate all 6 realms with multiple variations
- **Total: $12** (cancel after one month)

### Option B: Leonardo.ai (Free tier)
- 150 tokens/day = 15 motion generations/day
- Generate 3 realms/day over 2 days
- **Total: $0**

### Option C: Pika ($10/month)
- 700 credits = ~70 short video generations
- Plenty for 6 realms with variations
- **Total: $10** (cancel after one month)

---

## Tips for Better Results

1. **Generate Multiple Variations:** Make 3-4 per realm, pick the best
2. **Use Consistent Style Keywords:** Helps maintain visual coherence across realms
3. **Keep Motion Subtle:** Surveillance camera feel, not action movie
4. **Embrace Imperfection:** Glitches and grain add authenticity
5. **Test Loop Points:** Make sure start/end frames transition smoothly
6. **Optimize File Size:** Slow website = bad UX. Keep under 5MB per GIF.

---

## Alternative: Stock Footage Approach

If AI generation isn't working, you could also:

1. **Pexels/Pixabay (Free):**
   - Search: "server room," "flickering lights," "abstract digital"
   - Download free stock footage
   - Edit in free tools (DaVinci Resolve, Shotcut)
   - Add green color grade + grain + scanlines
   - Export as GIF

2. **Artgrid ($29/month):**
   - High-quality cinematic stock footage
   - Better selection for abstract/tech content
   - Can cancel after one month

---

## Questions to Consider

1. **Do you want all 6 realms generated?** Or start with 2-3 priority ones?
2. **What's your budget?** Free tier, $10-12/month, or willing to pay more for quality?
3. **Do you have video editing software?** Or prefer all-in-one AI solutions?
4. **Timeline?** Need them done quickly or okay to iterate over a few days?

Let me know your preferences and I can refine the prompts further!
