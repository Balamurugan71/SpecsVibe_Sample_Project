import React from 'react'
import "./ServiceComp2.css"
import ServiceImage from "../../assets/service about.jpg"

const ServiceComp2 = () => {
    return (
        <>
            <div className='ServiceComp2_Container'>
                <div className='ServiceComp2_Holder'>
                    <div className='ServiceComp2_Section'>
                        <div className='ServiceComp2_Section1 col-md-7'>
                            <h5 className='head1_HomeComp3' data-aos="fade-up">What We Do</h5>
                            <h2 className='head2_HomeComp3' data-aos="fade-up">We are ready at your door step</h2>
                            <p className='About_Para' data-aos="fade-up">"Look good, see great, with Specs Vibe."<br />Experience the future of eye care today. At Specs Vibe, we combine innovative solutions, advanced technologies, and personalized attention to transform your vision and enrich your life. Our comprehensive eye care services prioritize your unique needs, ensuring a clearer, brighter tomorrow.</p>
                            <h6 className='Service_text' data-aos="fade-up">Home visits may require specialized equipment, such as:</h6>
                            <ul className='About_Ul' data-aos="fade-up">
                                <li className='About_List'>Portable autorefractors machine</li>
                                <li className='About_List'>Handheld retinoscopes</li>
                                <li className='About_List'>Visual acuity charts</li>
                            </ul>
                            <p className='About_Para' data-aos="fade-up">Home visits can be beneficial for patients who face barriers in accessing traditional clinical settings, enhancing eye care accessibility and convenience.</p>

                        </div>
                        <div className='ServiceComp2_Section2 col-md-5'>
                            <div className='ServiceComp2_Image'>
                                <img src={ServiceImage} alt='Service About' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceComp2