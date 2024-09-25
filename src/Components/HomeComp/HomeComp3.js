import React from 'react'
import "./HomeComp3.css"
import HomeImage3 from "../../assets/about2.jpg"

const HomeComp3 = () => {
    return (
        <>
            <div className='HomeComp3_Container'>
                <div className='HomeComp3_Holder'>
                    <div className='side_text'>
                        <h3 className='vertical'>ABOUT SEPCS VIBE</h3>
                    </div>
                    <div className='HomeComp3_Sections'>
                        <div className='HomeComp3_Section1'>
                            <h5 className='head1_HomeComp3' data-aos="fade-up">Who We Are</h5>
                            <h2 className='head2_HomeComp3' data-aos="fade-up">Meet Specs Vibe for Personalized Eye Tests</h2>
                            <p className='para_HomeComp3' data-aos="fade-up">"See Clearly, Live Fully"<br />
                                At Specs Vibe, we're committed to being your trusted eye care partner for life. We invest in our expert optometrists, latest technology, expert training, and personalized care to ensure you receive the best possible vision solutions. Take the first step towards clearer vision and a brighter future. Discover how Specs Vibe can transform your vision with cutting-edge eye care solutions. Contact us today to schedule your eye exam and discover how we can help you see your best!</p>
                            <p className='para_HomeComp3' data-aos="fade-up">Get the latest frames and trends delivered to your door with our Frame Trial Service. Try, compare, and find your perfect match in the comfort of your own home!</p>
                            <button className='HeroButton' data-aos="fade-up"><a className='HeroButtonLink text-white' href="/about">Learn More About Us</a></button>
                        </div>
                        <div className='HomeComp3_Section2'>
                            <img className='HomeImage3' src={HomeImage3} alt='About-Section-Image' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp3