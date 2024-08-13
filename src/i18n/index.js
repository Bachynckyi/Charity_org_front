import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { uk } from "./translations.js/uk";
import { en } from "./translations.js/en";

const resources = {
  "en": {
    translation: en
  },
  "uk": {
    translation: uk
  },
  "ru": {
    translation: uk
  },
};

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
  });

  export default i18n;