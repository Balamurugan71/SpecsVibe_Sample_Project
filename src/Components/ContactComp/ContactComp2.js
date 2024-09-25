import React from 'react'
import "./ContactComp2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'

const ContactComp2 = () => {
    return (
        <>
            <div className='ContactComp2_Container'>
                <div className='ContactComp2_Holder'>
                    <div className='ContactComp2_Section1'>
                        <h5 className='head1_HomeComp3'>Contact Us</h5>
                        <h2 className='head2_HomeComp3'>Feel Free To Contact Us</h2>
                        <div className='ContactComp2_Contact'>
                            <FontAwesomeIcon className='ContactComp2_ContactIcon' icon={faLocationDot} />
                            <div className='ContactComp2_ContactCont'>
                                <h5>Our Office</h5>
                                <p>No: 1092, TNHB, Sithalapakkam, Chennai-126.</p>
                            </div>
                        </div>
                        <div className='ContactComp2_Contact'>
                            <FontAwesomeIcon className='ContactComp2_ContactIcon' icon={faEnvelopeOpen} />
                            <div className='ContactComp2_ContactCont'>
                                <h5>Email Us</h5>
                                <p>specsvibe@gmail.com</p>
                            </div>
                        </div>
                        <div className='ContactComp2_Contact'>
                            <FontAwesomeIcon className='ContactComp2_ContactIcon' icon={faPhoneVolume} />
                            <div className='ContactComp2_ContactCont'>
                                <h5>Call Us</h5>
                                <p>+91 9962321727 / +91 9940311407</p>
                            </div>
                        </div>
                        <p className='mt-5 trails'>Home trials are available only in Chennai</p>
                    </div>
                    <div className='ContactComp2_Section2'>
                        <iframe className='Map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7778.405269700012!2d80.174557!3d12.894688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259002964d851%3A0xa6e18d0208c7b32a!2sTNHB%20Sithalapakkam!5e0!3m2!1sen!2sin!4v1727068134242!5m2!1sen!2sin" width="600" style={{ border: 'none' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactComp2