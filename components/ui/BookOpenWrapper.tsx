
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface BookOpenWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const BookOpenWrapper: React.FC<BookOpenWrapperProps> = ({ 
  children, 
  className = "",
  delay = 0 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pageVariants: Variants = {
    closed: { 
      rotateY: 45, // Steeper angle for dramatic open
      rotateX: 2,  // Slight organic tilt
      opacity: 0,
      x: -50,      // Pulls out from the left
      scale: 0.95,
      filter: "blur(8px)", // Motion blur simulation
      transformPerspective: 2500
    },
    open: { 
      rotateY: 0, 
      rotateX: 0,
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 1.2, // Slightly faster snap
        ease: [0.25, 1, 0.5, 1], // Soft spring-like settling
        delay: delay
      } 
    },
  };

  return (
    <div 
      ref={ref} 
      className={`relative perspective-[2500px] ${className}`}
      style={{ perspective: "2500px" }}
    >
      <motion.div
        initial="closed"
        animate={isInView ? "open" : "closed"}
        variants={pageVariants}
        style={{ transformOrigin: "center left", transformStyle: "preserve-3d" }}
        className="relative z-10 origin-left bg-white dark:bg-neutral-950"
      >
        {children}

        {/* Dynamic Lighting Overlay (Sheen) */}
        <motion.div 
            initial={{ opacity: 0.3, background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)" }}
            animate={{ opacity: 0, x: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: delay }}
            className="absolute inset-0 pointer-events-none z-30 mix-blend-overlay"
        />
      </motion.div>
    </div>
  );
};
