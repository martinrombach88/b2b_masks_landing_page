import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import HeroImage from './components/HeroImage'
import ProductInfo from './components/ProductInfo'
import InteractiveMap from './components/InteractiveMap'
import MapBox from './components/MapBox'
import ContactForm from './components/ContactForm'
import BookingForm from './components/ModalBooking'

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <HeroImage/>
          </div>
          <div className="section">
            <ProductInfo />
          </div>
          <div className="section">
            <InteractiveMap />
          </div>
          <div className="section">
            <InteractiveMap />
            <MapBox />
          </div>
          <div className="section">
            <ContactForm />
          </div>
        </ReactFullpage.Wrapper>
        
      );
    }}
  />
);

export default Fullpage;