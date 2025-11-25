import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-neutral-950 pt-32 pb-12 border-t border-neutral-200 dark:border-neutral-800 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <h1 className="text-[15vw] leading-none font-bold text-transparent select-none text-outline dark:text-outline hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">
          ARMAN
        </h1>
        <div className="flex justify-between items-end mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
            <p className="text-neutral-500 dark:text-neutral-500 text-xs uppercase font-mono tracking-wider">© Arman Shekh. 2024.</p>
            <p className="text-neutral-500 dark:text-neutral-500 text-xs uppercase font-mono tracking-wider">All Rights Reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};