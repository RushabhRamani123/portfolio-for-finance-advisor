import  { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '919930808219';
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 2000); // Toggle animation every 2 seconds

    return () => clearInterval(animationInterval);
  }, []);

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25d366',
    color: 'white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
    zIndex: 1000,
  };

  const iconStyle = {
    transition: 'transform 0.5s ease',
    transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
  };

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#128c7e';
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#25d366';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <FaWhatsapp size={32} style={iconStyle} />
    </a>
  );
};

export default WhatsAppButton;