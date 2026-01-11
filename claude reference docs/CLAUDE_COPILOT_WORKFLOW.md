# CLAUDE + COPILOT WORKFLOW GUIDE
*How to leverage both AI assistants effectively*

---

## 🎯 The Strategy

**Claude Plans → You Build (with Copilot) → Claude Reviews**

This gives you:
- ✅ Speed and autonomy
- ✅ No token limit blockers
- ✅ Learn by doing
- ✅ Quality assurance from Claude
- ✅ H2E design consistency

---

## 📋 When to Use Which Tool

### **Use CLAUDE for:**

#### **1. Planning & Architecture**
- "How should I structure the email capture system?"
- "What's the best way to handle modal state?"
- "Should this be a component or inline code?"

#### **2. H2E-Specific Decisions**
- "Does this match our terminal aesthetic?"
- "Is this language too playful?"
- "What should the error message sound like?"

#### **3. Complex Debugging**
- Astro CSS scoping issues
- Audio playback race conditions
- Session management bugs
- "Why isn't this working?"

#### **4. Design Philosophy Questions**
- "Should this be a button or a link?"
- "Is this animation too bouncy?"
- "Does this follow H2E_INTERFACE_RULES?"

#### **5. Story Integration**
- Connecting narrative to UI
- Character modal content
- Glossary term definitions
- Making sure code reflects the lore

#### **6. Code Review**
- "I built this with Copilot - does it look good?"
- "Can you spot any bugs or improvements?"
- "Is this the cleanest way to do this?"

---

### **Use COPILOT for:**

#### **1. Writing Code**
- Autocompleting functions
- Generating boilerplate
- CSS styling
- Event handlers
- Form markup

#### **2. Repetitive Tasks**
- Adding glossary terms
- Creating character cards
- Styling buttons
- Writing similar functions

#### **3. Quick Edits**
- Changing colors
- Adjusting spacing
- Fixing typos
- Tweaking animations

#### **4. Learning Syntax**
- "How do I write this in JavaScript?"
- "What's the Astro syntax for this?"
- Seeing examples as you type

#### **5. Exploring Options**
- Trying different approaches
- Testing variations
- Rapid prototyping

---

## 🔄 Step-by-Step Workflow

### **Example: Building Email Capture System**

#### **STEP 1: Planning with Claude** ✅

**You Ask:**
```
I want to add email capture to the terminal page. 
What's the best approach for H2E?
```

**Claude Provides:**
- Architecture recommendation (Netlify Forms)
- Design spec (terminal aesthetic)
- Placement options
- Privacy considerations
- Feature specification document ✅ (`EMAIL_CAPTURE_SPEC.md`)

**Output:** You have a clear plan

---

#### **STEP 2: Building with Copilot** 🚀

**Open VS Code:**
```bash
cd Desktop/h2e-framework
code .
```

