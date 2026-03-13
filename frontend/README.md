# Aniruddha Dharma - Portfolio

A modern, dynamic portfolio website built with React and integrated with Google Sheets for easy content management.

## 🌟 Features

- ✅ **Google Sheets Integration** - Edit content via spreadsheet
- ✅ **Smart Caching** - 5-minute auto-refresh + manual refresh
- ✅ **Shimmer Loading** - Beautiful loading states
- ✅ **Video Support** - Embed YouTube/Vimeo videos in projects
- ✅ **Audio Files** - Add demo recordings and walkthroughs
- ✅ **Image Galleries** - Horizontal scrolling with lightbox
- ✅ **Responsive Design** - Works on all devices
- ✅ **Free Hosting** - Deployed on Vercel ($0/month)
- ✅ **Auto-Deploy** - Push to GitHub → Auto-deploys to Vercel

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
cd frontend
yarn install

# Start development server
yarn start
```

Visit `http://localhost:3000`

### Deploy to Vercel

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for complete deployment guide.

**Quick deploy:**
1. Push this repo to GitHub
2. Import to Vercel
3. Deploy!

## 📊 Content Management

### Google Sheet Structure

Your portfolio content is managed via Google Sheet:
- **Sheet URL:** [View Sheet](https://docs.google.com/spreadsheets/d/1KIT7gKgiF2sIWRLZXFcaAD2x_Urv1XuyTiMy5D5C0vo/edit)

**Tabs:**
1. PERSONAL_INFO - Name, email, bio, profile photo
2. PROJECTS - Portfolio projects with images/videos/audio
3. EXPERIENCE - Work history
4. SKILLS - Technical skills categorized
5. EDUCATION - Educational background
6. MEDIA_LIBRARY - Media file tracker (optional)

### How to Update Content

1. **Edit Google Sheet** - Change text, add rows, update URLs
2. **Wait 5 minutes** - Auto-refresh fetches new data
3. **OR Click "Refresh Content"** - Manual instant refresh (footer button)
4. **Done!** - No code deployment needed

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Tailwind CSS
- Shadcn UI Components
- Lucide React Icons

**Backend:**
- Vercel Serverless Functions
- Google Sheets API (public sheet)

**Hosting:**
- Vercel (Free tier)
- CDN-powered
- Automatic HTTPS

## 📁 Project Structure

```
frontend/
├── api/
│   └── portfolio-data.js       # Serverless function for Google Sheets
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx          # Includes refresh button
│   │   ├── ShimmerLoading.jsx  # Loading states
│   │   └── ui/                 # Shadcn components
│   ├── context/
│   │   └── PortfolioDataContext.jsx  # Data management
│   ├── services/
│   │   └── portfolioDataService.js   # API service
│   ├── pages/
│   │   └── Portfolio.jsx
│   └── App.js
├── vercel.json                 # Vercel configuration
├── package.json
└── README.md
```

## 💰 Cost

**Total: $0/month**

- Vercel Hosting: Free
- Serverless Functions: Free (100GB bandwidth)
- Google Sheets: Free
- SSL Certificate: Free (auto)
- Custom Domain Support: Free (domain registration separate)

## 📄 License

MIT License - feel free to use for your own portfolio!

## 👤 Author

**Aniruddha Dharma**
- Product Experience Lead
- IIT Roorkee + IIM Bangalore
- [LinkedIn](https://www.linkedin.com/in/aniruddharma)

---

**Questions?** See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed setup guide.
