import React, { useEffect, useRef } from 'react';
import { Download, MessageSquare, Linkedin, Github, Twitter, Instagram, ChevronDown } from 'lucide-react';
import { HERO_DATA, SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';

const AsteroidShower: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // High DPI scaling for crisp rendering (Premium Feel)
    const dpr = window.devicePixelRatio || 1;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    window.addEventListener('resize', resize);
    resize();

    // Physics Constants
    const GRAVITY = 0.25;
    const DRAG = 0.96; // Air resistance
    
    class Asteroid {
      x: number;
      y: number;
      vy: number;
      size: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = -100 - Math.random() * 500; // Start higher up
        this.vy = Math.random() * 5 + 8; // Faster initial speed
        this.size = Math.random() * 1.5 + 1; // Fine lines
      }

      update() {
        this.vy += 0.05; // Acceleration
        this.y += this.vy;
      }

      draw(ctx: CanvasRenderingContext2D, color: string) {
        ctx.fillStyle = color;
        
        // Motion Blur Trail
        // We draw the tail based on velocity to simulate speed
        const trailLength = this.vy * 4; 
        
        // Trail fading gradient (simulated via opacity)
        ctx.globalAlpha = 0.4;
        ctx.fillRect(this.x, this.y - trailLength, this.size, trailLength);
        
        // Core
        ctx.globalAlpha = 1.0;
        ctx.fillRect(this.x, this.y, this.size, Math.max(this.size, this.vy));
      }
    }

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      size: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        // Explosive outward burst
        const angle = (Math.random() * Math.PI) + Math.PI; // Upward arc
        const force = Math.random() * 8 + 4;
        
        this.vx = (Math.random() - 0.5) * force * 1.5; 
        this.vy = (Math.random() * -1) * force * 0.8; 
        
        this.life = 1.0;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        this.vy += GRAVITY; // Heavy objects fall back down
        this.vx *= DRAG; // Slow down horizontally
        this.vy *= DRAG;
        
        this.life -= 0.02; // Fade out
      }

      draw(ctx: CanvasRenderingContext2D, color: string) {
        if (this.life <= 0) return;
        ctx.globalAlpha = this.life;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.globalAlpha = 1.0;
      }
    }

    class Shockwave {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.opacity = 0.8;
      }

      update() {
        this.radius += 3; // Rapid expansion
        this.opacity -= 0.04;
      }

      draw(ctx: CanvasRenderingContext2D, color: string) {
        if (this.opacity <= 0) return;
        ctx.strokeStyle = color;
        ctx.lineWidth = 1; // Thin, sharp line
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        // A flattened ellipse looks better in perspective on the "ground"
        ctx.ellipse(this.x, this.y, this.radius, this.radius * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      }
    }

    let asteroids: Asteroid[] = [];
    let particles: Particle[] = [];
    let shockwaves: Shockwave[] = [];
    
    let animationFrameId: number;

    const render = () => {
      if (!ctx) return;
      
      const isDark = document.documentElement.classList.contains('dark');
      const color = isDark ? '#ffffff' : '#000000';

      ctx.clearRect(0, 0, width, height);

      // Spawn Logic
      if (Math.random() < 0.04) { // Spawn rate
        asteroids.push(new Asteroid());
      }

      // Update Asteroids
      for (let i = asteroids.length - 1; i >= 0; i--) {
        const a = asteroids[i];
        a.update();
        a.draw(ctx, color);

        // Ground Collision
        if (a.y >= height) {
          // Spawn Debris Particles
          const debrisCount = Math.floor(Math.random() * 6) + 4;
          for (let j = 0; j < debrisCount; j++) {
            particles.push(new Particle(a.x, height));
          }
          // Spawn Shockwave
          shockwaves.push(new Shockwave(a.x, height));
          
          asteroids.splice(i, 1);
        }
      }

      // Update Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx, color);
        if (p.life <= 0) particles.splice(i, 1);
      }

      // Update Shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const s = shockwaves[i];
        s.update();
        s.draw(ctx, color);
        if (s.opacity <= 0) shockwaves.splice(i, 1);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30 dark:opacity-40 pointer-events-none" />;
};

export const Hero: React.FC = () => {
  // Sync these delays with the IntroOverlay duration in App.tsx
  // Overlay lifts around 1.2s + 0.2s delay = 1.4s
  const DELAY_START = 1.4;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-white dark:bg-neutral-950">
      
      {/* Background Layers */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-20 pointer-events-none z-0" />
      <AsteroidShower />

      {/* Large Geometric Shapes (Grayscale) */}
      <div className="absolute top-20 right-10 w-64 h-64 border border-neutral-200 dark:border-neutral-800 opacity-50 pointer-events-none hidden lg:block z-0" />
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-neutral-100 dark:bg-neutral-900 opacity-50 pointer-events-none hidden lg:block z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        
        {/* Status Badge - Sharp & Monochrome */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: DELAY_START }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-neutral-950 border border-neutral-900 dark:border-white/20 shadow-none transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full bg-black dark:bg-white opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 bg-black dark:bg-white"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 dark:text-white">
              {HERO_DATA.availability}
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: DELAY_START + 0.1 }}
          className="text-6xl md:text-9xl font-bold text-center tracking-tighter mb-8 select-none leading-[0.9]"
        >
          <span className="block text-neutral-900 dark:text-white mix-blend-difference">
            ARMAN SHEKH
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: DELAY_START + 0.2 }}
          className="max-w-xl text-center text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12 font-mono uppercase tracking-wide"
        >
          // {HERO_DATA.tagline}
        </motion.p>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: DELAY_START + 0.3 }}
          className="flex items-center gap-8 mb-12"
        >
          {[
            { Icon: Linkedin, href: SOCIAL_LINKS.linkedin },
            { Icon: Github, href: SOCIAL_LINKS.github },
            { Icon: Twitter, href: SOCIAL_LINKS.twitter },
            { Icon: Instagram, href: SOCIAL_LINKS.instagram }
          ].map(({ Icon, href }, idx) => (
            <a 
              key={idx} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 dark:text-neutral-600 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              <Icon size={22} strokeWidth={1.5} />
            </a>
          ))}
        </motion.div>

        {/* CTAs - Square & High Contrast */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: DELAY_START + 0.4 }}
          className="flex flex-col sm:flex-row gap-0 w-full sm:w-auto border border-neutral-900 dark:border-neutral-100"
        >
          <button className="group flex items-center justify-center gap-3 bg-neutral-900 dark:bg-white text-white dark:text-black px-10 py-5 text-sm font-bold uppercase tracking-wider hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-all">
            Let's Talk
            <MessageSquare size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group flex items-center justify-center gap-3 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white px-10 py-5 text-sm font-bold uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all border-t sm:border-t-0 sm:border-l border-neutral-900 dark:border-neutral-100">
            Download Resume
            <Download size={16} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: DELAY_START + 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-900 dark:text-white animate-bounce z-10"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};