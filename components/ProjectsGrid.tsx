import React from 'react';
import { LayoutGrid, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data/projects';

interface ProjectsGridProps {
  onViewProject: (project: Project) => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onViewProject }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-lg dark:hover:shadow-slate-800/50 border border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
            <LayoutGrid className="text-slate-400 dark:text-slate-500" size={20} />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recent Projects</h2>
        </div>
        <button className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors group">
            View All <ExternalLink size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div key={project.id} className="group p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer" onClick={() => onViewProject(project)}>
            <div className="mb-3">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                {project.description}
              </p>
            </div>
            
            <div className="flex-1"></div>

            <div className="flex flex-wrap gap-1.5 mb-4 mt-3">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-2 mt-auto pt-3 border-t border-slate-200/50 dark:border-slate-700/50">
                <button 
                  onClick={(e) => { e.stopPropagation(); onViewProject(project); }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-[1.02] active:scale-95 transition-all"
                >
                    View Project
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};