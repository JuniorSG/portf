import './index.scss'

import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faCss3,
  faDocker,
  faGitAlt,
  faGitlab,
  faHtml5,
  faJava,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
  faReacteurope,
  faReddit,
  faSass,
  faSteamSymbol,
} from '@fortawesome/free-brands-svg-icons'
import { faGasPump } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'S',
                'k',
                'i',
                'l',
                'l',
                's',
                ' ',
                '&',
                ' ',
                'P',
                'r',
                'o',
                'y',
                'e',
                'c',
                't',
                's',
              ]}
              idx={15}
            />
          </h1>
          <div className="skill-container">
            <div className="skill-bar">
              <FontAwesomeIcon
                className="skill-icon"
                icon={faHtml5}
                color="#F06529"
              />
              <FontAwesomeIcon
                className="skill-icon"
                icon={faCss3}
                color="#28A4D9"
              />
              <FontAwesomeIcon
                className="skill-icon"
                icon={faJsSquare}
                color="#EFD81D"
              />
              <div className="htmlbar"></div>
            </div>
            <div className="skill-bar">
              <FontAwesomeIcon
                className="skill-icon"
                icon={faReact}
                color="#5ccfee"
              />
              <FontAwesomeIcon
                className="skill-icon"
                icon={faNodeJs}
                color="#63975e"
              />
              <FontAwesomeIcon
                className="skill-icon"
                icon={faGitAlt}
                color="#EC4D28"
              />
              <div className="reactbar"></div>
            </div>
            <div className="skill-bar">
              <FontAwesomeIcon
                className="skill-icon"
                icon={faBootstrap}
                color="#5ccfee"
              />
              <FontAwesomeIcon
                className="skill-icon"
                icon={faSass}
                color="#EC4D28"
              />
              <div className="cssbar"></div>
            </div>
            <div className="skill-bar">
              <FontAwesomeIcon
                className="skill-icon"
                icon={faPython}
                color="#EFD81D"
              />
              <FontAwesomeIcon
                className="skill-icon"
                icon={faJava}
                color="#EFD81D"
              />
              <div className="pythonbar"></div>
            </div>
            <div className="skill-bar">
              <div className="idm">
                <img
                  className="flag"
                  src={require('../../assets/images/eng.jpg')}
                  alt="img1"
                />
              </div>
              <div className="enbar"></div>
            </div>
            <div className="skill-bar">
              <div className="idm">
                <img
                  className="flag"
                  src={require('../../assets/images/fr.jpg')}
                  alt="img1"
                />
              </div>
              <div className="frbar"></div>
            </div>
          </div>
        </div>
        <div className="proyects">
          <img src={require('../../assets/images/PreImg1.png')} alt="img1" />
          <img src={require('../../assets/images/PreImg2.png')} alt="img2" />
          <img src={require('../../assets/images/PreImg7.png')} alt="img7" />
          <img src={require('../../assets/images/PreImg8.png')} alt="img8" />

          <a href="https://linkedin-clone-yt-cd9ca.web.app/" target="_blank">
            <img
              src={require('../../assets/images/LinkedInClone.png')}
              alt="img3"
            />
          </a>
          <a href="https://moviesrct.vercel.app/" target="_blank">
            <img src={require('../../assets/images/movie.png')} alt="movie" />
          </a>

          <a href="https://mvmod.vercel.app/" target="_blank">
            <img
              src={require('../../assets/images/moviemod.png')}
              alt="moviemod"
            />
          </a>

          <a href="https://rx78sensormb.vercel.app/" target="_blank">
            <img src={require('../../assets/images/mst.png')} alt="mst" />
          </a>

          <h1 className="demos">Demos</h1>
          <h1 className="landingpages">Landingpages</h1>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
