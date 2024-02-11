import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import Name from '../../assets/images/Name.png'
import Harsh from '../../assets/images/Harsh.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

//adding logo and name below that
const Sidebar = () => (
  <div className = "nav-bar">
    <Link className = "logo" to='/'> 
        <img src={Name} alt="logo" />
        <img className = "sub-logo"src={Harsh} alt="harshkhub" />
    </Link>
    <nav>
      <NavLink exact = "true" activeclassname = "active" to="/">
        <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" />
      </NavLink>
      <NavLink exact = "true" activeclassname = "active" className = "about-link" to="/about">
        <FontAwesomeIcon icon = {faUser} color = "#4d4d4e" />
      </NavLink>
      <NavLink exact = "true" activeclassname = "active" className = "work-page" to="/content">
        <FontAwesomeIcon icon = {faSuitcase} color = "#4d4d4e" />
      </NavLink>
      <NavLink exact = "true" activeclassname = "active" className = "content-page" to="/content">
        <FontAwesomeIcon icon = {faComputer} color = "#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
        target="_blank"
        rel = "nonreferrer"
        href='https://www.linkedin.com/in/harsh-khubchandani-19207b238/'
        >
          <FontAwesomeIcon icon = {faLinkedinIn} color = "#4d4d4e" />
        </a>
      </li>
      <li>
        <a
        target="_blank"
        rel = "nonreferrer"
        href='https://github.com/harshkhub'
        >
          <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar