import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiscord,
  faGithub,
  faLinkedin,
  // faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faHome,
  faTools,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      {/* <NavLink
        exact="true"
        activeclassname="active"
        className="skills-link"
        to="/skills"
      > 
        <FontAwesomeIcon icon={faTools} color="#4d4d4e" />
      </NavLink> */}
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jrsg9/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/JuniorSG">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      {/* <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCmegmYr4FN6gsrssO5dxMNA"
        >
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li> */}
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://discord.gg/cDBDcCCyDJ"
        >
          <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
