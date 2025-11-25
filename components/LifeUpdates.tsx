import React, { useRef } from 'react';
import { CheckCircle2, Briefcase, GraduationCap, Users } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const EVENTS = [
  {
    title: "Handling 4 People Teams",
    date: "Present",
    description: "Leading a small squad of developers to deliver high-impact features.",
    icon: Users,
    type: "Work"
  },
  {
    title: "Got my first job",
    date: "Aug 2022",
    description: "Started my professional journey as a Software Engineer.",
    icon: Briefcase,
    type: "Career"
  },
  {
    title: "Completed Degree",
    date: "2022",
    description: "Graduated with honors in Computer Science.",
    icon: GraduationCap,
    type: "Education"
  },
  {
    title: "3 Star Coder at LeetCode",
    date: "2021",
    description: "Solved 500+ problems improving DSA skills.",
    icon: CheckCircle2,
    type: "Achievement"
  }
];

export const LifeUpdates: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 bg-white dark:bg-neutral-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-24 text-center"
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white uppercase tracking-tight">
              Timeline
            </h2>
            <div className="w-px h-20 bg-neutral-200 dark:bg-neutral-800 mb-6"></div>
            <p className="text-neutral-500 font-mono text-sm uppercase">Professional & Personal Milestones</p>
        </motion.div>

        <div className="relative">
            {/* The Animated Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 md:-translate-x-1/2 origin-top">
                <motion.div 
                    style={{ scaleY }} 
                    className="w-full h-full bg-neutral-900 dark:bg-white origin-top"
                />
            </div>

            <div className="space-y-20">
                {EVENTS.map((event, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <TimelineItem key={index} event={event} index={index} isEven={isEven} />
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  event: typeof EVENTS[0];
  index: number;
  isEven: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index, isEven }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className={`relative flex items-center md:justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
        {/* Empty Space for desktop layout */}
        <div className="hidden md:block w-5/12"></div>

        {/* Timeline Node - Square with Interaction */}
        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="w-6 h-6 bg-white dark:bg-neutral-950 border border-neutral-900 dark:border-white flex items-center justify-center"
            >
                <div className="w-2 h-2 bg-neutral-900 dark:bg-white"></div>
            </motion.div>
        </div>

        {/* Card - Sharp */}
        <div className={`ml-20 md:ml-0 w-full md:w-5/12`}>
            <motion.div 
              whileHover={{ x: isEven ? 10 : -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-neutral-950 p-8 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white transition-all duration-300 group relative"
            >
                
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 border border-neutral-200 dark:border-neutral-800 text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900">
                        {event.type}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase">
                        {event.date}
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white uppercase">{event.title}</h3>
                
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                    {event.description}
                </p>

                <div className="text-neutral-300 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                    <event.icon size={24} strokeWidth={1.5} />
                </div>
            </motion.div>
        </div>
    </motion.div>
  )
}