'use client';

import React, { useEffect, useState } from 'react';
import { personalInfo } from '@/data/personal';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 md:pt-28 pb-24 bg-gradient-to-br from-primary-500 via-primary-700 to-primary-900 overflow-hidden">

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(245,222,179,0.16),transparent_28%),radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%),linear-gradient(135deg,rgba(59,34,32,0.24),rgba(20,10,8,0.28))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] opacity-10" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-bounce-subtle"></div>
        <div className="absolute -bottom-44 -left-44 w-[30rem] h-[30rem] bg-secondary-100/10 rounded-full blur-3xl animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] items-center">
          {/* Text Content */}
          <div className={`text-white space-y-7 text-left ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          

            <div className="space-y-3 max-w-4xl">
              <p className="text-xl lg:text-2xl md:text-sm uppercase  text-white/70"> 
                {personalInfo.name}
              </p>
              <h1 className="text-xl md:text-xl lg:text-3xl italic leading-[0.95] tracking-tight max-w-2xl drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                {personalInfo.title.split('|').map((line) => (
                  <span key={line.trim()} className="block bg-gradient-to-r from-white via-secondary-100 to-white bg-clip-text text-transparent">
                    {line.trim()}
                  </span>
                ))}
              </h1>
              <p className="text-sm md:text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-hover bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <ExternalLink size={20} />
                View Projects
              </button>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-hover border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-hover border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center gap-2"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <div className="relative w-full max-w-md">
              <div className="absolute inset-x-8 top-6 h-24 rounded-full bg-white/15 blur-3xl"></div>
              <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl transform rotate-[-4deg]"></div>
              <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-primary-900/20">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    width={520}
                    height={620}
                    className="h-[420px] w-full object-cover md:h-[500px]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
          aria-label="Scroll down"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;