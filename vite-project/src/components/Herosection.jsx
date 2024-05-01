import { useState, useEffect } from 'react';
import slider_1 from '../../public/slider-1.png';
import slider_2 from '../../public/slider-2.jpeg';
import slider_3 from '../../public/slider-3.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos';  
import 'aos/dist/aos.css';
import './hero.css';
const Herosection = () => {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  })
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 2000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Swiper
      pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      id='herosection'
    >
      {/*   */}
      <SwiperSlide>
        <div style={{ position: 'relative' }}>
          <img  style={{height:window.innerWidth<=430?'285px':window.innerWidth<=820?'490px':'100%'}} src={slider_1} alt="" />
          <div style={{
            position: 'absolute',
            top:'35%', left:window.innerWidth<=430?'35%':'25%', transform: 'translate(-50%, -50%)', opacity: showText ? 1 : 0, transition: 'opacity 0.5s ease-in-out'
          }} data-aos="fade-up">
            <h6 style={{ fontSize:window.innerWidth<=430?'15px':window.innerWidth<=840?'35px':'40px',bottom: '0px' ,color:'black'}} data-aos="fade-up">
            Visualize your path to financial<br />freedom with our expert guidance
            </h6>
            <p style={{ display:window.innerWidth<=430?'none':'flex',fontSize:window.innerWidth<=840?'13px':'19px',color:'grey' }} data-aos="fade-up">
              To succeed in business today, you need to be flexible and<br />
              have good planning and organizational skills.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ position: 'relative' }}>
          <img style={{height:window.innerWidth<=430?'285px':window.innerWidth<=820?'490px':'100%'}} src={slider_2} alt="" />
          <div style={{ position: 'absolute', top: '35%', left:window.innerWidth<=430?'35%':'25%', transform: 'translate(-50%, -50%)', opacity: showText ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
            <h6 style={{ fontSize:window.innerWidth<=430?'15px':window.innerWidth<=840?'35px':'40px',bottom: '0px',color:'black' }}>
            Gain invaluable insights into<br />wealth management strategies
            </h6>
            <p style={{ display:window.innerWidth<=430?'none':'flex',fontSize:window.innerWidth<=840?'13px':'19px' ,color:'grey'}}>
              To succeed in business today, you need to be flexible and<br />
              have good planning and organizational skills.
            </p>
            
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ position: 'relative' }}>
          <img style={{height:window.innerWidth<=430?'285px':window.innerWidth<=820?'490px':'100%'}} src={slider_3} alt="" />
          <div style={{ position: 'absolute', top: '35%', left:window.innerWidth<=430?'35%':'25%', transform: 'translate(-50%, -50%)', opacity: showText ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
            <h6 style={{ fontSize:window.innerWidth<=430?'15px':window.innerWidth<=840?'35px':'40px',bottom: '0px',color:'black' }}>
            Explore tailored solutions for <br />building your legacy portfolio
            </h6>
            <p style={{ display:window.innerWidth<=430?'none':'flex',fontSize:window.innerWidth<=840?'13px':'19px',color:'grey' }}>
              To succeed in business today, you need to be flexible and<br />
              have good planning and organizational skills.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Herosection;