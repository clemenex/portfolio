import React from 'react';
import { ArrowLeft, ExternalLink, Github, Layers, Calendar, Sun, Moon } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack, isDark, toggleTheme }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Navbar for Details Page */}
      <div className="flex items-center justify-between mb-8 sticky top-4 z-20 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
         <button 
           onClick={onBack}
           className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800"
         >
           <ArrowLeft size={16} />
           Back to Projects
         </button>

         <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 rounded-xl p-2.5 transition-all"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Main Info */}
        <div className="lg:col-span-8 space-y-8">
           
           {/* Header Card */}
           <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex flex-col gap-4">
                 <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full border border-blue-100 dark:border-blue-800/50">
                        {tag}
                      </span>
                    ))}
                 </div>
                 <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {project.title}
                 </h1>
                 <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                 </p>
                 
                 <div className="flex flex-wrap gap-3 pt-4">
                    <a href={project.link} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-700 text-white font-medium hover:bg-slate-800 dark:hover:bg-slate-600 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-slate-200 dark:shadow-none">
                       <span>View Live Demo</span>
                       <ExternalLink size={16} />
                    </a>
                    <a href={project.codeLink} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95">
                       <Github size={18} />
                       <span>Source Code</span>
                    </a>
                 </div>
              </div>
           </div>

           {/* Hero Image */}
           <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 aspect-video relative group">
              <img 
                src={project.screenshots?.[0]} 
                alt={`${project.title} screenshot`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
           </div>

           {/* Detailed Description */}
           <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">About the Project</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                 {project.fullDescription || project.description}
              </p>
           </div>
           
           {/* Gallery Grid */}
           {project.screenshots && project.screenshots.length > 1 && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.slice(1).map((shot, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm aspect-[4/3] group">
                     <img src={shot} alt="Gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                ))}
             </div>
           )}

        </div>

        {/* Right Col: Metadata & Features */}
        <div className="lg:col-span-4 space-y-6">
           
           {/* Features Card */}
           <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-6">
                 <Layers className="text-slate-400 dark:text-slate-500" size={20} />
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white">Key Features</h3>
              </div>
              
              <ul className="space-y-4">
                 {project.features?.map((feature, i) => (
                   <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-blue-500"></div>
                      <span className="leading-relaxed">{feature}</span>
                   </li>
                 )) || (
                   <li className="text-slate-500 italic">No features listed.</li>
                 )}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                 <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm mb-2">
                    <Calendar size={16} />
                    <span className="font-semibold uppercase tracking-wider text-xs">Timeline</span>
                 </div>
                 <div className="text-slate-800 dark:text-slate-200 font-medium">3 Weeks · Hackathon Project</div>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
};