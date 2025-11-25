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
    <section id="about" className="py-20 bg-primary-500">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            About <span className="gradient-text">Me</span>
          </h2>

          <p
            className={`text-lg md:text-xl text-gray-300 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Get to know more about my background, skills, and what drives me as a developer.
          </p>
        </div>

        {/* Centered Text With Consistent Indentation */}
        <div className="flex flex-col items-center text-center mb-16">
          <div
            className={`space-y-6 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {personalInfo.about.map((paragraph, index) => (
              <p key={index} className="text-white leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-secondary-700 p-6 rounded-xl shadow-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-secondary-900 rounded-lg flex items-center justify-center text-primary-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">{feature.title}</h3>
              <p className="text-white leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
