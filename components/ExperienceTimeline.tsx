import React from 'react';
import { Briefcase } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    role: "BS Computer Science",
    company: "Manuel S. Enverga University Foundation",
    period: "2026",
    current: true
  },
  {
    role: "Student Data Science Projects",
    company: "Academic & Personal",
    period: "2024",
    current: true
  },
  {
    role: "Hackathon Competitor",
    company: "Various Events",
    period: "2024",
    current: true
  },
  {
    role: "Hello World!",
    company: "Wrote my first line of code",
    period: "2022",
    current: false
  }
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-lg dark:hover:shadow-slate-800/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="text-slate-400 dark:text-slate-500" size={20} />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Experience</h2>
      </div>

      <div className="relative pl-2">
        {/* Vertical Line */}
        <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-slate-100 dark:bg-slate-800"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 group cursor-default">
              {/* Dot on line */}
              <div className={`absolute left-[3px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-slate-900 shadow-sm z-10 
                ${exp.current ? 'bg-blue-600 ring-4 ring-blue-50 dark:ring-blue-900/20' : 'bg-slate-300 dark:bg-slate-600'} 
                group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300`}>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 transition-transform duration-300 group-hover:translate-x-1">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{exp.company}</p>
                </div>
                <div className="self-start">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 whitespace-nowrap group-hover:border-slate-300 dark:group-hover:border-slate-500 transition-colors">
                    {exp.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};