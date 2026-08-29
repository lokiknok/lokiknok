# Lohith V — Python & AI/ML Developer Portfolio

A futuristic, high-performance developer portfolio built for **Lohith V**. Designed with a dark futuristic aesthetic, translucent glassmorphism panels, cyan/blue/purple neon accents, Space Grotesk typography, and a centralized data architecture.

---

## 🚀 Live Preview & Architecture

- **Primary Technologies**: React 18, Vite 6, Tailwind CSS, Lucide Icons
- **Theme**: Dark Futuristic Glassmorphism (`#070a12`) with Neon Glow Highlights
- **Deployment Target**: GitHub Pages (via GitHub Actions)

---

## 🛠️ Tech Stack

| Domain | Technologies |
|---|---|
| **Frontend Framework** | React 18 + Vite 6 |
| **Styling & Effects** | Tailwind CSS, Backdrop-blur, Neon CSS Gradients, Custom Animations |
| **Icons** | Lucide React |
| **Typography** | Space Grotesk (Headings), Inter (Body), JetBrains Mono (Code) |
| **Deployment** | GitHub Pages + GitHub Actions CI/CD (`deploy.yml`) |

---

## 📁 Project Structure

```
loki-porfololi/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── assets/
│   │   ├── profile.jpg           # Authentic profile photo
│   │   └── Lohith_V_Resume.pdf   # Verified downloadable resume PDF
│   └── favicon.svg               # Futuristic brand favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky frosted glass navbar with active section spy
│   │   ├── Hero.jsx              # Hero with neon typography & orbital photo frame
│   │   ├── About.jsx             # About section with 4 compact info cards
│   │   ├── Skills.jsx            # Categorized glowing technology cards
│   │   ├── Services.jsx          # 4 focus cards (Python, AI/ML, Automation, APIs)
│   │   ├── Projects.jsx          # AI Web Research Assistant & architecture modal
│   │   ├── Process.jsx           # 5-step interactive glowing timeline
│   │   ├── Contact.jsx           # Direct mailto contact form & social channels
│   │   └── Footer.jsx            # Minimal futuristic footer & back-to-top button
│   ├── data/
│   │   └── portfolio.js          # Centralized data file (bio, skills, links, projects)
│   ├── App.jsx                   # Layout assembly with ambient glows & grid pattern
│   ├── index.css                 # Custom glassmorphism, neon tokens & animations
│   └── main.jsx                  # React DOM mount
├── index.html                    # SEO metadata, Open Graph tags & Google Fonts
├── vite.config.js                # Vite configured with base: './' for GitHub Pages
├── tailwind.config.js            # Dark theme, neon shadows & custom keyframes
├── package.json
└── README.md
```

---

## 💻 Local Development

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`.

### 4. Build for Production
```bash
npm run build
```
The optimized static bundle will be output to the `dist/` directory with relative asset paths.

---

## 🌐 Deploying to GitHub Pages

This repository is pre-configured for automated GitHub Pages deployment using GitHub Actions.

### Step 1: Initialize Git & Commit
If you haven't initialized Git yet:
```bash
git init
git add .
git commit -m "feat: modern futuristic portfolio for Park"
```

### Step 2: Add Remote & Push to Main
Replace `<USERNAME>` and `<REPO_NAME>` with your GitHub details:
```bash
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repository Settings
1. Go to your GitHub repository on github.com.
2. Navigate to **Settings** ➔ **Pages**.
3. Under **Build and deployment** ➔ **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!

### Step 4: Expected Live URL
Your portfolio will be live at:
```
https://<USERNAME>.github.io/<REPO_NAME>/
```
Because Vite is configured with `base: './'`, all assets, scripts, images, and fonts will load properly without blank screen or 404 errors.

---

## ✏️ Customization & Updating Content

All personal content is centralized in **`src/data/portfolio.js`**. You can easily modify:

- **Contact Info & Social Links**: Email, phone, LinkedIn, GitHub.
- **Projects**: Add new repositories, screenshots, and live demo links.
- **Skills**: Update categories and notes.
- **Resume File**: Place any updated PDF inside `public/assets/` and update `resumeUrl` in `src/data/portfolio.js`.

---

## 📄 License
© 2026 Lohith V (Park). All rights reserved.

