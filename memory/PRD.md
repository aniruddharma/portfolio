# Portfolio Website - PRD

## Original Problem Statement
Build a personal portfolio website for Aniruddha Dharma to showcase work experience, skills, and projects for job interview purposes. Non-coder user must be able to update content via Google Sheets without developer help.

## User Persona
- **Name:** Aniruddha Dharma
- **Role:** Product Experience Lead at Airtel
- **Goal:** Impress recruiters at job interviews with a professional portfolio
- **Technical Level:** Non-coder; uses Google Sheets for content management

## Core Requirements
1. Professional modern design highlighting Product Management expertise
2. Sections: Hero, About, Experience, Skills, Education, Projects, Contact
3. Projects with screenshot galleries, audio playback, video support
4. Google Sheets as CMS — user can update content without coding
5. Vercel hosting (user's own account) deployed from GitHub
6. Vercel Analytics + Speed Insights for visitor tracking
7. Contact form sending submissions to email from Google Sheet
8. Working "Download Resume" button pulling link from Google Sheet

## Architecture
```
/app/frontend/           # Vercel project root
├── api/
│   └── portfolio-data.js  # Serverless function (kept for reference)
├── src/
│   ├── components/
│   │   ├── Hero.jsx        # Dynamic: personalInfo (Name, Title, Bio, Photo, Resume)
│   │   ├── About.jsx       # Dynamic: Bio from personalInfo; highlight cards hardcoded
│   │   ├── Experience.jsx  # Dynamic from Google Sheets EXPERIENCE tab
│   │   ├── Skills.jsx      # Dynamic from Google Sheets SKILLS tab
│   │   ├── Education.jsx   # Partially dynamic (data prop passed)
│   │   ├── Projects.jsx    # Dynamic from Google Sheets PROJECTS tab
│   │   ├── Contact.jsx     # Dynamic: email/phone/LinkedIn from personalInfo
│   │   ├── Footer.jsx      # Dynamic: personalInfo + social share bar
│   │   └── Header.jsx      # Static navigation
│   ├── context/
│   │   └── PortfolioDataContext.jsx  # Provides sheet data to app
│   ├── services/
│   │   └── portfolioDataService.js  # Direct gviz fetch, 5-min cache
│   └── App.js           # Root: PortfolioDataProvider + Analytics + SpeedInsights
├── public/index.html    # SEO Open Graph + Twitter Card meta tags
├── vercel.json          # Vercel build config
└── package.json
```

## Tech Stack
- **Frontend:** React, TailwindCSS, Shadcn UI
- **Data:** Google Sheets via gviz API (no API key needed for public sheets)
- **Caching:** 5-minute in-memory cache in portfolioDataService
- **Deployment:** Vercel + GitHub
- **Contact Form:** FormSubmit.co (email from Google Sheet)
- **Analytics:** @vercel/analytics + @vercel/speed-insights

## Google Sheet
- **URL:** https://docs.google.com/spreadsheets/d/1KIT7gKgiF2sIWRLZXFcaAD2x_Urv1XuyTiMy5D5C0vo
- **Tabs:** PERSONAL_INFO, PROJECTS, EXPERIENCE, SKILLS, EDUCATION

## Key Integrations
- **Google Sheets gviz API:** Fetches directly in browser — no API key needed
- **FormSubmit.co:** Uses Email from PERSONAL_INFO sheet tab
- **Vercel Analytics + Speed Insights:** Active in App.js
- **SEO:** Open Graph + Twitter Card in public/index.html

---

## What's Been Implemented (as of March 2026)

### ✅ Complete & Dynamic from Google Sheet
- Hero section: Name, Title, Bio, Photo, Email, Phone, LinkedIn, Resume URL
- About section: Bio text from sheet; highlight cards static
- Projects section: Full project cards with screenshots, audio, categories from sheet
- Experience section: All achievements, metrics, roles from sheet
- Skills section: All categories and skills dynamically from sheet
- Contact section: Email, Phone, LinkedIn from sheet
- Footer: Dynamic contact info, name, title; social share bar
- Resume Download: Handles Google Drive URLs, uses anchor element (no popup blocker)
- Google Drive image URLs: Auto-converted to thumbnail format
- SEO meta tags: Open Graph + Twitter Card in index.html
- Social share bar: LinkedIn, X/Twitter, Copy Link — at bottom of page
- Vercel Analytics + Speed Insights integrated
- 5-minute data caching with manual refresh button

### 🔵 User Actions Still Needed
1. Redeploy on Vercel (latest commit already on GitHub)
2. Make sure each Google Drive image file is set to "Anyone with link can view"

---

## Backlog / Future Tasks

### P1 (High Priority)
- Make Education section pull from Google Sheet (currently accepts data prop but component is mostly static)
- Video player support for YouTube/Vimeo links in project modals

### P2 (Medium Priority)
- About section highlight cards (stats like "10+ Years Experience") — make dynamic from sheet
- Mobile responsive testing (Header mobile menu)

### P3 (Low Priority / Nice to Have)
- Dark mode toggle
- Print-friendly PDF export of portfolio
- Visitor counter display
