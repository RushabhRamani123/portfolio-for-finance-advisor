import { IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion"
import logo from '../../public/logo.png'
import  { useState } from 'react';
import { Button, Drawer } from 'antd';
import {MenuOutlined } from "@ant-design/icons"; 
// import { Router, Link } from 'react-router-dom'
import { Link} from 'react-scroll';
const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (//box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    <div
      style={{
        overflowY: 'hidden',
        overflowX: 'hidden',
        display: 'flex',
        padding: '10px',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px',
        position: 'sticky', // Add this line
        top: 0, // Add this line
        zIndex: 100, // Add this line
        backgroundColor: 'white', 

      }}>
      {/* LOGO */}
      <div style={{ color: "#93CB40", fontSize:window.innerWidth<=550?'20px':"30px", fontWeight: "bold" }}>
        <img style={{width:window.innerWidth<=550?'50px':"70px",height:window.innerWidth<=550?'50px':"70px"}} src={logo}></img>
        {/* Sia <span style={{ color: "black", fontSize:window.innerWidth<=550?'20px':"30px", fontWeight: "bold" }}>Consultancy</span> */}
      </div>
      {/* NAV Settings */}
      <div>
      <div style={{ display: window.innerWidth <= 986 ? 'none' : 'flex', flexDirection: 'row', gap: '15px', listStyle: 'none', cursor: 'pointer', fontSize: '20px' }}>
          <Link
            spy={true} smooth={true} offset={60} duration={500}
            style={{ textDecoration: 'none', color: 'black', cursor: 'pointer',':hover':{color: 'white'} }} to='herosection'>Home</Link>
          <Link
            spy={true} smooth={true} offset={60} duration={500}
            style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} to='services'>Services</Link>
          <Link 
            spy={true} smooth={true} offset={0} duration={500} 
            style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} to='experience'>Experience</Link>
          <Link
            spy={true} smooth={true} offset={60} duration={500}
            style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} to='contact'>Contact</Link>
</div>
      </div>
      {/* Call to Action */}
     {window.innerWidth>900&&<motion.div
        style={{ cursor: 'pointer', display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{color: "grey", fontSize: "50px",display:window.innerWidth<=986?'none':'flex'}}>|</div>
        <IoCallOutline style={{ color: "#93CB40", fontSize:window.innerWidth<=550?'30px':"40px", fontWeight: "bold" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start" , gap:'2px' }}>
          <div style={{color: "grey",fontSize:window.innerWidth<=550?'15px':"20px"}}>Call us anytime</div>
          <div style={{fontWeight: "bold",fontSize:window.innerWidth<=550?'15px':"20px"}}> +91 9172846729</div>
        </div>
      </motion.div>}
     {window.innerWidth<=900&& <Button icon={<MenuOutlined />} onClick={showDrawer}>
       
      </Button>}
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
      <div style={{ display:'flex', flexDirection: 'column', gap: '15px', listStyle: 'none', cursor: 'pointer', fontSize: '20px' }}>
          <Link
            spy={true} smooth={true} offset={60} duration={500}
            onClick={onClose}
            style={{ textDecoration: 'none', color: 'black', cursor: 'pointer',':hover':{color: 'white'} }} to='herosection'>Home</Link>
          <Link
             onClick={onClose}
            spy={true} smooth={true} offset={60} duration={500}
            style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} to='services'>Services</Link>
          <Link
           onClick={onClose}  
            spy={true} smooth={true} offset={0} duration={500} 
            style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} to='experience'>Experience</Link>
          <Link
onClick={onClose}
            spy={true} smooth={true} offset={60} duration={500}
            style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} to='contact'>Contact</Link>
</div>
      </Drawer>
    </div>
  )
}

export default Header
