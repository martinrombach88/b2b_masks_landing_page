import HeroImage from './HeroImage'
import ProductInfo from './ProductInfo'
import InteractiveMap from './InteractiveMap'
import ContactForm from './ContactForm'
import maskLogo from './images/maskLogo.png';
import phoneIcon from './images/phone.jpg';

function App() {

  const chatStart = () => {
    alert("This button will take you to the chat app!")
  }

  return (
    <div className="App">
        <HeroImage/>
        <ProductInfo />
        <InteractiveMap />
        <div id="contact">
        <div className="overlay" id="contactOverlay"></div>
            <div id="contactHeader">
                <div className="logoDiv" id='contactLogoDiv'>
                  <img src={maskLogo} alt="logo" id="logo"/>
                  <h2>Cleankit</h2>
                </div>
                <h1>Get in Touch</h1>
            </div>
            
            <div id="contactContainer">             
                <ContactForm />

                <div id="optionDiv">
                  
                  <div className="contactOption contactBorder">
                    <h3>Call us directly</h3>
                    <h3><img src={phoneIcon} alt="phoneIcon" id='phoneIcon'></img>0800 118 118</h3>
                  </div>

                  <div className="contactOption contactBorder">
                    <h3>Chat with our sales team</h3>
                    <button onClick={chatStart}>Begin Chat</button>
                  </div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
