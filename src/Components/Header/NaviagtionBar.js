import React from 'react'
import "./NavigationBar.css"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = () => {
    return (
        <>
            <div className='Nav_Container sticky-top'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon icon={faBars} /> MENU
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav pl-5 me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to='/' exact='true' className={({ isActive }) => (isActive ? 'nav-link navLink active' : 'nav-link navLink')}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'nav-link navLink active' : 'nav-link navLink')}>About us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/product' className={({ isActive }) => (isActive ? 'nav-link navLink active' : 'nav-link navLink')}>Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/service' className={({ isActive }) => (isActive ? 'nav-link navLink active' : 'nav-link navLink')}>Service</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/contact' className={({ isActive }) => (isActive ? 'nav-link navLink active' : 'nav-link navLink')}>Contact us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <p className='contactNavButton'><a className='navContactLink' href='/contact'>get a Quotes</a></p>
            </div>
        </>
    )
}

export default NavigationBar