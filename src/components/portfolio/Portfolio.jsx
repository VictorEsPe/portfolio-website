import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/rdr-portfolio.png'
import IMG2 from '../../assets/tiktok-clone.png'
import IMG3 from '../../assets/pagina-notificacao.png'
import IMG4 from '../../assets/formulario-login.png'
import IMG5 from '../../assets/componente-avaliacao.png'
import IMG6 from '../../assets/calculadora-idade.png'

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'Carrossel Red Dead Redemption 2',
    github: 'https://github.com/VictorEsPe/Carrossel-Red-Dead-Redemption',
    demo: 'https://victorespe.github.io/Carrossel-Red-Dead-Redemption/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Clone do TikTok',
    github: 'https://github.com/VictorEsPe/tiktok-project',
    demo: 'https://tiktok---jornada-376e4.web.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Página de notificações',
    github: 'https://github.com/VictorEsPe/Pagina-de-notificacoes',
    demo: 'https://victorespe.github.io/Pagina-de-notificacoes/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Formulário de login',
    github: 'https://github.com/VictorEsPe/formulario-de-login',
    demo: 'https://github.com/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Componente de avaliação interativo',
    github: 'https://github.com/VictorEsPe/Componente-de-avaliacao-interativo',
    demo: 'https://victorespe.github.io/Componente-de-avaliacao-interativo/',
  },

  {
    id: 6,
    image: IMG6,
    title: 'Calculadora de idade',
    github: 'https://github.com/VictorEsPe/calculadora-de-idade',
    demo: 'https://victorespe.github.io/calculadora-de-idade/',
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus trabalhos recentes</h5>
      <h2>Portfólo</h2>

      <div className="container portfolio__container">
        {portfolioData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blanket" className="btn">
                  Github
                </a>
                <a href={demo} target="_blanket" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
