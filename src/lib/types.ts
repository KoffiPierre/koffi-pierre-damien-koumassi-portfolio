// Language types
export type Language = 'fr' | 'en';

// Localized text
export interface LocalizedText {
  fr: string;
  en: string;
}

// Project types
export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  longDescription: LocalizedText;
  technologies: string[];
  category: 'ai' | 'web' | 'mobile' | 'iot' | 'fullstack' | 'data';
  image: string;
  images?: string[];
  video?: string;
  github?: string;
  demo?: string;
  metrics?: ProjectMetric[];
  date: string;
  featured: boolean;
}

export interface ProjectMetric {
  label: LocalizedText;
  value: string;
  icon?: string;
}

// Experience types
export interface Experience {
  id: string;
  title: LocalizedText;
  company: string;
  location: string;
  period: {
    start: string;
    end: string | 'present';
  };
  description: LocalizedText[];
  technologies: string[];
  type: 'internship' | 'fulltime' | 'training' | 'pfa';
}

// Education types
export interface Education {
  id: string;
  degree: LocalizedText;
  institution: string;
  location: string;
  period: {
    start: string;
    end: string;
  };
  description?: LocalizedText;
}

// Skill types
export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  name: LocalizedText;
  skills: Skill[];
}

// Contact form
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Navigation
export interface NavLink {
  href: string;
  label: LocalizedText;
}

// Social links
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}