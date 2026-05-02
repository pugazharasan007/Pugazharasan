# Pugazharasan — Portfolio (redesigned)

Personal portfolio website for **Pugazharasan A** — Data &amp; AI Analyst @ AssetPLUS.

🌐 Live: https://pugazharasan007.github.io/Pugazharasan/

## What's in this repo

```
├── index.html         → Home / Skills / Education / Certificates
├── Projects.html      → Project grid + filter + research spotlight
├── Experience.html    → AssetPLUS role + Internship
├── contact.html       → Contact info + working form
├── styles.css         → All shared styles
├── script.js          → All shared JS (nav, filter, counters, form)
└── (images, video, favicons, etc.)
```

The 4 HTML pages all share **`styles.css`** and **`script.js`** — so the design is consistent and any tweak only needs to be made in one place.

---

## How to deploy these files to GitHub

You only need to upload **5 files** (the 4 HTML files + `styles.css` + `script.js`) into the **root of your repo** — `pugazharasan007/Pugazharasan`.

### Option A — Web upload (easiest)
1. Go to https://github.com/pugazharasan007/Pugazharasan
2. For each file:
   - Click on the existing file (e.g. `index.html`)
   - Click the **pencil icon** (Edit)
   - Delete the contents and paste in the new contents
   - Scroll down → "Commit changes"
3. For `styles.css` and `script.js` (new files): click **"Add file" → "Create new file"**, name it `styles.css` (or `script.js`), paste the contents, commit.
4. Wait ~30 seconds — GitHub Pages will redeploy automatically.

### Option B — Drag and drop
1. Go to https://github.com/pugazharasan007/Pugazharasan
2. Click **"Add file" → "Upload files"**
3. Drag all 5 files in (replacing existing ones if prompted)
4. Commit.

### Option C — Git CLI
```bash
git clone https://github.com/pugazharasan007/Pugazharasan.git
cd Pugazharasan
# Copy the new files in (replace the originals)
git add .
git commit -m "Modern visual redesign + AssetPLUS experience"
git push
```

---

## Configuring the contact form

The form on `contact.html` uses [Formspree](https://formspree.io) — **free, no backend needed**.

1. Go to https://formspree.io and sign up (free tier: 50 submissions/month)
2. Create a new form → name it "Portfolio contact"
3. Copy the form endpoint, looks like: `https://formspree.io/f/abcd1234`
4. Open `contact.html`, find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
5. Replace `YOUR_FORM_ID` with your actual ID (so it becomes `https://formspree.io/f/abcd1234`)
6. Commit and push. Form messages will be emailed to you.

Until you do this, the form will show: *"Form not configured yet"* when submitted.

---

## Old files you can keep or remove

These files exist in the repo but aren't used by the new design. You can delete them or leave them:

- `Frame.css` — old stylesheet
- `portfolio.css` — old stylesheet
- `about.html` — not linked from new design
- `send_mail.php` — old PHP form handler (replaced by Formspree)

The new design references your existing **image files** (`Prime.webp`, `CRM.png`, `about_my_self.jpg`, etc.) — keep all of those.

---

## Tech stack

- Pure HTML / CSS / vanilla JS (no build step, no frameworks)
- Google Fonts: **Fraunces** (display), **Geist** (body), **JetBrains Mono** (mono)
- Font Awesome 6.6 (icons)
- Formspree (contact form, optional)

---

## Color &amp; design

- Dark editorial-tech aesthetic
- Deep navy background (`#0a0e1a`) with teal (`#5eead4`) and pink (`#f472b6`) accents
- Animated gradient orbs + grid + noise overlay for depth
- Glassmorphism cards
- Smooth scroll-reveal animations via IntersectionObserver
- Fully responsive, mobile-first

---

© Pugazharasan
