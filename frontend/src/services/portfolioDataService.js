// Portfolio data service - fetches directly from Google Sheets via gviz API
// Works in any environment (no API key required for public sheets)

const SHEET_ID = '1KIT7gKgiF2sIWRLZXFcaAD2x_Urv1XuyTiMy5D5C0vo';

const FALLBACK_DATA = {
  personalInfo: {
    Name: 'Aniruddha Dharma',
    Title: 'Product Experience Lead',
    Bio: 'Driving digital transformation through AI-powered products at Airtel. Specialized in building scalable solutions that impact millions of users daily.',
    Email: 'aniruddharma@gmail.com',
    Phone: '+91 7830933059',
    LinkedIn_URL: 'https://www.linkedin.com/in/aniruddharma',
    Profile_Photo_URL: 'https://customer-assets.emergentagent.com/job_work-profile-11/artifacts/syuhafk4_Screenshot_20260220_130403_Drive.jpg',
    Resume_PDF_URL: ''
  },
  projects: [
    {
      ID: 1, Title: 'LLM-Based Voice Bot', Category: 'AI/ML Product',
      Description: 'Revolutionary voice bot leveraging LLM technology to handle 3M+ calls daily, supporting 7 vernacular languages with AI-powered translation.',
      Impact: '3M calls/day, 90% query resolution, 4X engagement increase',
      Technologies: 'LLM | Speech-to-Text | AI Translation | Intent Detection | GenAI',
      Screenshot_URLs: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800 | https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800 | https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      Screenshot_Captions: 'Voice Bot Dashboard | Call Analytics | Multi-language Support',
      Audio_URLs: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3 | https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      Audio_Titles: 'Sample Voice Interaction - Hindi | Sample Voice Interaction - English',
      Display_Order: 1, Status: 'Active'
    },
    {
      ID: 2, Title: 'RAG-Powered Chatbot', Category: 'Conversational AI',
      Description: 'Redesigned chatbot with Retrieval-Augmented Generation architecture, featuring dynamic navigation and contextual help widgets.',
      Impact: '6% CSAT increase, 40k help visits/day, 10% journey starts increase',
      Technologies: 'RAG Architecture | NLP | Dynamic Widgets | Context-Aware AI | UI/UX',
      Screenshot_URLs: 'https://customer-assets.emergentagent.com/job_work-profile-11/artifacts/u4iph1aq_Screenshot_20260220_130830_Airtel.jpg | https://customer-assets.emergentagent.com/job_work-profile-11/artifacts/qtn5advc_Screenshot_20260220_130846_Airtel.jpg | https://customer-assets.emergentagent.com/job_work-profile-11/artifacts/fnui8r7g_Screenshot_20260220_131318_Airtel.jpg | https://customer-assets.emergentagent.com/job_work-profile-11/artifacts/b4kwub79_Screenshot_20260220_133720_Airtel.jpg',
      Screenshot_Captions: 'Help Home Page | Help Page Details | In-Chat Widgets | RAG-Powered Answers',
      Display_Order: 2, Status: 'Active'
    },
    {
      ID: 3, Title: 'App Experience Revamp', Category: 'Product Design',
      Description: 'Comprehensive UI/UX redesign of Airtel App with personalized recharge journey and intelligent search capabilities.',
      Impact: '1M DAU increase, 3k upgrades/day, 95% search efficacy',
      Technologies: 'UI/UX Design | Personalization | Search Algorithm | A/B Testing | Figma',
      Screenshot_URLs: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800 | https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800 | https://images.unsplash.com/photo-1557838923-2985c318be48?w=800',
      Screenshot_Captions: 'App Home Screen | Personalized Recharge Journey | Search Feature',
      Audio_URLs: '',
      Audio_Titles: '',
      Display_Order: 3, Status: 'Active'
    },
    {
      ID: 4, Title: 'API Platform & Partnerships', Category: 'Platform Development',
      Description: 'Built robust API platform enabling third-party channel integrations with personalized recommendations, reducing failures from 5% to 0.2%.',
      Impact: '5% to 0.2% failures, 5k upgrades/day, 10M+ partnership claims',
      Technologies: 'API Design | Microservices | Recommendation Engine | Integration Platform',
      Screenshot_URLs: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800 | https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      Screenshot_Captions: 'API Platform Architecture | Integration Dashboard',
      Audio_URLs: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      Audio_Titles: 'Platform Demo Walkthrough',
      Display_Order: 4, Status: 'Active'
    }
  ],
  experience: [
    {
      ID: 1, Company: 'Airtel', Role: 'Product Experience Lead - Digital Channels',
      Start_Date: 'May 2020', End_Date: 'Present', Location: 'India',
      Description: 'Leading digital transformation through AI-powered products.',
      Achievement_1: 'Launched LLM Voice Bot scaling to 3M calls/day',
      Achievement_2: 'Re-designed RAG Chatbot increasing CSAT by 6%',
      Achievement_3: 'Led App UI/UX revamp increasing DAU by 1M',
      Achievement_4: 'Built API platform reducing failures from 5% to 0.2%',
      Metrics: '3M calls/day | 90% resolution | 4X engagement',
      Display_Order: 1, Status: 'Active'
    }
  ],
  skills: [
    { ID: 1, Category: 'Product Management', Skill_Name: 'Agile Methodologies', Display_Order: 1, Status: 'Active' },
    { ID: 2, Category: 'Product Management', Skill_Name: 'JIRA', Display_Order: 2, Status: 'Active' },
    { ID: 3, Category: 'Technical Expertise', Skill_Name: 'LLM & GenAI', Display_Order: 1, Status: 'Active' }
  ],
  education: [
    {
      ID: 1, Degree: 'Master of Business Administration (MBA)',
      Institution: 'Indian Institute of Management, Bangalore',
      Start_Date: 'June 2018', End_Date: 'March 2020', Display_Order: 1, Status: 'Active'
    },
    {
      ID: 2, Degree: 'Bachelor of Technology (B.Tech)',
      Institution: 'Indian Institute of Technology, Roorkee',
      Start_Date: 'June 2010', End_Date: 'June 2014', Display_Order: 2, Status: 'Active'
    }
  ]
};

// Fetch a single sheet tab via Google Visualization Query API (no API key needed for public sheets)
async function fetchSheetTab(sheetName) {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status} for sheet: ${sheetName}`);
  const text = await response.text();
  // Extract JSON from the JSONP-like wrapper: /*O_o*/\ngoogle.visualization.Query.setResponse({...});
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error(`Invalid gviz response for sheet: ${sheetName}`);
  const gvizData = JSON.parse(text.substring(start, end + 1));
  return parseGvizData(gvizData);
}

// Parse Google Visualization response into array of objects
function parseGvizData(gvizData) {
  const table = gvizData.table;
  if (!table || !table.rows || table.rows.length === 0) return [];
  // Column labels come from cols[].label (gviz puts header row here, not in rows[])
  const headers = table.cols.map(col => col.label || col.id);
  return table.rows
    .map(row => {
      const obj = {};
      if (row.c) {
        row.c.forEach((cell, i) => {
          if (headers[i]) {
            // Prefer formatted value (f) for dates/numbers, otherwise raw value (v)
            obj[headers[i]] = cell ? (cell.f != null ? cell.f : cell.v) : null;
          }
        });
      }
      return obj;
    })
    .filter(row => Object.values(row).some(v => v !== null)); // Remove empty rows
}

class PortfolioDataService {
  constructor() {
    this.cache = null;
    this.cacheTimestamp = null;
    this.CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
  }

  async fetchPortfolioData(forceRefresh = false) {
    const now = Date.now();

    // Return valid cache if not forcing refresh
    if (!forceRefresh && this.cache && this.cacheTimestamp && (now - this.cacheTimestamp < this.CACHE_DURATION)) {
      return { ...this.cache, _meta: { cached: true, timestamp: this.cacheTimestamp } };
    }

    try {
      const [personalInfoRows, projects, experience, skills, education] = await Promise.all([
        fetchSheetTab('PERSONAL_INFO'),
        fetchSheetTab('PROJECTS'),
        fetchSheetTab('EXPERIENCE'),
        fetchSheetTab('SKILLS'),
        fetchSheetTab('EDUCATION')
      ]);

      const data = {
        personalInfo: personalInfoRows[0] || {},
        projects: projects.filter(p => p.Status === 'Active'),
        experience: experience.filter(e => e.Status === 'Active'),
        skills: skills.filter(s => s.Status === 'Active'),
        education: education.filter(e => e.Status === 'Active')
      };

      this.cache = data;
      this.cacheTimestamp = now;
      return { ...data, _meta: { cached: false, timestamp: now } };
    } catch (error) {
      console.error('Error fetching from Google Sheets:', error);

      // Return stale cache if available
      if (this.cache) {
        console.warn('Returning stale cache due to error:', error.message);
        return { ...this.cache, _meta: { cached: true, timestamp: this.cacheTimestamp, error: error.message } };
      }

      // Last resort: use fallback data
      console.warn('Using fallback data. Make sure the Google Sheet is publicly shared.');
      return {
        ...FALLBACK_DATA,
        _meta: { cached: false, timestamp: now, error: 'Using fallback data: ' + error.message }
      };
    }
  }

  async refreshData() {
    return this.fetchPortfolioData(true);
  }

  parseProjects(projects) {
    return projects
      .map(project => ({
        id: project.ID,
        title: project.Title,
        category: project.Category,
        description: project.Description,
        impact: project.Impact,
        technologies: project.Technologies ? project.Technologies.split(' | ').map(t => t.trim()) : [],
        screenshots: this.parseMediaUrls(project.Screenshot_URLs, project.Screenshot_Captions),
        videos: this.parseVideoUrls(project.Video_URLs),
        audioFiles: this.parseAudioFiles(project.Audio_URLs, project.Audio_Titles),
        displayOrder: parseInt(project.Display_Order) || 999
      }))
      .sort((a, b) => a.displayOrder - b.displayOrder);
  }

  // Convert Google Drive share/view URLs to thumbnail URLs that work in <img> tags
  convertGoogleDriveUrl(url) {
    if (!url) return url;
    // https://drive.google.com/file/d/FILE_ID/view
    const fileViewMatch = url.match(/drive\.google\.com\/file\/d\/([^\/\?]+)/);
    if (fileViewMatch) {
      return `https://drive.google.com/thumbnail?id=${fileViewMatch[1]}&sz=w800`;
    }
    // https://drive.google.com/uc?id=FILE_ID or https://drive.google.com/uc?export=view&id=FILE_ID
    const ucMatch = url.match(/drive\.google\.com\/uc\?.*?id=([^&]+)/);
    if (ucMatch) {
      return `https://drive.google.com/thumbnail?id=${ucMatch[1]}&sz=w800`;
    }
    // https://drive.google.com/open?id=FILE_ID
    const openMatch = url.match(/drive\.google\.com\/open\?.*?id=([^&]+)/);
    if (openMatch) {
      return `https://drive.google.com/thumbnail?id=${openMatch[1]}&sz=w800`;
    }
    return url;
  }

  parseMediaUrls(urls, captions) {
    if (!urls) return [];
    const urlArray = urls.split(' | ').map(u => u.trim()).filter(u => u);
    const captionArray = captions ? captions.split(' | ').map(c => c.trim()) : [];
    return urlArray.map((url, index) => ({
      url: this.convertGoogleDriveUrl(url),
      caption: captionArray[index] || `Image ${index + 1}`
    }));
  }

  parseVideoUrls(urls) {
    if (!urls) return [];
    return urls.split(' | ').map(u => u.trim()).filter(u => u);
  }

  parseAudioFiles(urls, titles) {
    if (!urls) return [];
    const urlArray = urls.split(' | ').map(u => u.trim()).filter(u => u);
    const titleArray = titles ? titles.split(' | ').map(t => t.trim()) : [];
    return urlArray.map((url, index) => ({
      url,
      name: titleArray[index] || `Audio ${index + 1}`,
      duration: '0:00'
    }));
  }

  parseExperience(experiences) {
    return experiences
      .map(exp => {
        const achievements = [];
        for (let i = 1; i <= 10; i++) {
          const achievement = exp[`Achievement_${i}`];
          if (achievement) achievements.push(achievement);
        }
        return {
          id: exp.ID,
          company: exp.Company,
          role: exp.Role,
          period: `${exp.Start_Date || ''} - ${exp.End_Date || 'Present'}`,
          location: exp.Location,
          description: exp.Description,
          achievements,
          metrics: exp.Metrics ? exp.Metrics.split(' | ').map(m => m.trim()) : [],
          displayOrder: parseInt(exp.Display_Order) || 999
        };
      })
      .sort((a, b) => a.displayOrder - b.displayOrder);
  }

  parseSkills(skills) {
    const grouped = {};
    skills.forEach(skill => {
      const category = skill.Category || 'Other';
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push({
        name: skill.Skill_Name,
        proficiency: skill.Proficiency,
        displayOrder: parseInt(skill.Display_Order) || 999
      });
    });
    Object.keys(grouped).forEach(category => {
      grouped[category].sort((a, b) => a.displayOrder - b.displayOrder);
    });
    return grouped;
  }

  parseEducation(education) {
    return education
      .map(edu => ({
        id: edu.ID,
        degree: edu.Degree,
        institution: edu.Institution,
        period: `${edu.Start_Date || ''} - ${edu.End_Date || ''}`.trim(),
        fieldOfStudy: edu.Field_of_Study,
        achievements: edu.Achievements,
        displayOrder: parseInt(edu.Display_Order) || 999
      }))
      .sort((a, b) => a.displayOrder - b.displayOrder);
  }
}

export default new PortfolioDataService();
