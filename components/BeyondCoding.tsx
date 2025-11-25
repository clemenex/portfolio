import React from 'react';
import { Sparkles, BookOpen, PenTool, Coffee } from 'lucide-react';

export const BeyondCoding: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-lg dark:hover:shadow-slate-800/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles className="text-slate-400 dark:text-slate-500" size={20} />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Beyond Coding</h2>
      </div>
      
      <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base leading-relaxed">
        When I'm not debugging models or tweaking CSS, I love engaging with the tech community through linkedin, github, and various subreddits. I'm also exploring technical writing to share what I learn.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default">
          <BookOpen size={16} className="text-slate-400 dark:text-slate-500" />
          <span>Reading</span>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default">
          <PenTool size={16} className="text-slate-400 dark:text-slate-500" />
          <span>UI Design</span>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default">
          <Coffee size={16} className="text-slate-400 dark:text-slate-500" />
          <span>Coffee Enjoyer</span>
        </div>
      </div>
    </div>
  );
};