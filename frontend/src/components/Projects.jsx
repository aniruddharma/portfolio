import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Play, Pause, Volume2, Image as ImageIcon, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [playingAudio, setPlayingAudio] = useState(null);
  const [audioRefs] = useState({});

  const projects = [
    {
      id: 1,
      title: 'LLM-Based Voice Bot',
      category: 'AI/ML Product',
      description: 'Revolutionary voice bot leveraging LLM technology to handle 3M+ calls daily, supporting 7 vernacular languages with AI-powered translation.',
      impact: '3M calls/day, 90% query resolution, 4X engagement increase',
      technologies: ['LLM', 'Speech-to-Text', 'AI Translation', 'Intent Detection', 'GenAI'],
      screenshots: [
        {
          url: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop',
          caption: 'Voice Bot Dashboard - Real-time Analytics'
        },
        {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
          caption: 'Call Analytics - Performance Metrics'
        },
        {
          url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
          caption: 'Multi-language Support Interface'
        }
      ],
      audioFiles: [
        {
          name: 'Sample Voice Interaction - Hindi',
          url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          duration: '0:30'
        },
        {
          name: 'Sample Voice Interaction - English',
          url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          duration: '0:25'
        }
      ]
    },
    {
      id: 2,
      title: 'RAG-Powered Chatbot',
      category: 'Conversational AI',
      description: 'Redesigned chatbot with Retrieval-Augmented Generation architecture, featuring dynamic navigation and contextual help widgets.',
      impact: '6% CSAT increase, 40k help visits/day, 10% journey starts increase',
      technologies: ['RAG Architecture', 'NLP', 'Dynamic Widgets', 'Context-Aware AI', 'UI/UX'],
      screenshots: [
        {
          url: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop',
          caption: 'Chatbot Interface - RAG in Action'
        },
        {
          url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
          caption: 'Help Homepage - Personalized Buckets'
        },
        {
          url: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop',
          caption: 'Contextual Help Widget'
        }
      ],
      audioFiles: [
        {
          name: 'User Feedback - Positive Experience',
          url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
          duration: '0:20'
        }
      ]
    },
    {
      id: 3,
      title: 'App Experience Revamp',
      category: 'Product Design',
      description: 'Comprehensive UI/UX redesign of Airtel App with personalized recharge journey and intelligent search capabilities.',
      impact: '1M DAU increase, 3k upgrades/day, 95% search efficacy',
      technologies: ['UI/UX Design', 'Personalization', 'Search Algorithm', 'A/B Testing', 'Figma'],
      screenshots: [
        {
          url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
          caption: 'App Home Screen - New Design'
        },
        {
          url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
          caption: 'Personalized Recharge Journey'
        },
        {
          url: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop',
          caption: 'Search Feature - Keyword Based'
        }
      ],
      audioFiles: []
    },
    {
      id: 4,
      title: 'API Platform & Partnerships',
      category: 'Platform Development',
      description: 'Built robust API platform enabling third-party channel integrations with personalized recommendations, reducing failures from 5% to 0.2%.',
      impact: '5% → 0.2% failures, 5k upgrades/day, 10M+ partnership claims',
      technologies: ['API Design', 'Microservices', 'Recommendation Engine', 'Integration Platform'],
      screenshots: [
        {
          url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
          caption: 'API Platform Architecture'
        },
        {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
          caption: 'Integration Dashboard'
        }
      ],
      audioFiles: [
        {
          name: 'Platform Demo Walkthrough',
          url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
          duration: '1:00'
        }
      ]
    }
  ];

  const handlePlayAudio = (audioUrl, projectId) => {
    // Pause all other audios
    Object.values(audioRefs).forEach(audio => {
      if (audio && !audio.paused) {
        audio.pause();
      }
    });

    const audioKey = `${projectId}-${audioUrl}`;
    
    if (playingAudio === audioKey) {
      if (audioRefs[audioKey]) {
        audioRefs[audioKey].pause();
        setPlayingAudio(null);
      }
    } else {
      if (!audioRefs[audioKey]) {
        audioRefs[audioKey] = new Audio(audioUrl);
        audioRefs[audioKey].addEventListener('ended', () => {
          setPlayingAudio(null);
        });
      }
      audioRefs[audioKey].play();
      setPlayingAudio(audioKey);
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-center text-slate-600 mb-12 text-lg max-w-3xl mx-auto">
            A showcase of impactful products and features I've built, demonstrating expertise in AI/ML, 
            product design, and platform development.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      {project.screenshots.length > 0 && (
                        <Badge variant="outline" className="border-slate-300">
                          <ImageIcon size={14} className="mr-1" />
                          {project.screenshots.length}
                        </Badge>
                      )}
                      {project.audioFiles.length > 0 && (
                        <Badge variant="outline" className="border-slate-300">
                          <Volume2 size={14} className="mr-1" />
                          {project.audioFiles.length}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Impact:</p>
                    <p className="text-sm text-blue-600 font-medium">{project.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl">{selectedProject.title}</DialogTitle>
              <Badge className="bg-blue-100 text-blue-700 w-fit mt-2">
                {selectedProject.category}
              </Badge>
            </DialogHeader>

            <div className="space-y-6 mt-4">
              <div>
                <p className="text-slate-600 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-slate-900 mb-1">Impact & Results:</p>
                <p className="text-blue-600 font-medium">{selectedProject.impact}</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-slate-100 text-slate-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {selectedProject.screenshots.length > 0 && (
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <ImageIcon size={20} className="mr-2 text-blue-600" />
                    Project Screenshots
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className="cursor-pointer group"
                        onClick={() => setSelectedImage(screenshot)}
                      >
                        <div className="relative overflow-hidden rounded-lg border-2 border-slate-200 group-hover:border-blue-400 transition-all duration-300">
                          <img
                            src={screenshot.url}
                            alt={screenshot.caption}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                            <ImageIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 mt-2">{screenshot.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.audioFiles.length > 0 && (
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <Volume2 size={20} className="mr-2 text-blue-600" />
                    Audio Files
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.audioFiles.map((audio, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-blue-600 text-blue-600 hover:bg-blue-50"
                            onClick={() => handlePlayAudio(audio.url, selectedProject.id)}
                          >
                            {playingAudio === `${selectedProject.id}-${audio.url}` ? (
                              <Pause size={16} />
                            ) : (
                              <Play size={16} />
                            )}
                          </Button>
                          <div>
                            <p className="font-medium text-slate-900">{audio.name}</p>
                            <p className="text-sm text-slate-500">Duration: {audio.duration}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Image Lightbox */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl p-0 bg-black bg-opacity-95">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors duration-200 z-50"
            >
              <X size={32} />
            </button>
            <div className="p-6">
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">{selectedImage.caption}</p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Projects;
