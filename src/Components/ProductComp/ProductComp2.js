import React from 'react'
import "./ProductComp2.css"
import frames from "../../assets/glasses-for-sun-protection.png"
import { FRAMETYPES } from '../../utils/Homecard'

const ProductComp2 = () => {
    return (
        <>
            <div className='ProductComp2_Container'>
                <div className='ProductComp2_Holder'>
                    <h5 className='head1_HomeComp3' data-aos="fade-up">What we have</h5>
                    <h2 className='head2_HomeComp3' data-aos="fade-up">Here are some catchy options for specs frames:</h2>
                    <p className='para_HomeComp3' data-aos="fade-up">A specs frame, or eyeglass frame, is the part of glasses that holds the lenses in front of the eyes. It's the basic structure of the glasses, and is often made from metal or acetate. The frame is made up of several components, including the bridge, hinges, temples, nose pads, and eyewire.</p>
                    <div className='ProductComp2_Section'>
                        {FRAMETYPES.map((data, index) => (
                            <div key={index} className='HomeComp5_Box pe-4'>
                                <div className='HomeComp5_Box_holder'>
                                    <div className='Box_Image_Section'>
                                        <img className='Box_Image' src={frames} alt='frames' />
                                    </div>
                                    <div className='Box_Content'>
                                        <h3>{data.title}</h3>
                                        <p>{data.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductComp2