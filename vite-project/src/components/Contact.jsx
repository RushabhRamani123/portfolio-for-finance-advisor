import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect , useState} from "react";
import axios from 'axios';
import { MdAddCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [request, setMessage] = useState(''); 

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
    <div style={{ display: 'flex', flexDirection: 'column',overflowX: 'hidden',overflowY: 'hidden', alignItems: 'center', fontFamily: "'Roboto', sans-serif" }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '2rem', backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '0.5rem' }}>
  <h3 style={{ fontSize:window.innerWidth > 520 ? '1rem' : '2.5rem', color: '#333', marginRight: '1rem'}} data-aos="fade-right">Contact Details :</h3>
  <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem', backgroundColor: '#e6f5e6', padding: '0.5rem', borderRadius: '0.25rem', marginTop: '0.5rem' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2rem',
            height: '2rem', backgroundColor: '#2e7d32', borderRadius: '50%'
          }}
            data-aos="fade-up"

          >
            <MdAddCall style={{ fontSize: '1.5rem', color: '#ffffff' }}
              
            />
    </div>
    <p style={{ marginLeft: '0.5rem', color: '#2e7d32', fontWeight: 'bold' }} data-aos="fade-right">9172846729 / 9930808219</p>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#e6f5e6', padding: '0.5rem', borderRadius: '0.25rem', marginTop: '0.5rem' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2rem', height: '2rem',
            backgroundColor: '#2e7d32', borderRadius: '50%'

          }}
          data-aos="fade-down"
          >
      <IoMail style={{ fontSize: '1.5rem', color: '#ffffff' }} />
    </div>
    <p style={{ marginLeft: '0.5rem', color: '#2e7d32', fontWeight: 'bold' }} data-aos="fade-right">bhavinishah99@gmail.com / kauvin23@gmail.com</p>
  </div>
</div>
    {/* <div style={{ maxWidth: '800px', width: '100%', padding: '2rem', backgroundColor: '#f8f8f8', borderRadius: '0.5rem', boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)', marginBottom: '5rem' }} data-aos="fade-up">
      <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)' }} id="contact">
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', color: '#333' }} data-aos="fade-left">
          Send Us A Message
        </h2>
        <form data-aos="fade-right" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <input
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  fontSize: '1rem',
                  borderRadius: '0.25rem',
                  border: '1px solid #ccc',
                  outline: 'none',
                }}
                type="text"
                placeholder="Your Name *"
                required
              />
            </div>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  fontSize: '1rem',
                  borderRadius: '0.25rem',
                  border: '1px solid #ccc',
                  outline: 'none',
                }}
                type="email"
                placeholder="Your Email *"
                required
              />
            </div>
            <div>
              <input
                onChange={(e) => setSubject(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  fontSize: '1rem',
                  borderRadius: '0.25rem',
                  border: '1px solid #ccc',
                  outline: 'none',
                }}
                type="text"
                placeholder="Your Subject"
              />
            </div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                borderRadius: '0.25rem',
                border: '1px solid #ccc',
                minHeight: '150px',
                outline: 'none',
              }}
              placeholder="Your message"
            ></textarea>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>
              <strong>Note:</strong> Your email address will not be published.
            </div>
            <div
              onClick={() => {
                if (name !== '' || email !== '' || subject !== '' || request !== '') {
                  // alert('Please fill in all fields.');
                  axios.post("http://localhost:8000/send-email", { name, email, subject, request });
                  alert('Your message has been sent. Thank you!');
                } else {
                  alert('Please fill in all fields');
                }
              }}
              style={{
                backgroundColor: '#333',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                borderRadius: '0.25rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              type="submit"
            >
              Send Message
            </div>
          </div>
        </form>
      </div>
    </div> */}
  </div>
  );
};

export default Contact;