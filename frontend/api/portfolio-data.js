// Cache storage
let cache = {
  data: null,
  timestamp: null,
  error: null
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
const SHEET_ID = '1KIT7gKgiF2sIWRLZXFcaAD2x_Urv1XuyTiMy5D5C0vo';

// Google Sheets API endpoint (public sheet, no auth needed for public data)
const SHEETS_API_BASE = 'https://docs.google.com/spreadsheets/d';

async function fetchSheetData(sheetName) {
  const url = `${SHEETS_API_BASE}/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
  
  try {
    const response = await fetch(url);
    const text = await response.text();
    
    // Google Sheets returns JSONP, need to extract JSON
    const jsonText = text.substring(47).slice(0, -2);
    const data = JSON.parse(jsonText);
    
    return parseGoogleSheetsData(data);
  } catch (error) {
    console.error(`Error fetching ${sheetName}:`, error);
    throw error;
  }
}

function parseGoogleSheetsData(data) {
  const rows = data.table.rows;
  const cols = data.table.cols;
  
  // Get headers from first row
  const headers = rows[0].c.map((cell, i) => cell ? cell.v : `col_${i}`);
  
  // Parse data rows
  const parsedData = [];
  for (let i = 1; i < rows.length; i++) {
    const row = {};
    rows[i].c.forEach((cell, j) => {
      row[headers[j]] = cell ? cell.v : null;
    });
    parsedData.push(row);
  }
  
  return parsedData;
}

async function getAllPortfolioData() {
  try {
    const [personalInfo, projects, experience, skills, education] = await Promise.all([
      fetchSheetData('PERSONAL_INFO'),
      fetchSheetData('PROJECTS'),
      fetchSheetData('EXPERIENCE'),
      fetchSheetData('SKILLS'),
      fetchSheetData('EDUCATION')
    ]);

    return {
      personalInfo: personalInfo[0] || {}, // First row only
      projects: projects.filter(p => p.Status === 'Active'),
      experience: experience.filter(e => e.Status === 'Active').sort((a, b) => a.Display_Order - b.Display_Order),
      skills: skills.filter(s => s.Status === 'Active'),
      education: education.filter(e => e.Status === 'Active').sort((a, b) => a.Display_Order - b.Display_Order)
    };
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    throw error;
  }
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const forceRefresh = req.query.refresh === 'true';
  const now = Date.now();

  // Check if we have valid cached data
  const cacheIsValid = cache.data && cache.timestamp && (now - cache.timestamp < CACHE_DURATION);

  if (cacheIsValid && !forceRefresh) {
    return res.status(200).json({
      success: true,
      data: cache.data,
      cached: true,
      timestamp: cache.timestamp,
      nextUpdate: cache.timestamp + CACHE_DURATION
    });
  }

  // Fetch fresh data
  try {
    const data = await getAllPortfolioData();
    
    // Update cache
    cache = {
      data,
      timestamp: now,
      error: null
    };

    return res.status(200).json({
      success: true,
      data,
      cached: false,
      timestamp: now,
      nextUpdate: now + CACHE_DURATION
    });
  } catch (error) {
    // If fetch fails but we have old cache, return it
    if (cache.data) {
      return res.status(200).json({
        success: true,
        data: cache.data,
        cached: true,
        error: 'Failed to fetch fresh data, using cache',
        timestamp: cache.timestamp,
        nextUpdate: now + CACHE_DURATION
      });
    }

    // No cache available, return error
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to fetch portfolio data'
    });
  }
}
