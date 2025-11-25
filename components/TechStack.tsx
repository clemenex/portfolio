import React from 'react';
import { Layers } from 'lucide-react';

const StackCategory = ({ title, items }: { title: string, items: string[] }) => (
  <div className="mb-4 last:mb-0">
    <h3 className="text-xs sm:text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span 
          key={item} 
          className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium rounded-lg border border-slate-100 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-700 hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export const TechStack: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-lg dark:hover:shadow-slate-800/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="flex items-center gap-3 mb-6">
        <Layers className="text-slate-400 dark:text-slate-500" size={20} />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Tech Stack</h2>
      </div>
      
      <div className="space-y-6">
        <StackCategory 
          title="Data" 
          items={['Python', 'Pandas', 'NumPy', 'Scikit-learn']} 
        />
        <StackCategory 
          title="Artificial Intelligence" 
          items={['RAG', 'LLMs', 'LangChain', 'LangSmith',]} 
        />
        <StackCategory 
          title="Frontend" 
          items={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS']} 
        />
        <StackCategory 
          title="Backend & DB" 
          items={['Node.js', 'Express', 'Firebase']} 
        />
      </div>
    </div>
  );
};