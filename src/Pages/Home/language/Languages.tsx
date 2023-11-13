import { useTranslation } from "react-i18next";

import hungary from '../../../img/language/hungary.jpg'
import germany from '../../../img/language/germany.jpg'
import uk from '../../../img/language/uk.jpg'
import russia from '../../../img/language/russia.gif'
import italy from '../../../img/language/italy.gif'
import spain from '../../../img/language/spain.gif'

import CardItem from './CardItem'

const Languages = () => {
  const { t } = useTranslation()

  return (
    <section id='languages' className="py-24 bg-white">
      <div className="flex justify-center flex-wrap gap-20">
        <CardItem
          imgURL={hungary} 
          title={t("card_hu_title")}
          details={t("card_hu_details")}
          />
        <CardItem
          imgURL={russia} 
          title={t("card_ru_title")}
          details={t("card_ru_details")}
          />
        <CardItem
          imgURL={germany} 
          title={t("card_de_title")}
          details={t("card_de_details")}
          />
      <CardItem
        imgURL={uk} 
        title={t("card_uk_title")}
        details={t("card_uk_details")}
        />
        <CardItem
          imgURL={spain} 
          title={t("card_sp_title")}
          details={t("card_sp_details")}
          />
      <CardItem
        imgURL={italy} 
        title={t("card_it_title")}
        details={t("card_it_details")}
        />
      </div>
    </section>
  )
}

export default Languages