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
          welcome: "Udvozlet a Magdalenum holnapjan",
          motto: "Mi is az igazi tanítás lényege? Tanítás az, amikor egy életet örökre megérintünk.",

          // upcoming (hu)  
          card_level_beginner: "Kezdo",
          card_level_intermediate: "Halado",
          card_level_advenced: "Pro",
          card1_title: "Rajztanfolyam",
          card1_long: "4 nap (22 ora)",
          card1_details: "Felnotteknek ha meg sosem rajzoltal",
          card2_title: "Szines Rajztanfolyam",
          card2_long: "4 nap (22 ora)",
          card2_details: "Felnotteknek ha szeretnel tovabb fejlodni",
          card3_title: "Gyerek Rajztanfolyam",
          card3_long: "4 nap (22 ora)",
          card3_details: "Gyereknek az onkifejezesert",
          learn_more: "Tudj meg tobbet",

          // languages (hu) 

          card_hu_title: "Magyar nyelv oktatasa idegengnyelvueknek",
          card_hu_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          card_ru_title: "Magyar nyelv oktatasa idegengnyelvueknek",
          card_ru_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          card_de_title: "Magyar nyelv oktatasa idegengnyelvueknek",
          card_de_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          card_uk_title: "Magyar nyelv oktatasa idegengnyelvueknek",
          card_uk_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          card_sp_title: "Magyar nyelv oktatasa idegengnyelvueknek",
          card_sp_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          card_it_title: "Magyar nyelv oktatasa idegengnyelvueknek",
          card_it_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",

          // services (hu)

          services_1_title: "Nyelvvizsgara valo felkeszites",
          services_1_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          services_2_title: "Nyelvvizsgara valo felkeszites",
          services_2_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          services_3_title: "Nyelvvizsgara valo felkeszites",
          services_3_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          services_4_title: "Nyelvvizsgara valo felkeszites",
          services_4_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          services_5_title: "Nyelvvizsgara valo felkeszites",
          services_5_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          services_6_title: "Nyelvvizsgara valo felkeszites",
          services_6_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",

          // contact form (hu)
          contact: "Kapcsolat",
          contact_form: "Kapcsolati urlap",
          contact_form_button_send: "Uzenet kuldese",
          contact_get_in_touch: "Elerhetosegek",
          name: "Nev",
          subject: "Targy",
          your_message: "Uzeneted",
          location: "Nyiregyhaza, Magyarorszag",


        }
      },
      en: {
        translation: {
          welcome: "Welcome at MAGdalenum's website",
          motto: "What is the essence of true teaching? Teaching is when we touch a life forever.",

          // upcoming (en) 
          card_level_beginner: "beginner",
          card_level_intermediate: "intermediate",
          card_level_advenced: "advenced",
          card1_title: "Drawing",
          card1_long: "Length: 4 days (22 hours)",
          card1_details: "For Adults. If you never draw",
          card2_title: "Color Drawing",
          card2_long: "Length: 4 days (22 hours)",
          card2_details: "For Adults. If you want to develop",
          card3_title: "Child Drawing",
          card3_long: "Length: 4 days (22 hours)",
          card3_details: "For children",
          learn_more: "Learn more",

          // languages (en)

          card_hu_title: "Hungarian for Foreigner",
          card_hu_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          card_ru_title: "Magyar nyelv oktatasa idegengnyelvueknek",
          card_ru_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          card_de_title: "Magyar nyelv oktatasa idegengnyelvueknek",
          card_de_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          card_uk_title: "Magyar nyelv oktatasa idegengnyelvueknek",
          card_uk_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          card_sp_title: "Magyar nyelv oktatasa idegengnyelvueknek",
          card_sp_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          card_it_title: "Magyar nyelv oktatasa idegengnyelvueknek",
          card_it_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",

          // services (en)

          services_1_title: "Prepare for Language Exam",
          services_1_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          services_2_title: "Nyelvvizsgara valo felkeszites",
          services_2_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          services_3_title: "Nyelvvizsgara valo felkeszites",
          services_3_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          services_4_title: "Nyelvvizsgara valo felkeszites",
          services_4_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          services_5_title: "Nyelvvizsgara valo felkeszites",
          services_5_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",
          services_6_title: "Nyelvvizsgara valo felkeszites",
          services_6_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid",

          // contact form (en)
          contact: "Contact",
          contact_form: "Contact Form",
          contact_form_button_send: "Send Message",
          contact_get_in_touch: "Get in touch",
          name: "Name",
          subject: "Subject",
          your_message: "Your Message",
          location: "Nyiregyhaza, Hungary",
        }
      },
    }
  });

export default i18n;