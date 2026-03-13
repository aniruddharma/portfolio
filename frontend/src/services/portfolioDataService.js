// Portfolio data service for fetching from Google Sheets via Vercel API

const API_BASE_URL = process.env.REACT_APP_API_URL || '';

// Fallback data for development/preview
const FALLBACK_DATA = {
  personalInfo: {
    Name: 'Aniruddha Dharma',
    Title: 'Product Experience Lead',
    Bio: 'Driving digital transformation through AI-powered products at Airtel. Specialized in building scalable solutions that impact millions of users daily.',
    Email: 'aniruddharma@gmail.com',
    Phone: '+91 7830933059',
    LinkedIn_URL: 'https://www.linkedin.com/in/aniruddharma',
    Profile_Photo_URL: 'https://customer-assets.emergentagent.com/job_work-profile-11/artifacts/syuhafk4_Screenshot_20260220_130403_Drive.jpg'
  },
  projects: [
    {
      ID: 1, Title: 'LLM-Based Voice Bot', Category: 'AI/ML Product',
      Description: 'Revolutionary voice bot leveraging LLM technology to handle 3M+ calls daily, supporting 7 vernacular languages with AI-powered translation.',
      Impact: '3M calls/day, 90% query resolution, 4X engagement increase',
      Technologies: 'LLM | Speech-to-Text | AI Translation | Intent Detection | GenAI',
      Screenshot_URLs: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800 | https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      Screenshot_Captions: 'Voice Bot Dashboard | Call Analytics',
      Audio_URLs: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      Audio_Titles: 'Sample Demo',
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
    }
  ],
  experience: [
    {
      ID: 1, Company: 'Airtel', Role: 'Product Experience Lead - Digital Channels',
      Start_Date: 'May 2020', End_Date: 'Present', Location: 'India',
      Description: 'Leading digital transformation through AI-powered products.',
      Achievement_1: 'Launched LLM Voice Bot scaling to 3M calls/day',
      Achievement_2: 'Re-designed RAG Chatbot increasing CSAT by 6%',
      Metrics: '3M calls/day | 90% resolution | 4X engagement',
      Display_Order: 1, Status: 'Active'
    }
  ],
  skills: [
    { ID: 1, Category: 'Product Management', Skill_Name: 'Agile', Display_Order: 1, Status: 'Active' },
    { ID: 2, Category: 'Product Management', Skill_Name: 'JIRA', Display_Order: 2, Status: 'Active' },
    { ID: 3, Category: 'Technical Expertise', Skill_Name: 'LLM & GenAI', Display_Order: 1, Status: 'Active' }
  ],
  education: [
    {
      ID: 1, Degree: 'MBA', Institution: 'Indian Institute of Management Bangalore',
      Start_Date: 'June 2018', End_Date: 'March 2020', Display_Order: 1, Status: 'Active'
    },
    {
      ID: 2, Degree: 'B.Tech', Institution: 'Indian Institute of Technology Roorkee',
      Start_Date: 'June 2010', End_Date: 'June 2014', Display_Order: 2, Status: 'Active'
    }
  ]
};

class PortfolioDataService {
  constructor() {
    this.cache = null;
    this.cacheTimestamp = null;
    this.loading = false;
    this.useFallback = false;
  }

  async fetchPortfolioData(forceRefresh = false) {
    try {
      const url = `${API_BASE_URL}/api/portfolio-data${forceRefresh ? '?refresh=true' : ''}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        // If API not available (404), use fallback data
        if (response.status === 404) {
          console.warn('API not available, using fallback data');
          this.useFallback = true;
          return {
            ...FALLBACK_DATA,
            _meta: {
              cached: false,
              timestamp: Date.now(),
              error: 'Using local data (API not available in preview)'
            }
          };
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        this.cache = result.data;
        this.cacheTimestamp = result.timestamp;
        this.useFallback = false;
        return {
          ...result.data,
          _meta: {
            cached: result.cached,
            timestamp: result.timestamp,
            nextUpdate: result.nextUpdate,
            error: result.error
          }
        };
      } else {
        throw new Error(result.error || 'Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
      
      // Use fallback data if API fails
      if (error.message.includes('Failed to fetch') || error.message.includes('404')) {
        console.warn('Using fallback data due to error');
        this.useFallback = true;
        return {
          ...FALLBACK_DATA,
          _meta: {
            cached: false,
            timestamp: Date.now(),
            error: 'Using local data (deploy to Vercel for live Google Sheets integration)'
          }
        };
      }
      
      // Return cached data if available
      if (this.cache) {
        return {
          ...this.cache,
          _meta: {
            cached: true,
            timestamp: this.cacheTimestamp,
            error: error.message
          }
        };
      }
      
      throw error;
    }
  }

  async refreshData() {
    return this.fetchPortfolioData(true);
  }

  parseProjects(projects) {
    return projects.map(project => ({
      id: project.ID,
      title: project.Title,
      category: project.Category,
      description: project.Description,
      impact: project.Impact,
      technologies: project.Technologies ? project.Technologies.split(' | ') : [],
      screenshots: this.parseMediaUrls(project.Screenshot_URLs, project.Screenshot_Captions),
      videos: this.parseVideoUrls(project.Video_URLs),
      audioFiles: this.parseAudioFiles(project.Audio_URLs, project.Audio_Titles),
      displayOrder: parseInt(project.Display_Order) || 999
    })).sort((a, b) => a.displayOrder - b.displayOrder);
  }

  parseMediaUrls(urls, captions) {
    if (!urls) return [];
    
    const urlArray = urls.split(' | ').map(u => u.trim()).filter(u => u);
    const captionArray = captions ? captions.split(' | ').map(c => c.trim()) : [];
    
    return urlArray.map((url, index) => ({
      url,
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
      duration: '0:00' // Duration not in sheet, can add later
    }));
  }

  parseExperience(experiences) {
    return experiences.map(exp => {
      const achievements = [];
      for (let i = 1; i <= 10; i++) {
        const achievement = exp[`Achievement_${i}`];
        if (achievement) achievements.push(achievement);
      }

      return {
        id: exp.ID,
        company: exp.Company,
        role: exp.Role,
        period: `${exp.Start_Date} - ${exp.End_Date || 'Present'}`,
        location: exp.Location,
        description: exp.Description,
        achievements,
        metrics: exp.Metrics ? exp.Metrics.split(' | ') : [],
        displayOrder: parseInt(exp.Display_Order) || 999
      };
    });
  }

  parseSkills(skills) {
    const grouped = {};
    
    skills.forEach(skill => {
      const category = skill.Category || 'Other';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      
      grouped[category].push({
        name: skill.Skill_Name,
        proficiency: skill.Proficiency,
        displayOrder: parseInt(skill.Display_Order) || 999
      });
    });

    // Sort skills within each category
    Object.keys(grouped).forEach(category => {
      grouped[category].sort((a, b) => a.displayOrder - b.displayOrder);
    });

    return grouped;
  }

  parseEducation(education) {
    return education.map(edu => ({
      id: edu.ID,
      degree: edu.Degree,
      institution: edu.Institution,
      period: `${edu.Start_Date || ''} - ${edu.End_Date || ''}`.trim(),
      fieldOfStudy: edu.Field_of_Study,
      achievements: edu.Achievements,
      displayOrder: parseInt(edu.Display_Order) || 999
    }));
  }
}

export default new PortfolioDataService();
