import i18n from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "./translate/en.json";
import translationAZ from "./translate/az.json";
import I18NextXhrBackend from "i18next-xhr-backend";

const resources = {
  en: {
    translation: translationEN,
  },
  az: {
    translation: translationAZ,
  },
};

i18n
  .use(I18NextXhrBackend)

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    lng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
