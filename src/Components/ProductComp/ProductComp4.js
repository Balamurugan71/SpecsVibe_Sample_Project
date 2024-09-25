import React from 'react'
import "./ProductComp4.css"

const ProductComp4 = () => {
    return (
        <>
            <div className='ProductComp4_Container'>
                <div className='ProductComp4_Holder'>
                    <div className='my-3'>
                        <h5 className='head1_HomeComp3 s4p' data-aos="fade-up">Terms and conditions</h5>
                        <h2 className='head2_HomeComp3 s4p' data-aos="fade-up">Delivery Policy</h2>
                    </div>
                    <div className='Policy_List'>
                        <ul className='Pulicy_Ul' data-aos="fade-up">
                            <li className='Policy'>Glasses and sunglasses (without prescription lenses): 2 to 5 working days.</li>
                            <li className='Policy'>Glasses and sunglasses (with prescription lenses): 5 to 10 working days.</li>
                            <li className='Policy'>Contact Lenses: 1 to 2 working days.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductComp4