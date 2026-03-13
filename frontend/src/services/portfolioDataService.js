// Portfolio data service for fetching from Google Sheets via Vercel API

const API_BASE_URL = process.env.REACT_APP_API_URL || '';

class PortfolioDataService {
  constructor() {
    this.cache = null;
    this.cacheTimestamp = null;
    this.loading = false;
  }

  async fetchPortfolioData(forceRefresh = false) {
    try {
      const url = `${API_BASE_URL}/api/portfolio-data${forceRefresh ? '?refresh=true' : ''}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        this.cache = result.data;
        this.cacheTimestamp = result.timestamp;
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
