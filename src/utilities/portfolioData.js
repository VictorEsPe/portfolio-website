import rdrCarousel from '../assets/previews/rdr-portfolio.png'
import loginForm from '../assets/previews/formulario-login.png'
import ageCalculator from '../assets/previews/calculadora-idade.png'
import adviceGenerator from '../assets/previews/Advice-generator.png'
import audiobook from '../assets/previews/audiobook-player.png'
import pokedex from '../assets/previews/pokedex.png'

const portfolioData = [
  {
    id: 1,
    image: rdrCarousel,
    title: 'Carrossel Red Dead Redemption 2',
    github: 'https://github.com/VictorEsPe/Carrossel-Red-Dead-Redemption',
    demo: 'https://victorespe.github.io/Carrossel-Red-Dead-Redemption/',
  },
  {
    id: 2,
    image: loginForm,
    title: 'Formulário de login',
    github: 'https://github.com/VictorEsPe/formulario-de-login',
    demo: 'https://victorespe.github.io/formulario-de-login/',
  },
  {
    id: 3,
    image: ageCalculator,
    title: 'Calculadora de idade',
    github: 'https://github.com/VictorEsPe/calculadora-de-idade',
    demo: 'https://victorespe.github.io/calculadora-de-idade/',
  },
  {
    id: 4,
    image: adviceGenerator,
    title: 'Gerador de conselhos aleatórios',
    github: 'https://github.com/VictorEsPe/Advice-generator-API',
    demo: 'https://victorespe.github.io/Advice-generator-API/',
  },
  {
    id: 5,
    image: audiobook,
    title: 'Audiobook player',
    github: 'https://github.com/VictorEsPe/Audiobook-player',
    demo: 'https://victorespe.github.io/Audiobook-player/',
  },
  {
    id: 6,
    image: pokedex,
    title: 'Pokédex',
    github: 'https://github.com/VictorEsPe/Pokedex',
    demo: 'https://my-react-pokedex-app.vercel.app/',
  },
]

export default portfolioData