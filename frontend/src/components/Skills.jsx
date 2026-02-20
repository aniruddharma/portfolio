import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, BarChart3 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Briefcase size={28} />,
      title: 'Product Management',
      color: 'bg-blue-600',
      skills: [
        'Agile Methodologies',
        'JIRA',
        'Figma',
        'Confluence',
        'Product Strategy',
        'Roadmap Creation',
        'Leading Cross-Functional Teams',
        'MVP Launch',
        'Go-to-Market Strategy',
        'Market Research',
        'Competition Benchmarking',
        'A/B Testing',
        'User Research'
      ]
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Analytics & Tools',
      color: 'bg-emerald-600',
      skills: [
        'Excel',
        'Alteryx',
        'SQL',
        'PowerPoint',
        'Tableau',
        'Data Analysis',
        'Statistical Modeling',
        'Business Intelligence'
      ]
    }
  ];

  const technicalExpertise = [
    'LLM & GenAI',
    'RAG Architecture',
    'Voice Bot Development',
    'Chatbot Design',
    'API Platform',
    'UI/UX Design',
    'A/B Testing',
    'Analytics'
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          {/* Technical Expertise Highlight */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Technical Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technicalExpertise.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 text-base"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`${category.color} text-white p-3 rounded-lg mr-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="border-slate-300 text-slate-700 hover:bg-slate-50 px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;