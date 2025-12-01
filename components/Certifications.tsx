import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Certification } from '../types';

export const certs: Certification[] = [
  {name: "Applied Statistics for Data Analytics", issuer: "DeepLearningAI | Coursera", year:  "2025", link: "https://coursera.org/share/e6b065b493236ba4f6394785eca69e81"},
  {name: "R Programming", issuer: "Johns Hopkins University | Coursera", year: "2025", link: "https://coursera.org/share/aa0487248fc48f5e679017e899726370"},
  {name: "Supervised Machine Learning: Regression", issuer: "IBM | Coursera", year: "2025", link: "https://coursera.org/share/950fe5c21fca1d4a68d02ef2e7dbd5d3"},
  { name: "Unlocking Business Insights through Storytelling with Data", issuer: "Coursera", year: "2025", link: "https://coursera.org/share/3ae3c78082381ee4c3c1c92169f079cb"},
  { name: "Getting and Cleaning Data", issuer: "Johns Hopskins University | Coursera", year: "2025", link: "https://coursera.org/share/15a3383ff82bf64302a63e03313f6f78"},
  { name: "Introduction to Retrieval Augmented Generation (RAG)", issuer: "Duke University | Coursera", year: "2025", link: "https://coursera.org/share/b47583f7bd1b0f15b0e7a3c2343e5f6e" },
  { name: "Specialized Models: Time Series and Survival Analysis", issuer: "IBM | Coursera", year: "2025", link: "https://coursera.org/share/e37992a688b991c9292fe0aaf3fca710"}
];

interface CertificationProps {
  limit?: number;
  onViewAll?: () => void;
}

export const Certifications: React.FC<CertificationProps> = () => {

  const visibleCerts =  
    typeof limit === 'number' ? certs.slice(0, limit) : certs;

  const canViewAll =
    typeof limit === 'number' && certs.length > limit;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-lg dark:hover:shadow-slate-800/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="flex items-center gap-3 mb-6">
        <Award className="text-slate-400 dark:text-slate-500" size={20} />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Certifications</h2>
      </div>

      <div className="space-y-3 flex-1">
        {visibleCerts.map((cert, idx) => (
          <a 
            key={idx} 
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:border-slate-200 dark:hover:border-slate-600 hover:scale-[1.02] hover:shadow-sm transition-all duration-200 cursor-pointer gap-2 group"
          >
            <div>
              <div className="font-semibold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cert.name}
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</div>
            </div>
            <span className="self-start sm:self-center text-xs font-medium text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-900 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700 whitespace-nowrap group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors">
              {cert.year}
            </span>
          </a>
        ))}
      </div>

        {canViewAll && onViewAll && (
          <button
            type="button"
            onClick={onViewAll}
            className="mt-4 w-full text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/60 rounded-xl py-2 border border-blue-100 dark:border-blue-900 transition-all"
          >
            View all {certs.length} certifications
          </button>
        )}
    </div>
  );
};