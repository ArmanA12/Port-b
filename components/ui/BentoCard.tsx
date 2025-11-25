import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  colSpan?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({ children, className = "", title, subtitle, colSpan = "col-span-1" }) => {
  return (
    <div className={`relative group bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-8 overflow-hidden transition-all duration-300 hover:border-neutral-900 dark:hover:border-white ${colSpan} ${className}`}>
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {(title || subtitle) && (
          <div className="mb-6">
            {title && <h3 className="text-xl font-bold font-space tracking-tight text-neutral-900 dark:text-white uppercase">{title}</h3>}
            {subtitle && <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-2 uppercase tracking-wide">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-neutral-900 dark:border-r-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};