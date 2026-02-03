# Additional Pages Brief - Skuba Landing Site

## Context

Landing page is complete (`index.html`). Now need to add:

1. **Privacy Policy page** (`privacy.html`)
2. **Terms of Use page** (`terms.html`)
3. **Team/About Us page** (`team.html`)
4. **Set up Git repo** and push to GitHub

---

## 1. Privacy Policy Page

### Requirements
- Standard privacy policy for a mobile app
- Covers: data collection, analytics, user rights, contact info
- **Contact email:** hello@skuba.app
- **Company:** Lazuli Global
- **Location:** International (Ronny is based in Egypt but company is global)

### Structure
```
- Hero section (simple)
  - Title: "Privacy Policy"
  - Last updated date
- Content sections:
  - Information We Collect
  - How We Use Information
  - Data Storage & Security
  - Your Rights
  - Changes to This Policy
  - Contact Us
- Footer (same as landing page)
```

### Key Points to Cover
- Skuba is primarily offline
- Minimal data collection
- No personal data sold or shared with third parties
- Optional analytics (if user opts in)
- Crash reports for debugging
- Contact: hello@skuba.app

### Style
- Match landing page design
- Clean, readable typography
- Use same color scheme and components
- Keep it simple and honest

---

## 2. Terms of Use Page

### Requirements
- Standard terms for a mobile app
- Covers: usage rights, disclaimers, liability, age requirements
- **Contact email:** hello@skuba.app
- **Company:** Lazuli Global

### Structure
```
- Hero section (simple)
  - Title: "Terms of Use"
  - Last updated date
- Content sections:
  - Acceptance of Terms
  - Use License
  - Disclaimer of Warranties
  - Limitations of Liability
  - Dive Safety Disclaimer (CRITICAL)
  - Age Requirements
  - Changes to Terms
  - Contact Us
- Footer (same as landing page)
```

### Key Points to Cover
- App is a planning tool, not a dive computer
- **CRITICAL SAFETY DISCLAIMER:** Always follow your certification training. Always dive with a buddy. Never exceed your training limits. Use a dive computer. Have a backup plan.
- No warranty on calculations (users responsible for their own safety)
- Age requirement: 18+ or with parental consent
- Pro tier refund policy (follow app store policies)
- Contact: hello@skuba.app

### Style
- Match landing page design
- Emphasize safety disclaimers
- Clear, readable legal language (not overly complex)

---

## 3. Team/About Us Page

### Requirements
- Introduce the team behind Skuba
- Show who builds and maintains the app
- Humanize the brand

### Team Members

**Primary Team:**
- **Ronny Majani** - Founder & Developer
  - Technical diver (Padi Tec50, TDI ANDP, TDI Intro to Cave)
  - Software engineer
  - Based in Hurghada, Egypt
  - Built Skuba to solve real dive planning problems

- **Ahmed Badawi** - Co-founder & Business
  - Dive professional
  - Business operations
  - Based in Hurghada, Egypt

**Optional Section: Pro Diver Testers/Advisors**
Ronny mentioned he can list a few pro divers who help refine the app. Leave this as a placeholder for now:
- "Skuba is refined with feedback from professional divers and instructors worldwide."
- Can add specific names/bios later if Ronny provides them

### Structure
```
- Hero section
  - Title: "Meet the Team"
  - Subtitle: "Built by divers, for divers"
- Team grid (2 cards for Ronny + Ahmed)
  - Photo (placeholder or actual if available)
  - Name
  - Role
  - Short bio (2-3 sentences)
  - Optional: LinkedIn/social links
- Mission/Story section
  - Why we built Skuba
  - What drives us
  - Our commitment to the diving community
- Footer (same as landing page)
```

### Mission/Story (Draft)
"Skuba was born from a simple need: better dive planning tools that work offline, on the boat, in bright sunlight. As technical divers, we got tired of spreadsheets, clunky apps, and tools that didn't reflect how we actually dive.

We built Skuba to be the tool we wished existed—accurate, fast, offline, and designed for real-world dive planning. Most features are free because we believe every diver deserves access to quality planning tools.

We're constantly refining Skuba based on feedback from divers like you. If you have ideas or suggestions, reach out at hello@skuba.app. We're always listening."

### Style
- Warm, approachable tone
- Show personality (not corporate)
- Emphasize "built by divers for divers"
- Match landing page design

---

## 4. Navigation Updates

### Update `index.html` footer links
Add links to new pages:
```html
<nav>
  <a href="privacy.html">Privacy</a>
  <a href="terms.html">Terms</a>
  <a href="team.html">Team</a>
</nav>
```

### Consistency
- All pages should have same header/footer
- Same color scheme, typography, button styles
- Mobile-responsive
- Fast loading

---

## 5. Git Setup & GitHub Push

### Repository Details
- **GitHub account:** bob-the-butler-bot
- **Repository:** Create new repo: `skuba-landing`
- **Organization:** lazuli-global (if possible) OR personal repo

### Steps
1. Initialize git in `/workspace-code/projects/skuba-landing/`
2. Create `.gitignore` (exclude node_modules, .DS_Store, etc.)
3. Create initial commit with all files
4. Create remote repo on GitHub (bob-the-butler-bot account)
5. Push to GitHub
6. Set up GitHub Pages (if deploying via GitHub Pages)

### Commit Message Template
```
Initial commit: Skuba landing site

- Landing page (index.html)
- Privacy policy page
- Terms of use page
- Team page
- Responsive design
- Production-ready

Built with pure HTML/CSS/JS for Skuba diving app.
```

---

## Technical Notes

### Color Scheme (from skuba-app themes.ts)
**Primary Accent (Teal-Blue):**
- Light: `#0ea5e9` (sky-500)
- Dark: `#38bdf8` (sky-400)

**Surfaces:**
- Light background: `#f8fafc` (slate-50)
- Light surface: `#ffffff` (white)
- Dark background: `#0a0a0a` (near black)
- Dark surface: `#171717` (charcoal)

**Text:**
- Light primary: `#0f172a` (slate-900)
- Light muted: `#475569` (slate-600)
- Dark primary: `#fafafa` (neutral-50)
- Dark muted: `#a3a3a3` (neutral-400)

**Status:**
- Success: `#16a34a` (green-600)
- Warning: `#eab308` (yellow-500)
- Error: `#dc2626` (red-600)

### Assets
- App icon: Use from Play Store/App Store listings
- Team photos: Placeholder for now (use initials or generic avatar)
- Logo: Skuba logo (if available)

### Deployment Target
- **Domain:** skuba.app
- **Hosting:** Static file hosting (GitHub Pages, Netlify, or similar)

---

## Priorities

1. ✅ Landing page (DONE)
2. 🔲 Privacy Policy page
3. 🔲 Terms of Use page
4. 🔲 Team/About Us page
5. 🔲 Update navigation links
6. 🔲 Git setup & GitHub push
7. 🔲 Deploy to production

---

## Notes

- Keep all pages simple and fast
- Match landing page design aesthetic
- Mobile-first responsive
- Production-ready code
- Clear, honest communication (no corporate BS)
- Emphasize safety for dive planning tool
- Lazuli Global is the parent company name

---

**Last Updated:** 2026-02-03
