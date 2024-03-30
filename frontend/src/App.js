import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';

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

function App() {
  return (
    <div className='ui container'>
      { showHeader() }
      { showAbout() }
      { showFooter() }
      { showPrivacyPolicy() }
      { showTermsOfService() }
      { showContactUs() }
    </div>
  );
}

export default App;