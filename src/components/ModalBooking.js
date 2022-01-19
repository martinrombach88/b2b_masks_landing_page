import {useForm} from 'react-hook-form';

function ModalBooking({closeModal}) {
  const {register, handleSubmit, errors} = useForm();

  const modalMeeting = (meetingInfo) => {
    return (
      <div className ='modalContainer'>
      <div className="modalShadow"></div>
      <p>Your meeting: {meetingInfo}</p><button id="xBtn" onClick={() => closeModal(false)}>X</button>
      </div>
    )
  }

  const onSubmit = (data) => {
      console.log(data);
      const meetingInfo = `Your name is ${data.firstName} ${data.lastName} of ${data.company}. Your meeting is at ${data.meetingTime} on ${data.meetingDate}. See you there!`;
      alert(meetingInfo);
  }

   
    return (
    <div className ='modalContainer'>
        <div className="modalShadow"></div>
        <div id='contactForm' className="contactBorder">
          <div id="contactBooking">
            <div id="bookTitle"><h2>Book a Meeting</h2></div>
                
                <button className="cursorBtn" id="xBtn" onClick={() => closeModal(false)}>X</button>
          </div>
                  <p>To schedule a meeting with the Cleankit Sales Team, fill in the form
                    and click 'Submit'.<br/> You will receive a confirmation email soon after.</p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="formDiv">
                        <div className="formField">
                          <label htmlFor="firstName">First Name</label>
                          <input type="text" name="firstName" {...register('firstName', { required: true })}/>
                        </div>

                    <div className="formField">
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" name="lastName" {...register('lastName', { required: true })}/>
                    </div>
                  </div>

                  <div className="formDiv">
                    <div className="formField">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input type="phone" name="phoneNumber" {...register('phone', { required: true })} />
                    </div>

                    <div className="formField">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" {...register('email', { required: true })}/>
                    </div>
                  </div>
              
                    <div className="formDiv">
                      <div className="formField">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" name="company" {...register('company', { required: true })}/>
                      </div>

                      <div className="formField">
                        <label htmlFor="website">Website</label>
                        <input type="url" name="website" {...register('website', { required: false })}/>
                      </div>
                    </div> 

                  <div className="formDiv" id="meetingInput">
                    <div className="formField">
                        <label htmlFor="date">Meeting Date</label>
                        <input type="date" name="date" {...register('meetingDate', { required: true })}/>
                    </div>

                    <div className="formField">
                        <label htmlFor="time">Meeting Time</label>
                        <input type="time" name="time" {...register('meetingTime', { required: true })}/>
                    </div>

                  </div>

                <div className="formDiv">
                  <div className="formField">
                    <button id="cancelBtn" className="cursorBtn" onClick={() => closeModal(false)}>Cancel</button>
                    <input className="cursorBtn" type="submit"/>
                  </div>
                </div>
            </form> 
        </div>
 
    </div>
    )
}
 
export default ModalBooking;

