import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-center pt-8 pb-4">
      <div className="text-sm text-slate-400 dark:text-slate-600 mb-2">
        &copy; {new Date().getFullYear()} Peter Angelo Dantes. All rights reserved.
      </div>
      <div className="flex justify-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-500">
        <a href="https://github.com/clemenex" target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/dpeterangelo" target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">LinkedIn</a>
        <a href="https://github.com/peterdantes/portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">View Source</a>
      </div>
    </footer>
  );
};