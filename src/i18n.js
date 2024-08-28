import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  dk: {
    translation: {
      "HeaderLink1": "Os",
      "HeaderLink2": "Tjenester",
      "HeaderLink3": "Kontakt",

      "BannerTitle": "Øjeblik til at opdatere",
      "BannerSubTitle": "Stærke og skalerbare systemer",
      "BannerButton": "Os"
    }
  },
  en: {
    translation: {
      "HeaderLink1": "Nosotros",
      "HeaderLink2": "Services",
      "HeaderLink3": "Contact",

      "BannerTitle": "Moment to update",
      "BannerSubTitle": "Strong and scalable systems",
      "BannerButton": "About us"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "dk", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;