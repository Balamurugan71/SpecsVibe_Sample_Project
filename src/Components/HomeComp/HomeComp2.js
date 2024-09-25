import { faBook, faEye, faFileLines, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./HomeComp2.css"

const HomeComp2 = () => {
    return (
        <>
            <div className='HomeComp2_Container'>
                <div className='HomeComp2_Holder'>
                    <div className='HompComp2_Cards' data-aos="fade-up">
                        <span className='icon_Crd d-flex justify-content-center align-items-center'>
                            <FontAwesomeIcon className='HomeComp2_card_icon' icon={faEye} />
                        </span>
                        <div className='Card-content'>
                            <h3 className='HomeComp2_card_text'>Qualified Optometrist</h3>
                            <p className='HomeComp2_card_para'>As dedicated optometrists, we provide comprehensive eye care services to ensure your vision is clear and healthy.</p>
                        </div>
                    </div>
                    <div className='HompComp2_Cards' data-aos="fade-up" data-aos-delay="300">
                        <span className='icon_Crd d-flex justify-content-center align-items-center'>
                            <FontAwesomeIcon className='HomeComp2_card_icon' icon={faFileLines} />
                        </span>
                        <div className='Card-content'>
                            <h3 className='HomeComp2_card_text'>Personalized Care</h3>
                            <p className='HomeComp2_card_para'>Our experienced optometrists take a personalized approach to your eye care, listening to your concerns and addressing your unique needs to ensure optimal vision and eye health.</p>
                        </div>
                    </div>
                    <div className='HompComp2_Cards' data-aos="fade-up" data-aos-delay="400">
                        <span className='icon_Crd d-flex justify-content-center align-items-center'>
                            <FontAwesomeIcon className='HomeComp2_card_icon' icon={faBook} />
                        </span>
                        <div className='Card-content'>
                            <h3 className='HomeComp2_card_text'>Educating Patients</h3>
                            <p className='HomeComp2_card_para'>Taking the time to explain conditions, treatments, and options is a crucial aspect of education in various settings, including healthcare and effective education empowers individuals.</p>
                        </div>
                    </div>
                    <div className='HompComp2_Cards' data-aos="fade-up" data-aos-delay="500">
                        <span className='icon_Crd d-flex justify-content-center align-items-center'>
                            <FontAwesomeIcon className='HomeComp2_card_icon' icon={faHouseChimney} />
                        </span>
                        <div className='Card-content'>
                            <h3 className='HomeComp2_card_text'>Home Services</h3>
                            <p className='HomeComp2_card_para'>Get a comprehensive eye checkup in the comfort of your own home. Our frame trial service brings the latest styles and trends right to your home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp2