import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check } from 'lucide-react';
import { RevealWrapper } from './ui/RevealWrapper';

export const Pricing: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-800 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Reveal */}
        <div className="mb-12 text-center md:text-left">
          {/* Title Wrapper */}
          <RevealWrapper delay={0.1} className="inline-block mb-3">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white uppercase tracking-tight leading-none">
              Pricing Plans
            </h2>
          </RevealWrapper>
          
          <div className="block"></div>
          
          {/* Subtitle Wrapper */}
          <RevealWrapper delay={0.2} className="inline-block">
            <p className="text-neutral-500 dark:text-neutral-400 max-w-xl font-mono text-sm uppercase tracking-wide leading-none">
                Transparent pricing for every stage.
            </p>
          </RevealWrapper>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-none">
          {PRICING_PLANS.map((plan, idx) => (
            <div key={idx} className="relative md:border-r border-b md:border-b-0 border-neutral-200 dark:border-neutral-800 last:border-r-0 last:border-b-0">
                 <RevealWrapper 
                    delay={0.3 + (idx * 0.1)} // Sequential delay after header
                    className="h-full"
                    contentClassName="h-full"
                >
                    <div 
                        className={`p-8 flex flex-col h-full hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300 group relative`}
                    >
                        <div className="mb-6 flex justify-between items-start">
                            <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em]">{plan.title}</span>
                            {idx === 1 && <span className="bg-neutral-900 dark:bg-white text-white dark:text-black text-[10px] px-2 py-1 font-bold uppercase tracking-wider">Popular</span>}
                        </div>
                        
                        {/* Price */}
                        <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tighter">{plan.price}</div>
                        
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed font-medium">
                            {plan.description}
                        </p>
                        
                        <div className="mt-auto space-y-4 mb-8 flex-grow">
                        {plan.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                            <div className="w-4 h-4 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white shrink-0 mt-0.5">
                                <Check size={10} strokeWidth={3} />
                            </div>
                            <span className="leading-tight">{feature}</span>
                            </div>
                        ))}
                        </div>

                        <button className={`w-full py-4 text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                        idx === 2 
                        ? 'bg-neutral-900 dark:bg-white text-white dark:text-black border-neutral-900 dark:border-white hover:opacity-90' 
                        : 'bg-transparent text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white'
                        }`}>
                        {idx === 2 ? "Contact us" : "Get started"}
                        </button>
                    </div>
                </RevealWrapper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};