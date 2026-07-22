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
          Graduated as Summa Cum Laude, I am a BSCS Data Science major with hands-on experience as a data scientist, earning 3rd Place in BPI DataWave 2024 and Top 5 in GDSC InnOlympics for end-to-end ML solutions
        </p>
        <p>
          I’ve led projects from raw data to deployment-ready models, dashboards, and real-world forecasting/analytics pipelines.
        </p>
        <p>
          I also keep track of the latest AI technologies that innovate data analysis, using automation products, CLAUDE/OpenAI frameworks and skills, and other methodologies to turn real-world data into decision-ready insights for clients, industries, and communities.
        </p>
      </div>
    </div>
  );
};