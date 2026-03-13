# 📊 Portfolio Google Sheet Template

This package contains everything you need to set up your Portfolio Content Management Google Sheet.

## 📦 What's Included

```
google-sheet-template/
├── SETUP_GUIDE.md              ← Start here! Complete setup instructions
├── README.md                   ← This file
├── 1_INSTRUCTIONS.md           ← Instructions tab (copy-paste into sheet)
├── 2_PERSONAL_INFO.csv         ← Your personal info
├── 3_PROJECTS.csv              ← All your projects  
├── 4_EXPERIENCE.csv            ← Work experience
├── 5_SKILLS.csv                ← Skills & expertise
├── 6_EDUCATION.csv             ← Educational background
└── 7_MEDIA_LIBRARY.csv         ← Media file tracker (optional)
```

## 🚀 Quick Start (5 Minutes)

### Step 1: Download All Files
Download this entire folder to your computer.

### Step 2: Follow Setup Guide
Open `SETUP_GUIDE.md` and follow the step-by-step instructions.

### Step 3: Import to Google Sheets
1. Create new Google Sheet
2. Import each CSV file as a separate tab
3. Format and you're done!

## 📋 What Each File Does

| File | Purpose | Import To |
|------|---------|-----------|
| `1_INSTRUCTIONS.md` | How to use the sheet | INSTRUCTIONS tab |
| `2_PERSONAL_INFO.csv` | Name, email, bio, photo | PERSONAL_INFO tab |
| `3_PROJECTS.csv` | All projects with images/videos/audio | PROJECTS tab |
| `4_EXPERIENCE.csv` | Work history & achievements | EXPERIENCE tab |
| `5_SKILLS.csv` | Skills categorized | SKILLS tab |
| `6_EDUCATION.csv` | Educational background | EDUCATION tab |
| `7_MEDIA_LIBRARY.csv` | Media file organization | MEDIA_LIBRARY tab |

## ✨ Key Features

### ✅ Pre-filled with Your Data
All your current portfolio content is already included:
- Your name, contact info, photo
- 4 projects (LLM Voice Bot, RAG Chatbot, App Revamp, API Platform)
- 3 work experiences (Airtel, 159 Solutions, Voith)
- 28 skills across 3 categories
- 2 educational degrees (IIM Bangalore, IIT Roorkee)

### ✅ Video Support Included
Projects tab has `Video_URLs` column ready for:
- YouTube videos
- Vimeo videos
- Any video embed URLs

### ✅ Easy to Expand
Simply add new rows to add more:
- Projects
- Work experiences
- Skills
- Media files

### ✅ Clear Instructions
Every tab has built-in guidance on:
- What each column means
- How to format data
- Where it appears on website

## 🎯 How It Works

1. **You edit the Google Sheet** (easy spreadsheet interface)
2. **Backend reads from sheet** every 5 minutes (or manually refresh)
3. **Website updates automatically** with your changes

**No coding needed!** ✨

## 📸 Media Files (Images/Videos/Audio)

### Where to Upload Media:

**Free Options:**
- **Images:** Google Drive, ImgBB.com
- **Videos:** YouTube (recommended), Vimeo
- **Audio:** Google Drive, SoundCloud

### How to Add Media:

1. Upload file to cloud storage
2. Get public link
3. Paste link in appropriate column:
   - `Screenshot_URLs` for images
   - `Video_URLs` for videos
   - `Audio_URLs` for audio files

### Multiple Files:
Separate with `|` (pipe symbol):
```
url1 | url2 | url3 | url4
```

## 🔧 After Setup

### Connect to Website:
1. Complete Google Sheet setup
2. Set sharing to "Anyone with link - Viewer"
3. Copy sheet URL from browser
4. Give URL to developer for backend integration

### Start Editing:
- Go to any tab
- Edit content directly
- Changes appear on website in 5 minutes
- Or click "Refresh Now" on website for instant update

## 📚 Documentation

- **`SETUP_GUIDE.md`** - Detailed setup instructions
- **`1_INSTRUCTIONS.md`** - How to use the sheet (also in sheet itself)
- Tab-specific instructions in each CSV file

## 🎨 Customization

You can customize:
- ✅ Add/remove projects
- ✅ Update work experience
- ✅ Add new skills
- ✅ Change display order
- ✅ Hide/show items (Status column)
- ✅ Upload new media
- ✅ Update contact info

## ⚠️ Important Notes

### DON'T:
- ❌ Change column header names (breaks website)
- ❌ Delete required columns
- ❌ Use special characters in IDs
- ❌ Leave required fields empty (marked with *)

### DO:
- ✅ Add new rows for more content
- ✅ Copy-paste existing rows to maintain format
- ✅ Test media links before adding
- ✅ Make backup copies regularly
- ✅ Use Status column to hide items temporarily

## 🆘 Troubleshooting

**Q: CSV files won't import?**
A: Try Method B in setup guide (copy-paste instead)

**Q: Special characters look weird?**
A: Select all → Format → Number → Plain text

**Q: Need more columns?**
A: Add to the right, don't insert between existing columns

**Q: Website not updating?**
A: Wait 5 minutes or click "Refresh Now" on website

## 📞 Support

If you encounter issues:
1. Check `SETUP_GUIDE.md` for common solutions
2. Refer to `INSTRUCTIONS` tab in the sheet
3. Contact your developer with specific question

## 🎉 You're All Set!

Follow the `SETUP_GUIDE.md` to import everything to Google Sheets.

**Estimated setup time:** 5-10 minutes
**Difficulty:** Easy (if you know Google Sheets)

---

**Questions?** Check the SETUP_GUIDE.md or contact your developer.

**Ready to start?** → Open `SETUP_GUIDE.md` now! 🚀
