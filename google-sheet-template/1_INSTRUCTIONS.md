# PORTFOLIO MANAGEMENT SHEET - HOW TO USE

## OVERVIEW
This Google Sheet controls ALL content on your portfolio website.
Changes you make here will appear on your site within 5 minutes
(or instantly if you click "Refresh Now" button on the website).

---

## TAB GUIDE - What Each Tab Controls

### 📋 Tab 2: PERSONAL INFO
- **Updates:** Hero section (name, title, bio, contact info)
- **How often to edit:** Rarely (only when contact info changes)

### 💼 Tab 3: PROJECTS  
- **Updates:** Featured Projects section
- **How often to edit:** Monthly (when you complete new projects)
- **Add rows to add more projects**

### 🏢 Tab 4: EXPERIENCE
- **Updates:** Work Experience section  
- **How often to edit:** When you change jobs or get promotions
- **Add rows to add more positions**

### 🎯 Tab 5: SKILLS
- **Updates:** Skills & Expertise section
- **How often to edit:** When you learn new skills/tools
- **Add rows to add more skills**

### 🎓 Tab 6: EDUCATION
- **Updates:** Education section
- **How often to edit:** Rarely (only for new degrees/certifications)
- **Add rows for additional education**

### 🎨 Tab 7: MEDIA LIBRARY (OPTIONAL)
- **Helper tab to organize all your image/video/audio URLs**
- **Not directly used by website, just for your reference**

---

## HOW TO ADD IMAGES, VIDEOS, AUDIO

### STEP 1: Upload to Cloud Storage
**Options:**
- **Google Drive** (Free) - Recommended
- **ImgBB** (Free image hosting) - https://imgbb.com
- **YouTube** (For videos)
- **SoundCloud** (For audio)

### STEP 2: Get Public Link
- **Google Drive:** Right-click → Share → Anyone with link → Copy link
- **ImgBB:** Upload → Copy "Direct link"
- **YouTube:** Share → Copy link

### STEP 3: Paste Link in Appropriate Column
- **Images:** Paste in "Screenshot_URLs" column
- **Videos:** Paste in "Video_URLs" column  
- **Audio:** Paste in "Audio_URLs" column

### FORMAT:
- **Single file:** `https://your-url.com/file.jpg`
- **Multiple files:** `url1 | url2 | url3` (separate with `|` pipe symbol)

---

## TIPS FOR LONG-TERM USE

### ✅ DO:
- Add new rows at the bottom to add content
- Copy-paste existing rows to maintain format
- Use Tab 7 (Media Library) to organize links first
- Test links before pasting (click to verify they work)
- Keep backup copy of sheet

### ❌ DON'T:
- Delete column headers (Row 1)
- Change column names (breaks website connection)
- Leave required fields empty (marked with *)
- Use special characters in IDs (use numbers only)
- Delete the Instructions tab

---

## QUICK TROUBLESHOOTING

**Q: Changes not appearing on website?**
A: Wait 5 minutes OR click "Refresh Now" button on website

**Q: Website looks broken?**
A: Check if you accidentally deleted a column header. Restore from backup.

**Q: Image not showing?**
A: Verify link is public and accessible. Test by pasting URL in browser.

**Q: Video not playing?**
A: Ensure YouTube/Vimeo link is correct. Make sure video is not private.

**Q: Need help?**
A: Contact developer with specific issue description

---

## BEST PRACTICES

1. **Always test links before adding** - Click URL to verify it works
2. **Use descriptive captions** - Help users understand what they're seeing
3. **Organize with Display_Order** - Lower numbers appear first (1, 2, 3...)
4. **Use Status wisely** - Set to "Hidden" to temporarily remove items without deleting
5. **Keep Media Library updated** - Log all uploads for easy reference
6. **Make regular backups** - File → Make a copy (weekly recommended)

---

## SEPARATOR GUIDE

When adding multiple items in one cell, use `|` (pipe symbol):

**Examples:**
- Technologies: `React | Node.js | MongoDB | AWS`
- Image URLs: `https://image1.jpg | https://image2.jpg | https://image3.jpg`
- Captions: `Dashboard View | Analytics Page | Mobile Interface`

**IMPORTANT:** 
- Number of captions MUST match number of URLs
- Use same separator `|` everywhere
- Add spaces around `|` for readability (optional)

---

## GOOGLE DRIVE LINK SETUP

### For Images/Audio/Video Files:

1. Upload file to Google Drive
2. Right-click on file → Share
3. Change to "Anyone with the link"
4. Change permission to "Viewer"
5. Copy link
6. Paste in appropriate column

### Making Direct Image Links:

If you need direct image links (faster loading):
1. Upload to ImgBB.com (free, no account needed)
2. Upload image
3. Copy "Direct link" (ends with .jpg or .png)
4. Paste in Screenshot_URLs

---

## VIDEO EMBEDDING TIPS

### YouTube:
1. Upload video to YouTube
2. Set privacy: Public or Unlisted
3. Copy share link: `https://youtube.com/watch?v=VIDEO_ID`
4. Paste in Video_URLs column

### Vimeo:
1. Upload to Vimeo
2. Set privacy settings
3. Copy video link
4. Paste in Video_URLs column

Videos will appear in your project gallery alongside images with a play button overlay.

---

## SUPPORT & UPDATES

- **Version:** 1.0
- **Last Updated:** 2025
- **Questions?** Contact your developer
- **Found a bug?** Report with screenshot of issue

---

**Ready to start editing? Go to Tab 2: PERSONAL INFO!** 🚀
