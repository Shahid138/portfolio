import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { skills } from '../data/portfolio';
import { SkillCategory } from '../types';
import { Code2, Database, Wrench } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Languages': <Code2 size={24} />,
  'Frontend': <Code2 size={24} />,
  'Backend': <Database size={24} />,
  'Tools': <Wrench size={24} />,
};

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

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
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white border-2 border-black rounded-none p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-black text-white">
          {iconMap[category.category] || <Code2 size={24} />}
        </div>
        <h3 className="text-2xl font-bold text-black font-mono">
          {category.category}
        </h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-800 font-mono text-sm">{skill.name}</span>
              <span className="text-gray-600 font-mono text-xs">{skill.level}%</span>
            </div>
            <div className="relative w-full h-2 bg-gray-200">
              <motion.div
                className="absolute top-0 left-0 h-full bg-black"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.2 + i * 0.1 }}
              />
              {/* Notches for tech feel */}
              <div className="absolute inset-0 flex">
                {Array.from({ length: 10 }).map((_, j) => (
                  <div
                    key={j}
                    className="flex-1 border-r border-white/30"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Code2 className="text-black" size={32} />
            <h2 className="text-5xl md:text-7xl font-bold text-black font-mono">
              {'<Skills />'}
            </h2>
          </div>
          <div className="font-mono text-sm text-gray-600 ml-12">
            <span className="text-green-600">$</span> cat skills.json
          </div>
          <p className="text-gray-600 text-lg max-w-2xl ml-12 mt-4">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((category, index) => (
            <SkillCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
