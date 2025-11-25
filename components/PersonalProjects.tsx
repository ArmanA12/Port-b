
import React from 'react';
import { PERSONAL_PROJECTS } from '../constants';
import { Project } from '../types';
import { Github, ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BookOpenWrapper } from './ui/BookOpenWrapper';

export const PersonalProjects: React.FC = () => {
  return (
    <section className="py-32 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2">
        
        {/* The Wrapper handles the 3D Page Turn */}
        <BookOpenWrapper className="w-full" delay={0.2}>
            <div className="bg-white dark:bg-neutral-950 p-3 md:p-12 border border-neutral-200 dark:border-neutral-800 relative overflow-hidden">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6 relative z-10">
                    <div>
                        <motion.h2 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6, duration: 0.8 }}
                          className="text-4xl font-bold text-neutral-900 dark:text-white uppercase tracking-tight mb-4"
                        >
                          Experiments
                        </motion.h2>
                        <motion.p 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.8, duration: 0.8 }}
                          className="text-neutral-500 font-mono text-sm uppercase"
                        >
                          Side projects & Open Source
                        </motion.p>
                    </div>
                    <a href="https://github.com" target="_blank" className="flex items-center gap-2 text-sm font-bold uppercase border-b border-neutral-900 dark:border-white pb-1 hover:opacity-70 group">
                        View Github Profile 
                        <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>

                {/* Grid - The "Page" Structure (No fade in, it turns with the page) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
                    {PERSONAL_PROJECTS.map((project, idx) => (
                        <ProjectCard key={project.id} project={project} index={idx} />
                    ))}
                </div>

            </div>
        </BookOpenWrapper>
        
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className="h-full bg-white dark:bg-neutral-950 group overflow-hidden relative">
      <div className="h-full p-8 flex flex-col relative z-10 transition-colors duration-500">
        
        {/* Header with Expanding Number and Links */}
        <div className="flex justify-between items-start mb-6 z-20">
           <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
              className="text-xs font-mono text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.5, fontWeight: "bold" }}
           >
             0{index + 1}
           </motion.span>
           
           <div className="flex items-center gap-3">
             {project.github && (
               <motion.a 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + (index * 0.1), duration: 0.4 }}
                  href={project.github} 
                  target="_blank" 
                  className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
               >
                 <Github size={18} />
               </motion.a>
             )}
             
             <motion.a 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + (index * 0.1), duration: 0.4 }}
                href={project.link} 
                target="_blank" 
                className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                title="Visit Website"
             >
               <ArrowRight size={18} />
             </motion.a>
           </div>
        </div>
        
        {/* Image Container with Reveal Effect */}
        <div className="relative aspect-[3/2] overflow-hidden mb-8 bg-neutral-100 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
            {/* Shimmer Effect */}
            <motion.div 
               initial={{ x: "-100%", opacity: 0 }}
               whileInView={{ x: "100%", opacity: 0.5 }}
               transition={{ delay: 0.6 + (index * 0.15), duration: 1.2, ease: "easeInOut" }}
               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 pointer-events-none"
            />
            
            <motion.img 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + (index * 0.1), duration: 0.8 }}
              src={project.image} 
              alt={project.title} 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              whileHover={{ scale: 1.05 }}
            />
        </div>

        {/* Content slide up interaction */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + (index * 0.1), duration: 0.5 }}
          >
             <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
             >
                <h3 className="text-lg font-bold mb-2 text-neutral-900 dark:text-white uppercase tracking-tight group-hover:underline decoration-1 underline-offset-4">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
             </motion.div>
          </motion.div>

          {/* Hidden Action Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 bg-white dark:bg-neutral-950 pt-2 flex justify-between items-center border-t border-neutral-100 dark:border-neutral-800"
          >
             <div className="flex gap-2">
               {project.tags.slice(0, 2).map((tag: string, i: number) => (
                 <span key={i} className="text-[10px] font-mono uppercase px-1.5 py-0.5 border border-neutral-200 dark:border-neutral-700 text-neutral-500">
                   {tag}
                 </span>
               ))}
             </div>
             <a href={project.link} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-neutral-900 dark:text-white hover:underline">
               View <ArrowUpRight size={12} />
             </a>
          </motion.div>
        </div>
      </div>

      {/* Border Draw Animation on Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-neutral-900 dark:group-hover:border-white pointer-events-none transition-colors duration-300 z-0 opacity-0 group-hover:opacity-100" />
    </div>
  );
};
