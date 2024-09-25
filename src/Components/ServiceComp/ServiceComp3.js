import React from 'react'
import "./ServiceComp3.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcaseMedical, faDiagnoses, faHandshake, faHeart, faSpa, faStar, faUserMd, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faSquarePiedPiper } from '@fortawesome/free-brands-svg-icons'

const ServiceComp3 = () => {
    return (
        <>
            <div className='ServiceComp3_Container'>
                <div className='ServiceComp3_Holder'>
                    <h5 className='head1_HomeComp3 ab3' data-aos="fade-up">How We Help You Stay Strong</h5>
                    <h2 className='head2_HomeComp3 ab3' data-aos="fade-up">We demonstrate care for the customer in the following ways:</h2>
                    <div className='ServiceComp3_CardSect'>
                        <div className='ServiceComp3_CardHolder'>
                            <div className='ServiceComp3_Card' data-aos="fade-up">
                                <span className='Card_Icon d-flex justify-content-center align-items-center'>
                                    <FontAwesomeIcon className='ServiceComp3_card_icon' icon={faDiagnoses} />
                                </span>
                                <div className='Card_Content'>
                                    <h5>Personalized attention</h5>
                                    <p>Personalized attention in eye care can help patients feel more comfortable and reassured, and can lead to better eye health outcomes.</p>
                                </div>
                            </div>
                            <div className='ServiceComp3_Card' data-aos="fade-up">
                                <span className='Card_Icon d-flex justify-content-center align-items-center'>
                                    <FontAwesomeIcon className='ServiceComp3_card_icon' icon={faBriefcaseMedical} />
                                </span>
                                <div className='Card_Content'>
                                    <h5>Convenience</h5>
                                    <p>Saving time and effort by not having to travel to a clinic is a significant advantage of modern eye care services.</p>
                                </div>
                            </div>
                            <div className='ServiceComp3_Card' data-aos="fade-up">
                                <span className='Card_Icon d-flex justify-content-center align-items-center'>
                                    <FontAwesomeIcon className='ServiceComp3_card_icon' icon={faStar} />
                                </span>
                                <div className='Card_Content'>
                                    <h5>Comfort</h5>
                                    <p>Patients may feel more at ease in their own environment because it provides a sense of comfort, familiarity, and control.</p>
                                </div>
                            </div>
                            <div className='ServiceComp3_Card' data-aos="fade-up">
                                <span className='Card_Icon d-flex justify-content-center align-items-center'>
                                    <FontAwesomeIcon className='ServiceComp3_card_icon' icon={faUsers} />
                                </span>
                                <div className='Card_Content'>
                                    <h5>Flexibility</h5>
                                    <p>Optometrists may accommodate special needs or requirements to ensure that patients with unique needs receive comprehensive and personalized eye care.</p>
                                </div>
                            </div>
                            <div className='ServiceComp3_Card' data-aos="fade-up">
                                <span className='Card_Icon d-flex justify-content-center align-items-center'>
                                    <FontAwesomeIcon className='ServiceComp3_card_icon' icon={faSpa} />
                                </span>
                                <div className='Card_Content'>
                                    <h5>Comprehensive care</h5>
                                    <p>Thorough eye exams and consultations in a relaxed setting are essential for providing high-quality eye care that meets the unique needs of each patient.</p>
                                </div>
                            </div>
                            <div className='ServiceComp3_Card' data-aos="fade-up">
                                <span className='Card_Icon d-flex justify-content-center align-items-center'>
                                    <FontAwesomeIcon className='ServiceComp3_card_icon' icon={faHeart} />
                                </span>
                                <div className='Card_Content'>
                                    <h5>Empathy</h5>
                                    <p>Showing understanding and compassion for patients' concerns is a crucial aspect of providing high-quality eye care.</p>
                                </div>
                            </div>
                            <div className='ServiceComp3_Card' data-aos="fade-up">
                                <span className='Card_Icon d-flex justify-content-center align-items-center'>
                                    <FontAwesomeIcon className='ServiceComp3_card_icon' icon={faSquarePiedPiper} />
                                </span>
                                <div className='Card_Content'>
                                    <h5>Professionalism</h5>
                                    <p>Maintaining confidentiality and discretion during the visit is a crucial aspect of providing high-quality eye care.</p>
                                </div>
                            </div>
                            <div className='ServiceComp3_Card' data-aos="fade-up">
                                <span className='Card_Icon d-flex justify-content-center align-items-center'>
                                    <FontAwesomeIcon className='ServiceComp3_card_icon' icon={faUserMd} />
                                </span>
                                <div className='Card_Content'>
                                    <h5>Follow-up</h5>
                                    <p>Scheduling follow-up appointments or check-ins as needed is a crucial aspect of providing high-quality eye care.</p>
                                </div>
                            </div>
                            <div className='ServiceComp3_Card' data-aos="fade-up">
                                <span className='Card_Icon d-flex justify-content-center align-items-center'>
                                    <FontAwesomeIcon className='ServiceComp3_card_icon' icon={faHandshake} />
                                </span>
                                <div className='Card_Content'>
                                    <h5>Respect</h5>
                                    <p>Treating patients' homes with respect and cleanliness is a crucial aspect of ensuring a safe and healthy environment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='horizontal_Line' />
        </>
    )
}

export default ServiceComp3