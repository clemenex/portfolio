import React, { useState } from 'react';
import { MapPin, Mail, Download, ChevronDown, Trophy, Moon, Sun } from 'lucide-react';

interface ProfileHeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ isDark, toggleTheme }) => {
  const [isHackathonOpen, setIsHackathonOpen] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const hackathons = [
    {
      title: 'BPI DataWave Hackathon',
      subtitle: 'Machine Learning Track',
      badge: '3rd Place',
      variant: 'highlight',
    },
    {
      title: 'GDSC InnOlympics',
      subtitle: 'Innovation Challenge',
      badge: 'Top 5',
      variant: 'highlight',
    },
    {
      title: 'ASEAN Data Science Explorers',
      subtitle: 'Participant · 2025',
      badge: null,
      variant: 'default',
    },
    {
      title: 'DICT Philippine Startup Challenge',
      subtitle: 'Participant · 2025',
      badge: null,
      variant: 'default',
    },
    {
      title: 'Philippine Junior Data Science Competition',
      subtitle: 'Participant · 2025',
      badge: null,
      variant: 'default',
    },
    {
      title: 'DAP NextGen PH',
      subtitle: 'Participant · 2025',
      badge: null,
      variant: 'default',
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-lg dark:hover:shadow-slate-800/50 border border-slate-200 dark:border-slate-800 relative overflow-visible transition-all duration-300 ease-out group">
      
      {/* Top Controls: Theme Toggle + Hackathon Badge */}
      <div className="absolute top-0 right-6 sm:right-10 flex gap-3 z-20">
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="bg-white dark:bg-slate-800 border-x border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 rounded-b-xl p-3 shadow-sm transition-all hover:-translate-y-1"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Hackathon Ribbon */}
        <div className="relative">
          <button 
            onClick={() => setIsHackathonOpen(!isHackathonOpen)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-3 px-4 rounded-b-xl shadow-md hover:shadow-lg hover:-translate-y-1 flex items-center gap-2 transition-all duration-200"
          >
            <Trophy size={16} />
            <span className="hidden sm:inline">Hackathon Participant</span>
            <span className="sm:hidden">Hackathons</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${isHackathonOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Dropdown for Hackathons */}
          {isHackathonOpen && (
            <div className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
               <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                 <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Recent Competitions</h4>
               </div>
               <ul className="text-sm max-h-64 overflow-y-auto">
                {hackathons.map((h, idx) => (
                  <li
                    key={idx}
                    className={`px-5 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${
                      idx !== hackathons.length - 1 ? 'border-b border-slate-50 dark:border-slate-800' : ''
                    }`}
                  >
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      {h.title}
                    </div>

                    {h.badge ? (
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                          {h.subtitle}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-blue-500">
                          {h.badge}
                        </span>
                      </div>
                    ) : (
                      <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                        {h.subtitle}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 mt-12 md:mt-4">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 w-full">
          
          <div className="space-y-4 w-full">
             {/* Status Pill */}
             <div className="flex justify-center md:justify-start">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/50 shadow-sm cursor-default transition-transform hover:scale-105">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Open to internships
                </span>
             </div>
             
             {/* Headings */}
             <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                  Peter Angelo <br className="hidden lg:block" /> Dantes
                </h1>
                <h2 className="mt-3 text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300">
                  BS Computer Science Student <span className="hidden sm:inline">·</span> <br className="sm:hidden" /> Data Science & AI Enthusiast
                </h2>
             </div>
             
             <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
               <MapPin size={16} className="text-slate-400 dark:text-slate-500" />
               <span>Quezon Province, Philippines</span>
             </div>
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
             I build data-driven products, dashboards, and AI-assisted tools through hackathons, school projects, and side experiments.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
             <a 
               href="/assets/Dantes_Resume.pdf"
               target="_blank"
               className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto"
             >
               <Download size={18} />
               <span>Download Resume</span>
             </a>
             <a 
               href="mailto:hello@peterdantes.dev"
               className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:border-slate-300 dark:hover:border-slate-600 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95 w-full sm:w-auto"
             >
               <Mail size={18} />
               <span>Email Me</span>
             </a>
          </div>
        </div>
        
        {/* Right Content - Profile Image */}
        <div className="flex-shrink-0 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/60 to-purple-100/40 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full blur-2xl opacity-60 animate-pulse-slow"></div>

          <div
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden"
            onMouseEnter={() => setIsProfileHovered(true)}
            onMouseLeave={() => setIsProfileHovered(false)}
          >
            <img
              src={
                isProfileHovered
                  ? "/assets/profile_onHover.png"
                  : "/assets/profile_main.png"
              }
              alt="Peter Angelo Dantes"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/90 dark:bg-slate-900 rounded-2xl px-3 py-2 shadow-lg border border-slate-100 dark:border-slate-700 animate-float">
            <span className="text-2xl">👋</span>
          </div>
        </div>
    </div>
  </div>
  );
};