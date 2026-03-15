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
7. Contact form sending submissions to aniruddharma@gmail.com
8. Working "Download Resume" button pulling link from Google Sheet

## Architecture
```
/app/frontend/           # Vercel project root
├── api/
│   └── portfolio-data.js  # Serverless function (unused now, kept for reference)
├── src/
│   ├── components/      # All UI components
│   │   ├── Hero.jsx     # Uses Google Sheets personalInfo
│   │   ├── Projects.jsx # Uses Google Sheets projects data
│   │   ├── Experience.jsx  # Hardcoded rich data
│   │   ├── Skills.jsx      # Hardcoded
│   │   ├── Education.jsx   # Hardcoded
│   │   ├── About.jsx       # Hardcoded
│   │   ├── Contact.jsx     # FormSubmit.co integration
│   │   └── Header.jsx      # Navigation
│   ├── context/
│   │   └── PortfolioDataContext.jsx  # Provides sheet data to app
│   ├── services/
│   │   └── portfolioDataService.js  # Fetches from gviz API directly
│   └── App.js           # Root: PortfolioDataProvider + Analytics + SpeedInsights
├── vercel.json          # Vercel build config
└── package.json
```

## Tech Stack
- **Frontend:** React, TailwindCSS, Shadcn UI
- **Data:** Google Sheets via gviz API (no API key needed for public sheets)
- **Deployment:** Vercel + GitHub
- **Contact Form:** FormSubmit.co
- **Analytics:** @vercel/analytics + @vercel/speed-insights

## Google Sheet
- **URL:** https://docs.google.com/spreadsheets/d/1KIT7gKgiF2sIWRLZXFcaAD2x_Urv1XuyTiMy5D5C0vo
- **Tabs:** PERSONAL_INFO, PROJECTS, EXPERIENCE, SKILLS, EDUCATION

## Key Integrations
- **Google Sheets gviz API:** `https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/tq?tqx=out:json&sheet={SHEET_NAME}`
- **FormSubmit.co:** `https://formsubmit.co/aniruddharma@gmail.com`
- **Vercel Analytics:** `<Analytics />` in App.js
- **Vercel Speed Insights:** `<SpeedInsights />` in App.js

---

## What's Been Implemented (as of March 2026)

### ✅ Complete
- Full portfolio UI with all sections
- Google Sheets integration (direct gviz fetch from browser, no API key)
- Google Drive image URL conversion to thumbnail format
- Projects section dynamically loads from Google Sheets
- Hero section dynamically loads from Google Sheets (name, bio, photo, resume URL)
- Experience, Skills, Education: hardcoded with rich formatted data
- Download Resume button (reads Resume_PDF_URL from sheet, toast if empty)
- Contact form with FormSubmit.co (needs one-time activation)
- Vercel Analytics + Speed Insights integrated
- vercel.json with proper build config
- Image lightbox with keyboard navigation
- Audio playback in project modals
- Horizontal scrollable screenshots in project cards
- data-testid attributes on all key interactive elements

### 🔵 User Actions Required
1. Add `Resume_PDF_URL` to Google Sheet PERSONAL_INFO tab
2. Push code to GitHub (`git push origin main`)
3. Redeploy on Vercel
4. Activate FormSubmit.co by clicking confirmation email after first form submission

---

## Backlog / Future Tasks

### P1 (High Priority)
- Video player support for YouTube/Vimeo links in project modals
- Mobile responsive testing (Header mobile menu)

### P2 (Medium Priority)
- Make Experience section pull from Google Sheet (currently hardcoded)
- Make Skills section pull from Google Sheet
- Add loading skeleton for initial page load
- SEO meta tags (Open Graph for social sharing)

### P3 (Low Priority / Nice to Have)
- Dark mode toggle
- Print-friendly version
- Visitor counter / analytics dashboard
- PDF export of portfolio
