# H2E INTERFACE RULES
*Design Principles for Terminal 13.7*  
*Established: January 5, 2026*

---

## Purpose

You are building a **diegetic terminal**. Not a marketing site. The interface must feel like access to a compromised system artifact.

---

## Primary Experience

**Text-first. Audio optional. No autoplay. Ever.**

The reader controls sound, motion, and depth.

---

## Tone

**Cold. Restrained. Clinical.**

No playful microcopy. No modern "delight" patterns.

---

## Canon

The prologue VO script is canonical. Any printed prologue must match it exactly. 

- No paraphrase
- No cleanup
- No alternate punctuation

**If a change is needed, update both sources together.**

---

## Interaction Hierarchy

**Default state is quiet, readable, stable.**

Interactivity must be earned. Never constant. Every interactive element must have an in-universe reason to exist.

---

## Motion Rules

**Minimal motion. Slow motion only.**

- No bouncing
- No easing that feels cute
- Glitch effects only as brief faults
- Under 1 second
- Never stack glitches with other motion

---

## Sound Rules

**Sound is telemetry. Not mood.**

- System ambience may exist at very low volume when the system is present
- Interaction sounds only on real actions
- Human residuals must be indistinct
- No intelligible words
- No music beds under narration or reading

---

## Hymns and Music Artifacts

**Hymns are clickable artifacts. Never background soundtrack.**

- Keep them short: 20–45 seconds
- Fragments only. No full performances
- Degraded archival feel. No lush production
- One hymn per chaplet max, only when referenced in text

---

## UI Labels

**Avoid consumer labels** like Play, Enjoy, Discover.

**Use system language:**
- Access
- Retrieve
- Playback
- Invoke
- Archive
- Log
- Trace

Buttons should feel like **commands**.

---

## Information Exposure

**Do not front-load lore.**

- Reveal depth only when requested
- Glossary is hover or click, not inline walls of text
- Character profiles should be optional
- Not required to follow the story

---

## Consistency

**One typography system. One color logic.**

- **Green** is system
- **Cyan** is cross-system or exception
- **Red** is warning only

Do not add new accent colors without a reason.

---

## Accessibility and Control

**Always provide:**

- Sound toggle
- Reduce motion option
- Readable text sizing
- Mobile behavior that preserves readability

---

## Performance

**Fast load. No heavy libraries for aesthetics.**

- Use short loops for ambience
- Compress audio
- Avoid multiple simultaneous audio streams

---

## Navigation

**Keep navigation sparse.**

- One clear way forward
- No endless menus
- No scrolling trap

---

## Error Behavior

**Errors should feel real, not cute.**

- No "Oops."
- No jokes

**Use system phrasing:**
- ERROR
- ACCESS DENIED
- RECORD EXPUNGED
- PARTIAL RECOVERY

---

## Easter Eggs

**Hidden commands are allowed.**

They must:
- Not gate core content
- Not reveal major twists
- Hint at instability, not explain it

---

## Content Boundaries

**No spoilers beyond what the prologue already commits to.**

Do not expose later chaplets' revelations in UI copy.

---

## Build Discipline

**No new feature unless it serves:**

1. **Access** (makes content reachable)
2. **Atmosphere** (reinforces diegetic terminal feel)
3. **Canon control** (maintains story integrity)

**If it does not serve one of those, cut it.**

---

## Implementation Checklist

When building or reviewing features, ask:

- [ ] Is sound user-controlled? (No autoplay)
- [ ] Are labels system-appropriate? (No "Enjoy this")
- [ ] Is motion minimal and justified?
- [ ] Is the default state quiet and readable?
- [ ] Does this feel like a terminal, not a website?
- [ ] Are colors following the established logic?
- [ ] Is lore revealed progressively, not dumped?
- [ ] Would this feature exist in-universe?

---

## Current Compliance Status

### ✅ Following Rules
- Text-first dual mode (Read/Audio)
- Sound toggle present
- System language in most buttons (AUDIO, READ, ACCESS)
- Minimal motion (scanline, float only)
- Green/Red/Cyan color logic
- Error phrasing (CORRUPTED, ACCESS RESTRICTED)
- Fast load times
- Optional character profiles

### ⚠️ Areas to Review
- Some button copy could be more system-like
- Audio player descriptions may be too marketing-forward
- Consider if colored dots (●●●) are justified as UI or feel decorative

### 🔄 In Progress
- Evaluating all microcopy against system voice
- Reviewing interaction patterns for diegetic consistency

---

*This document is canonical. All interface decisions should be measured against these principles.*
