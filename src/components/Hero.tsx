import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import TypingEffect from './TypingEffect';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typingTexts = [
    'Full-Stack Developer',
    'TypeScript Enthusiast',
    'Open Source Contributor',
    'Problem Solver'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Interactive cursor effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Terminal-style greeting */}
            <motion.div
              className="mb-8 font-mono text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-green-600">$</span> whoami
            </motion.div>
            
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-black mb-6 leading-none tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                textShadow: '3px 3px 0px rgba(0,0,0,0.1)',
              }}
            >
              {portfolioData.name}
            </motion.h1>
            
            <motion.div
              className="text-2xl md:text-4xl text-gray-700 mb-8 font-mono h-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <TypingEffect texts={typingTexts} />
            </motion.div>
            
            <motion.p
              className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {portfolioData.bio}
            </motion.p>

            {/* Code-style links */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-12 font-mono text-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-all group"
              >
                <Github size={18} />
                <span>github</span>
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 border-2 border-black text-black rounded hover:bg-black hover:text-white transition-all"
              >
                <Linkedin size={18} />
                <span>linkedin</span>
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                className="flex items-center space-x-2 px-4 py-2 border-2 border-black text-black rounded hover:bg-black hover:text-white transition-all"
              >
                <Mail size={18} />
                <span>email</span>
              </a>
            </motion.div>

            <motion.button
              onClick={scrollToProjects}
              className="group flex items-center space-x-2 text-black hover:opacity-60 transition-opacity font-mono text-sm uppercase tracking-wider"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <Code2 size={20} />
              <span>View Projects</span>
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 font-mono text-xs text-gray-400 hidden lg:block">
        <div>{'{'}</div>
        <div className="ml-4">version: 2024.1</div>
        <div className="ml-4">status: available</div>
        <div>{'}'}</div>
      </div>
    </section>
  );
};

export default Hero;
