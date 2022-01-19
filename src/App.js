import HeroImage from '../src/components/HeroImage'
import ProductInfo from '../src/components/ProductInfo'
import InteractiveMap from '../src/components/InteractiveMap'
import MapBox from '../src/components/MapBox'
import ContactForm from '../src/components/ContactForm'
import BookingForm from '../src/components/ModalBooking'

function App() {

  return (
    <div className="App">
        <HeroImage/>
        <ProductInfo />
        <InteractiveMap />
        <MapBox />
        <ContactForm />
        
        
    </div>
  );
}

export default App;
