import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
  type: 'fullstack' | 'frontend' | 'mobile' | 'design';
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string; // URL or Lucide icon name mapping
  color: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  icon: React.ReactNode;
}