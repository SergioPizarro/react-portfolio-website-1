import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hfqcwtm', 'template_upzdmor', form.current, 'XOYld6arNDxLXU-mq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sent!',
        showConfirmButton: false,
        timer: 1500,
        background: 'transparent',
        color: '#4db5ff'
      })


  };
  return (
    <section id='contact'>

      <h2>Get In Touch!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sergio.pizarroseg@gmail.com</h5>
            <a href="mailto:sergio.pizarroseg@gmail.com" >Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Sergio Pizarro</h5>
            <a href="https://m.me/sergio.n.pizarro" target='blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+4917661652846</h5>
            <a href="https://api.whatsapp.com/send?phone=4917661652846" target='blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>


        </form>

      </div>
    </section>
  )
}

export default Contact
