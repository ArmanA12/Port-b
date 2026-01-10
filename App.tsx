import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Pricing } from './components/Pricing';
import { Skills } from './components/Skills';
import { PersonalProjects } from './components/PersonalProjects';
import { LifeUpdates } from './components/LifeUpdates';
import { HireMe } from './components/HireMe';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { CustomCursor } from './components/ui/CustomCursor';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkillsSecond } from './components/SkillSecond';

const IntroOverlay = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-[100] bg-neutral-950 flex items-center justify-center"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-white text-6xl font-bold  uppercase tracking-widest font-space"
      >
        Arman Shekh
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Handle Theme Persistance
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black overflow-x-hidden relative transition-colors duration-0">
      
      {/* Premium Addons */}
      <CustomCursor /> 
      <div className="bg-noise" />
      <IntroOverlay />

      {/* Navigation - Sharp & Centered & Fit Content */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between bg-white/80 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 px-6 md:px-8 py-4 backdrop-blur-md shadow-none w-[90%] lg:w-[70%]">
          <div className="font-bold text-xl tracking-tighter text-neutral-900 dark:text-white uppercase">Arman.</div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Work</a>
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Pricing</a>
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">About</a>
            </div>

            <div className="w-px h-4 bg-neutral-200 dark:bg-neutral-800 hidden md:block"></div>

            {/* Theme Toggle - Sharp */}
            <button 
              onClick={toggleTheme}
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              >
                {theme === 'light' ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />}
              </motion.div>
            </button>
          </div>
      </nav>

      <main>
        <Hero />
        <FeaturedProjects />
        <Pricing />
        {/* <Skills /> */}
        <SkillsSecond />
        <PersonalProjects />
        {/* <SkillsSecond /> */}
        <LifeUpdates />
        <HireMe />
      </main>

      <Footer />
      <AIChat />
    </div>
  );
}

export default App;
