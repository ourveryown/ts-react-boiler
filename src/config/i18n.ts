import i18next from "i18next";
import auth from "../domains/auth/dictionary";

const domains: i18next.ResourceLanguage[] = [auth];
const languages: string[] = ["en", "fn"];

const resources = languages.reduce((acc: i18next.Resource, language) => {
  const translation = domains.reduce(
    (translations: i18next.TranslationOptions, domain) => {
      translations = { ...translations, ...domain[language] };
      return translations;
    },
    {}
  );
  acc[language] = {
    translation
  };
  return acc;
}, {});

i18next.init({
  interpolation: {
    // React already does escaping
    escapeValue: false
  },
  lng: "en",
  resources
});
