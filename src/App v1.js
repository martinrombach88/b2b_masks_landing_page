import HeroImage from './components/HeroImage'
import ProductInfo from './components/ProductInfo'
import InteractiveMap from './components/InteractiveMap'
import MapBox from './components/MapBox'
import ContactForm from './components/ContactForm'
import BookingForm from './components/ModalBooking'

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
