import Magdolna from '../../img/Magdolna.jpg'
import bg from '../../img/bg-infinity.png'
import { useTranslation } from "react-i18next"

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section 
    id='home' 
    
    className="bg-light-blue-bg min-h-[100vh] py-24"
    >
      <div 
      style={{
        backgroundImage: `url(${bg})`, 
        backgroundRepeat:'no-repeat',
        backgroundPositionY:'center',
        backgroundPositionX:'center',
        backgroundSize:'100%'
      }}
      className="flex justify-around">
        <div className='min-h-screen flex items-center pl-20'>
          <img 
          src={Magdolna} 
          alt="photo of Magdolna"
          className='object-none rounded-full w-96 h-96 object-[50%_-4px]'
          />
        </div>
        <div className='flex items-center'>
        <p className='max-w-[450px] text-3xl font-nice text-center pr-2 mr-4'>{t("motto")}</p>
        </div>
      </div>
      
    </section>
  )
}

export default Hero