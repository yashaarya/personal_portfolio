'use client';

import React, { useEffect, useState } from 'react';
import { skills } from '@/data/skills';
import { Skill } from '@/types';
import { Code, Database, Wrench } from 'lucide-react';

const Skills = () => {
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'advanced':
        return 'bg-green-500';
      case 'intermediate':
        return 'bg-yellow-500';
      case 'beginner':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getSkillLevelBars = (level: string) => {
    const count = level === 'advanced' ? 3 : level === 'intermediate' ? 2 : 1;
    return Array.from({ length: 3 }, (_, i) => i < count);
  };

  const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
    const isActive = isVisible;
    const hasLevelBars = getSkillLevelBars(skill.level);

    return (
      <div
        className={`bg-white p-4 rounded-lg shadow-md card-hover transition-all duration-700 ${
          isActive
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${200 + index * 50}ms` }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{skill.icon}</span>
            <h4 className="font-semibold text-black">{skill.name}</h4>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            skill.level === 'advanced'
              ? 'bg-green-100 text-green-700'
              : skill.level === 'intermediate'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-blue-100 text-blue-700'
          }`}>
            {skill.level}
          </span>
        </div>

        {/* Skill Level Bars */}
        <div className="flex gap-1">
          {hasLevelBars.map((isActive, barIndex) => (
            <div
              key={barIndex}
              className={`h-2 flex-1 rounded-full transition-all duration-500 delay-300 ${
                isActive
                  ? getSkillLevelColor(skill.level)
                  : 'bg-gray-200'
              }`}
              style={{
                transitionDelay: `${400 + index * 50 + barIndex * 100}ms`
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  const skillsCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      description: 'Building responsive, interactive user interfaces with modern frameworks and tools.',
      skills: skills.frontend,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      icon: <Database size={24} />,
      description: 'Developing robust server-side applications, APIs, and database solutions.',
      skills: skills.backend,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench size={24} />,
      description: 'Utilizing development tools, platforms, and methodologies for efficient workflows.',
      skills: skills.tools,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-primary-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="gradient-text"> Technical Skills</span>
          </h2>
          <p className={`text-lg md:text-xl text-gray-100 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            A comprehensive overview of my technical expertise across different domains of software development
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillsCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full text-white mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-200 max-w-lg mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    skill={skill}
                    index={categoryIndex * 100 + skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        
          </div>
    </section>
  );
};

export default Skills;