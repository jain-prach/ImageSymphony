import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';
import Module0 from './components/Module0/Module0';
import Module1 from './components/Module1/Module1';
import Module3 from './components/Module3/Module3';
import Module4 from './components/Module4/Module4';
import Module5 from './components/Module5/Module5';
import Module2 from './components/Module2/Module2';


const showHeader = () => {
  if (window.location.pathname === '/'){
    return <Header />;
  }
}

const showFooter = () => {
  if (window.location.pathname === '/'){
    return <Footer />;
  }
}

const showAbout = () => {
  if (window.location.pathname === '/'){
    return <About />;
  }
}

const showPrivacyPolicy = () => {
  if (window.location.pathname === '/privacy-policy'){
    return <PrivacyPolicy />;
  }
}

const showTermsOfService = () => {
  if (window.location.pathname === '/terms-of-service'){
    return <TermsOfService />;
  }
}

const showContactUs = () => {
  if (window.location.pathname === '/contact-us'){
    return <ContactUs />;
  }
} 

const showModule0 = () => {
  if (window.location.pathname === '/model-noise-particular-type' || window.location.pathname === '/generate-noise-on-image' || window.location.pathname === '/model-noise-from-image' || window.location.pathname === '/generate-modeled-noise-on-image'){
    return <Module0 />;
  }
}

const showModule1 = () => {
  if (window.location.pathname === '/model-noise-particular-type/output'){
    return <Module1 />;
  }
}

const showModule3 = () => {
  if (window.location.pathname === '/generate-noise-on-image/output'){
    return <Module3 />;
  }
}

const showModule4 = () => {
  if (window.location.pathname === '/model-noise-from-image/output'){
    return <Module4 />;
  }
}

const showModule5 = () => {
  if (window.location.pathname === '/generate-modeled-noise-on-image/output'){
    return <Module5 />;
  }
}

const showModule2 = () => {
  if (window.location.pathname === '/output-image-processing'){
    return <Module2 />;
  }
}

function App() {
  return (
    <div className='ui container'>
      { showHeader() }
      { showAbout() }
      { showFooter() }
      { showPrivacyPolicy() }
      { showTermsOfService() }
      { showContactUs() }
      { showModule0() }
      { showModule1() }
      { showModule3() }
      { showModule4() }
      { showModule5() }
      { showModule2() }
    </div>
  );
}

export default App;