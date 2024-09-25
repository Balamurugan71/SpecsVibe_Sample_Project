import React from 'react'
import "./ProductComp1a.css"
import eyeLens from "../../assets/contact-lens.png"

const ProductComp1a = () => {
    return (
        <>
            <div className='ProductComp1a_Container'>
                <div className='ProductComp1a_Holder'>
                    <h5 className='head1_HomeComp3 s4p' data-aos="fade-up">Optical Lenses</h5>
                    <h2 className='head2_HomeComp3 s4p' data-aos="fade-up">Help You See Better</h2>
                    <p className='para_HomeComp3 s4p' data-aos="fade-up">Optical lenses are transparent devices that refract light to correct vision problems, magnify objects, or redirect light. They come in various types each designed to address specific vision needs and improve visual clarity.</p>
                    <div className='ProductComp1a_Section'>
                        <div className='Optical_Section'>
                            <div className='Optical_Container'>
                                <div className='Optical_Box'>
                                    <div className='Optical_Eye'>
                                        <div className='Contact_Lens'>
                                            <img src={eyeLens} alt='Contact_Lens' />
                                        </div>
                                        <div className='Optical_bg'></div>
                                    </div>
                                    <div className='Optical_Content'>
                                        <h5>Single Vision</h5>
                                        <p>Correcting vision with one focal point, no peripheral distortion.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Optical_Container'>
                                <div className='Optical_Box'>
                                    <div className='Optical_Eye'>
                                        <div className='Contact_Lens'>
                                            <img src={eyeLens} alt='Contact_Lens' />
                                        </div>
                                        <div className='Optical_bg'></div>
                                    </div>
                                    <div className='Optical_Content'>
                                        <h5>Bifocal</h5>
                                        <p>Correcting near and far vision with two distinct focal points.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Optical_Container'>
                                <div className='Optical_Box'>
                                    <div className='Optical_Eye'>
                                        <div className='Contact_Lens'>
                                            <img src={eyeLens} alt='Contact_Lens' />
                                        </div>
                                        <div className='Optical_bg'></div>
                                    </div>
                                    <div className='Optical_Content'>
                                        <h5>Progressive</h5>
                                        <p>Seamlessly correcting near, intermediate, and far vision with gradual transition.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='HRLine'></div>
                        <div className='Optical_Section'>
                            <div className='Optical_Container'>
                                <div className='Optical_Box'>
                                    <div className='Optical_Eye'>
                                        <div className='Contact_Lens'>
                                            <img src={eyeLens} alt='Contact_Lens' />
                                        </div>
                                        <div className='Optical_bg'></div>
                                    </div>
                                    <div className='Optical_Content'>
                                        <h5>Contact Lens</h5>
                                        <p>Thin, flexible disc placed on eye to correct vision problems.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Optical_Container'>
                                <div className='Optical_Box'>
                                    <div className='Optical_Eye'>
                                        <div className='Contact_Lens'>
                                            <img src={eyeLens} alt='Contact_Lens' />
                                        </div>
                                        <div className='Optical_bg'></div>
                                    </div>
                                    <div className='Optical_Content'>
                                        <h5>Hi Index</h5>
                                        <p>Thinner, lighter, and more comfortable lenses for strong prescriptions only.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Optical_Container'>
                                <div className='Optical_Box'>
                                    <div className='Optical_Eye'>
                                        <div className='Contact_Lens'>
                                            <img src={eyeLens} alt='Contact_Lens' />
                                        </div>
                                        <div className='Optical_bg'></div>
                                    </div>
                                    <div className='Optical_Content'>
                                        <h5>Tinted</h5>
                                        <p>Colored lenses that reduce glare, enhance contrast, and protect eyes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductComp1a