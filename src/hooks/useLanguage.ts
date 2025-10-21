'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language } from '@/lib/types';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'fr',
      setLanguage: (lang: Language) => set({ language: lang }),
      toggleLanguage: () => 
        set({ language: get().language === 'fr' ? 'en' : 'fr' }),
    }),
    {
      name: 'language-storage',
    }
  )
);