# 📄 RESUME DOWNLOAD SETUP

## Current Status:
The download button is set up, but you need to add your resume link!

---

## How to Fix Resume Download:

### Step 1: Upload Resume to Google Drive

1. Go to Google Drive
2. Upload your resume PDF
3. Right-click on the file → **"Get link"**
4. Make sure it's set to **"Anyone with the link can view"**
5. Copy the link

### Step 2: Get the Direct Download Link

Your Google Drive link looks like:
```
https://drive.google.com/file/d/1ABC123XYZ456/view?usp=sharing
```

**Extract the FILE_ID:** `1ABC123XYZ456` (the part between `/d/` and `/view`)

**Your direct download link is:**
```
https://drive.google.com/uc?export=download&id=1ABC123XYZ456
```

### Step 3: Update Hero.jsx

Open `/app/frontend/src/components/Hero.jsx`

Find line 13-19 and replace `YOUR_DRIVE_FILE_ID` with your actual file ID:

```javascript
const handleDownloadResume = () => {
  const resumeUrl = 'https://drive.google.com/uc?export=download&id=YOUR_ACTUAL_FILE_ID';
  window.open(resumeUrl, '_blank');
};
```

**OR** if you have the link in Google Sheet:
You can fetch it from the Google Sheets data (I can help set this up).

---

## Alternative: Host Resume on Vercel

1. Save your resume as `resume.pdf`
2. Put it in `/app/frontend/public/resume.pdf`
3. Update Hero.jsx:

```javascript
const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'Aniruddha_Dharma_Resume.pdf';
  link.click();
};
```

This is simpler and the resume lives with your code!

---

## Which method do you prefer?

1. **Google Drive** (resume lives in Drive, easy to update)
2. **Vercel/Public folder** (resume lives with your code)

Let me know and I'll help you set it up!
