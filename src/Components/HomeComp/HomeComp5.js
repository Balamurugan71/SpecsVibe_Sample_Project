import React from 'react'
import "./HomeComp5.css"
import whyUs from "../../assets/file-and-folder.png"

const HomeComp5 = () => {
    return (
        <>
            <div className='HomeComp5_Container'>
                <div className='HomeComp5_Holder'>
                    <h5 className='head1_HomeComp3' data-aos="fade-up">Why Choose Us</h5>
                    <h2 className='head2_HomeComp3' data-aos="fade-up">Few Reasons Why You Should Choose Us.</h2>
                    <p className='para_HomeComp3' data-aos="fade-up">We believe that providing exceptional customer service is our main strength. We take pride in providing outstanding services to our customers. We know that our customers are important for us and hence we do not leave any stone unturned in helping, guiding and providing the best possible solutions. A home visit with an optometrist typically involves the optometrist traveling to a patient's home to provide eye care services.
                        This may be ideal for:</p>
                    <div className='HompComp5_Section'>
                        <div className='HomeComp5_Box'>
                            <div className='HomeComp5_Box_holder'>
                                <div className='Box_Image_Section'>
                                    <img className='Box_Image' src={whyUs} alt='Why-Us' />
                                </div>
                                <div className='Box_Content'>
                                    <h3>Homebound patients</h3>
                                    <p>A homebound patient refers to an individual who is unable to leave their place of residence without assistance due to physical disabilities</p>
                                </div>
                            </div>
                        </div>
                        <div className='HomeComp5_Box'>
                            <div className='HomeComp5_Box_holder'>
                                <div className='Box_Image_Section'>
                                    <img className='Box_Image' src={whyUs} alt='Why-Us' />
                                </div>
                                <div className='Box_Content'>
                                    <h3>Those with mobility issues</h3>
                                    <p>Mobility problems may be unsteadiness while walking, difficulty getting in and out of a chair, or falls.</p>
                                </div>
                            </div>
                        </div>
                        <div className='HomeComp5_Box'>
                            <div className='HomeComp5_Box_holder'>
                                <div className='Box_Image_Section'>
                                    <img className='Box_Image' src={whyUs} alt='Why-Us' />
                                </div>
                                <div className='Box_Content'>
                                    <h3>Elderly patients</h3>
                                    <p>There are common conditions in older people such as muscle weakness, joint problems, pain, disease, and neurological (brain and nervous system) difficulties.</p>
                                </div>
                            </div>
                        </div>
                        <div className='HomeComp5_Box'>
                            <div className='HomeComp5_Box_holder'>
                                <div className='Box_Image_Section'>
                                    <img className='Box_Image' src={whyUs} alt='Why-Us' />
                                </div>
                                <div className='Box_Content'>
                                    <h3>Patients with chronic illnesses</h3>
                                    <p>A chronic or long-term illness means having to adjust to the demands of the illness and the therapy used to treat the condition.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp5