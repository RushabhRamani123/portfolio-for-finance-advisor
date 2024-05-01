// Import Swiper React components
// import s1 from '../../public/s1.jpg';
import AOS from 'aos';  
import 'aos/dist/aos.css';
import { useEffect } from "react";
import s2 from '../../public/s2.jpg';
import s3 from '../../public/s3.jpg';
import s4 from '../../public/s4.jpeg';
import s5 from '../../public/s5.png';
import s6 from '../../public/s6.jpg';
import s7 from '../../public/s7.jpg';
// import { useRef } from 'react';
import { Card, } from 'antd';
const { Meta } = Card;
export default function Services_Slider() {
  
 
useEffect(() => {
  AOS.init({
    duration: 800,
  });
})
  return (
    <section style={{
      display: 'flex',
      overflowY: 'hidden',
      overflowX: 'hidden' ,
      flexWrap: window.innerWidth >= 550 ? 'wrap' : 'nowrap',
      justifyContent: window.innerWidth <= 550 ? 'center' : 'flex-start'
    }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      
      <Card
        hoverable
        style={{
          width: 240,
          margin: '10px',
        }}
        cover={
          <img
            alt="example"
            style={{
              height: '240px',
              width: '240px',
            }}
            src={s2}
          />
        }
          data-aos="fade-right"
      >
        <Meta title="Health Insurance" description="Health care expenses can be financially devastating without insurance coverage." />
      </Card>
      <Card
        hoverable
        style={{
          width: 240,
          margin: '10px',
        }}
        cover={
          <img
            alt="example"
            style={{
              height: '240px',
              width: '240px',
            }}
            src={s3}
          />
        }
        data-aos="fade-left"
      >
        <Meta title="Mutual Funds and SIP" description="Disciplined investing, rupee cost averaging, and wealth accumulation over time." />
      </Card>
      <Card
        hoverable
        style={{
          width: 240,
          margin: '10px',
        }}
        cover={
          <img
            alt="example"
            style={{
              height: '240px',
              width: '240px',
            }}
            src={s4}
          />
        }
        data-aos="fade-right"
      >
        <Meta title="LIC Insurance" description="Safeguard your loved ones' future with our comprehensive life insurance - unwavering security, priceless peace of mind" />
      </Card>
      <Card
        hoverable
        style={{
          width: 240,
          margin: '10px',
        }}
        cover={
          <img
            alt="example"
            style={{
              height: '240px',
              width: '240px',
            }}
            src={s5}
          />
        }
        data-aos="fade-left"
      >
        <Meta title="Home Loan" description="Unlock financial freedom effortlessly with our streamlined loan process - swift, hassle-free, tailored" />
      </Card>
      <Card
        hoverable
        style={{
          width: 240,
          margin: '10px',
        }}
        cover={
          <img
            alt="example"
            style={{
              height: '240px',
              width: '240px',
            }}
            src={s6}
          />
        }
        data-aos="fade-right"
      >
        <Meta title="Stock Trading" description="Unlock stock market potential with our Demat account services and expert technical analysis recommendations" />
      </Card>
      <Card
        hoverable
        style={{
          width: 240,
          margin: '10px',
        }}
        cover={
          <img
            alt="example"
            style={{
              height: '240px',
              width: '240px',
            }}
            src={s7}
          />
        }
        data-aos="fade-left"
      >
        <Meta title="Vehicle Insurance" description="Discover the perfect insurance fit for your needs and budget - comprehensive coverage, pocket-friendly premiums." />
      </Card>
    </div>
  </section>
  
  );
}