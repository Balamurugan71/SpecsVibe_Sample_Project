import React from 'react'
import './TopNav.css'
import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'

const TopNav = () => {
    return (
        <>
            <section className='TopNav_Container'>
                <div className='TopNav_Holder'>
                    <div className='TopNav_Section'>
                        <div className='logo_img'>
                            <a href='/'> <img className='LogoImage' src={Logo} alt='Logo' /></a>
                        </div>
                        <div className='address_container'>
                            <div className='address_holder'>
                                <div className='address_box'>
                                    <FontAwesomeIcon className='headerIcon' icon={faMap} />
                                    <span><a className='headerText' href='/contact'>No: 1092, TNHB, Sithalapakkam, Chennai-126.</a></span>
                                </div>
                                <div className='address_box'>
                                    <FontAwesomeIcon className='headerIcon' icon={faPaperPlane} />
                                    <span><a className='headerText' href='mailto:specsvibe@gmail.com'>Email: specsvibe@gmail.com</a></span>
                                </div>
                                <div className='address_box'>
                                    <FontAwesomeIcon className='headerIcon' icon={faPhone} />
                                    <span><a className='headerText' href='tel:+919962321727'>Phone: +919962321727</a></span>
                                </div>
                            </div>
                        </div>
                        <div className='address_container_mid'>
                            <div className='address_holder'>
                                <div className='address_box'>
                                    <FontAwesomeIcon className='headerIcon' icon={faPaperPlane} />
                                    <span><a className='headerText' href='mailto:specsvibe@gmail.com'>Email: specsvibe@gmail.com</a></span>
                                </div>
                                <div className='address_box'>
                                    <FontAwesomeIcon className='headerIcon' icon={faPhone} />
                                    <span><a className='headerText' href='tel:+919962321727'>Phone: +919962321727</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopNav