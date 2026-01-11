# EMAIL CAPTURE SYSTEM - Feature Specification
*For building with GitHub Copilot*

---

## 🎯 Goal

Add an email signup system to capture interested readers for:
- Story updates and new chapter releases
- Launch notifications
- Newsletter about the H2E world

---

## 📐 Design Requirements

### **Aesthetic MUST Match Terminal**
- Cold, clinical, system-like
- No "Join our newsletter!" language
- Use terminal language: "SUBSCRIBE FOR UPDATES" or "REGISTER FOR NOTIFICATIONS"
- Green on black color scheme
- No rounded corners, no gradients
- Border: 1px solid #00ff41

### **Placement Options**

**Option A: Footer of Terminal Page**
- Below all content on `terminal.astro`
- Always visible when scrolled to bottom
- Minimal, doesn't interrupt reading

**Option B: Modal After Reading Prologue**
- Shows when user finishes Prologue
- "CONTINUE RECEIVING UPDATES?"
- Can be dismissed with ESC or "DECLINE"

**Option C: Dedicated Section on Index Page**
- Before "ENTER TERMINAL" button
- "REGISTER FOR STORY UPDATES"
- Collect email before entry

**Recommended: Option A (least intrusive)**

---

## 🛠️ Technical Implementation

### **Backend Service: Netlify Forms**

Why Netlify Forms:
- ✅ Free (100 submissions/month)
- ✅ Built-in spam protection
- ✅ No server needed
- ✅ Already using Netlify for hosting
- ✅ Email notifications to you
- ✅ Export to CSV

Alternative: EmailOctopus, ConvertKit, Mailchimp (if you want automation)

---

## 📝 HTML Structure (Netlify Forms)

```html
<!-- Email Capture Form -->
<div class="email-capture" style="border-top: 1px solid #333; padding: 40px 0; margin-top: 60px;">
  <div style="max-width: 600px; margin: 0 auto; text-align: center;">
    
    <div style="font-size: 14px; color: #00ff41; margin-bottom: 10px; letter-spacing: 2px;">
      SYSTEM UPDATE NOTIFICATIONS
    </div>
    
    <div style="font-size: 12px; color: #888; margin-bottom: 25px; line-height: 1.6;">
      Register to receive notifications when new chapters are deployed.
      No spam. Unsubscribe anytime.
    </div>
    
    <form 
      name="email-updates" 
      method="POST" 
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      style="display: flex; gap: 10px; max-width: 500px; margin: 0 auto;"
    >
      <!-- Honeypot for spam protection (hidden) -->
      <input type="hidden" name="form-name" value="email-updates">
      <p style="display: none;">
        <label>Don't fill this out: <input name="bot-field"></label>
      </p>
      
      <!-- Email input -->
      <input 
        type="email" 
        name="email" 
        placeholder="email@example.com"
        required
        style="flex: 1; 
               background: #000; 
               border: 1px solid #333; 
               color: #00ff41; 
               padding: 12px 15px; 
               font-family: 'Share Tech Mono', monospace; 
               font-size: 14px;"
      >
      
      <!-- Submit button -->
      <button 
        type="submit"
        style="background: transparent; 
               border: 1px solid #00ff41; 
               color: #00ff41; 
               padding: 12px 30px; 
               font-family: 'Share Tech Mono', monospace; 
               font-size: 14px; 
               cursor: pointer; 
               letter-spacing: 2px;
               transition: all 0.3s;"
        onmouseover="this.style.background='rgba(0,255,65,0.1)'; this.style.boxShadow='0 0 10px rgba(0,255,65,0.3)';"
        onmouseout="this.style.background='transparent'; this.style.boxShadow='none';"
      >
        SUBSCRIBE
      </button>
    </form>
    
    <!-- Success message (hidden by default) -->
    <div id="success-message" style="display: none; color: #00ff41; margin-top: 15px; font-size: 12px;">
      ✓ SUBSCRIPTION CONFIRMED
    </div>
    
    <!-- Error message (hidden by default) -->
    <div id="error-message" style="display: none; color: #ff4444; margin-top: 15px; font-size: 12px;">
      ERROR: SUBMISSION FAILED - TRY AGAIN
    </div>
    
  </div>
</div>
```

---

## 🎨 Styling Considerations

### **Match Terminal Aesthetic**
```css
/* Input field */
input[type="email"] {
  background: #000;
  border: 1px solid #333;
  color: #00ff41;
  font-family: 'Share Tech Mono', monospace;
}

input[type="email"]:focus {
  outline: none;
  border-color: #00ff41;
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
}

input[type="email"]::placeholder {
  color: #555;
}

/* Button */
button[type="submit"] {
  background: transparent;
  border: 1px solid #00ff41;
  color: #00ff41;
  cursor: pointer;
  transition: all 0.3s;
}

button[type="submit"]:hover {
  background: rgba(0, 255, 65, 0.1);
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
}
```

---

## ⚙️ JavaScript Enhancement (Optional)

Handle form submission with AJAX to show success/error without page reload:

```javascript
document.querySelector('form[name="email-updates"]').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    });
    
    if (response.ok) {
      // Success
      form.style.display = 'none';
      document.getElementById('success-message').style.display = 'block';
      
      // Optional: Store in localStorage to not show again
      localStorage.setItem('h2e_email_subscribed', 'true');
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    // Error
    document.getElementById('error-message').style.display = 'block';
    setTimeout(() => {
      document.getElementById('error-message').style.display = 'none';
    }, 3000);
  }
});
```

---

## 📧 Netlify Forms Setup

### **Step 1: Deploy Code with Form**
- Add the HTML form to `terminal.astro`
- Commit and push to GitHub
- Netlify auto-detects forms with `data-netlify="true"`

### **Step 2: Configure in Netlify Dashboard**
1. Go to https://app.netlify.com
2. Click your site → "Forms"
3. You'll see "email-updates" form listed
4. Configure notifications (email you when someone subscribes)

### **Step 3: Access Submissions**
- View submissions in Netlify dashboard
- Export to CSV
- Integrate with email service (EmailOctopus, ConvertKit, etc)

---

## 🔒 Privacy & GDPR Compliance

### **Add Privacy Notice**
```html
<div style="font-size: 10px; color: #666; margin-top: 15px; max-width: 500px; margin-left: auto; margin-right: auto;">
  By subscribing, you agree to receive story updates via email. 
  No spam. Unsubscribe anytime. 
  <a href="/privacy" style="color: #00ff41; text-decoration: none;">Privacy Policy</a>
</div>
```

### **Required: Privacy Policy Page**
Create `/src/pages/privacy.astro` with:
- What data you collect (email only)
- How you use it (story updates)
- Who has access (you only)
- How to unsubscribe (email link or form)

---

## 🎯 Feature Checklist

### **Phase 1: Basic Form (30 min)**
- [ ] Add form HTML to `terminal.astro`
- [ ] Style to match terminal aesthetic
- [ ] Test submission locally
- [ ] Deploy and verify Netlify picks it up

### **Phase 2: Enhancement (1 hour)**
- [ ] Add AJAX submission (no page reload)
- [ ] Success/error messages
- [ ] Store in localStorage (don't ask twice)
- [ ] Honeypot spam protection

### **Phase 3: Polish (30 min)**
- [ ] Privacy policy page
- [ ] Email notification to you on new signup
- [ ] Test on mobile
- [ ] Add to index page (optional)

---

## 🧪 Testing Checklist

- [ ] Form appears correctly on terminal page
- [ ] Email validation works (won't submit invalid email)
- [ ] Success message shows after submission
- [ ] Submission appears in Netlify dashboard
- [ ] Honeypot catches spam bots
- [ ] Mobile responsive
- [ ] Keyboard accessible (tab, enter to submit)
- [ ] ESC key works if modal version

---

## 🚀 Alternative: EmailOctopus Integration

If you want automated email sequences:

```html
<!-- EmailOctopus Form -->
<form action="https://emailoctopus.com/lists/YOUR-LIST-ID/members/embedded/add" method="post">
  <input type="email" name="email_address" required placeholder="email@example.com">
  <button type="submit">SUBSCRIBE</button>
</form>
```

Pros:
- Free up to 2,500 subscribers
- Automated welcome emails
- Email sequences

Cons:
- Requires EmailOctopus account setup
- More complex than Netlify Forms

---

## 💡 Design Language Examples

**✅ Good (Terminal-Style)**
- "REGISTER FOR SYSTEM UPDATES"
- "SUBSCRIBE FOR NEW CHAPTER NOTIFICATIONS"
- "RECEIVE DEPLOYMENT ALERTS"
- "ERROR: INVALID EMAIL FORMAT"
- "✓ SUBSCRIPTION CONFIRMED"

**❌ Bad (Too Casual)**
- "Join our mailing list!"
- "Get the latest updates 😊"
- "Oops! Invalid email"
- "Thanks for signing up!"

---

## 📍 Recommended Placement

**Add to `/src/pages/terminal.astro`** at line ~800 (before closing `</div>` of main-terminal):

```astro
<!-- Existing content above -->

<!-- Email Capture Section -->
<div class="email-capture-section">
  <!-- Form HTML from above -->
</div>

<!-- Terminal hint below -->
<div class="terminal-hint">...</div>
```

---

*Ready to build with Copilot! Reference COPILOT_CONTEXT.md for design rules.*