**Open Files:**
- `COPILOT_CONTEXT.md` (keep visible for reference)
- `EMAIL_CAPTURE_SPEC.md` (your blueprint)
- `src/pages/terminal.astro` (file you're editing)

**Start Typing:**
```html
<!-- Email Capture Section -->
<div class="email-capture-section">
  
```

**Copilot Suggests:**
- Complete HTML structure
- Styling inline
- Form attributes

**You:**
- Accept good suggestions
- Modify to match H2E aesthetic
- Reference spec document for details

**Keep Coding:**
- Add JavaScript for AJAX submission
- Style the success/error messages
- Test locally with `npm run dev`

**Output:** Working email capture form

---

#### **STEP 3: Review with Claude** 🔍

**You Share:**
```
Here's what I built for email capture. 
Does it match H2E design philosophy?

[Paste code or upload file]
```

**Claude Reviews:**
- ✅ Checks against H2E_INTERFACE_RULES.md
- ⚠️ Suggests improvements
- ❌ Catches bugs or inconsistencies

**Example Feedback:**
```
✅ Great! Terminal aesthetic is perfect
✅ System language is spot-on
⚠️ Suggestion: Change "Subscribe" to "REGISTER"
⚠️ The success message could be colder: "✓ REGISTRATION CONFIRMED"
❌ Bug: Missing ESC key handler to close success message
❌ Privacy: Need link to privacy policy
```

**You:**
- Make suggested changes (with Copilot's help)
- Deploy to production
- Feature complete! 🎉

---

## 🛡️ Preventing Code Regression

### **New Protocol - READ THIS**

**Before Claude Generates Code:**

**Claude Will:**
1. ✅ Ask: "Should I check the current file first?"
2. ✅ Use `view` tool to see your current code
3. ✅ Compare with what Claude was about to generate
4. ✅ Warn if about to overwrite newer work
5. ✅ Get your confirmation before proceeding

**You Can Help:**
- Say "Here's my current version" before asking for changes
- Upload files as reference, specify "for review only, don't modify"
- Ask Claude to review diff before applying changes

---

## 💬 Example Conversation Patterns

### **Planning a Feature**

**You:**
```
I want to add character modals to the Registry page.
When you click a card, it should show full profile.
How should I structure this?
```

**Claude:**
```
Good idea! Here's the architecture:

1. Store character data in JavaScript object
2. Add onclick to each card: onclick="showCharacterModal('trinus')"
3. Create showCharacterModal(characterId) function
4. Use same modal system as Ghost Feed
5. Render character details dynamically

Here's the data structure:
[provides code example]

Build it with Copilot, then show me for review.
```

---

### **Debugging with Claude**

**You:**
```
This audio isn't playing. Here's my code:

[paste code]

What's wrong?
```

**Claude:**
```
Found it! Browser autoplay restrictions.
Audio needs user interaction first.

Change line 42 from:
  ambientSound.play();

To:
  document.getElementById('enter-btn').onclick = () => {
    ambientSound.play().catch(e => console.log('Audio failed'));
  };

This waits for user click before playing.
```

---

### **Getting Code Review**

**You:**
```
I built the email capture form with Copilot.
Can you review it against H2E rules?

[upload file or paste code]
```

**Claude:**
```
Great work! A few notes:

✅ Terminal aesthetic: Perfect
✅ Color scheme: Good use of green/black
⚠️ Language: Change "Thanks!" to "✓ CONFIRMED"
⚠️ Privacy: Add link to privacy policy
❌ Missing: Honeypot spam protection

Want me to show you how to add the honeypot?
```

---

## 🎓 Learning from Copilot

### **Copilot as a Teacher**

As you code with Copilot, you'll see:
- Common JavaScript patterns
- CSS techniques
- Astro-specific syntax
- Best practices

**Pro Tip:** When Copilot suggests something you don't understand:
1. Accept the suggestion
2. Ask Claude: "What does this code do?"
3. Learn the concept
4. Use it confidently next time

---

## ⚙️ Copilot Settings for H2E

### **VS Code Settings**

Install Copilot, then adjust:

```json
// settings.json
{
  "github.copilot.enable": {
    "*": true,
    "astro": true,
    "javascript": true
  },
  
  // Show inline suggestions
  "editor.inlineSuggest.enabled": true,
  
  // Accept suggestions with Tab
  "editor.tabCompletion": "on"
}
```

### **Keyboard Shortcuts**
- **Accept suggestion:** `Tab`
- **See next suggestion:** `Alt + ]`
- **See previous suggestion:** `Alt + [`
- **Trigger suggestion manually:** `Ctrl + Enter`

---

## 📊 When You Hit Claude Token Limits

### **Current Status**
We're at ~108k / 190k tokens. Still plenty of room!

### **When Limits Approach:**

**Option A: Finish Planning**
- Get the full architecture/spec
- Save to markdown file
- Build with Copilot
- Review with Claude in next conversation

**Option B: Switch to Copilot**
- Continue building independently
- Reference context files
- Save complex questions for next Claude session

**Option C: New Conversation**
- Start fresh chat with Claude
- Reference transcript: `2026-01-11-02-57-43-ghost-feed-keyboard-nav-video.txt`
- Continue where you left off

---

## 🎯 Your Immediate Next Steps

### **1. Install Copilot (if not already)**
- Go to https://github.com/features/copilot
- Sign up ($10/month)
- Install VS Code extension

### **2. Build Email Capture (Your First Copilot Feature)**
- Open `EMAIL_CAPTURE_SPEC.md`
- Open `COPILOT_CONTEXT.md`
- Open `src/pages/terminal.astro`
- Start typing the form HTML
- Let Copilot suggest
- Test locally
- Bring back to Claude for review

### **3. Get Comfortable with the Workflow**
- Use Copilot for speed
- Use Claude for strategy
- Find your rhythm

---

## 💡 Pro Tips

### **1. Keep Context Files Open**
When coding, have these visible:
- `COPILOT_CONTEXT.md`
- Relevant spec (e.g., `EMAIL_CAPTURE_SPEC.md`)
- `H2E_INTERFACE_RULES.md`

Copilot reads open files for context!

### **2. Comment Your Intentions**
Write comments, Copilot completes code:
```javascript
// Add event listener for email form submission with AJAX
// Show success message without page reload
// Store subscription status in localStorage

// Copilot will suggest implementation!
```

### **3. Use Claude's Specs as Templates**
The specs I create are designed for Copilot to understand.
Keep them open while coding.

### **4. Ask Claude for "Copilot-Ready Specs"**
When planning features, tell me:
```
"Can you create a Copilot-ready spec for [feature]?"
```

I'll write detailed docs like `EMAIL_CAPTURE_SPEC.md`.

### **5. Version Control Everything**
Before building with Copilot:
```bash
git add .
git commit -m "Before building email capture"
```

If something breaks, you can always rollback!

---

## 🤝 Our New Working Agreement

### **Claude Commits:**
- ✅ Always check file state before regenerating code
- ✅ Warn you before overwriting newer work
- ✅ Focus on planning/architecture, not line-by-line generation
- ✅ Review your Copilot code against H2E principles
- ✅ Debug complex issues when you're stuck

### **You Commit:**
- ✅ Use Copilot for implementation
- ✅ Reference context files while coding
- ✅ Bring completed features to Claude for review
- ✅ Ask Claude before making big architecture changes
- ✅ Save complex debugging for Claude sessions

---

## 📞 Communication Patterns

### **Quick Check-ins**
```
You: "Building email capture with Copilot now"
Claude: "Great! Let me know when you want me to review it"
```

### **Mid-Build Questions**
```
You: "Should the success message be a modal or inline?"
Claude: "Inline is less disruptive. Fade it in below the form."
```

### **Post-Build Review**
```
You: "Email capture is done - here's the code [attach]"
Claude: "Reviewing against H2E rules... [feedback]"
```

---

## 🎉 Success Metrics

**You'll know this is working when:**

1. ✅ You ship features without waiting for Claude
2. ✅ Token limits don't block your progress
3. ✅ You understand the code you're writing
4. ✅ Features match H2E aesthetic consistently
5. ✅ You feel confident building independently
6. ✅ Claude reviews catch edge cases you missed

---

**Ready to start?** 🚀

Build the email capture system with Copilot, then bring it back for review!

*Keep `COPILOT_CONTEXT.md` and `EMAIL_CAPTURE_SPEC.md` open while you work.*
