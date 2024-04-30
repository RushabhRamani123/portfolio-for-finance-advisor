import './service.css';
import AOS from 'aos';  
import 'aos/dist/aos.css';
import { useEffect , useState} from "react";
import Services_Slider from './Services_Slider';
import axios from 'axios';

const Services = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [request, setMessage] = useState('');
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  })
  
  return (
    <div id="services">
      <h1 data-aos="fade-right" style={{ textAlign: 'center', marginTop: '100px', color: 'green' }}>
        <span>Our Services</span>
      </h1>
      <div style={{
        marginTop: '50px',
        display: 'flex',
        flexDirection: window.innerWidth <= 430 ? 'column' :window.innerWidth <= 840 ? 'column' : 'row',
        justifyContent: 'center', alignItems: window.innerWidth <= 430 ? 'center' :window.innerWidth <= 840 ? 'center' : 'flex-start',
        gap: '10px'
      }} id="services">
  {/* <h1>Our Services</h1> */}
      <div style={{ width: '50%' }}>
      <Services_Slider/>
      </div>
      
        <div className="container"
          data-aos="fade-down"
        >
      <div className="service-box" >
        <div className="heading">
          <h2>
            <span>Request Call Back</span>
          </h2>
          <div>Would you like to speak to one of our financial advisers over the phone? Just submit your details.</div>
        </div>
        <div className="form-container">
          <form>
            <div className="form-field" >
              <p>
                <select onChange={(e) => {setMessage(e.target.value)}}>
                  <option value="How can we help">How can we help</option>
                  <option value="Life insurance planning for family members">Life insurance planning for family members</option>
                  <option value="Retirement Planning">Retirement Planning</option>
                  <option value="Mutual and SIP fund planning">Mutual and SIP fund planning</option>
                  <option value="Opening Dmat Account">Opening Dmat Account</option>
                  <option value="Opening Bank Account">Opening Bank Account</option>
                  <option value="Mediclaim Insurance">Mediclaim Insurance</option>
                  <option value="Stock Advisior">Stock Advisior</option>
                  <option value="Health Insurance">Health Insurance</option>
                      <option value="Life Insurance">Life Insurance</option>
                      <option value="Vehicle Insurance">Vehicle Insurance</option>
                </select>
              </p>
            </div>
            <div className="form-field">
              <p>
                <input type="text" onChange={(e) => {setName(e.target.value)}} name="your-name" placeholder="Your Name" />
              </p>
            </div>
            <div className="form-field">
              <p>
                <input type="tel" onChange={(e) => {setPhone(e.target.value)}} name="your-phone" placeholder="Your Phone Number*" />
              </p>
            </div>
            <div className="form-field">
              <p>
                <input type="email" onChange={(e) => {setEmail(e.target.value)}} name="your-email" placeholder="Your Email*" />
              </p>
            </div>
            <div className="form-field">
                  <p
                    style={{
                      color: '#fff',
                      cursor: 'pointer',
                      display: 'inline-block',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      backgroundColor: '#97CD47',
                      border: 'none',
                    }}
                    onClick={() => {
                      if (name !== '' || email !== '' || phone !== '' || request !== '') {
                        axios
                          .post('https://portfolio-for-finance-advisor-sb2q.vercel.app/get-form-data', { request, name, email, phone })
                          .then((response) => {
                            console.log(response.data); // Access the response data
                            // Handle the response data as needed
                          })
                          .catch((error) => {
                            console.error('Error:', error);
                            // Handle the error
                          });
                        alert('Form submitted successfully');
                      }
                      else {
                        alert('Please fill all the fields');
                      }
                  }}>
                   Submit
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
   </div>
    </div>
  );
};

export default Services;