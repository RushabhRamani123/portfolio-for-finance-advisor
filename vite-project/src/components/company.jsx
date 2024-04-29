// Import Swiper React components
import { Swiper, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function Company() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
      </Swiper>
    </>
  );
}
