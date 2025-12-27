import { Project, PricingPlan, Skill, Achievement } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  instagram: "https://instagram.com",
  twitter: "https://twitter.com"
};

export const HERO_DATA = {
  name: "Arman Shekh",
  role: "Software Developer Engineer",
  tagline: "Creating high-quality web applications with React and modern technologies.",
  availability: "Available for Freelance"
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Bee2Bee Asia",
    description: "Independently designed, developed, and deployed a B2B full-stack web application to handle large-scale exhibitions, including the website, Exhibitor, Buyer, and Admin Dashboards. The project involved configuration, deployment, integration of payment gateway, and successful hosting on AWS.",
    tags: ["React", "Next.js", "Typescript", "Prisma", "Supabase", "AWS"],
    image: "https://s3.ap-south-1.amazonaws.com/expo-template/WIRC-REF-2025-26/assets/imgs/ICAI%20logo.png",
    link: "#",
    type: "fullstack",
    featured: true
  },
  {
    id: "2",
    title: "AIFTP Online",
    description: "Migrated a legacy WordPress + PHP website to a modern Next.js + Prisma full-stack app with MySQL and AWS Lightsail. Integrated PayU payment gateway and CI/CD pipelines. Resulted in a 40% increase in user retention.",
    tags: ["React", "Next", "Javascript", "Typescript", "Prisma", "Framer Motion", "AWS"],
    image: "https://picsum.photos/800/600?random=2",
    link: "#",
    type: "fullstack",
    featured: true
  },
  {
    id: "3",
    title: "World Furniture Expo",
    description: "In four days, converted the entire website from a WordPress theme to Next.js and Tailwind CSS, achieving performance, accessibility, and SEO scores above 88%. Reduced load time from 13 seconds to 3 seconds.",
    tags: ["Next", "Redux", "Tailwind", "React Hook Form"],
    image: "https://picsum.photos/800/600?random=3",
    link: "#",
    type: "frontend",
    featured: true
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Mobile Development",
    price: "$2,000 per app",
    description: "Ideal for startups or businesses wanting native or cross-platform mobile apps.",
    features: ["iOS & Android support", "Push notifications", "In-app purchases", "API integrations", "User authentication", "Real-time data syncing"]
  },
  {
    title: "Website Development",
    price: "$500 per project",
    description: "Perfect for businesses or individuals looking to build a stunning online presence.",
    features: ["Responsive design", "Custom CMS integration", "SEO optimization", "E-commerce functionality", "Fast loading performance", "Basic analytics integration"]
  },
  {
    title: "UI/UX Design",
    price: "$3,000 per project",
    description: "Comprehensive design solutions for creating intuitive and visually appealing interfaces.",
    features: ["User research & testing", "Wireframing & prototyping", "Interactive design systems", "Accessibility compliance", "Brand consistency", "Dedicated design consultations"]
  }
];

export const PERSONAL_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "ChatterNet Mobile App",
    description: "Full Stack Social Media App",
    tags: ["React Native", "Firebase"],
    image: "https://picsum.photos/600/400?random=4",
    link: "#",
    github: "#",
    type: "mobile",
    featured: false
  },
  {
    id: "p2",
    title: "Committee Management",
    description: "Full Stack Mobile App",
    tags: ["Flutter", "Node.js"],
    image: "https://picsum.photos/600/400?random=5",
    link: "#",
    github: "#",
    type: "mobile",
    featured: false
  },
  {
    id: "p3",
    title: "Instagram Clone",
    description: "Like Instagram",
    tags: ["React", "Firebase"],
    image: "https://picsum.photos/600/400?random=6",
    link: "#",
    github: "#",
    type: "frontend",
    featured: false
  },
  {
    id: "p4",
    title: "Online Collaborative Drawing Board",
    description: "Real-time collaboration tool",
    tags: ["Socket.io", "Canvas API"],
    image: "https://picsum.photos/600/400?random=7",
    link: "#",
    github: "#",
    type: "fullstack",
    featured: false
  },
  {
    id: "p5",
    title: "E-Commerce: Lile Amazone",
    description: "Full featured store",
    tags: ["MERN Stack"],
    image: "https://picsum.photos/600/400?random=8",
    link: "#",
    github: "#",
    type: "fullstack",
    featured: false
  },
  {
    id: "p6",
    title: "Designer Work Management",
    description: "Upcoming Project",
    tags: ["Next.js"],
    image: "https://picsum.photos/600/400?random=9",
    link: "#",
    github: "#",
    type: "design",
    featured: false
  }
];
