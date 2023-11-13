import { useTranslation } from "react-i18next";

import beginner from '../../../img/cards/basic.svg'
import intermediate from '../../../img/cards/intermediate.svg'
import advenced from '../../../img/cards/advanced.svg'

interface CardItem {
  title: string,
  level: string,
  levelSVG: string,
  length: string,
  details: string,
  imgURL: string,
}


const CardItem = ({ title, level, levelSVG, length, details, imgURL }: CardItem) => {
  const { t } = useTranslation()

  let svg
  if (levelSVG === 'beginner') { svg = beginner }
  if (levelSVG === 'intermediate') { svg = intermediate }
  if (levelSVG === 'advenced') { svg = advenced }

  return (
    <div className="flex flex-col justify-between bg-light-blue-bg w-60 transition ease-in-out duration-[1000ms] hover:scale-110">
      <div
        style={{
          backgroundImage: `url(${imgURL})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
        className='h-40 min-h-40'
      >
      </div>
      <div className="flex flex-col flex-1 p-2">
        <div className='flex flex-col gap-2 p-2 font-sans text-lg'>
          <div className='h-14'>
            <h2 className='font-nice font-bold text-2xl'>{title}</h2>
          </div>
          <h3>Subtitle</h3>
          <p>{details}</p>
          <p>{length}</p>
          <div className='flex justify-start items-start '>
            <img
              src={svg}
              alt={svg + ' level'}
              className='w-6'
            />
            <p className='ml-2'>{level}</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 p-2 flex justify-center items-center h-10">
        <a>{t("learn_more")}</a>
      </div>
    </div>
  )
}

export default CardItem




