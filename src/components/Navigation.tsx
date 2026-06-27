'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { personalInfo } from '@/data/personal';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = useMemo(() => [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
      scrolled
        ? 'bg-primary-900/80 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/10'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-center h-16 md:h-20 gap-4">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center justify-center space-x-8 rounded-full px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-secondary-100 ${  
                    scrolled ? 'text-white/80' : 'text-white'
                  } ${
                    activeSection === item.href.substring(1)
                      ? scrolled ? 'text-secondary-100' : 'text-white'
                      : ''
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 transition-colors duration-300 ${
                      scrolled ? 'bg-secondary-100' : 'bg-white'
                    }`}></span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="absolute right-0 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                scrolled
                    ? 'text-white hover:text-secondary-100'
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className={`py-4 space-y-2 ${
            scrolled ? 'bg-primary-900/95' : 'bg-primary-900/90'
          } rounded-2xl mt-2 border border-white/10 backdrop-blur-xl shadow-2xl`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`block px-4 py-3 text-base font-medium rounded-md transition-colors duration-300 hover:text-primary-200 ${
                  activeSection === item.href.substring(1)
                    ? 'text-white bg-white/10'
                    : 'text-white/80'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;