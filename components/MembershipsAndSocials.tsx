import React from 'react';
import { Link2, Github, Linkedin, Instagram } from 'lucide-react';

export const MembershipsAndSocials: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-lg dark:hover:shadow-slate-800/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="flex items-center gap-3 mb-6">
        <Link2 className="text-slate-400 dark:text-slate-500" size={20} />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Social Links</h2>
      </div>
      <div className="space-y-3">
          <a 
            href="https://www.linkedin.com/in/dpeterangelo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 hover:scale-[1.02] active:scale-95 transition-all group"
          >
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-white dark:group-hover:bg-slate-900 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              <Linkedin size={18} />
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/clemenex" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-[1.02] active:scale-95 transition-all group"
          >
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-white dark:group-hover:bg-slate-900 text-slate-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors">
              <Github size={18} />
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">GitHub</span>
          </a>
          <a 
            href="https://www.instagram.com/angelodantes_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-pink-200 dark:hover:border-pink-700 hover:bg-pink-50/50 dark:hover:bg-pink-900/20 hover:scale-[1.02] active:scale-95 transition-all group"
          >
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-white dark:group-hover:bg-slate-900 text-slate-700 dark:text-slate-300 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
              <Instagram size={18} />
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Instagram</span>
          </a>
      </div>
    </div>
  );
};