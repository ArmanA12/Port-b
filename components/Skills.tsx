
import React, { useRef, useState } from 'react';
import { Layout, Server, PenTool } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FoldUnveilWrapper } from './ui/FoldUnveilWrapper';

// Skill Data Structure
const SKILL_CATEGORIES = [
  {
    title: "Frontend Core",
    icon: Layout,
    skills: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind", level: "Expert" },
    ]
  },
  {
    title: "Backend & Cloud",
    icon: Server,
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "AWS", level: "Intermediate" },
      { name: "Prisma", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
    ]
  },
  {
    title: "Tools & Design",
    icon: PenTool,
    skills: [
      { name: "Figma", level: "Intermediate" },
      { name: "Git", level: "Expert" },
      { name: "Docker", level: "Basic" },
      { name: "Framer", level: "Intermediate" },
    ]
  }
];

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

// 3D Tilt Card + Spotlight Effect
const InteractiveCard: React.FC<InteractiveCardProps> = ({ children, className = "" }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Tilt calculations
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);

    // Spotlight calculations
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative z-10 ${className}`}
    >
      {/* Spotlight Effect - Light Mode */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 dark:hidden"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,0,0,0.08), transparent 40%)`,
        }}
      />
      {/* Spotlight Effect - Dark Mode */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 hidden dark:block"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
      
      {/* Content Container */}
      <div className="relative h-full z-20">
         {children}
      </div>
    </motion.div>
  );
};

export const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-white dark:bg-neutral-950 relative overflow-hidden perspective-1000">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header (Static) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white uppercase tracking-tight">
                   Technical Arsenal
                </h2>
                <div className="w-20 h-2 bg-neutral-900 dark:bg-white mb-8"></div>
                <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl font-mono text-sm uppercase tracking-wide">
                    Curated stack of technologies for building robust applications.
                </p>
            </motion.div>

            {/* Content wrapped in FoldUnveil for multi-layer reveal */}
            <FoldUnveilWrapper>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {SKILL_CATEGORIES.map((category, idx) => (
                      <div key={idx} className="h-full">
                        <InteractiveCard className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-8 h-full group">
                            
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-10 translate-z-10">
                                <div className="p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 text-neutral-900 dark:text-white group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                                    <category.icon className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold font-space uppercase tracking-wider text-neutral-900 dark:text-white">{category.title}</h3>
                            </div>

                            {/* Skill List */}
                            <div className="space-y-2">
                                {category.skills.map((skill, sIdx) => (
                                    <motion.div 
                                        key={sIdx}
                                        initial="initial"
                                        whileHover="hover"
                                        className="relative flex items-center justify-between p-3 border border-transparent hover:border-neutral-900 dark:hover:border-white transition-all duration-200 cursor-none overflow-hidden"
                                    >
                                        {/* Background Fill Animation */}
                                        <motion.div 
                                          variants={{
                                            initial: { scaleX: 0, originX: 0 },
                                            hover: { scaleX: 1, originX: 0 }
                                          }}
                                          transition={{ duration: 0.3, ease: "circOut" }}
                                          className="absolute inset-0 bg-neutral-900 dark:bg-white z-0"
                                        />

                                        <div className="relative z-10 flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-colors"></div>
                                            <motion.span 
                                              variants={{
                                                initial: { color: "inherit", x: 0 },
                                                hover: { color: "var(--hover-text)", x: 5 }
                                              }}
                                              className="font-mono text-sm text-neutral-600 dark:text-neutral-400 uppercase font-bold dark:var-hover-text-black var-hover-text-white"
                                              style={{ ['--hover-text' as any]: 'var(--color-neutral-50)' }}
                                            >
                                              {skill.name}
                                            </motion.span>
                                        </div>

                                        <motion.span 
                                          variants={{
                                            initial: { opacity: 0, x: -10 },
                                            hover: { opacity: 1, x: 0 }
                                          }}
                                          className="relative z-10 text-[10px] font-bold uppercase tracking-wider text-white dark:text-black"
                                        >
                                            {skill.level}
                                        </motion.span>
                                    </motion.div>
                                ))}
                            </div>
                        </InteractiveCard>
                      </div>
                  ))}
              </div>

              {/* Marquee effect */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 1 }} // Delays until folds are done
                className="mt-20 relative w-full overflow-hidden border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 py-6"
              >
                  <div className="flex gap-16 whitespace-nowrap animate-marquee">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-16">
                           {["Redux", "GraphQL", "Supabase", "Firebase", "Stripe", "Framer Motion", "Jest", "CI/CD"].map((item, idx) => (
                              <span key={idx} className="text-neutral-400 dark:text-neutral-600 font-bold text-xl uppercase tracking-tighter hover:text-neutral-900 dark:hover:text-white transition-colors cursor-none">
                                 {item}
                              </span>
                          ))}
                        </div>
                      ))}
                  </div>
              </motion.div>
            </FoldUnveilWrapper>
        </div>
        
        <style>{`
            .dark .var-hover-text-black { --hover-text: #000; }
            .var-hover-text-white { --hover-text: #fff; }

            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 40s linear infinite;
            }
        `}</style>
    </section>
  );
};
