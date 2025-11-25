'use client';

import React, { useEffect, useState } from 'react';
import { projects } from '@/data/projects';
import { Project,  } from '@/types';
import { ExternalLink, Github, Filter } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

 


  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden card-hover transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

        

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white text-gray-900 px-3 py-2 rounded-lg text-center text-sm font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-1"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 text-white px-3 py-2 rounded-lg text-center text-sm font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-1"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-primary-600 text-primary-600 px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} />
              View Live
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 ${
              !project.liveUrl ? 'flex-1' : ''
            }`}
          >
            <Github size={16} />
            View Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20  bg-primary-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <span className="gradient-text"> My Projects</span>
          </h2>
          <p className={`text-lg md:text-xl text-gray-100 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            A selection of my recent work and personal projects that showcase my skills and experience
          </p>
        </div>

     

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        
       
      </div>
    </section>
  );
};

export default Projects;