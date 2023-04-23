import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Descubra</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Ecperiênca</h5>
              <small>+3 anos trabalhando</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>+200 clientes</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>+80 projetos</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam ad voluptas, harum sapiente nulla non itaque illo iusto dolore distinctio odit incidunt aperiam quae cupiditate quasi? Vel, consectetur accusantium!</p>

          <a href="#contact" className='btn btn-primary'>Vamos conversar</a>
        </div>
      </div>
    </section>
  )
}

export default About