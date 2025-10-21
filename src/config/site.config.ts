import { NavLink, SocialLink } from '@/lib/types';

export const siteConfig = {
  name: 'Koffi Pierre Damien KOUMASSI',
  shortName: 'KOUMASSI K.P.D',
  title: {
    fr: 'Portfolio - Ingénieur IA & Développeur Full-Stack',
    en: 'Portfolio - AI Engineer & Full-Stack Developer',
  },
  description: {
    fr: 'Étudiant ingénieur en Intelligence Artificielle à l\'ENSAM Casablanca, passionné par le développement d\'applications intelligentes innovantes.',
    en: 'AI Engineering student at ENSAM Casablanca, passionate about developing innovative intelligent applications.',
  },
  keywords: [
    'Intelligence Artificielle',
    'Machine Learning',
    'Deep Learning',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'Python',
    'Computer Vision',
    'Portfolio',
  ],
  url: 'https://koffikoumassi.vercel.app',
  author: {
    name: 'Koffi Pierre Damien KOUMASSI',
    email: 'kkoffipierredamienpe@gmail.com',
    phone: '+212 6 58 80 93 18',
    location: 'Casablanca, Maroc',
    role: {
      fr: 'Étudiant Ingénieur IA & Génie Informatique',
      en: 'AI & Computer Engineering Student',
    },
  },
  navigation: [
    { href: '/', label: { fr: 'Accueil', en: 'Home' } },
    { href: '/about', label: { fr: 'À propos', en: 'About' } },
    { href: '/experience', label: { fr: 'Expérience', en: 'Experience' } },
    { href: '/projects', label: { fr: 'Projets', en: 'Projects' } },
    { href: '/skills', label: { fr: 'Compétences', en: 'Skills' } },
    { href: '/contact', label: { fr: 'Contact', en: 'Contact' } },
  ] as NavLink[],
  social: {
    github: 'https://github.com/KoffiPierre',
    linkedin: 'https://www.linkedin.com/in/koffi-pierre-damien-koumassi',
    email: 'mailto:kkoffipierredamienpe@gmail.com',
  } as Record<string, string>,
  resumeUrl: {
    fr: '/cv/CV_Koumassi_FR.pdf',
    en: '/cv/CV_Koumassi_EN.pdf',
  },
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: siteConfig.social.github,
    icon: 'FaGithub',
  },
  {
    name: 'LinkedIn',
    url: siteConfig.social.linkedin,
    icon: 'FaLinkedin',
  },
  {
    name: 'Email',
    url: siteConfig.social.email,
    icon: 'FaEnvelope',
  },
];