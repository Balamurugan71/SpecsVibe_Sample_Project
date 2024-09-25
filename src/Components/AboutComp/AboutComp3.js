import React from 'react'
import "./AboutComp3.css"
import AImg1 from "../../assets/pediatric-optometrist.jpg"
import AImg2 from "../../assets/low-vision.jpg"
import AImg3 from "../../assets/Vision-therapy.jpg"
import AImg4 from "../../assets/Corneal-refractive-therapy.jpg"

const AboutComp3 = () => {
    return (
        <>
            <div className='AboutComp3_Container'>
                <div className='AboutComp3_Holder'>
                    <h5 className='head1_HomeComp3 ab3' data-aos="fade-up">How We Help You Stay Strong</h5>
                    <h2 className='head2_HomeComp3 ab3' data-aos="fade-up">Specs vibe works in various settings, including:</h2>
                    <div className='AboutComp3_Section'>
                        <div className='AboutComp3_Card'>
                            <div className='ImageSect'>
                                <img src={AImg1} alt='Pediatric' />
                                <div className='ImageNumber'>
                                    <span>1</span>
                                </div>
                            </div>
                            <div className='ContentSect'>
                                <h5>Pediatric optometry</h5>
                                <p>A pediatric optometrist is an eye doctor who's specializes in children’s eye health.</p>
                            </div>
                        </div>
                        <div className='AboutComp3_Card'>
                            <div className='ImageSect'>
                                <img src={AImg2} alt='Pediatric' />
                                <div className='ImageNumber'>
                                    <span>2</span>
                                </div>
                            </div>
                            <div className='ContentSect'>
                                <h5>Low vision rehabilitation</h5>
                                <p>Low vision rehabilitation aims to optimise the use of residual vision after severe vision loss.</p>
                            </div>
                        </div>
                        <div className='AboutComp3_Card'>
                            <div className='ImageSect'>
                                <img src={AImg3} alt='Pediatric' />
                                <div className='ImageNumber'>
                                    <span>3</span>
                                </div>
                            </div>
                            <div className='ContentSect'>
                                <h5>Sports & vision therapy</h5>
                                <p>A customized program that uses eye exercises & other treatments to improve visual skills.</p>
                            </div>
                        </div>
                        <div className='AboutComp3_Card'>
                            <div className='ImageSect'>
                                <img src={AImg4} alt='Pediatric' />
                                <div className='ImageNumber'>
                                    <span>4</span>
                                </div>
                            </div>
                            <div className='ContentSect'>
                                <h5>Corneal refractive therapy</h5>
                                <p>A laser procedure that changes the shape of the cornea & light reflects onto the retina.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComp3