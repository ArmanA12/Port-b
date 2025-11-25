
import React from 'react';
import { motion } from 'framer-motion';

// --- Micro-Interaction Components (Auto-Animating) ---

const FrontendWidget = () => (
  <div className="w-full h-24 bg-neutral-200 dark:bg-neutral-900 rounded-none border border-neutral-300 dark:border-neutral-700 overflow-hidden relative flex flex-col p-2 gap-2">
    {/* Header */}
    <motion.div 
      className="h-3 bg-neutral-300 dark:bg-neutral-800 rounded-none"
      animate={{ width: ["0%", "100%", "100%", "100%"] }}
      transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.9, 1] }}
    />
    <div className="flex gap-2 h-full">
      {/* Sidebar */}
      <motion.div 
        className="w-1/4 bg-neutral-300 dark:bg-neutral-800 rounded-none"
        animate={{ height: ["0%", "100%", "100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, times: [0.1, 0.3, 0.9, 1] }}
      />
      {/* Content Grid */}
      <div className="flex-1 grid grid-cols-2 gap-2">
        <motion.div 
          className="bg-primary/20 border border-primary/50 rounded-none"
          animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0.3, 0.4, 0.8, 1] }}
        />
        <motion.div 
          className="bg-neutral-300 dark:bg-neutral-800 rounded-none"
          animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0.4, 0.5, 0.8, 1] }}
        />
        <motion.div 
          className="col-span-2 bg-neutral-300 dark:bg-neutral-800 rounded-none"
          animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0.5, 0.6, 0.8, 1] }}
        />
      </div>
    </div>
    {/* Cursor Overlay */}
    <motion.div 
        className="absolute z-10"
        animate={{ 
            x: [20, 0, 40, 20], 
            y: [20, 0, 40, 20],
            opacity: [0, 1, 1, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: 10, right: 10 }}
    >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#FF6A3D" stroke="white" strokeWidth="2"/>
        </svg>
    </motion.div>
  </div>
);

const BackendWidget = () => (
  <div className="w-full h-24 bg-neutral-900 rounded-none border border-neutral-700 p-3 font-mono text-[10px] flex flex-col gap-1 overflow-hidden relative">
      <div className="flex gap-1.5 mb-2">
          {/* Square Status Lights */}
          <div className="w-2 h-2 rounded-none bg-red-500" />
          <div className="w-2 h-2 rounded-none bg-yellow-500" />
          <div className="w-2 h-2 rounded-none bg-green-500" />
      </div>
      <div className="text-green-400">
          <motion.span 
            animate={{ opacity: [0, 1, 1, 0] }} 
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
          >$ POST /api/v1/auth</motion.span>
      </div>
      <div className="text-neutral-400">
          <motion.span 
            animate={{ opacity: [0, 1, 1, 0] }} 
            transition={{ duration: 3, repeat: Infinity, times: [0.2, 0.3, 0.9, 1] }}
          >Processing payload...</motion.span>
      </div>
      <div className="text-primary">
          <motion.span 
            animate={{ opacity: [0, 1, 1, 0] }} 
            transition={{ duration: 3, repeat: Infinity, times: [0.5, 0.6, 0.9, 1] }}
          >{`> Status: 200 OK`}</motion.span>
      </div>
      <div className="text-blue-400">
         <motion.span 
            animate={{ opacity: [0, 1, 1, 0] }} 
            transition={{ duration: 3, repeat: Infinity, times: [0.7, 0.8, 0.9, 1] }}
         >{`> Token: eyJhbGci...`}</motion.span>
      </div>
      
      {/* Pulse Effect */}
      <motion.div 
        className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-none"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
  </div>
);

const DesignWidget = () => (
  <div className="w-full h-24 bg-neutral-100 dark:bg-neutral-900 rounded-none border border-neutral-300 dark:border-neutral-700 relative overflow-hidden flex items-center justify-center">
      {/* Grid Bg */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px]" />
      
      {/* Canvas Element */}
      <motion.div 
        className="w-12 h-12 border-2 border-neutral-400 dark:border-neutral-600 rounded-none relative"
        animate={{ 
            rotate: [0, 90, 180, 270, 360],
            // Sharp morphing
            scale: [1, 0.8, 1.2, 1],
            borderColor: ["#525252", "#FF6A3D", "#525252", "#FF6A3D", "#525252"]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
          {/* Handles */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary border border-white" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary border border-white" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary border border-white" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary border border-white" />
      </motion.div>

      {/* Cursor */}
      <motion.div 
         className="absolute z-10"
         animate={{ 
            x: [20, -20, 20], 
            y: [20, -20, 20] 
         }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0828 17.518L10.9998 8.00696L5.04282 15.658C4.54582 16.296 5.34282 17.13 6.07182 16.892L14.0828 17.518Z" fill="black" stroke="white" strokeWidth="2"/>
        </svg>
      </motion.div>
  </div>
);

const DatabaseWidget = () => (
  <div className="w-full h-24 flex items-center justify-center gap-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-none border border-neutral-200 dark:border-neutral-800">
     {/* Database Structure - Rectangular Blocks */}
     <div className="relative w-16 h-20 flex flex-col justify-between py-1">
        {[0, 1, 2].map((i) => (
             <div key={i} className="w-full h-5 rounded-none border border-neutral-400 dark:border-neutral-600 relative bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                <motion.div 
                    className="absolute inset-0 bg-primary"
                    animate={{ width: ["10%", "100%", "30%"] }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
             </div>
        ))}
        {/* Connection Lines */}
        <motion.div 
            className="absolute top-2 left-1/2 w-0.5 bg-primary/50 -z-10" 
            animate={{ height: [0, 64, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
     </div>
     
     {/* Status Indicator */}
     <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
            <motion.div className="w-1.5 h-1.5 rounded-none bg-neutral-300" animate={{ backgroundColor: ["#d4d4d4", "#FF6A3D", "#d4d4d4"] }} transition={{ duration: 0.5, repeat: Infinity }} />
            <span className="text-[8px] font-mono text-neutral-500">READ</span>
        </div>
        <div className="flex items-center gap-1">
            <motion.div className="w-1.5 h-1.5 rounded-none bg-neutral-300" animate={{ backgroundColor: ["#d4d4d4", "#FF6A3D", "#d4d4d4"] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.25 }} />
            <span className="text-[8px] font-mono text-neutral-500">WRITE</span>
        </div>
     </div>
  </div>
);

const DevOpsWidget = () => (
  <div className="w-full h-24 bg-neutral-900 rounded-none border border-neutral-700 flex items-center justify-center overflow-hidden">
     <div className="flex items-center gap-1">
        {[0, 1, 2, 3].map((i) => (
            <React.Fragment key={i}>
                <div className="relative">
                    <motion.div 
                        className="w-8 h-8 rounded-none border border-neutral-600 bg-neutral-800 flex items-center justify-center z-10 relative"
                        animate={{ 
                            borderColor: ["#525252", "#FF6A3D", "#525252"],
                            backgroundColor: ["#262626", "#262626", "#262626"] 
                        }}
                        transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                    >
                       {i === 0 && <span className="text-[8px] font-mono text-white">CODE</span>}
                       {i === 1 && <span className="text-[8px] font-mono text-white">TEST</span>}
                       {i === 2 && <span className="text-[8px] font-mono text-white">BUILD</span>}
                       {i === 3 && <span className="text-[8px] font-mono text-white">DEP</span>}
                    </motion.div>
                    
                    {/* Progress Bar under */}
                    <motion.div 
                        className="absolute bottom-0 left-0 h-0.5 bg-primary"
                        animate={{ width: ["0%", "100%", "0%"] }}
                        transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                    />
                </div>
                {i < 3 && (
                    <div className="w-4 h-0.5 bg-neutral-700 overflow-hidden">
                        <motion.div 
                            className="w-full h-full bg-primary"
                            animate={{ x: ["-100%", "0%", "100%"] }}
                            transition={{ duration: 0.5, delay: (i * 0.5) + 0.4, repeat: Infinity }}
                        />
                    </div>
                )}
            </React.Fragment>
        ))}
     </div>
  </div>
);

const Web3Widget = () => (
  <div className="w-full h-24 bg-neutral-50 dark:bg-neutral-900 rounded-none border border-neutral-200 dark:border-neutral-800 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800" />
      </div>
      
      <div className="flex gap-2 z-10">
          {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-10 h-10 border-2 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-950 flex items-center justify-center"
                // Sharp Polygon
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                animate={{ 
                    y: [0, -8, 0], 
                    borderColor: ["#525252", "#FF6A3D", "#525252"] 
                }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
              >
                  <span className="text-[8px] font-mono text-neutral-400">B{i}</span>
              </motion.div>
          ))}
      </div>
      
      {/* Connector glow */}
      <motion.div 
         className="absolute h-0.5 bg-primary blur-sm"
         style={{ top: '50%', left: 0, right: 0 }}
         animate={{ opacity: [0.2, 1, 0.2] }}
         transition={{ duration: 2, repeat: Infinity }}
      />
  </div>
);

const SKILLS = [
  { name: "Frontend", widget: FrontendWidget, desc: "React, Next.js, Tailwind", code: "FE_DEV" },
  { name: "Backend", widget: BackendWidget, desc: "Node.js, PostgreSQL", code: "BE_SYS" },
  { name: "Design", widget: DesignWidget, desc: "Figma, Framer", code: "UI_UX" },
  { name: "Database", widget: DatabaseWidget, desc: "Supabase, Prisma", code: "DB_MGR" },
  { name: "DevOps", widget: DevOpsWidget, desc: "Docker, AWS", code: "OPS_CI" },
  { name: "Web3", widget: Web3Widget, desc: "Solidity, Ethers", code: "W3_ETH" }
];

export const SkillsSecond: React.FC = () => {
  return (
    <section className="py-24 px-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 relative transition-colors duration-300" id="skills">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:11rem_11rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-bold uppercase text-neutral-900 dark:text-white">Technical <span className="text-neutral-400 dark:text-neutral-700">Matrix</span></h2>
            <div className="hidden md:flex gap-2">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-none ${i===0 ? 'bg-primary' : 'bg-neutral-300 dark:bg-neutral-800'}`} />
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-neutral-50 dark:bg-neutral-950 p-8 group hover:bg-white dark:hover:bg-neutral-900 transition-colors relative overflow-hidden flex flex-col justify-between h-[300px]"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600 group-hover:text-primary/50">[{skill.code}]</span>
              </div>
              
              {/* Animation Widget Area */}
              <div className="flex-1 flex items-center justify-center w-full mb-6">
                 <skill.widget />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 uppercase">{skill.name}</h3>
                <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                    {skill.desc}
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-neutral-200 dark:bg-neutral-900 group-hover:bg-primary transition-colors clip-path-triangle" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
