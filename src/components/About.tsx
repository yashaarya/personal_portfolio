'use client';

import React, { useEffect, useState } from 'react';
import { personalInfo } from '@/data/personal';
import { Users, Code, Heart, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: <Code size={24} />, title: "Clean Code", description: "Writing maintainable, scalable code with best practices and modern development patterns." },
    { icon: <Users size={24} />, title: "Team Player", description: "Collaborating effectively with cross-functional teams to deliver exceptional results." },
    { icon: <Heart size={24} />, title: "Passionate", description: "Deeply committed to creating innovative solutions that make a positive impact." },
    { icon: <Award size={24} />, title: "Problem Solver", description: "Tackling complex challenges with creative thinking and technical expertise." }
  ];

  return (
    <section id="about" className="py-24 bg-primary-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(245,222,179,0.08),transparent_20%)] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            About <span className="gradient-text">Me</span>
          </h2>

          <p
            className={`text-base md:text-lg text-gray-300 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Get to know more about my background, skills, and what drives me as a developer.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start mb-10">
          <div
            className={`rounded-[2rem] border border-white/10 bg-secondary-700/85 p-8 md:p-10 shadow-2xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/75 backdrop-blur-sm">
                About me
              </div>
              <div className="space-y-5">
                {personalInfo.about.map((paragraph, index) => (
                  <p key={index} className="text-white/90 leading-relaxed text-base md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`grid gap-5 sm:grid-cols-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-hover rounded-[1.5rem] border border-white/10 bg-secondary-700/70 p-6 shadow-lg transition-all duration-700"
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-secondary-900 rounded-xl flex items-center justify-center text-primary-100 mb-4 border border-white/10">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">{feature.title}</h3>
                <p className="text-white/85 leading-relaxed text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

       

      </div>
    </section>
  );
};

export default About;
