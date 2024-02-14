import Name from '../../assets/images/Name.png'
import {Link, NavLink} from 'react-router-dom'
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import Resume from '../../assets/images/Resume.pdf'
import ScrollComponent from '../ScrollComponent'


const Home = () => {

    const[letterClass, setletterClass] = useState('text-animate')
    const nameArray = ['a', 'r', 's', 'h', ',']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e',' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    const helloArray = ['p', 'r', 'i', 'n', 't', '(', '\"', 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o','r', 'l', 'd', '\"', ')']
    const iamArray = ['I', '\'', 'm', ' ']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters
                letterClass = {letterClass}
                strArray = {helloArray}
                idx = {1}
                />
                <br />
                <AnimatedLetters
                letterClass = {letterClass}
                strArray = {iamArray}
                idx = {21}
                />

                <img src={Name} alt = "developer" />
                <AnimatedLetters
                letterClass = {letterClass}
                strArray = {nameArray}
                idx = {24}
                />
                <br/>
                <AnimatedLetters
                letterClass = {letterClass}
                strArray = {jobArray}
                idx = {29}
                />
                </h1>
                <h2> Computer Science 25' at University of Southern California</h2>
                <a href = {Resume} className = 'flat-button' target='_blank' >Check out my resume!</a>
                <ScrollComponent />

            </div>
        </div>
    )
}

export default Home