import React from 'react';
import { Award, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { usePortfolioData } from '../context/PortfolioDataContext';

const About = () => {
  const { data } = usePortfolioData();
  const personalInfo = data?.personalInfo || {};
  const bio = personalInfo.Bio || null;

  const highlights = [
    {
      icon: <GraduationCap size={32} />,
      title: 'Elite Education',
      description: 'IIT Roorkee (B.Tech) + IIM Bangalore (MBA)'
    },
    {
      icon: <Briefcase size={32} />,
      title: '10+ Years Experience',
      description: 'Product Management & Analytics Leadership'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Impact at Scale',
      description: '3M+ daily users across AI-powered products'
    },
    {
      icon: <Award size={32} />,
      title: 'AI/ML Expertise',
      description: 'LLM Voice Bot, RAG Architecture, GenAI Integration'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="mb-12 text-center max-w-3xl mx-auto">
            {bio ? (
              <p className="text-lg text-slate-600 leading-relaxed">
                {bio}
              </p>
            ) : (
              <>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Product Experience Lead at Airtel with a proven track record of building and scaling
                  AI-powered digital products that serve millions of users daily. My journey combines
                  technical excellence from IIT Roorkee with strategic business acumen from IIM Bangalore.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  I specialize in launching innovative products from 0 to 1, leveraging cutting-edge
                  technologies like LLMs, RAG architecture, and GenAI to solve complex customer problems
                  while driving significant business impact.
                </p>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;