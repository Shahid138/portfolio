import React from 'react';
import { Github, Linkedin, Mail, Terminal, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Terminal className="text-white" size={24} />
            <span className="text-2xl font-mono font-bold">{'<dev />'}</span>
          </div>

          <div className="flex space-x-4">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white hover:bg-white hover:text-black transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white hover:bg-white hover:text-black transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="p-2 border border-white hover:bg-white hover:text-black transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm font-mono">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} {portfolioData.name}. Built with React + TypeScript.
            </p>
            <p className="text-gray-400 flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" fill="currentColor" /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
