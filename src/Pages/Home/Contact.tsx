import { useTranslation } from "react-i18next";

import locationSVG from '../../img/icons/location.svg'
import emailSVG from '../../img/icons/email.svg'
import phoneSVG from '../../img/icons/phone.svg'
const Contact = () => {
  const { t } = useTranslation()

  return (
    <section
    id='contact'
    className="py-24"
  >
    <h2 className="text-main-head-tx-color text-4xl font-sans font-bold text-center mb-14">{t("contact")}</h2>
    <div className="flex gap-16 flex-wrap">
      <div className="flex-1">
        <h4 className="text-main-head-tx-color text-xl font-sans font-bold mb-4">{t("contact_form").toUpperCase()}</h4>
        <form>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-10 mb-6">
              <input
                type="text"
                placeholder={t("name")}
                className="py-2 px-4 rounded-full border border-slate-400 flex-1"
              />
              <input
                type="email"
                placeholder='Email'
                className="py-2 px-4 rounded-full border border-slate-400 flex-1"
              />
            </div>
            <input
              type="text"
              placeholder={t("subject")}
              className="py-2 px-4 rounded-full border border-slate-400 flex-1 mb-6"
            />
            <textarea
              placeholder={t("your_message")}
              className="py-2 px-4 rounded-lg border border-slate-400 flex-1 mb-6"
            >

            </textarea>
            <button
            className="text-white bg-mainblue rounded-full w-max py-3 px-10"
            >{t("contact_form_button_send")}</button>
          </div>
        </form>
      </div>
      <div className="flex-1">
        <h4 className="text-main-head-tx-color text-xl font-sans font-bold mb-4">{t("contact_get_in_touch").toUpperCase()}</h4>
        <div>
          <div className="flex items-center mb-6">
            <div className=" bg-mainblue rounded-full p-2 mr-4">
              <img 
              src={locationSVG} 
              alt="location"
              className="w-7"
               />
            </div>
            <a href="">{t("location")}</a>
          </div>
          <div className="flex  items-center mb-6">
            <div className="bg-mainblue  rounded-full p-2 mr-4">
              <img 
              src={emailSVG} 
              alt="email"
              className="w-7 min-w-[28px]" />
            </div>
            <a href="mailto:contact.magdalenum@gmail.com">contact.magdalenum@gmail.com</a>
          </div>
          <div className="flex items-center">
            <div className="bg-mainblue rounded-full p-2 mr-4">
              <img 
              src={phoneSVG} 
              alt="phone"
              className="w-7" />
            </div>
            <a href="tel:+36202573505">+36202573505</a>
          </div>
        </div>
      </div>
    </div>
    </ section>
  )
}

export default Contact