# 🚀 GOOGLE SHEET TEMPLATE - SETUP GUIDE

## Quick Setup (5 Minutes)

### Step 1: Create New Google Sheet
1. Go to https://sheets.google.com
2. Click **"Blank"** to create new spreadsheet
3. Name it: **"Portfolio Content Management"**

---

### Step 2: Import All 7 Tabs

#### Method A: Import CSV Files (Easiest)

**For each file (do this 7 times):**

1. In Google Sheets, click **"+"** at bottom left to add new sheet
2. Rename the sheet:
   - Sheet 1 → `INSTRUCTIONS`
   - Sheet 2 → `PERSONAL_INFO`
   - Sheet 3 → `PROJECTS`
   - Sheet 4 → `EXPERIENCE`
   - Sheet 5 → `SKILLS`
   - Sheet 6 → `EDUCATION`
   - Sheet 7 → `MEDIA_LIBRARY`

3. **Import each CSV:**
   - Go to the sheet tab
   - Click **File → Import**
   - Click **Upload** tab
   - Select the corresponding .csv file (e.g., `2_PERSONAL_INFO.csv`)
   - Choose **"Replace current sheet"**
   - Separator type: **Comma**
   - Click **Import data**

4. Repeat for all 7 files

#### Method B: Copy-Paste (Alternative)

1. Open each CSV file in text editor
2. Copy all content
3. Paste into corresponding sheet in Google Sheets
4. Click **Data → Split text to columns**

---

### Step 3: Format the INSTRUCTIONS Tab

Since `1_INSTRUCTIONS.md` is a markdown file (not CSV), handle it differently:

1. Go to `INSTRUCTIONS` sheet
2. Open `1_INSTRUCTIONS.md` in text editor
3. Copy all text
4. Paste into cell A1 of INSTRUCTIONS sheet
5. Adjust column width to make it readable

---

### Step 4: Add Color Coding (Makes it Beautiful!)

#### For PERSONAL_INFO tab:
1. Select Row 1 (header row)
2. Click paint bucket icon
3. Choose **Blue** (`#4285F4`)
4. Make text **Bold**

#### For PROJECTS tab:
1. Select Row 1 (header row)
2. Fill color: **Blue** (`#4285F4`)
3. Make text **Bold** and **White**
4. Select Row 2 (example data)
5. Fill color: **Light Yellow** (`#FFF9C4`)

#### Repeat for all other tabs (EXPERIENCE, SKILLS, EDUCATION, MEDIA_LIBRARY)
- Row 1: Blue header
- Row 2+: Light yellow for examples

---

### Step 5: Add Data Validation (Optional but Recommended)

#### For PROJECTS tab - Status column:
1. Click on Status column (column M)
2. Click **Data → Data validation**
3. Criteria: **List of items**
4. Enter: `Active, Hidden`
5. Check **Show dropdown list in cell**
6. Click **Save**

#### Repeat for other Status columns in EXPERIENCE, SKILLS, EDUCATION tabs

---

### Step 6: Freeze Header Rows

For each tab (except INSTRUCTIONS):
1. Go to the tab
2. Click on Row 2 (first data row)
3. Click **View → Freeze → 1 row**

This keeps headers visible when scrolling!

---

### Step 7: Adjust Column Widths

For better readability:
1. **Select all columns** (click corner square)
2. Right-click on any column letter
3. Click **Resize columns → Fit to data**

Manual adjustments for:
- Description columns: 300-400px wide
- URL columns: 400-500px wide
- Short text columns: 100-150px wide

---

### Step 8: Set Sharing Permissions

**IMPORTANT:** Only needed if you want the website to read from this sheet

1. Click **Share** button (top right)
2. Click **Change to anyone with the link**
3. Set permission: **Viewer**
4. Click **Copy link**
5. **Save this link** - you'll need it for backend integration

---

## ✅ Verification Checklist

After setup, verify:

- [ ] 7 tabs created with correct names
- [ ] All data imported correctly
- [ ] Headers are blue and bold
- [ ] Example data rows are light yellow
- [ ] Column widths adjusted for readability
- [ ] Header rows frozen
- [ ] Status columns have dropdown validation
- [ ] Sheet sharing is set to "Anyone with link - Viewer"

---

## 📝 How to Use After Setup

### Adding a New Project:
1. Go to PROJECTS tab
2. Click on last row (e.g., row 5 if you have 4 projects)
3. Insert new row below
4. **Right-click on row above → Copy**
5. **Right-click on new row → Paste**
6. Update all fields with new project data
7. Change ID to next number (5, 6, 7...)
8. Upload media to Google Drive first
9. Get public links and paste in URL columns
10. Save (auto-saves)

### Adding Media (Images/Videos/Audio):

#### For Images:
1. Upload to **Google Drive** or **ImgBB.com**
2. Google Drive: Right-click → Share → Anyone with link → Copy
3. ImgBB: Upload → Copy "Direct link"
4. Paste in Screenshot_URLs column
5. Add caption in Screenshot_Captions column

#### For Videos:
1. Upload to **YouTube** (recommended)
2. Set privacy: Public or Unlisted
3. Copy share link
4. Paste in Video_URLs column

#### For Audio:
1. Upload to **Google Drive** or **SoundCloud**
2. Get public link
3. Paste in Audio_URLs column
4. Add title in Audio_Titles column

### Separating Multiple Items:
Use `|` (pipe symbol) between items:
- Images: `url1 | url2 | url3`
- Technologies: `React | Node | MongoDB`
- Captions: `Caption 1 | Caption 2 | Caption 3`

---

## 🎨 Advanced Formatting (Optional)

### Add Conditional Formatting for Status:

1. Select Status column in any tab
2. Click **Format → Conditional formatting**
3. Format rules:
   - If text equals "Active" → Green background
   - If text equals "Hidden" → Red background
4. Click **Done**

### Add Cell Comments for Guidance:

1. Right-click any cell
2. Click **Insert comment**
3. Add helpful notes for yourself
4. Click **Comment** to save

---

## 🔗 Getting Sheet URL for Backend Integration

After setup is complete:

1. Click **Share** button
2. Make sure it's set to "Anyone with link - Viewer"
3. Copy the URL from browser address bar
4. It will look like: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
5. **Save this URL** - give it to developer for backend integration

---

## 📊 Template is Ready!

You now have a fully functional Google Sheet template.

**Next steps:**
1. Test by editing some content
2. Verify all dropdowns work
3. Add your own media links
4. Share the Sheet URL with developer for backend integration

**Questions?** Refer to INSTRUCTIONS tab in the sheet or contact your developer.

---

## 🎯 Pro Tips

1. **Make a backup copy weekly:** File → Make a copy
2. **Use Media Library tab:** Log all uploads for easy tracking
3. **Test links before adding:** Click URL to verify it works
4. **Keep descriptions concise:** 2-3 sentences max
5. **Use high-quality images:** Min 800px width recommended
6. **Optimize videos:** Use YouTube for automatic optimization
7. **Version history:** File → Version history (to see changes)

---

**Happy editing! 🚀**
