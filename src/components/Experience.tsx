'use client';

import React, { useEffect, useState } from 'react';
import { personalInfo } from '@/data/personal';
import { Briefcase, CalendarDays, BadgeCheck } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-primary-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="gradient-text"> Experience </span>
          </h2>
          
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/20 md:-translate-x-1/2"></div>

          <div className="space-y-8">
            {personalInfo.experience.map((entry, index) => (
              <div
                key={`${entry.organization}-${index}`}
                className={`relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary-500 md:-translate-x-1/2"></div>

                <div className="pl-14 md:pl-0 md:w-1/2 md:pr-8 md:text-right">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white mb-3">
                    <Briefcase size={16} />
                    {entry.project ? entry.project : 'Experience'}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{entry.organization}</h3>
                  <p className="text-lg text-gray-100 mt-1">{entry.role}</p>
                  {entry.description ? <p className="text-gray-200 mt-3 leading-relaxed">{entry.description}</p> : null}
                </div>

                <div className="pl-14 md:pl-0 md:w-1/2 md:pl-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-5 shadow-lg card-hover">
                    {entry.duration ? (
                      <div className="flex items-center gap-2 text-white font-medium mb-3">
                        <CalendarDays size={18} />
                        {entry.duration}
                      </div>
                    ) : null}
                    <div className="flex items-center gap-2 text-gray-100">
                      <BadgeCheck size={18} className="text-emerald-300" />
                      <span className="leading-relaxed">
                        {entry.project ? `Project: ${entry.project}` : 'Focused on building practical solutions and applying modern technologies.'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;