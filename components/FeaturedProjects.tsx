import React from 'react';
import { FEATURED_PROJECTS } from '../constants';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
       <div className="mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white uppercase tracking-tighter"
        >
          Selected Works
        </motion.h2>
      </div>

      <div className="space-y-32">
        {FEATURED_PROJECTS.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
              
              {/* Image Side */}
              <div className="w-full md:w-3/5 relative">
                <div className="relative overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 aspect-video">
                  
                  {/* Curtain Reveal */}
                  <motion.div 
                    initial={{ scaleX: 1 }}
                    whileInView={{ scaleX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Bezier for premium easing
                    className="absolute inset-0 bg-neutral-900 dark:bg-white z-20 origin-right"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 dark:group-hover:bg-white/5 transition-colors duration-300 z-10" />
                  
                  <motion.img 
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1.5 }}
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale transition-all duration-700 transform group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/5 space-y-8 pt-4">
                <div className="flex items-center gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
                  <span className="text-sm font-mono font-bold text-neutral-900 dark:text-white">0{index + 1}</span>
                  <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400 uppercase">{project.type}</span>
                </div>
                
                <h2 className="text-4xl font-bold text-neutral-900 dark:text-white uppercase leading-none">
                  {project.title}
                </h2>
                
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-mono border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 bg-transparent uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6">
                  <a href={project.link} className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider bg-neutral-900 dark:bg-white text-white dark:text-black px-6 py-3 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors">
                    View Project <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};