import React ,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
 
 

  export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_udtjeg3', 'template_sf0gqoh', form.current, 'yQ-04eq9vbS4Z71h4')
      .then((result) => { 
          console.log(result.text);
          console.log("message send");
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };
 
  
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact___container grid">
        <div className="contact___info">
          <h3 className="contact___title">Let's talk about everything!</h3>
          <p className="contact___details">Don't like forms? Send me an email. 👋</p>
          </div>

          <form  className="contact_form" ref={form} onSubmit={sendEmail}>
            <div className="contact___form-group">
              <div className="contact___form-div">
                <input type="text" className="contact___form-input" name="user_name"
                  placeholder='Inser your name' />
              </div>
              <div className="contact___form-div">
                <input type="email" className="contact___form-input" name="user_email"
                  placeholder='Inser your email' />
              </div>
              <div className="contact___form-div">
                <input type="text" className="contact___form-input" name="user_subject"
                  placeholder='Inser your subject' />

              </div>
              <div className="contact___form-div  contact___form-area">
                <textarea name="message" id="" cols="30" rows="10" className='contact___form-input ' placeholder='write your message'></textarea>
              </div>

              <button className='btn' type="submit">Send Message</button>
            </div>
          </form>
        </div>
      
    </section>
  )
}


export default Contact
