import React from 'react'
import { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'

const Nav = () => {
  const [activeNow, setActiveNow] = useState('#')

  return (
    <nav>
      <a
        href="#"
        className={activeNow === '#' ? 'active' : ''}
        onClick={() => setActiveNow('#')}
        title='Home'
      >
        <AiOutlineHome />
      </a>
      
      <a
        href="#about"
        onClick={() => setActiveNow('#about')}
        className={activeNow === '#about' ? 'active' : ''}
        title='Sobre'
      >
        <AiOutlineUser />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNow('#experience')}
        className={activeNow === '#experience' ? 'active' : ''}
        title='Experiência'
      >
        <BiBook />
      </a>

      <a
        href="#services"
        onClick={() => setActiveNow('#services')}
        className={activeNow === '#services' ? 'active' : ''}
        title='Serviços'
      >
        <RiServiceLine />
      </a>

      <a
        href="#portfolio"
        onClick={() => setActiveNow('#portfolio')}
        className={activeNow === '#portfolio' ? 'active' : ''}
        title='Portfolio'
      >
        <AiOutlineFolderOpen />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNow('#contact')}
        className={activeNow === '#contact' ? 'active' : ''}
        title='Contato'
      >
        <AiOutlineMessage />
      </a>
    </nav>
  )
}

export default Nav
