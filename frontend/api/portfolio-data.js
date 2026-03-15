// Cache storage
let cache = {
  data: null,
  timestamp: null,
  error: null
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const SHEET_ID = '1KIT7gKgiF2sIWRLZXFcaAD2x_Urv1XuyTiMy5D5C0vo';
const SHEETS_API_BASE = 'https://docs.google.com/spreadsheets/d';

async function fetchSheetData(sheetName) {
  const url = `${SHEETS_API_BASE}/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
  const response = await fetch(url);
  const text = await response.text();

  // Extract JSON from JSONP wrapper: /*O_o*/\ngoogle.visualization.Query.setResponse({...});
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error(`Invalid gviz response for: ${sheetName}`);
  const data = JSON.parse(text.substring(start, end + 1));
  return parseGoogleSheetsData(data);
}

function parseGoogleSheetsData(data) {
  const table = data.table;
  if (!table || !table.rows || table.rows.length === 0) return [];

  // Use cols[].label for headers (gviz puts header row here, not in rows[])
  const headers = table.cols.map(col => col.label || col.id);

  return table.rows
    .map(row => {
      const obj = {};
      if (row.c) {
        row.c.forEach((cell, j) => {
          if (headers[j]) {
            obj[headers[j]] = cell ? (cell.f != null ? cell.f : cell.v) : null;
          }
        });
      }
      return obj;
    })
    .filter(row => Object.values(row).some(v => v !== null));
}

async function getAllPortfolioData() {
  const [personalInfo, projects, experience, skills, education] = await Promise.all([
    fetchSheetData('PERSONAL_INFO'),
    fetchSheetData('PROJECTS'),
    fetchSheetData('EXPERIENCE'),
    fetchSheetData('SKILLS'),
    fetchSheetData('EDUCATION')
  ]);

  return {
    personalInfo: personalInfo[0] || {},
    projects: projects.filter(p => p.Status === 'Active'),
    experience: experience.filter(e => e.Status === 'Active').sort((a, b) => a.Display_Order - b.Display_Order),
    skills: skills.filter(s => s.Status === 'Active'),
    education: education.filter(e => e.Status === 'Active').sort((a, b) => a.Display_Order - b.Display_Order)
  };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const forceRefresh = req.query.refresh === 'true';
  const now = Date.now();
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

  try {
    const data = await getAllPortfolioData();
    cache = { data, timestamp: now, error: null };
    return res.status(200).json({
      success: true,
      data,
      cached: false,
      timestamp: now,
      nextUpdate: now + CACHE_DURATION
    });
  } catch (error) {
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
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to fetch portfolio data'
    });
  }
}
