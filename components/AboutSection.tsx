import React from 'react';
import { User } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-lg dark:hover:shadow-slate-800/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="flex items-center gap-3 mb-4">
        <User className="text-slate-400 dark:text-slate-500" size={20} />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">About</h2>
      </div>
      <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        <p>
          I'm a 4th year Computer Science student with a specialization in data science, artificial intelligence frameworks like RAG, and UI/UX development. My academic journey has mainly been defined by a curiosity for how raw data can be transformed into actionable insights.
        </p>
        <p>
          Beyond the classroom, I'm an active participant in the tech community. I've spent my weekends building dashboards and competed in various hackathons. I thrive in high-pressure environments where creativity meets technical constraint.
        </p>
        <p>
          My goal is to leverage data and AI to solve impactful problems in our community, bridging the gap between complex algorithms and intuitive user experiences.
        </p>
      </div>
    </div>
  );
};