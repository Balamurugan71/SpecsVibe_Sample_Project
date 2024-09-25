import React from 'react'
import "./HomeComp6.css"

const HomeComp6 = () => {

    return (
        <>
            <div className='HomeComp6_Container'>
                <div className='HomeComp6_Holder'>
                    <h5 className='head1_HomeComp3' data-aos="fade-up">Services</h5>
                    <h2 className='head2_HomeComp3' data-aos="fade-up">Specs vibe Services</h2>
                    <p className='para_HomeComp3' data-aos="fade-up">In today's fast-paced world, quality vision care demands innovative, efficient, and patient-centered solutions. At Specs Vibe, we specialize in crafting personalized eye care experiences that transform lives by improving vision. Leveraging advanced technologies and techniques, our comprehensive eye care services ensure exceptional patient care and unparalleled results.</p>
                    <div className='HomeComp6_CardContainer'>
                        <div className='HomeComp6_CardSection'>
                            <div className='HomeComp6_card' data-aos="fade-up">
                                <h3>Eye Exams</h3>
                                <p>These tests range from simple ones, like having you identify letters on an eye chart, to complex tests, such as using digital imaging devices to see and evaluate tiny blood vessels and other structures inside your eyes.</p>
                            </div>
                            <div className='HomeComp6_card' data-aos="fade-up" data-aos-delay="300">
                                <h3>Visual Acuity</h3>
                                <p>A general eye exam can assess visual acuity and refractive errors. Visual acuity tests measure how well you can see at a distance, while refraction tests determine the correct prescription for the testing glasses.</p>
                            </div>
                            <div className='HomeComp6_card' data-aos="fade-up" data-aos-delay="400">
                                <h3>Optical Dispense</h3>
                                <p>An optical dispenser has a range of responsibilities. These include fitting corrective lenses for patients, measuring the distance between a patient's pupils to ensure the best fit for glasses & frames.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp6