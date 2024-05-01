import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Achievement = () => {
  useEffect(() => {
    AOS.init(
        {
            duration: 5000
        }
    );
  }, []);
  const [counter ,  setCounter] = useState(false);
  return (
    <>
    {/* <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'10px',marginTop:'50px'}} id="experience">
              <h1 style={{color:'black' , fontSize:'50px'}}>More Than 25 Years Experience</h1>
      <p style={{ color: '#808080' }}>Build Strategies, Build Confidence, Build Your Business.</p>
      
    </div> */}
      <div style={{
       overflowY: 'hidden',  
      overflowX: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '2rem',
  padding: '2rem',
  borderRadius: '0.5rem',
      }}
      id="experience">
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out'
        }}
        data-aos="fade-up">
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.5rem',
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#ff6b6b'
    }}>
      <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>{counter && <CountUp start={0} end={10} duration={5} />}</ScrollTrigger>
      <span style={{ marginLeft: '0.25rem' }}>+</span>
    </div>
    <div style={{ fontSize:window.innerWidth<=550?'1.3rem':'2rem', color: '#333' }}>Years of Experience</div>
  </div>

  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out'
        }}
        data-aos="fade-down">
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.5rem',
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#ffa07a'
          }}>
            <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>{counter && <CountUp start={0} end={95} duration={5} />}</ScrollTrigger>
    
      <span style={{ marginLeft: '0.25rem' }}>k</span>
    </div>
    <div style={{ fontSize: window.innerWidth<=550?'1.43rem':'2rem', color: '#333' }}>Happy Customers</div>
  </div>

  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out'
        }}
        data-aos="fade-up">
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.5rem',
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#4fc3f7'
    }}>
       <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>{counter && <CountUp start={0} end={100} duration={5} />}</ScrollTrigger>
      <span style={{ marginLeft: '0.25rem' }}>%</span>
    </div>
    <div style={{ fontSize:window.innerWidth<=550?'2.2rem':'2rem', color: '#333' }}>Satisfaction</div>
  </div>
</div></>
  )
}

export default Achievement
