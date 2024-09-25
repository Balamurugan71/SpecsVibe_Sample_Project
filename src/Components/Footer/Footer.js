import React from 'react'
import "./Footer.css"
import Logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
            <section className='Footer_bg'>
                <div className='Footer_Container1'>
                    <div className='Footer_Holder1'>
                        <div className='Footer_Section1'>
                            <img className='Footer_Logo' src={Logo} alt='Footer_Logo' />
                            <p className='Footer_Info'>Specsvibe offering a one-stop-shop for patients' eye care and optical needs at your home.</p>
                        </div>
                        <div className='Footer_Section2'>
                            <div className='Footer_SubSection1'>
                                <h3 className='Footer_Heading'>Quick Links</h3>
                                <ul className='Quick_Links'>
                                    <li className="nav-item">
                                        <NavLink to='/' exact='true' className={({ isActive }) => (isActive ? 'nav-link navLink1 active' : 'nav-link navLink1')}>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/about' className={({ isActive }) => (isActive ? 'nav-link navLink1 active' : 'nav-link navLink1')}>About us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/product' className={({ isActive }) => (isActive ? 'nav-link navLink1 active' : 'nav-link navLink1')}>Products</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/service' className={({ isActive }) => (isActive ? 'nav-link navLink1 active' : 'nav-link navLink1')}>Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'nav-link navLink1 active' : 'nav-link navLink1')}>Contact us</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className='Footer_SubSection2'>
                                <h3 className='Footer_Heading'>Get In Touch</h3>
                                <ul className='GetInTouch'>
                                    <li className='GatInTouchList'>
                                        <FontAwesomeIcon className='FIcon' icon={faLocationDot} /><span>No:1092,TNHB,Sithalapakkam,Chennai-126.</span>
                                    </li>
                                    <li className='GatInTouchList'>
                                        <FontAwesomeIcon className='FIcon' icon={faEnvelope} /><span><a className='fLink' href='mailto:specsvibe@gmail.com'>specsvibe@gmail.com</a></span>
                                    </li>
                                    <li className='GatInTouchList'>
                                        <FontAwesomeIcon className='FIcon' icon={faPhone} /><span>+919962321727 / +919940311407</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Footer_Container2'>
                    <p className='FooterCopy1'>© <a href='/' className='specsVibeFooter'>Specsvibe</a>. All Rights Reserved.</p>
                    <p className='FooterCopy2'>Created by <a className='hubsem' href='https://hubsem.com/'><b>Hubsem</b></a></p>
                </div>
            </section>
        </>
    )
}

export default Footer