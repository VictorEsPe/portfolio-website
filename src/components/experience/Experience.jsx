import React from 'react'
import './experience.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Minhas habilidades</h5>
      <h2>Minha experiência</h2>

      <div className="experience__container container">
        <div className="experience__frontend">
          <h3>Desenvolvimento Frontend</h3>

          <div className="ecperience__content">
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>

              <div>
                <h4>HTML</h4>
                <small className="text-light">Avançado</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>

              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>

              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>

              <div>
                <h4>React JS</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Desenvolvimento Backend</h3>

          <div className="ecperience__content">
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>

              <div>
                <h4>Node JS</h4>
                <small className="text-light">Avançado</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>

              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>

              <div>
                <h4>PHP</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>

              <div>
                <h4>MySQL</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
