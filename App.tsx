import React, { useState, useEffect } from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { AboutSection } from './components/AboutSection';
import { TechStack } from './components/TechStack';
import { BeyondCoding } from './components/BeyondCoding';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Certifications } from './components/Certifications';
import { Highlights } from './components/Highlights';
import { MembershipsAndSocials } from './components/MembershipsAndSocials';
import { SpeakingAndContact } from './components/SpeakingAndContact';
import { Footer } from './components/Footer';
import { ProjectDetails } from './components/ProjectDetails';
import { Project } from './types';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'project-details' | 'certifications'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentView('project-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewAllCerts = () => {
    setCurrentView('certifications');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 pb-12 transition-colors duration-300">
      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <ProfileHeader isDark={isDark} toggleTheme={toggleTheme} />
            </div>

            {/* Main Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Row 1 */}
              <div className="lg:col-span-8 animate-fade-in-up opacity-0" style={{ animationDelay: '100ms' }}>
                <AboutSection />
              </div>
              <div className="lg:col-span-4 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
                <ExperienceTimeline />
              </div>

              {/* Row 2 */}
              <div className="lg:col-span-8 animate-fade-in-up opacity-0" style={{ animationDelay: '300ms' }}>
                <TechStack />
              </div>
              <div className="lg:col-span-4 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
                <Certifications limit={3} onViewAll={handleViewAllCerts} />
              </div>

              {/* Row 3 */}
              <div className="lg:col-span-12 animate-fade-in-up opacity-0" style={{ animationDelay: '500ms' }}>
                <BeyondCoding />
              </div>
            </div>

            {/* Projects + bottom sections (unchanged) */}
            <div className="space-y-6">
              <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '600ms' }}>
                <ProjectsGrid onViewProject={handleViewProject} />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 animate-fade-in-up opacity-0" style={{ animationDelay: '700ms' }}>
                  <Highlights />
                </div>
                <div className="lg:col-span-4 animate-fade-in-up opacity-0" style={{ animationDelay: '800ms' }}>
                  <MembershipsAndSocials />
                </div>
              </div>
              <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '900ms' }}>
                <SpeakingAndContact />
              </div>
            </div>
          </>
        )}

        {currentView === 'project-details' && selectedProject && (
          <ProjectDetails 
            project={selectedProject} 
            onBack={handleBackToHome}
            isDark={isDark}
            toggleTheme={toggleTheme}
          />
        )}

        {currentView === 'certifications' && (
          <div className="space-y-6">
            <button
              type="button"
              onClick={handleBackToHome}
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 mb-2"
            >
              ← Back to home
            </button>

            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '100ms' }}>
              {/* no limit here -> show everything, no View All button */}
              <Certifications />
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default App;