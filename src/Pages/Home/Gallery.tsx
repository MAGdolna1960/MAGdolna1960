import drawing from '../../img/drawing/drawing.jpg'
import drawing2 from '../../img/drawing/drawing2.jpg'
import drawing3 from '../../img/drawing/drawing3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../components/Slider/styles.css';

// import required modules
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

const Gallery = () => {
  return (
    <section id="gallery" className='wrapper_gallery py-24'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={drawing} alt="" /></SwiperSlide>
        <SwiperSlide><img src={drawing2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={drawing3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={drawing} alt="" /></SwiperSlide>
        <SwiperSlide><img src={drawing2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={drawing3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={drawing} alt="" /></SwiperSlide>
        <SwiperSlide><img src={drawing2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={drawing3} alt="" /></SwiperSlide>
        
      
      </Swiper>
    </section>
  );
}

export default Gallery


