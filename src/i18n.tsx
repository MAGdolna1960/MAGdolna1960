import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'hu',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      hu: {
        translation: {
         welcome: "Udvozlet a Magdalenum holnapjan"
        }
      },
      en: {
        translation: {
         welcome: "Welcome at MAGdalenum's website"
        }
      },
    }
  });

export default i18n;