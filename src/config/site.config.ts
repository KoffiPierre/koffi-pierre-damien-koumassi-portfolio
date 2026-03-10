import { NavLink, SocialLink } from '@/lib/types';

export const siteConfig = {
  name: 'Koffi Pierre Damien KOUMASSI',
  shortName: 'KOUMASSI K.P.D',
  title: {
    fr: 'Koumassi K.P.D — AI & Data Engineer · Full-Stack Developer',
    en: 'Koumassi K.P.D — AI & Data Engineer · Full-Stack Developer',
  },
  description: {
    fr: 'Ingénieur IA & Data Engineer — je conçois des systèmes intelligents, des pipelines de données et des applications full-stack qui résolvent des problèmes réels.',
    en: 'AI Engineer & Data Engineer — I build intelligent systems, data pipelines, and full-stack applications that solve real-world problems.',
  },
  keywords: [
    'AI Engineer',
    'Data Engineer',
    'Machine Learning Engineer',
    'Deep Learning',
    'Computer Vision',
    'ETL Pipelines',
    'Full-Stack Developer',
    'React',
    'Python',
    'TensorFlow',
    'PyTorch',
    'Snowflake',
    'Apache Airflow',
    'Portfolio',
  ],
  url: 'https://koffi-pierre-damien-koumassi.vercel.app/',
  author: {
    name: 'Koffi Pierre Damien KOUMASSI',
    email: 'kkoffipierredamienpe@gmail.com',
    phone: '+212 6 58 80 93 18',
    location: 'Casablanca, Maroc',
    role: {
      fr: 'AI & Data Engineer · Full-Stack Developer',
      en: 'AI & Data Engineer · Full-Stack Developer',
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