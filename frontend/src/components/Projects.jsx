import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Play, Pause, Volume2, Image as ImageIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
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
          url: 'https://customer-assets.emergentagent.com/job_work-profile-11/artifacts/u4iph1aq_Screenshot_20260220_130830_Airtel.jpg',
          caption: 'Help Home Page - Personalized Categories'
        },
        {
          url: 'https://customer-assets.emergentagent.com/job_work-profile-11/artifacts/qtn5advc_Screenshot_20260220_130846_Airtel.jpg',
          caption: 'Help Page - Intuitive Buckets & Quick Actions'
        },
        {
          url: 'https://customer-assets.emergentagent.com/job_work-profile-11/artifacts/fnui8r7g_Screenshot_20260220_131318_Airtel.jpg',
          caption: 'In-Chat Widgets - Plan Details Integration'
        },
        {
          url: 'https://customer-assets.emergentagent.com/job_work-profile-11/artifacts/b4kwub79_Screenshot_20260220_133720_Airtel.jpg',
          caption: 'RAG-Powered Answers - Contextual Responses'
        }
      ],
      audioFiles: []
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

  const openImageLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeImageLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPreviousImage = () => {
    if (selectedProject && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (selectedProject && selectedImageIndex < selectedProject.screenshots.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'ArrowLeft') {
          goToPreviousImage();
        } else if (e.key === 'ArrowRight') {
          goToNextImage();
        } else if (e.key === 'Escape') {
          closeImageLightbox();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImageIndex, selectedProject]);

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
                className="border-slate-200 hover:shadow-xl transition-all duration-300 group overflow-hidden"
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
                  {/* Horizontal Scrollable Screenshots */}
                  {project.screenshots.length > 0 && (
                    <div className="mb-4">
                      <div className="flex overflow-x-auto gap-3 pb-3 snap-x snap-mandatory hide-scrollbar">
                        {project.screenshots.map((screenshot, index) => (
                          <div
                            key={index}
                            className="flex-shrink-0 w-48 cursor-pointer group/img snap-start"
                            onClick={() => {
                              setSelectedProject(project);
                              openImageLightbox(index);
                            }}
                          >
                            <div className="relative overflow-hidden rounded-lg border-2 border-slate-200 group-hover/img:border-blue-400 transition-all duration-300 shadow-sm">
                              <img
                                src={screenshot.url}
                                alt={screenshot.caption}
                                className="w-full h-32 object-cover group-hover/img:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/img:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                <ImageIcon className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" size={24} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-slate-500 mt-1 text-center">
                        ← Scroll to view all images →
                      </p>
                    </div>
                  )}

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Impact:</p>
                    <p className="text-sm text-blue-600 font-medium">{project.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
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
                  <Button
                    onClick={() => setSelectedProject(project)}
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && selectedImageIndex === null && (
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
                    Project Screenshots ({selectedProject.screenshots.length})
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className="cursor-pointer group/thumb"
                        onClick={() => openImageLightbox(index)}
                      >
                        <div className="relative overflow-hidden rounded-lg border-2 border-slate-200 group-hover/thumb:border-blue-400 transition-all duration-300 shadow-md">
                          <img
                            src={screenshot.url}
                            alt={screenshot.caption}
                            className="w-full h-40 object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/thumb:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                            <ImageIcon className="text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300" size={32} />
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 mt-2">{screenshot.caption}</p>
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

      {/* Image Lightbox with Arrow Navigation */}
      {selectedProject && selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
          <button
            onClick={closeImageLightbox}
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors duration-200 z-50"
          >
            <X size={32} />
          </button>

          {/* Previous Arrow */}
          {selectedImageIndex > 0 && (
            <button
              onClick={goToPreviousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-200 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-3"
            >
              <ChevronLeft size={40} />
            </button>
          )}

          {/* Next Arrow */}
          {selectedImageIndex < selectedProject.screenshots.length - 1 && (
            <button
              onClick={goToNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-200 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-3"
            >
              <ChevronRight size={40} />
            </button>
          )}

          <div className="max-w-6xl mx-auto px-8">
            <img
              src={selectedProject.screenshots[selectedImageIndex].url}
              alt={selectedProject.screenshots[selectedImageIndex].caption}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg mb-2">
                {selectedProject.screenshots[selectedImageIndex].caption}
              </p>
              <p className="text-slate-400">
                {selectedImageIndex + 1} / {selectedProject.screenshots.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
