import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Business Administration (MBA)',
      institution: 'Indian Institute of Management, Bangalore',
      period: 'June 2018 - March 2020',
      icon: <GraduationCap size={40} />,
      color: 'bg-blue-600'
    },
    {
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'Indian Institute of Technology, Roorkee',
      period: 'June 2010 - June 2014',
      icon: <GraduationCap size={40} />,
      color: 'bg-emerald-600'
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    <div className={`${edu.color} text-white p-3 rounded-lg mr-4 flex-shrink-0`}>
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start mb-2">
                        <Award size={20} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                        <h3 className="text-xl font-bold text-slate-900">
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="text-lg text-blue-600 font-semibold mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-slate-600">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <p className="text-lg text-slate-700">
                <span className="font-bold text-blue-600">Elite Educational Background:</span> IIT Roorkee + IIM Bangalore
              </p>
              <p className="text-slate-600 mt-2">
                Combining technical excellence with strategic business acumen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;