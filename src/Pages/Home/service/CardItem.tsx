import { useTranslation } from "react-i18next";


interface CardItem {
  title: string,
  details: string,
  imgURL: string,
}


const CardItem = ({ title, details, imgURL }: CardItem) => {
  const { t } = useTranslation()


  return (
    <div className="flex flex-col">
      <img
        src={imgURL}
        alt={imgURL + ' icon'}
        className='w-16 mb-4'
      />
      <h3 className="text-black font-semibold mb-4 pl-2">{title.toUpperCase()}</h3>
      <p className="max-w-[280px] pl-2">{details}</p>
    </div>
  )
}

export default CardItem




