import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import emailjs from 'emailjs-com'

const Contact = () => {
  const enteredNameRef = useRef();
  const enteredEmailRef = useRef();
  const enteredMessageRef = useRef();

  const formSubmitHandler = (event)=>{
    event.preventDefault();
    emailjs.sendForm('service_4ln7gxx', 'template_cn6ozfy',event.target,  'VpGN0jUv5iuZ9wkX7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    alert('Message Sent Successfully');
    enteredEmailRef.current.value=''
    enteredNameRef.current.value=''
    enteredMessageRef.current.value=''

    // Or just write e.target.reset();
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rajat15004@gmail.com</h5>
            <a href="mailto:rajat15004@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Yash Shekhar</h5>
            <a href="https://m.me/dummy" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 8840558906</h5>
            <a href="https://api.whatsapp.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form onSubmit={formSubmitHandler}>
          <input
            ref={enteredNameRef}
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input ref={enteredEmailRef} type="email" name="email" placeholder="Your Email" required />
          <textarea
            ref={enteredMessageRef}
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button  type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;