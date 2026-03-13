import React from 'react';

export const ShimmerCard = ({ className = '' }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="bg-slate-200 h-48 w-full rounded-lg mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-slate-200 rounded w-3/4"></div>
      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
    </div>
  </div>
);

export const ShimmerText = ({ width = 'full', height = '4' }) => (
  <div className="animate-pulse">
    <div className={`h-${height} bg-slate-200 rounded w-${width}`}></div>
  </div>
);

export const ShimmerCircle = ({ size = '40' }) => (
  <div className="animate-pulse">
    <div className={`w-${size} h-${size} bg-slate-200 rounded-full`}></div>
  </div>
);

export const ShimmerHero = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-pulse space-y-6">
          {/* Profile Photo */}
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-slate-200"></div>
          
          {/* Name */}
          <div className="h-12 bg-slate-200 rounded w-64 mx-auto"></div>
          
          {/* Title */}
          <div className="h-8 bg-slate-200 rounded w-48 mx-auto"></div>
          
          {/* Description */}
          <div className="space-y-2 max-w-2xl mx-auto">
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6 mx-auto"></div>
          </div>
          
          {/* Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <div className="h-12 bg-slate-200 rounded w-40"></div>
            <div className="h-12 bg-slate-200 rounded w-40"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ShimmerProjects = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-pulse">
          {/* Section Title */}
          <div className="h-12 bg-slate-200 rounded w-64 mx-auto mb-12"></div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border rounded-lg p-6">
                <div className="h-32 bg-slate-200 rounded mb-4"></div>
                <div className="h-6 bg-slate-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ShimmerExperience = () => (
  <section className="py-20 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <div className="animate-pulse">
          {/* Section Title */}
          <div className="h-12 bg-slate-200 rounded w-64 mx-auto mb-12"></div>
          
          {/* Experience Cards */}
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg p-6 bg-white">
                <div className="h-8 bg-slate-200 rounded w-48 mb-4"></div>
                <div className="h-6 bg-slate-200 rounded w-64 mb-2"></div>
                <div className="h-4 bg-slate-200 rounded w-32"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const FullPageShimmer = () => (
  <div>
    <ShimmerHero />
    <ShimmerProjects />
    <ShimmerExperience />
  </div>
);
