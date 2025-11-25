import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ id, title, subtitle, bgColor = 'white', children }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 ${bgColor === 'gray' ? 'bg-slate-50' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;