import React from 'react'
import "./ProductComp3.css"
import { PRODUCTCARD1, PRODUCTCARD2, PRODUCTCARD3 } from '../../utils/Homecard'

const ProductComp3 = () => {
    return (
        <>
            <div className='ProductComp3_Container'>
                <div className='ProductComp3_Holder'>
                    <h5 className='head1_HomeComp3 s4p' data-aos="fade-up">Products</h5>
                    <h2 className='head2_HomeComp3 s4p' data-aos="fade-up">Our Brand Products</h2>
                    <p className='para_HomeComp3 s4p' data-aos="fade-up">At Specs Vibe, we're dedicated to delivering exceptional eye care. Our advanced lens materials ensure superior optical quality, while personalized prescriptions tailored to your unique needs guarantee optimal vision correction. With a wide range of stylish frames to suit your taste, you'll find the perfect match for your personality. Our expert optometrists are dedicated to your eye health, using comprehensive eye exams and cutting-edge technology to detect even the smallest details.</p>
                    <div className='ServiceComp3_CardSect'>
                        <div className='ProductComp3_CardHolder'>
                            {PRODUCTCARD1.map((data, index) => (
                                <div key={index} className='ProductComp3_Card' data-aos="fade-up">
                                    <div className='ProductComp3_CardImage'>
                                        <img className='ProductCradImage' src={data.image} alt={data.title} />
                                    </div>
                                    <div className='ProductComp3_CardContent'>
                                        <h3>{data.title}</h3>
                                        <span>{data.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='ProductComp3_CardHolder'>
                            {PRODUCTCARD2.map((data, index) => (
                                <div key={index} className='ProductComp3_Card' data-aos="fade-up">
                                    <div className='ProductComp3_CardImage'>
                                        <img className='ProductCradImage' src={data.image} alt={data.title} />
                                    </div>
                                    <div className='ProductComp3_CardContent'>
                                        <h3>{data.title}</h3>
                                        <span>{data.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='ProductComp3_CardHolder'>
                            {PRODUCTCARD3.map((data, index) => (
                                <div key={index} className='ProductComp3_Card' data-aos="fade-up">
                                    <div className='ProductComp3_CardImage'>
                                        <img className='ProductCradImage' src={data.image} alt={data.title} />
                                    </div>
                                    <div className='ProductComp3_CardContent'>
                                        <h3>{data.title}</h3>
                                        <span>{data.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <hr className='horizontal_Line' />
        </>
    )
}

export default ProductComp3