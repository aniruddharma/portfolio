# 🚀 STEP-BY-STEP DEPLOYMENT GUIDE
## Deploy Your Portfolio to GitHub + Vercel (Production-Ready)

**Time Required:** 10-15 minutes  
**Cost:** $0/month forever  
**Result:** Professional portfolio ready to share with recruiters

---

## 📋 PREREQUISITES

✅ You have GitHub account  
✅ You have Vercel account  
✅ GitHub is connected with Emergent  
✅ Google Sheet is set up and public

---

## STEP 1: PUSH CODE TO GITHUB (5 minutes)

### 1.1 Create GitHub Repository

1. Go to https://github.com
2. Click **"+"** (top right) → **"New repository"**
3. Repository name: `portfolio` (or any name you prefer)
4. Description: "Professional portfolio with Google Sheets integration"
5. Keep it **Public** (required for Vercel free tier)
6. **DO NOT** check "Initialize with README" (we already have files)
7. Click **"Create repository"**

### 1.2 Push Your Code

Copy the commands from GitHub (they'll look like this):

```bash
# Navigate to your frontend folder
cd /app/frontend

# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push code to GitHub
git push -u origin main
```

**Replace** `YOUR_USERNAME` and `portfolio` with your actual GitHub username and repo name!

### 1.3 Verify on GitHub

1. Refresh your GitHub repository page
2. You should see all files uploaded
3. Check that `vercel.json` and `api/portfolio-data.js` are there

✅ **Step 1 Complete!** Your code is now on GitHub.

---

## STEP 2: DEPLOY TO VERCEL (5 minutes)

### 2.1 Import Project to Vercel

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** button (top right)
3. Select **"Project"**
4. You'll see "Import Git Repository" page

### 2.2 Select Your GitHub Repository

1. Look for your repository (e.g., `YOUR_USERNAME/portfolio`)
2. Click **"Import"** button next to it
3. If you don't see it, click **"Adjust GitHub App Permissions"** → Give Vercel access

### 2.3 Configure Project

Vercel should auto-detect settings. Verify:

```
Framework Preset: Create React App
Root Directory: ./frontend (IMPORTANT!)
Build Command: yarn build
Output Directory: build
Install Command: yarn install
```

**IMPORTANT:** Set **Root Directory** to `frontend` or `.` depending on your structure!

### 2.4 Environment Variables

**Skip this!** No environment variables needed (Google Sheet is public).

### 2.5 Deploy!

1. Click **"Deploy"** button
2. Wait ~2 minutes (watch the build logs)
3. You'll see: ✅ "Congratulations! Your project has been deployed."

---

## STEP 3: GET YOUR LIVE URL (1 minute)

### 3.1 Copy Your Vercel URL

After deployment:
1. You'll see your live URL: `https://portfolio-xyz123.vercel.app`
2. Click **"Visit"** to see your live portfolio
3. Copy the URL - this is what you share with recruiters!

### 3.2 Test Your Portfolio

Visit the URL and verify:
- ✅ Portfolio loads correctly
- ✅ Your profile photo appears
- ✅ All sections display
- ✅ Projects show with images
- ✅ No broken links

---

## STEP 4: VERIFY GOOGLE SHEETS INTEGRATION (2 minutes)

### 4.1 Test the API

Visit: `https://your-portfolio-url.vercel.app/api/portfolio-data`

You should see JSON data from your Google Sheet!

If you see error:
- Check Google Sheet is set to "Anyone with link can view"
- Verify sheet ID in `/api/portfolio-data.js` matches your sheet

### 4.2 Test Content Updates

1. Edit your Google Sheet (change a project title)
2. Wait 5 minutes
3. Refresh your portfolio page
4. You should see the updated content!

---

## STEP 5: ADD CUSTOM DOMAIN (OPTIONAL - 10 minutes)

### 5.1 Buy Domain (if you don't have one)

Recommended registrars:
- Namecheap: ~$10/year
- GoDaddy: ~$12/year
- Google Domains: ~$12/year

### 5.2 Add Domain to Vercel

1. In Vercel Dashboard → Your Project
2. Go to **Settings** → **Domains**
3. Click **"Add"**
4. Enter your domain: `aniruddhadharma.com`
5. Click **"Add"**

### 5.3 Configure DNS

Vercel will show DNS instructions:

**Option A: Using Nameservers** (Recommended)
1. Go to your domain registrar
2. Change nameservers to Vercel's nameservers
3. Wait 1-24 hours for propagation

**Option B: Using CNAME**
1. Add CNAME record: `www` → `cname.vercel-dns.com`
2. Add A record: `@` → `76.76.21.21`
3. Wait 1-24 hours

### 5.4 Verify

1. Visit your custom domain
2. You should see your portfolio!
3. HTTPS is automatic (Vercel provides SSL certificate)

---

## 🎯 YOUR PORTFOLIO IS NOW LIVE!

### Share These URLs:

**Vercel URL (Default):**
`https://your-portfolio-xyz123.vercel.app`

**Custom Domain (If added):**
`https://your-domain.com`

**Resume Download (If added):**
`https://your-portfolio-url.vercel.app/resume.pdf`

---

## 📊 HOW TO UPDATE CONTENT

### Method 1: Update Google Sheet (Easy - No Code)

1. Open your Google Sheet
2. Edit content (projects, experience, skills)
3. Save (auto-saves)
4. Wait 5 minutes
5. Changes appear on your portfolio!

### Method 2: Update Code (For Design Changes)

1. Edit files locally in `/app/frontend/src/`
2. Commit changes: `git add . && git commit -m "Update design"`
3. Push to GitHub: `git push origin main`
4. Vercel auto-deploys in ~30 seconds
5. Changes are live!

---

## 🔥 QUICK REFERENCE

### Useful Commands:

```bash
# Push new changes to GitHub
git add .
git commit -m "Your message"
git push origin main

# Vercel CLI (optional - for manual deploys)
npm install -g vercel
vercel --prod
```

### Vercel Dashboard:
- View deployments: https://vercel.com/dashboard
- Check logs: Project → Deployments → Click deployment → View logs
- Environment variables: Project → Settings → Environment Variables

### Google Sheet:
- Your sheet: https://docs.google.com/spreadsheets/d/1KIT7gKgiF2sIWRLZXFcaAD2x_Urv1XuyTiMy5D5C0vo/edit

---

## ✅ FINAL CHECKLIST

Before sharing with recruiters:

- [ ] Portfolio loads at live URL
- [ ] All sections display correctly
- [ ] Images load properly
- [ ] Links work (LinkedIn, email, phone)
- [ ] Projects show with descriptions
- [ ] No console errors (press F12 to check)
- [ ] Mobile responsive (test on phone)
- [ ] Fast loading (< 2 seconds)
- [ ] Custom domain configured (optional)
- [ ] Resume PDF uploaded and accessible (optional)

---

## 🆘 TROUBLESHOOTING

### Problem: Vercel build fails

**Solution:**
1. Check build logs in Vercel dashboard
2. Verify `package.json` has correct scripts
3. Make sure `frontend` folder is set as root directory
4. Check for syntax errors in code

### Problem: API returns 404

**Solution:**
1. Verify `/api` folder exists in your repository
2. Check file is named `portfolio-data.js` (not `.ts` or `.tsx`)
3. Ensure Vercel detected it as serverless function

### Problem: Google Sheet data not showing

**Solution:**
1. Verify sheet is public ("Anyone with link can view")
2. Check sheet ID in `/api/portfolio-data.js` matches
3. Test API directly: `/api/portfolio-data`
4. Check sheet tab names match exactly: `PERSONAL_INFO`, `PROJECTS`, etc.

### Problem: Images not loading

**Solution:**
1. Verify image URLs in Google Sheet are public
2. Test URLs by pasting in browser
3. Use direct links (not Google Drive preview links)

---

## 💡 PRO TIPS

1. **Test locally first:** Run `yarn start` to test changes before pushing
2. **Use preview deployments:** Every Git push creates a preview URL
3. **Monitor performance:** Use Vercel Analytics (free)
4. **Set up notifications:** Get email when deployments succeed/fail
5. **Custom OG images:** Add Open Graph images for social sharing
6. **SEO optimization:** Add meta descriptions and titles

---

## 📞 NEED HELP?

**Vercel Support:**
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions

**GitHub Support:**
- Help: https://docs.github.com

**Your Developer:**
- Check the code comments
- Review `VERCEL_DEPLOYMENT.md`
- Google Sheets template instructions

---

## 🎉 CONGRATULATIONS!

Your portfolio is now:
- ✅ **Live** on the internet
- ✅ **Professional** and polished
- ✅ **Easy to update** via Google Sheets
- ✅ **Free** to host forever
- ✅ **Fast** with CDN
- ✅ **Ready** to share with recruiters

**Share your portfolio URL with confidence!** 🚀

### Next Steps:
1. Add your portfolio URL to LinkedIn
2. Include in your resume
3. Share with recruiters
4. Update regularly with new projects

---

**Your Live Portfolio:** `https://your-portfolio-url.vercel.app`

**Ready to impress recruiters!** 💼✨
