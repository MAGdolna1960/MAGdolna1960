import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      hu: {
        translation: {
         welcome: "Udvozlet a Magdalenum holnapjan",
         contact: "Kapcsolat",
         contact_form: "Kapcsolati urlap",
         contact_form_button_send: "Uzenet kuldese",
         contact_get_in_touch: "Elerhetosegek",
         name:"Nev",
         subject:"Targy",
         your_message:"Uzeneted",
        
         
        }
      },
      en: {
        translation: {
         welcome: "Welcome at MAGdalenum's website",
         contact: "Contact",
         contact_form: "Contact Form",
         contact_form_button_send: "Send Message",
         contact_get_in_touch: "Get in touch",
         name:"Name",
         subject:"Subject",
         your_message:"Your Message",
       
        }
      },
    }
  });

export default i18n;