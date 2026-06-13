# 🌐 Unnati Saxena — Portfolio Website

A dark-themed personal portfolio website built with pure HTML, CSS, and JavaScript.

---

## 📁 File Structure

```
unnati-portfolio/
├── index.html        ← Main portfolio page (edit this for content)
├── style.css         ← All styles & theme variables (edit colours here)
├── script.js         ← Animations & interactions
├── assets/
│   └── resume.pdf    ← Your resume file (REPLACE THIS to update resume)
└── README.md         ← This file
```

---

## 🚀 How to Deploy on GitHub Pages (Free Hosting)

### Step 1 — Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click **+** → **New repository**
3. Name it exactly: `unnati0383.github.io` (use your GitHub username)
4. Set to **Public**, click **Create repository**

### Step 2 — Upload Files
1. Click **uploading an existing file** on the repo page
2. Drag and drop ALL files from this folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/resume.pdf`
   - `README.md`
3. Click **Commit changes**

### Step 3 — Enable GitHub Pages
1. Go to **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Branch: `main`, Folder: `/ (root)`
4. Click **Save**
5. Your site will be live at: `https://unnati0383.github.io` in ~2 minutes!

---

## ✏️ How to Update Your Resume

**Option A — Replace PDF file:**
1. Go to your GitHub repo
2. Navigate to `assets/` folder
3. Click **Add file** → **Upload files**
4. Upload your new `resume.pdf` (use the SAME filename)
5. Commit — site updates automatically!

**Option B — Use external link:**
1. Upload your resume to Google Drive
2. Get a shareable link
3. Open `index.html`, find `RESUME_LINK` and replace with your Drive link

---

## 🎨 How to Change Theme / Colours

Open `style.css` and edit the `:root` variables at the top:

```css
:root {
  --b-300: #2563eb;   /* primary blue — change this */
  --b-500: #60a5fa;   /* light blue highlight */
  --indigo: #6366f1;  /* secondary accent */
  /* ... */
}
```

---

## 📊 How to Update Stats

Open `index.html` and search for:
- `data-count="940"` → update LeetCode problem count
- `data-count="1806"` → update LeetCode rating
- `data-count="8.99"` → update CGPA

---

## 🔗 How to Share on LinkedIn

1. Once your site is live on GitHub Pages, copy the URL
2. Go to **LinkedIn** → **Edit Profile**
3. Click **Contact info** → **Add website**
4. Paste your portfolio URL
5. Label it "Portfolio"

You can also add it to your LinkedIn **About** section and share as a post!

---

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Custom animated cursor
- ✅ Particle network animation in hero
- ✅ Scroll reveal animations
- ✅ Typing effect in hero subtitle
- ✅ Animated counter for stats
- ✅ Dark deep-space blue theme
- ✅ Embedded + downloadable resume
- ✅ All coding profiles linked
- ✅ Active nav highlighting
- ✅ Smooth scrolling

---

*Built with ❤️ — Unnati Saxena*
