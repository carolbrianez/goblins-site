import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pt from './locales/en.json'
import de from './locales/de.json'

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    de: { translation: de },
  },
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: { escapeValue: false },
})

export default i18n