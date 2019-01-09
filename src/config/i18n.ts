import i18next from "i18next";
import { reactI18nextModule } from "react-i18next";

import auth from "../domains/auth/dictionary";
import home from "../domains/home/dictionary";

const domains: i18next.ResourceLanguage[] = [auth, home];
const languages: string[] = ["en"];

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

i18next.use(reactI18nextModule).init({
  interpolation: {
    // React already does escaping
    escapeValue: false
  },
  lng: "en",
  resources
});

export default i18next;
