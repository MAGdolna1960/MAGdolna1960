import { useTranslation } from "react-i18next";

import CardItem from "./CardItem";

import settingsSVG from '../../../img/services/settings.svg'

const Service = () => {
  const { t } = useTranslation()

  return (
    <section id='service' className=" py-24 bg-white font-sans">
      <h3 className="text-center text-4xl font-semibold mb-10">Our Services</h3>
      <div className="flex justify-center flex-wrap gap-20">
        <CardItem 
          imgURL={settingsSVG}
          title={t("services_1_title")}
          details={t("services_1_details")}
        />
        <CardItem 
          imgURL={settingsSVG}
          title={t("services_1_title")}
          details={t("services_1_details")}
        />
        <CardItem 
          imgURL={settingsSVG}
          title={t("services_1_title")}
          details={t("services_1_details")}
        />
        <CardItem 
          imgURL={settingsSVG}
          title={t("services_1_title")}
          details={t("services_1_details")}
        />
        <CardItem 
          imgURL={settingsSVG}
          title={t("services_1_title")}
          details={t("services_1_details")}
        />
        <CardItem 
          imgURL={settingsSVG}
          title={t("services_1_title")}
          details={t("services_1_details")}
        />
      </div>
    </section>
  )
}

export default Service