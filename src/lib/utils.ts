import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { siteConfig } from '@/config/site.config';

// Utility pour combiner des classes Tailwind (évite les conflits)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formater les dates
export function formatDate(date: string, locale: 'fr' | 'en' = 'fr'): string {
  if (date === 'present') {
    return locale === 'fr' ? 'Présent' : 'Present';
  }
  
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
    month: 'long',
    year: 'numeric',
  });
}

// Calculer la durée entre deux dates
export function calculateDuration(
  start: string,
  end: string | 'present',
  locale: 'fr' | 'en' = 'fr'
): string {
  const startDate = new Date(start);
  const endDate = end === 'present' ? new Date() : new Date(end);
  
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                 (endDate.getMonth() - startDate.getMonth());
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (locale === 'fr') {
    if (years === 0) return `${remainingMonths} mois`;
    if (remainingMonths === 0) return `${years} an${years > 1 ? 's' : ''}`;
    return `${years} an${years > 1 ? 's' : ''} ${remainingMonths} mois`;
  } else {
    if (years === 0) return `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    if (remainingMonths === 0) return `${years} year${years > 1 ? 's' : ''}`;
    return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
  }
}

// Slugify (pour URLs propres)
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Extraire les initiales
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function downloadResume(language: 'fr' | 'en') {
  const cvUrl = siteConfig.resumeUrl[language];
  window.open(cvUrl, '_blank');
}