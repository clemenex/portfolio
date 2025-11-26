import React from 'react';
import { Mic, Mail, Calendar, ArrowRight } from 'lucide-react';

export const SpeakingAndContact: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-lg dark:hover:shadow-slate-800/50 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-6 md:gap-8 transition-all duration-300 hover:-translate-y-1">
      
      {/* Speaking / Availability */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3 mb-2">
           <Mic className="text-slate-400 dark:text-slate-500" size={20} />
           <h2 className="text-xl font-bold text-slate-900 dark:text-white">Speaking & Contact</h2>
        </div>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          I am currently available for <span className="font-semibold text-slate-800 dark:text-slate-200">internships</span>, hackathon collaborations, and student projects. Open to speaking about student tech communities and data science basics.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex-1 flex flex-col gap-3 justify-center">
         <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-between group hover:border-slate-300 dark:hover:border-slate-500 transition-all cursor-pointer active:scale-[0.99] hover:bg-white dark:hover:bg-slate-700">
            <div className="flex items-center gap-3">
               <Mail className="text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" size={18} />
               <div className="flex flex-col">
                 <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Email</span>
                 <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">petergelodantes@gmail.com</span>
               </div>
            </div>
         </div>
         <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-between group hover:border-slate-300 dark:hover:border-slate-500 transition-all cursor-pointer active:scale-[0.99] hover:bg-white dark:hover:bg-slate-700">
            <div className="flex items-center gap-3">
               <Calendar className="text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" size={18} />
               <div className="flex flex-col">
                 <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Let's Talk</span>
                 <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Schedule a Call</span>
               </div>
            </div>
            <ArrowRight size={16} className="text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors" />
         </div>
      </div>

    </div>
  );
};