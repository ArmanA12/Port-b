import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface FoldUnveilWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const FoldUnveilWrapper: React.FC<FoldUnveilWrapperProps> = ({ 
  children, 
  className = "" 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Physics for paper folding
  const transition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number] // Custom bezier for crisp paper feel
  };

  const layerVariants: Variants = {
    closed: { 
      rotateX: 0, 
      opacity: 1,
      y: 0,
    },
    open: (custom: number) => ({ 
      rotateX: -140, // Folds up and away
      opacity: 0,
      y: -50, // Slight lift
      transition: {
        ...transition,
        delay: custom * 0.2 // Stagger delays
      }
    }),
  };

  return (
    <div 
      ref={ref} 
      className={`relative perspective-[1200px] ${className}`} 
      style={{ perspective: "1200px" }}
    >
      {/* The Actual Content (Bottom Layer) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Middle Fold Layer */}
      <motion.div
        custom={1} // Delay multiplier
        initial="closed"
        animate={isInView ? "open" : "closed"}
        variants={layerVariants}
        style={{ transformOrigin: "top" }}
        className="absolute inset-0 z-20 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 pointer-events-none"
      >
        {/* Decorative Fold Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-300 dark:bg-neutral-700 opacity-50" />
        <div className="absolute top-4 left-4 text-[10px] font-mono uppercase text-neutral-400">Layer 02 // Structure</div>
      </motion.div>

      {/* Top Fold Layer */}
      <motion.div
        custom={0} // No delay, starts first
        initial="closed"
        animate={isInView ? "open" : "closed"}
        variants={layerVariants}
        style={{ transformOrigin: "top" }}
        className="absolute inset-0 z-30 bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 pointer-events-none shadow-lg"
      >
         {/* Decorative Elements to look like a cover */}
         <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-32 h-32 border-2 border-neutral-900 dark:border-white rounded-full"></div>
         </div>
         <div className="absolute bottom-4 right-4 text-[10px] font-mono uppercase text-neutral-500 font-bold">Classified // 01</div>
         <div className="absolute top-4 left-4 text-[10px] font-mono uppercase text-neutral-500">Layer 01 // Cover</div>
      </motion.div>
    </div>
  );
};