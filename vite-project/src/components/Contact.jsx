import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);

  const responsiveStyles = {
    '@media (max-width: 420px)': {
      gridTemplateColumns: '1fr',
      padding: '1rem',
      fontSize: '0.9rem',
      button: {
        padding: '0.5rem 1rem',
        fontSize: '0.9rem',
      },
      input: {
        padding: '0.5rem',
        fontSize: '0.9rem',
      },
      textarea: {
        padding: '0.5rem',
        fontSize: '0.9rem',
      },
    },
  };

  return (
    <div style={{ margin: '5rem 0rem' }} data-aos="fade-up">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', backgroundColor: '#f8f8f8', borderRadius: '0.5rem', boxShadow:window.innerWidth<=420?'none':'0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)' }} id="contact">
        <h2 style={{ textAlign: 'center', fontSize:window.innerWidth<=420?'1.5rem':'2rem', marginBottom: '2rem', color: '#333' }} data-aos="fade-left">Send Us A Message</h2>
        <div style={{ backgroundColor: '#fff', padding:window.innerWidth<=420?'0rem':'2rem', borderRadius: '0.5rem', boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)' }}>
          <form data-aos="fade-right">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1rem', ...responsiveStyles['@media (max-width: 420px)'] }}>
              <div>
                <input style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', borderRadius: '0.25rem', border: '1px solid #ccc', ...responsiveStyles['@media (max-width: 420px)'].input }} type="text" placeholder="Your Name *" required />
              </div>
              <div>
                <input style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', borderRadius: '0.25rem', border: '1px solid #ccc', ...responsiveStyles['@media (max-width: 420px)'].input }} type="email" placeholder="Your Email *" required />
              </div>
              <div>
                <input style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', borderRadius: '0.25rem', border: '1px solid #ccc', ...responsiveStyles['@media (max-width: 420px)'].input }} type="text" placeholder="Your Subject" />
              </div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <textarea style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', borderRadius: '0.25rem', border: '1px solid #ccc', minHeight: '150px', ...responsiveStyles['@media (max-width: 420px)'].textarea }} placeholder="Your message"></textarea>
            </div>
            <div style={{ display: 'flex', flexDirection: window.innerWidth<=420?'column':'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', ...responsiveStyles['@media (max-width: 420px)'] }}>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <strong>Note:</strong> Your email address will not be published.
              </div>
              <button style={{ backgroundColor: '#333', color: '#fff', padding: '0.75rem 1.5rem', fontSize: '1rem', borderRadius: '0.25rem', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease', ...responsiveStyles['@media (max-width: 420px)'].button }} type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;