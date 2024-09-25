import React from 'react'
import "./HomeComp7.css"
import Product1 from "../../assets/product1.jpg"
import Product2 from "../../assets/B&L lens.jpg"
import Product3 from "../../assets/solution_100ml.jpg"
import Product4 from "../../assets/product8.jpg"

const HomeComp7 = () => {
    return (
        <>
            <div className='HomeComp5_Container'>
                <div className='HomeComp6_Holder'>
                    <h5 className='head1_HomeComp3' data-aos="fade-up">Products</h5>
                    <h2 className='head2_HomeComp3' data-aos="fade-up">Our Brand Products</h2>
                    <p className='para_HomeComp3' data-aos="fade-up">At Specs Vibe, we're dedicated to delivering exceptional eye care. Our advanced lens materials ensure superior optical quality, while personalized prescriptions tailored to your unique needs guarantee optimal vision correction. With a wide range of stylish frames to suit your taste, you'll find the perfect match for your personality. Our expert optometrists are dedicated to your eye health, using comprehensive eye exams and cutting-edge technology to detect even the smallest details.</p>
                    <div className='HomeComp7_CardContainer'>
                        <div className='HomeComp7_cardholder'>
                            <div className='HomeComp7_Card' data-aos="fade-up">
                                <div className='HomeComp7_CardImage'>
                                    <img className='Cardimage7' src={Product1} alt='Product1' />
                                </div>
                                <div className='HomeComp7_CardContent'>
                                    <h3>ROCKETS-107</h3>
                                    <span>PREMIUM BLUE BLOCK</span>
                                </div>
                            </div>
                            <div className='HomeComp7_Card' data-aos="fade-up" data-aos-delay="300">
                                <div className='HomeComp7_CardImage'>
                                    <img className='Cardimage7' src={Product2} alt='Product1' />
                                </div>
                                <div className='HomeComp7_CardContent'>
                                    <h3>B&L SOFLENS</h3>
                                    <span>6 SOFT CONTACT LENS</span>
                                </div>
                            </div>
                            <div className='HomeComp7_Card' data-aos="fade-up" data-aos-delay="400">
                                <div className='HomeComp7_CardImage'>
                                    <img className='Cardimage7' src={Product3} alt='Product1' />
                                </div>
                                <div className='HomeComp7_CardContent'>
                                    <h3>OPTIFY SOLUTIONS</h3>
                                    <span>NET QTY 100ml</span>
                                </div>
                            </div>
                            <div className='HomeComp7_Card' data-aos="fade-up" data-aos-delay="500">
                                <div className='HomeComp7_CardImage'>
                                    <img className='Cardimage7' src={Product4} alt='Product1' />
                                </div>
                                <div className='HomeComp7_CardContent'>
                                    <h3>PARA</h3>
                                    <span>STYLE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp7