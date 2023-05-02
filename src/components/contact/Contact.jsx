// import React from 'react'
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m3dp1og', 'template_1y8c6mt', form.current, 'DW4QaKewJYHCChdMp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };


  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__icon' />
            <h4>Email</h4>
            <h5>ik.chidoka@gmail.com</h5>
            <a href="mailto:ik.chidoka@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__icon' />
            <h4>Whatsapp</h4>
            <h5>+234(0)9037840458</h5>
            <a href="https://api.whatsapp.com/send?phone=2349037840458" target='_blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter your full name" required />

          <input type="email" name="email" placeholder="Enter your email" required />

          <textarea name="message" placeholder="Enter your message" rows="8" required></textarea>

          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact