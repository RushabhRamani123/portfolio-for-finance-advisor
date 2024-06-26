import Header from "./components/Header"
import Achievement from './components/Experience';
import Services from './components/Services';
import WhyChoose from "./components/WhyChoose";
import Herosection from './components/Herosection';
import Footer from './components/Footer';
import Contact from "./components/Contact";
import Company from "./components/company";
import WhatsAppButton from "./components/WhatsAppButton";
function App() {

  return (
    <>
      <Header />
      <Herosection/>
      <WhyChoose />
      <Services/>
      <Achievement />
      <Company />
      <Contact />
      <Footer />
      <WhatsAppButton/>
    </>
  );
}

export default App;