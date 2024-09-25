import React from 'react'
import "./ServiceComp4.css"
import { SERVICECARD } from '../../utils/ServiceCard'

const ServiceComp4 = () => {
    return (
        <>
            <div className='ServiceComp4_Container'>
                <div className='ServiceComp4_Holder'>
                    <h5 className='head1_HomeComp3 s4p' data-aos="fade-up">Terms and conditions</h5>
                    <h2 className='head2_HomeComp3 s4p' data-aos="fade-up">Payment & Return Policy</h2>
                    <div className='ServiceComp4_CardSect'>
                        <div className='ServiceComp4_CardHolder'>
                            {SERVICECARD.map((data, index) => (
                                <div key={index} className='ServiceComp4_Card' data-aos="fade-up">
                                    <h5>{data.title}</h5>
                                    <p>{data.para}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceComp4