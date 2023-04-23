import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ptmw7uj', 'template_pkd3aig', form.current, 'xWUdiPaKGeEU9XzQL')

    e.target.reset()

    alert('Mensagem enviada')
  };

  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>testevictor087@gmail.com</h5>

            <a href="mailto:testevictor087@gmail.com" target='_blank'>Envie uma mensagem</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Victor Estevam Pereira</h5>

            <a href="https://m.me/victor.estevam.3139" target='_blank'>Envie uma mensagem</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Victor Estevam Pereira</h5>

            <a href="https://api.whatsapp.com/send?phone=5519987676242" target='_blank'>Envie uma mensagem</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu nome completo' required/>
          <input type="email" name="email" placeholder='Seu email' required/>
          <textarea name="message" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Envie uma mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact