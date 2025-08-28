// src/i18n/index.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translation files
import en from './locales/en'
import vi from './locales/vi'

// import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  //   .use(LanguageDetector) // optional: detect from localStorage, browser
  .use(initReactI18next)
  .init({
    resources: {
      en: { ...en },
      vi: { ...vi },
    },
    lng: localStorage.getItem('lng') || 'en',
    fallbackLng: 'en',
    ns: [...Object.keys(en), ...Object.keys(vi)],
    interpolation: {
      escapeValue: false, // react already does escaping
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
