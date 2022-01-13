import HeroImage from './HeroImage'
import ProductInfo from './ProductInfo'
import InteractiveMap from './InteractiveMap'
import ContactForm from './ContactForm'

function App() {
  return (
    <div className="App">
        <HeroImage/>
        <ProductInfo />
        <InteractiveMap />
        <div id="contactHeader">
          <h1>Book a Meeting</h1>
        </div>
        
        <div id="contactContainer">

            <div>
              <ContactForm />
            </div>

            <div id="companyInfo">
                
                <div>
                  <div>
                    <h4>Call us directly at:</h4>
                    <h4>0800 118 118</h4>
                  </div>
                  <div>
                    <h4>Chat with a our sales team</h4>
                    <button>Begin Chat</button>
                  </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default App;
