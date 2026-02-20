import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experiences = [
    {
      company: 'Airtel',
      role: 'Product Experience Lead, Digital Channels',
      period: 'May 2020 - Present',
      location: 'India',
      achievements: [
        {
          title: 'LLM-Based Voice Bot Launch',
          points: [
            'Piloted MVP of intent detection model with speech-to-text, handling 10k calls/day',
            'Onboarded 7 vernacular languages with AI-powered translation and transliteration, scaling to 300k calls/day',
            'Scaled through A/B testing and PAN India rollout, achieving 3M calls/day',
            'Solved 90% of user queries, increased engagement by 4X, reduced agent transfers by 20%',
            'Unlocked growth through cross-sell with GenAI-based pitch, achieving 1% conversion'
          ],
          metrics: ['3M calls/day', '90% query resolution', '4X engagement', '1% conversion']
        },
        {
          title: 'Chatbot Re-design with RAG Architecture',
          points: [
            'Introduced dynamic navigation with in-chat widgets powered by RAG',
            'Personalized help homepage with intuitive buckets, increasing journey starts by 10%',
            'Implemented contextual help widget across App pages, driving 40k help visits/day',
            'Improved conversion and CSAT by 6%'
          ],
          metrics: ['6% CSAT increase', '10% journey starts', '40k daily visits']
        },
        {
          title: 'App Experience Revamp',
          points: [
            'Personalized recharge journey with dynamic upsell inventory, driving 3k upgrades/day',
            'Led App UI/UX revamp, increasing DAU by 1M and reducing complaints by 10%',
            'Enabled keyword-based search with 95% efficacy, increasing page DAU by 1%'
          ],
          metrics: ['1M DAU increase', '3k upgrades/day', '95% search efficacy']
        },
        {
          title: 'API Platform & Partnerships',
          points: [
            'Built API platform for third-party channels, reducing recharge failures from 5% to 0.2%',
            'Implemented personalized recommendations, driving 5k recharge upgrades/day',
            'Orchestrated partnerships with Perplexity, Adobe, Apple, achieving 10M+ claims'
          ],
          metrics: ['5% → 0.2% failures', '5k upgrades/day', '10M+ claims']
        }
      ]
    },
    {
      company: '159 Solutions',
      role: 'Associate Consultant',
      period: 'May 2016 - May 2018',
      location: 'Healthcare Analytics',
      achievements: [
        {
          title: 'Patient Journey Analytics',
          points: [
            'Built longitudinal patient journey to identify segments for drug launch with >90% accuracy',
            'Developed physician targeting model for sales reps, increasing market potential by 20%'
          ],
          metrics: ['>90% accuracy', '20% market increase']
        },
        {
          title: 'Healthcare Analytics Projects',
          points: [
            'Identified B2B affiliated target clusters for largest HIV pharma firm (5% entities with 80% market)',
            'Optimized digital marketing mix across 10 channels for $2B pharma client, reallocating 20% of budget'
          ],
          metrics: ['80% market coverage', '20% budget optimization']
        }
      ]
    },
    {
      company: 'Voith Paper Fabrics',
      role: 'Senior Engineer',
      period: 'July 2014 - May 2016',
      location: 'Manufacturing',
      achievements: [
        {
          title: 'Engineering Excellence',
          points: [
            'Contributed to manufacturing process optimization',
            'Worked on technical solutions for paper fabric production'
          ],
          metrics: []
        }
      ]
    }
  ];

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
              <Card key={index} className="border-slate-200 hover:shadow-xl transition-shadow duration-300">
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
                        {exp.period} • {exp.location}
                      </p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
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
                    <div className="space-y-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="border-l-4 border-blue-600 pl-4">
                          <h4 className="text-xl font-bold text-slate-900 mb-3">
                            {achievement.title}
                          </h4>
                          <ul className="space-y-2 mb-4">
                            {achievement.points.map((point, pIndex) => (
                              <li key={pIndex} className="text-slate-600 flex items-start">
                                <span className="mr-2 text-blue-600">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                          {achievement.metrics.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {achievement.metrics.map((metric, mIndex) => (
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
                      ))}
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