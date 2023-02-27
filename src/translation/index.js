import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import commonEn from "./en.json";
import commonAr from "./ar.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        common: commonEn,
      },
      ar: {
        common: commonAr,
      },
    },
    lng: localStorage.getItem("i18nextLng") || "en",
    fallbackLng: ["en", "ar"],
    defaultNS: "common",
    detection: {
      order: ["path", "navigator"],
    },
    interpolation: {
      escapeValue: false,
    },
    // react: {
    //   wait: true,
    //   defaultTransParent: "div",
    // },
  });

export default i18n;
