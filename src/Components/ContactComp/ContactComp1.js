import React from 'react'
import "./ContactComp1.css"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ContactComp1 = () => {
    return (
        <>
            <div className='ContactComp1_Container'>
                <div className='Overlay_Container'></div>
                <div className='ContactCompp1_Content'>
                    <h1>Contact Us</h1>
                    <p><NavLink className="Navlink home" to="/">Home <FontAwesomeIcon className='heroIcon' icon={faChevronRight} /></NavLink> <NavLink className="Navlink" to="/contact">Contact Us <FontAwesomeIcon className='heroIcon' icon={faChevronRight} /></NavLink></p>
                </div>
            </div>
        </>
    )
}

export default ContactComp1