import '../../components/Slider/testimonial.css'
import bg from '../../img/testimonial-bg2.jpg'

// import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
const Testimonial = () => {
  // const { t } = useTranslation()

  return (
    <section id='testimonial' className='wrapper_testimonial'>

      <Swiper
        speed={7000}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper rounded-3xl"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(${bg})`
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className='flex flex-col items-center'>
            <blockquote className="relative max-w-[470px] text-mainblue font-nice text-3xl" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit.
              </p>
            </blockquote>
            <cite className='text-main-head-tx-color font-nice font-bold ml-36 text-2xl '>David</cite>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col items-center'>
            <blockquote className="relative max-w-[470px] text-mainblue font-nice text-3xl" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit.
              </p>
            </blockquote>
            <cite className='text-main-head-tx-color font-nice font-bold ml-36 text-2xl '>David</cite>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col items-center'>
            <blockquote className="relative max-w-[470px] text-mainblue font-nice text-3xl" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit.
              </p>
            </blockquote>
            <cite className='text-main-head-tx-color font-nice font-bold ml-36 text-2xl '>David</cite>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col items-center'>
            <blockquote className="relative max-w-[470px] text-mainblue font-nice text-3xl" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit.
              </p>
            </blockquote>
            <cite className='text-main-head-tx-color font-nice font-bold ml-36 text-2xl '>David</cite>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col items-center'>
            <blockquote className="relative max-w-[470px] text-mainblue font-nice text-3xl" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit.
              </p>
            </blockquote>
            <cite className='text-main-head-tx-color font-nice font-bold ml-36 text-2xl '>David</cite>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial