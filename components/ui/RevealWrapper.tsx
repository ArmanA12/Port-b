import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  delay?: number;
  clothColor?: string; // Optional override
}

export const RevealWrapper: React.FC<RevealWrapperProps> = ({ 
  children, 
  className = "", 
  contentClassName = "",
  delay = 0,
  clothColor 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const contentVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 1.0, 
      y: 0, 
      filter: "blur(2px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: delay + 0.2 // Content appears almost immediately as cloth lifts
      } 
    },
  };

  const clothVariants: Variants = {
    hidden: { 
      y: "0%" 
    },
    visible: { 
      y: "-100%",
      transition: { 
        duration: 0.8, 
        ease: [0.7, 0, 0.3, 1] as const, // Sharper, more mechanical/premium feel
        delay: delay
      } 
    },
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* The Content (Statue) */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={contentClassName}
      >
        {children}
      </motion.div>

      {/* The Cloth Overlay */}
      <motion.div
        variants={clothVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`absolute inset-0 z-20 pointer-events-none ${
          clothColor 
            ? clothColor 
            : "bg-neutral-900 dark:bg-white" // High contrast: Black in light mode, White in dark
        }`}
      />
    </div>
  );
};