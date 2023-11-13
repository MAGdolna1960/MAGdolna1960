import { useTranslation } from "react-i18next";

interface CardItem {
  title: string,
  details: string,
  imgURL: string,
}


const CardItem = ({ title, details, imgURL }: CardItem) => {
  const { t } = useTranslation()



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
          <div>
            <h2 className='font-nice font-bold text-2xl'>{title}</h2>
          </div>
          <h3>Subtitle</h3>
          <p>{details}</p>
        </div>
      </div>
      <div className="border-t-2 p-2 flex justify-center items-center h-10">
        <a>{t("learn_more")}</a>
      </div>
    </div>
  )
}

export default CardItem




