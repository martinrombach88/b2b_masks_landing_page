const BookingForm = () => {
    return ( 
    
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
    );
}
 
export default BookingForm;

