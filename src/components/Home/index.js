import Name from '../../assets/images/Name.png'
import {Link, NavLink} from 'react-router-dom'
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import Resume from '../../assets/images/Resume.pdf'
import ScrollComponent from '../ScrollComponent'


const Home = () => {

    const[letterClass, setletterClass] = useState('text-animate')
    const nameArray = ['a', 'r', 's', 'h', ' ', 'K', 'h', 'u', 'b', 'c', 'h', 'a', 'n', 'd', 'a', 'n', 'i']
    const jobArray = ['K', 'h', 'u', 'b', 'c', 'h', 'a', 'n', 'd', 'a', 'n', 'i',]
    const helloArray = ['H', 'e', 'l', 'l', 'o',',']
    const iamArray = ['I', '\'', 'm', ' ']

    return (
        <div className="container home-page">

            <div className="text-zone">
                <h1>
                <br />

                <img src={Name} alt = "developer" />
                <AnimatedLetters
                letterClass = {letterClass}
                strArray = {nameArray}
                idx = {24}
                />
                </h1>
                <h2>Hello, I am a Computer Science and Business administration student at the University of Southern California.</h2>
                <a href = {Resume} className = 'flat-button' target='_blank' >RESUME</a>
                <Link to = "/Contact" className="btn">CONTACT</Link>
            </div>
        </div>
    )
}

export default Home