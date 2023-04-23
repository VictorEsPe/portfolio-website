import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Victor Estevam Pereira
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#experience">Conhecimentos</a>
        </li>
        <li>
          <a href="#portfolio">Portfólio</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/VictorEsPe" target='_blank'>
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/victor-estevam-44140b239/" target='_blank'>
          <BsLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer
