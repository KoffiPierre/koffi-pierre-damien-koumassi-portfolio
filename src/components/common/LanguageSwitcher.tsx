'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center gap-1 bg-neutral-100 rounded-lg p-1">
      <button
        onClick={() => setLanguage('fr')}
        className={cn(
          'px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200',
          language === 'fr'
            ? 'bg-white text-primary-600 shadow-sm'
            : 'text-neutral-600 hover:text-neutral-900'
        )}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200',
          language === 'en'
            ? 'bg-white text-primary-600 shadow-sm'
            : 'text-neutral-600 hover:text-neutral-900'
        )}
      >
        EN
      </button>
    </div>
  );
}