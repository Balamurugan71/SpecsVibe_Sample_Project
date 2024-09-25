import React, { useState } from 'react'
import "./AboutComp2.css"
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const AboutComp2 = () => {

    const [isCount, setIsCount] = useState(false)

    return (
        <>
            <div className='AboutComp2_Container'>
                <div className='AboutComp2_Holder'>
                    <div className='AboutComp2_Section'>
                        <div className='AboutComp2_Section1'>
                            <h5 className='About_Head1' data-aos="fade-up">Anbazhagan.R</h5>
                            <h5 className='About_Head2' data-aos="fade-up">Bachelor of Optometry (B.Optom.)</h5>
                            <p className='About_Para' data-aos="fade-up">An optometrist is a healthcare professional who specializes in the diagnosis and treatment of disorders related to the eye and visual system. They are trained to:</p>
                            <ul className='About_Ul' data-aos="fade-up">
                                <li className='About_List'>Conduct eye exams and vision tests.</li>
                                <li className='About_List'>Prescribe glasses, contact lenses, and medications.</li>
                                <li className='About_List'>Diagnose and manage eye diseases (e.g., glaucoma, cataracts).</li>
                                <li className='About_List'>Provide pre and post-operative care for eye surgeries.</li>
                                <li className='About_List'>Offer advice on eye health and vision correction.</li>
                            </ul>
                            <p className='About_Para' data-aos="fade-up">Optometrists may work in collaboration with other healthcare professionals, such as primary care physicians or social workers, to ensure comprehensive care during home visits. Home visits can be beneficial for patients who face barriers in accessing traditional clinical settings, enhancing eye care accessibility and convenience.</p>
                        </div>
                        <ScrollTrigger onEnter={() => setIsCount(true)} onExit={() => setIsCount(true)}>
                            <div className='AboutComp2_Section2'>
                                <div className='Counter_Box' data-aos="fade-up">
                                    <div className='Counter_Content'>
                                        <span className='Number'>{isCount && <CountUp start={0} end={9} duration={2} delay={2} />}+</span>
                                        <span className='text'>Years Of Experienced</span>
                                    </div>
                                </div>
                                <div className='Counter_Box' data-aos="fade-up">
                                    <div className='Counter_Content'>
                                        <span className='Number'>{isCount && <CountUp start={0} end={100} duration={2} delay={2} />}+</span>
                                        <span className='text'>Happy Customers</span>
                                    </div>
                                </div>
                                <div className='Counter_Box' data-aos="fade-up">
                                    <div className='Counter_Content'>
                                        <span className='Number'>{isCount && <CountUp start={0} end={8} duration={2} delay={2} />}+</span>
                                        <span className='text'>Number Of Brands</span>
                                    </div>
                                </div>
                                <div className='Counter_Box' data-aos="fade-up">
                                    <div className='Counter_Content'>
                                        <span className='Number'>{isCount && <CountUp start={0} end={12} duration={2} delay={2} />}+</span>
                                        <span className='text'>Type Of frames</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollTrigger>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComp2