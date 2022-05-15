import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'J',
    'u',
    'n',
    'i',
    'o',
    'r',
    ' ',
    'S',
    'a',
    'n',
    'c',
    'h',
    'e',
    'z',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _10`}>H</span>
            <span className={`${letterClass} _11`}>i</span>
            <span className={`${letterClass} _12`}>,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'</span>
            <span className={`${letterClass} _15`}>m</span>
            <span className={`${letterClass} _16`}> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={31}
            />
            <span className="blink">_</span>
          </h1>
          <h2>Full Stack developer / JavaScript / React - React Native</h2>
          <Link to="/contact" className="flat-button">
            &lt;ContactMe/&gt;
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
