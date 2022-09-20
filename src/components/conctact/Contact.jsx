import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>sergio.pizarroseg@gmail.com</h5>
            <a href="mailto:sergio.pizarroseg@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Sergio Pizarro</h5>
            <a href="https://m.me/sergio.n.pizarro">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+4917661652846</h5>
            <a href="https://api.whatsapp.com/send?phone=4917661652846">Send a message</a>
          </article>
        </div>

        <form>
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
