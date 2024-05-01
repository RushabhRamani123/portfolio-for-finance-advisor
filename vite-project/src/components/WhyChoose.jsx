
import bg from "../../public/bg-2.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const WhyChoose = () => {
  useEffect(() => {
    AOS.init({
      
      duration: 800,
     
    });
  })
  return (
    <div style={{marginTop:'100px', overflowX: 'hidden' , overflowY: 'hidden' }}>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'10px',marginTop:'50px'}} >
              <h1 data-aos="fade-down">Why Choose Us ?</h1>
              <p data-aos="fade-up" style={{color:'#808080',fontSize:window.innerWidth<=550?'11px':'13px'}}>Build Strategies, Build Confidence, Build Your Business.</p>
          </div>
          <div style={{display:'flex',justifyContent:'center', flexDirection:window.innerWidth<=550?'column':'row',alignItems:'space-around',gap:'10px' , margin:window.innerWidth<=550?'50px 16px':'50px 60px' ,}}>
          <div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems:'center', gap: '10px' }}>
  <img
    style={{ verticalAlign: 'top', maxWidth: '100%', height: 'auto' }}
    src="https://gaviaspreview.com/wp/winnex/wp-content/uploads/2018/10/icon-1.png"
            alt="Image"
            data-aos="fade-right"
  />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
          data-aos="fade-left"
          >
    <a href="#" style={{ cursor: 'pointer' }}></a>
    <div className="title">
              <a href="#" style={{ cursor: 'pointer' }}></a>
              {/* how to remove */}
      <a href="#" style={{ cursor: 'pointer' , textDecoration:'none', color:'black', fontWeight:'bold' , fontSize:'20px'}}>
      Guidance
      </a>
    </div>
    <div className="desc" style={{color:'#716868'}}>
    Experienced consultants offer strategic solutions to maximize wealth through personalized planning.
    </div>
  </div>
            </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}  >
                  <img style={{verticalAlign: 'top',
                      maxWidth: '100%', height: 'auto'
          }} src="https://gaviaspreview.com/wp/winnex/wp-content/uploads/2018/10/icon-2.png"
          data-aos="fade-left"/>
          <div className="highlight_content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
          data-aos="fade-right">
    <a href="#" style={{ cursor: 'pointer' }}></a>
    <div className="title">
      <a href="#" style={{ cursor: 'pointer' }}></a>
      <a href="#" style={{ cursor: 'pointer' , textDecoration:'none', color:'black', fontWeight:'bold' , fontSize:'20px'}}>
        Profit
      </a>
    </div>
    <div className="desc" style={{color:'#716868'}}>
    Profit margins vary significantly across different industries and business models.
    </div>
  </div>
                  
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }} >
                  <img style={{verticalAlign: 'top',
                      maxWidth: '100%', height: 'auto'
          }} src="https://gaviaspreview.com/wp/winnex/wp-content/uploads/2018/10/icon-3.png"
          data-aos="fade-right"
          />
          <div className="highlight_content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
          data-aos="fade-left">
    <a href="#" style={{ cursor: 'pointer' }}></a>
    <div className="title">
      <a href="#" style={{ cursor: 'pointer' }}></a>
      <a href="#" style={{ cursor: 'pointer' , textDecoration:'none', color:'black', fontWeight:'bold' , fontSize:'20px'}}>
        Teamwork
      </a>
    </div>
    <div className="desc" style={{color:'#716868'}}>
    The financial consultant emphasized the importance of teamwork within the organization to achieve profitability goals
    </div>
  </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }} >
                  <img style={{verticalAlign: 'top',
                      maxWidth: '100%', height: 'auto'
          }} src="https://gaviaspreview.com/wp/winnex/wp-content/uploads/2018/10/icon-4.png"
          data-aos="fade-left"/>
          <div className="highlight_content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
          data-aos="fade-right">
    <a href="#" style={{ cursor: 'pointer' }}></a>
    <div className="title">
      <a href="#" style={{ cursor: 'pointer' }}></a>
      <a href="#" style={{ cursor: 'pointer' , textDecoration:'none', color:'black', fontWeight:'bold' , fontSize:'20px'}}>
      Support
      </a>
    </div>
    <div className="desc" style={{color:'#716868'}}>
    The financial consultant support enabled us to streamline our budgeting and forecasting processes.
    </div>
  </div>
        </div>
          </div>
        <div style={{position:'relative'}}>
        <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={bg} alt="" />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <h1 style={{ color: 'white', fontSize:window.innerWidth<=550?'20px':'30px' }} data-aos="fade-up">Sia Consultant is always with you</h1>
          <p style={{ color: 'white' }}  data-aos="fade-up">Are you looking to grow, or even launch, your business?</p>
        </div>
        </div>
    </div>
  )
}

export default WhyChoose; 

/* https://gaviaspreview.com/wp/winnex/wp-content/uploads/2018/10/icon-4.png
 */