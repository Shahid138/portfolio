import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ExternalLink, Github, Terminal } from 'lucide-react';
import { projects } from '../data/portfolio';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white border-2 border-black rounded-none overflow-hidden hover:shadow-2xl transition-all duration-300"
      style={{
        transform: isHovered ? 'translate(-4px, -4px)' : 'translate(0, 0)',
      }}
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-black border-l-[40px] border-l-transparent" />
      
      <div className="p-8">
        {/* Project number */}
        <div className="font-mono text-xs text-gray-400 mb-2">
          {`[${String(index + 1).padStart(2, '0')}]`}
        </div>
        
        <h3 className="text-3xl font-bold text-black mb-4 group-hover:translate-x-2 transition-transform">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech stack with terminal style */}
        <div className="mb-6">
          <div className="font-mono text-xs text-gray-500 mb-2">$ tech stack:</div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-black text-white text-xs font-mono rounded-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Links */}
        <div className="flex items-center space-x-4 font-mono text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-black hover:opacity-60 transition-opacity"
            >
              <Github size={18} />
              <span>code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-black hover:opacity-60 transition-opacity"
            >
              <ExternalLink size={18} />
              <span>live</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Shadow effect */}
      {isHovered && (
        <div
          className="absolute inset-0 border-2 border-black rounded-none pointer-events-none"
          style={{
            transform: 'translate(4px, 4px)',
            zIndex: -1,
          }}
        />
      )}
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Terminal className="text-black" size={32} />
            <h2 className="text-5xl md:text-7xl font-bold text-black font-mono">
              {'<Projects />'}
            </h2>
          </div>
          <div className="font-mono text-sm text-gray-600 ml-12">
            <span className="text-green-600">$</span> ls -la projects/
          </div>
          <p className="text-gray-600 text-lg max-w-2xl ml-12 mt-4">
            A selection of recent work that showcases my skills and passion for building great software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
