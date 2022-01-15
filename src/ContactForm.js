
import maskLogo from './images/maskLogo.png';
import phoneIcon from './images/phone.jpg';

const ContactForm = () => {

  const chatStart = () => {
    alert("This button will take you to the chat app!")
  }

  const formCancel = (e) => {
      e.preventDefault();
      alert("This button would send all the information to our database!");
      
  }

  return ( 
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
              
              <div id='contactForm' className="contactBorder">
        
              <div id="contactBooking">
              <h2>Book a Meeting</h2>
                <p>To schedule a meeting with the Cleankit Sales Team, fill in the form
                and click 'Submit'. You will receive a confirmation email soon after.</p>
              </div>

              <form>
                  <div className="formDiv">
                    <div className="formField">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" name="firstName"/>
                    </div>

                <div className="formField">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" name="lastName"/>
                </div>
              </div>

              <div className="formDiv">
                <div className="formField">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="phone" name="phoneNumber"/>
                </div>

                <div className="formField">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email"/>
                </div>
              </div>
          
                <div className="formDiv">
                  <div className="formField">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" name="company"/>
                  </div>

                  <div className="formField">
                    <label htmlFor="website">Website</label>
                    <input type="url" name="website"/>
                  </div>
                </div> 

              <div className="formDiv" id="meetingInput">
                <div className="formField">
                    <label htmlFor="date">Meeting Date</label>
                    <input type="date" name="date"/>
                </div>

                <div className="formField">
                    <label htmlFor="time">Meeting Time</label>
                    <input type="time" name="time"/>
                </div>

              </div>

            <div className="formDiv">
              <div className="formField">
                  <input onClick={formCancel} type="submit" name="submit" value="Submit"/>
              </div>
            </div>
        </form>

    </div>

                <div id="optionDiv">
                  
                  <div className="contactOption contactBorder" id="phone">
                    <h3>Call us directly</h3>
                    <h3><img src={phoneIcon} alt="phoneIcon" id='phoneIcon'></img>0800 118 118</h3>
                  </div>

                  <div className="contactOption contactBorder" id="chat">
                    <h3>Chat with our sales team</h3>
                    <button onClick={chatStart}>Begin Chat</button>
                  </div>

                </div>
            </div>
        </div>




    
   );
}
 
export default ContactForm;




//Sample Code taken from Semantic UI - https://react.semantic-ui.com/collections/form/#shorthand-field-control