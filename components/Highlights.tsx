import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    text: "He is an active and passionate student, regularly participating in IT competitions both within and outside the university. I had the chance to meet him during my recent visits to the university for workshops and seminars. I'm excited to see the contributions he'll make to the industry in the near future.",
    author: "Jessa Cahilig",
    role: "Technology Lead | Scrum Master | Angkas PH"
  },
  {
    text: "Peter was an invaluable asset to our hackathon team. His ability to wrangle messy datasets and spin up a working dashboard in under 24 hours was the key to our win. A true problem solver.",
    author: "Lance Alexander Ventura",
    role: "Hackathon Teammate"
  },
  {
    text: "Peter is an exceptional teammate who consistently goes above and beyond in every competitions we've joined.",
    author: "Rainzle John Estuesta",
    role: "Hackathon Teammate"
  }
];

export const Highlights: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Switch every 6 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
    }, 300); // Wait for fade out animation
  };
  
  const handleDotClick = (index: number) => {
     if (index === currentIndex) return;
     setIsAnimating(true);
     setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
     }, 300);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-lg dark:hover:shadow-slate-800/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <Quote className="text-slate-400 dark:text-slate-500" size={20} />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Highlights</h2>
      </div>

      <div className="flex-1 flex flex-col justify-between">
          <div className={`bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 relative transition-all duration-300 transform ${isAnimating ? 'opacity-0 translate-x-2' : 'opacity-100 translate-x-0'}`}>
            <Quote size={40} className="absolute top-4 left-4 text-slate-200 dark:text-slate-700 -z-10 opacity-50" />
            <p className="text-slate-600 dark:text-slate-300 italic text-sm sm:text-base leading-relaxed mb-4 min-h-[100px] sm:min-h-[80px]">
              "{current.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 overflow-hidden shrink-0">
                 <img 
                    src={`https://ui-avatars.com/api/?name=${current.author.replace(' ', '+')}&background=random&color=fff`} 
                    alt={current.author} 
                    className="w-full h-full object-cover" 
                 />
              </div>
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">{current.author}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{current.role}</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-slate-800 dark:bg-slate-200 w-6' : 'bg-slate-300 dark:bg-slate-600 w-1.5 hover:bg-slate-400 dark:hover:bg-slate-500'}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                />
            ))}
          </div>
      </div>
    </div>
  );
};