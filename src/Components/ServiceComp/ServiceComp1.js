import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ServiceComp1 = () => {
    return (
        <>
            <div className='ContactComp1_Container'>
                <div className='Overlay_Container'></div>
                <div className='ContactCompp1_Content'>
                    <h1>Services</h1>
                    <p><NavLink className="Navlink home" to="/">Home <FontAwesomeIcon className='heroIcon' icon={faChevronRight} /></NavLink> <NavLink className="Navlink" to="/service">Services <FontAwesomeIcon className='heroIcon' icon={faChevronRight} /></NavLink></p>
                </div>
            </div>
        </>
    )
}

export default ServiceComp1