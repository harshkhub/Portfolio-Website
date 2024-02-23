import {Link, NavLink} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import './index.css'
import Name from '../../assets/images/Name.png'
import Harsh from '../../assets/images/Harsh.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

//adding logo and name below that
const Navbar = () => {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  return(
  <div className = "nav-bar">
    <Link className = "logo" to='/'> 
        <img src={Name} alt="logo" />
    </Link>
      <ul className={click ? "nav active" : "nav"}>
        <li>
      <Link exact = "true" activeclassname = "active" to="/"><h1>About</h1>
      </Link>
      </li>
      <li>
      <Link exact = "true" activeclassname = "active" className = "about-link" to="/Experience"><h1>Experience</h1>
      </Link>
      </li>
      <li>
      <Link exact = "true" activeclassname = "active" className = "work-page" to="/projects"><h1>Projects</h1>
      </Link>
      </li>
      <li>
      <Link exact = "true" activeclassname = "active" className = "content-page" to="/skills"><h1>Skills</h1>
      </Link>
      </li>
      <li>
      <Link exact = "true" activeclassname = "active" className = "content-page" to="/content"><h1>Contact</h1>
      </Link>
      </li>
      </ul>
    <ul className='socialLinks'>
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
        rel = "nonreferrers"
        href='https://github.com/harshkhub'
        >
          <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e" />
        </a>
      </li>
    </ul>
    <div className="hamburger" onClick={handleClick}>

      {click ? (<FontAwesomeIcon icon = {faTimes} color='white'/>) : (<FontAwesomeIcon icon = {faBars} color = "white"/>)}
      
    </div>
  </div>
  );
  };

export default Navbar