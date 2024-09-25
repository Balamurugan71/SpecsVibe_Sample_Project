import React from 'react'
import "./AboutComp1.css"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const AboutComp1 = () => {
    return (
        <>
            <div className='AboutComp1_Container'>
                <div className='Overlay_Container'></div>
                <div className='ContactCompp1_Content'>
                    <h1 data-aos="fade-up">About Us</h1>
                    <p data-aos="fade-up"><NavLink className="Navlink home" to="/">Home <FontAwesomeIcon className='heroIcon' icon={faChevronRight} /></NavLink> <NavLink className="Navlink" to="/about">About Us <FontAwesomeIcon className='heroIcon' icon={faChevronRight} /></NavLink></p>
                </div>
            </div>
        </>
    )
}

export default AboutComp1