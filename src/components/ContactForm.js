import {useState} from 'react';
import maskLogo from '../images/maskLogo.png';
import phoneIcon from '../images/phone.jpg';
import ModalBooking from '../components/ModalBooking'

const ContactForm = () => {
  const [openModal, setOpenModal] = useState(false);  

  const chatStart = () => {
    alert("This button will take you to the chat app!");
  }

  return ( 

    <div id="contact">
        <div className="overlay2" id="contactOverlay"></div>
           <div id="contactHeader">

            <div className="logoDiv" id='contactLogoDiv'>
                <img src={maskLogo} alt="logo" id="logo"/>
                <h2 id="contactHeaderTitle">Cleankit</h2>
            </div>

            <h1>Get in Touch</h1>
          </div>

          <div className="contactBooking contactBorder" id="book">
              <h3>Book a Meeting</h3>
              <button className="blueBtn centerBtn" onClick={()=> setOpenModal(true)}>Open Form</button>
              {openModal && <ModalBooking closeModal={setOpenModal}/>}
            </div>
        
            <div className="contactOption contactBorder" id="phone">
              <h3>Call us directly</h3>
              <h3><img src={phoneIcon} alt="phoneIcon" id='phoneIcon'></img>0800 118 118</h3>
            </div>

            <div className="contactOption contactBorder" id="chat">
              <h3>Chat with our sales team</h3>
              <button className="blueBtn centerBtn" onClick={chatStart}>Begin Chat</button>
            </div>

    </div>


    
   );
}
 
export default ContactForm;




//Sample Code taken from Semantic UI - https://react.semantic-ui.com/collections/form/#shorthand-field-control