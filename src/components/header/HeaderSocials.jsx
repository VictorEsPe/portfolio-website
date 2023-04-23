import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/victor-estevam-44140b239/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/VictorEsPe" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials
