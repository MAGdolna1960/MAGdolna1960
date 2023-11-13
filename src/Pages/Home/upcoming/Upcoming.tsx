import { useTranslation } from "react-i18next";

import black from '../../../img/cards/black.jpg'
import color from '../../../img/cards/color.jpg'
import child from '../../../img/cards/child2.jpg'

import CardItem from "./CardItem";
const Upcoming = () => {
  const { t } = useTranslation()

  return (
    <section id='upcoming' className=" py-24 bg-white">
      <div className="flex justify-center flex-wrap gap-20">
        <CardItem
        imgURL={black} 
        title={t("card1_title")}
        level={t("card_level_beginner")}
        levelSVG={'beginner'}
        length={t("card1_long")}
        details={t("card1_details")}
        />
        <CardItem
        imgURL={color} 
        title={t("card2_title")}
        level={t("card_level_intermediate")}
        levelSVG={'intermediate'}
        length={t("card2_long")}
        details={t("card2_details")}
        />
        <CardItem 
        imgURL={child} 
        title={t("card3_title")}
        level={t("card_level_beginner")}
        levelSVG={'beginner'}
        length={t("card3_long")}
        details={t("card3_details")}
        />
      </div>
    </section>
  )
}

export default Upcoming