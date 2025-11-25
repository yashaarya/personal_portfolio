'use client';

import React, { useState, useEffect } from 'react';
import { personalInfo } from '@/data/personal';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: personalInfo.github,
      icon: <Github size={20} />,
    },
    {
      name: 'LinkedIn',
      href: personalInfo.linkedin,
      icon: <Linkedin size={20} />,
    },
    {
      name: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: <Mail size={20} />,
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {personalInfo.name.split(' ')[0]}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {personalInfo.tagline}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary-600 hover:text-white transition-colors duration-200"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href.substring(1));
                      }}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-primary-400" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github size={16} className="text-primary-400" />
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    GitHub Profile
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin size={16} className="text-primary-400" />
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter / CTA */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
              <p className="text-gray-300 mb-4">
                Interested in collaboration or have a question? Feel free to reach out!
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-gray-400 text-sm flex items-center gap-1">
                <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
                <span className="hidden md:inline"></span>
                <span className="flex items-center gap-1">
                
                </span>
              </div>

              {/* Additional Links */}
              <div className="flex gap-6 text-sm">
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center group"
          aria-label="Back to top"
        >
          <ArrowUp
            size={20}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </button>
      )}
    </>
  );
};

export default Footer;