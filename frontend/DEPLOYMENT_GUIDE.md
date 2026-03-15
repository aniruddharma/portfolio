# Aniruddha Dharma - Portfolio Deployment Guide

## Quick Summary
Your portfolio is ready! The app fetches all content **directly from your Google Sheet** — no API keys needed. Here's what you need to do to get it live.

---

## Step 1: Add Your Resume Link to Google Sheet (IMPORTANT)

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1KIT7gKgiF2sIWRLZXFcaAD2x_Urv1XuyTiMy5D5C0vo
2. Go to the **PERSONAL_INFO** tab
3. Find the `Resume_PDF_URL` column
4. Paste your Google Drive resume link (e.g., `https://drive.google.com/file/d/YOUR_FILE_ID/view`)
   - Make sure your resume PDF is set to "Anyone with the link can view"

---

## Step 2: Push Code to GitHub

Open your terminal and run these commands:

```bash
cd /path/to/portfolio-repo   # wherever you cloned your repo

git add .
git commit -m "Fix: Google Sheets integration, Drive image support, Vercel analytics"
git push origin main
```

**Note:** Use your GitHub Personal Access Token as the password if prompted.
- Generate one at: https://github.com/settings/tokens (Scopes: repo)

---

## Step 3: Deploy on Vercel

1. Go to https://vercel.com/dashboard
2. Find your "portfolio" project
3. Click **Redeploy** (no changes to settings needed)

**Important Vercel Settings** (one-time setup):
- **Root Directory:** `frontend`
- **Framework Preset:** Create React App
- **Build Command:** `yarn build`  
- **Output Directory:** `build`

**No environment variables needed** — the app fetches Google Sheets data directly in the browser.

---

## Step 4: Activate Contact Form

1. Submit the contact form on your live Vercel site **once** (with any test message)
2. Check `aniruddharma@gmail.com` for a confirmation email from FormSubmit.co
3. Click the **activation link** in that email
4. From now on, all contact form submissions will arrive in your inbox!

---

## How Your Portfolio Updates

- **Hero section, Projects**: Updates automatically from your Google Sheet (refreshes every 5 minutes)
- **Experience, Skills, Education**: Hardcoded with rich formatted data from your resume
- **Images**: Google Drive images work automatically via thumbnail conversion

## Google Sheet Column Reference

| Sheet Tab | Key Columns |
|-----------|-------------|
| PERSONAL_INFO | Name, Title, Bio, Email, Phone, LinkedIn_URL, Profile_Photo_URL, Resume_PDF_URL |
| PROJECTS | Title, Category, Description, Impact, Technologies, Screenshot_URLs, Screenshot_Captions, Audio_URLs, Audio_Titles, Status |

**Screenshot_URLs format:** Separate multiple URLs with ` | ` (space-pipe-space)  
Example: `https://drive.google.com/file/d/ABC/view | https://drive.google.com/file/d/XYZ/view`

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not showing | Make sure Google Drive files are set to "Anyone with link can view" |
| Resume button shows toast | Add Resume_PDF_URL to Google Sheet |
| Contact form not working | Click activation link from formsubmit.co email |
| Vercel build fails | Check that Root Directory is set to `frontend` in Vercel project settings |
