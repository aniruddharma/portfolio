import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

// Fallback hardcoded data (used if Google Sheets is unavailable)
const HARDCODED_EXPERIENCE = [
  {
    id: 1,
    company: 'Airtel',
    role: 'Product Experience Lead, Digital Channels',
    period: 'May 2020 - Present',
    location: 'India',
    achievements: [
      'Piloted MVP of intent detection model with speech-to-text handling 10k calls/day; onboarded 7 vernacular languages with AI-powered translation scaling to 300k calls/day',
      'Scaled LLM Voice Bot through A/B testing and PAN India rollout to 3M calls/day, solving 90% of user queries and increasing engagement by 4X',
      'Reduced agent transfers by 20% and unlocked cross-sell with GenAI-based pitch achieving 1% conversion',
      'Re-designed chatbot with RAG architecture — dynamic navigation with in-chat widgets powered by RAG',
      'Personalized help homepage with intuitive buckets, increasing journey starts by 10% and driving 40k help visits/day',
      'Improved chatbot conversion and CSAT by 6% through contextual help integration',
      'Personalized recharge journey with dynamic upsell inventory, driving 3k upgrades/day',
      'Led App UI/UX revamp increasing DAU by 1M and reducing complaints by 10%',
      'Enabled keyword-based search with 95% efficacy, increasing page DAU by 1%',
      'Built API platform for third-party channels, reducing recharge failures from 5% to 0.2%',
      'Orchestrated partnerships with Perplexity, Adobe, Apple achieving 10M+ partnership claims'
    ],
    metrics: ['3M calls/day', '90% query resolution', '4X engagement', '6% CSAT increase', '1M DAU increase', '10M+ claims'],
    displayOrder: 1
  },
  {
    id: 2,
    company: '159 Solutions',
    role: 'Associate Consultant',
    period: 'May 2016 - May 2018',
    location: 'Healthcare Analytics',
    achievements: [
      'Built longitudinal patient journey to identify segments for drug launch with >90% accuracy',
      'Developed physician targeting model for sales reps, increasing market potential by 20%',
      'Identified B2B affiliated target clusters for largest HIV pharma firm (5% entities with 80% market)',
      'Optimized digital marketing mix across 10 channels for $2B pharma client, reallocating 20% of budget'
    ],
    metrics: ['>90% accuracy', '20% market increase', '80% market coverage'],
    displayOrder: 2
  },
  {
    id: 3,
    company: 'Voith Paper Fabrics',
    role: 'Senior Engineer',
    period: 'July 2014 - May 2016',
    location: 'Manufacturing',
    achievements: [
      'Contributed to manufacturing process optimization',
      'Worked on technical solutions for paper fabric production'
    ],
    metrics: [],
    displayOrder: 3
  }
];

const Experience = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  // Use Google Sheets data if available, otherwise fall back to hardcoded
  const experiences = (data?.experience && data.experience.length > 0)
    ? data.experience
    : HARDCODED_EXPERIENCE;

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={exp.id || index} className="border-slate-200 hover:shadow-xl transition-shadow duration-300" data-testid={`experience-card-${index}`}>
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-slate-900 mb-2">
                        {exp.company}
                      </CardTitle>
                      <p className="text-lg font-semibold text-blue-600 mb-1">
                        {exp.role}
                      </p>
                      <p className="text-slate-600">
                        {exp.period}{exp.location ? ` • ${exp.location}` : ''}
                      </p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200 mt-1">
                      {expandedIndex === index ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </button>
                  </div>
                </CardHeader>

                {expandedIndex === index && (
                  <CardContent className="pt-0">
                    <div className="border-l-4 border-blue-600 pl-4">
                      {exp.description && (
                        <p className="text-slate-600 mb-4 italic">{exp.description}</p>
                      )}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((point, pIndex) => (
                            <li key={pIndex} className="text-slate-600 flex items-start">
                              <span className="mr-2 text-blue-600 mt-1 flex-shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {exp.metrics && exp.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.metrics.map((metric, mIndex) => (
                            <Badge
                              key={mIndex}
                              variant="secondary"
                              className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                            >
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
