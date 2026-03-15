import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, BarChart3, Code, Star, Layers, Zap } from 'lucide-react';

// Fallback hardcoded data (used if Google Sheets is unavailable)
const HARDCODED_SKILLS = {
  'Product Management': [
    { name: 'Agile Methodologies' }, { name: 'JIRA' }, { name: 'Figma' },
    { name: 'Confluence' }, { name: 'Product Strategy' }, { name: 'Roadmap Creation' },
    { name: 'Leading Cross-Functional Teams' }, { name: 'MVP Launch' },
    { name: 'Go-to-Market Strategy' }, { name: 'Market Research' },
    { name: 'Competition Benchmarking' }, { name: 'A/B Testing' }, { name: 'User Research' }
  ],
  'Analytics & Tools': [
    { name: 'Excel' }, { name: 'Alteryx' }, { name: 'SQL' }, { name: 'PowerPoint' },
    { name: 'Tableau' }, { name: 'Data Analysis' }, { name: 'Statistical Modeling' },
    { name: 'Business Intelligence' }
  ],
  'Technical Expertise': [
    { name: 'LLM & GenAI' }, { name: 'RAG Architecture' }, { name: 'Voice Bot Development' },
    { name: 'Chatbot Design' }, { name: 'API Platform' }, { name: 'UI/UX Design' },
    { name: 'A/B Testing' }, { name: 'Analytics' }
  ]
};

// Map category names to icons and colors
const CATEGORY_CONFIG = {
  'Product Management': { icon: <Briefcase size={28} />, color: 'bg-blue-600' },
  'Analytics & Tools': { icon: <BarChart3 size={28} />, color: 'bg-emerald-600' },
  'Technical Expertise': { icon: <Code size={28} />, color: 'bg-purple-600' },
  'Leadership': { icon: <Star size={28} />, color: 'bg-amber-600' },
  'Design': { icon: <Layers size={28} />, color: 'bg-pink-600' },
  'default': { icon: <Zap size={28} />, color: 'bg-slate-600' }
};

const getCategoryConfig = (categoryName) => {
  return CATEGORY_CONFIG[categoryName] || CATEGORY_CONFIG['default'];
};

const Skills = ({ data }) => {
  // Use Google Sheets data if available, otherwise fall back to hardcoded
  const skillsData = (data?.skills && Object.keys(data.skills).length > 0)
    ? data.skills
    : HARDCODED_SKILLS;

  const categories = Object.keys(skillsData);

  // Separate "Technical Expertise" to show prominently at top
  const techCategory = 'Technical Expertise';
  const techSkills = skillsData[techCategory] || [];
  const otherCategories = categories.filter(c => c !== techCategory);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          {/* Technical Expertise Highlight (shown if category exists) */}
          {techSkills.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Technical Expertise
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {techSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 text-base"
                    data-testid={`tech-skill-${index}`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Other Skill Categories */}
          {otherCategories.length > 0 && (
            <div className={`grid grid-cols-1 ${otherCategories.length === 1 ? '' : 'lg:grid-cols-2'} gap-8`}>
              {otherCategories.map((category, index) => {
                const config = getCategoryConfig(category);
                const skills = skillsData[category] || [];
                return (
                  <Card key={index} className="border-slate-200 hover:shadow-xl transition-shadow duration-300" data-testid={`skill-category-${index}`}>
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className={`${config.color} text-white p-3 rounded-lg mr-4`}>
                          {config.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-3 py-1"
                          >
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Show all categories as a grid if no "Technical Expertise" separate section */}
          {techSkills.length === 0 && categories.length > 0 && (
            <div className={`grid grid-cols-1 ${categories.length > 1 ? 'lg:grid-cols-2' : ''} gap-8`}>
              {categories.map((category, index) => {
                const config = getCategoryConfig(category);
                const skills = skillsData[category] || [];
                return (
                  <Card key={index} className="border-slate-200 hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className={`${config.color} text-white p-3 rounded-lg mr-4`}>
                          {config.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">{category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-3 py-1">
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
