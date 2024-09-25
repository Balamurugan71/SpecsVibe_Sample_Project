import React from 'react'
import "./HomeComp9.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import Brand1 from "../../assets/brand1.png"
import Brand2 from "../../assets/brand2.png"
import Brand3 from "../../assets/brand3.png"
import Brand4 from "../../assets/brand4.png"
import Brand5 from "../../assets/brand5.png"
import Brand6 from "../../assets/brand6.png"
import Brand7 from "../../assets/brand7.png"
import Brand8 from "../../assets/brand8.png"
import Brand9 from "../../assets/brand9.png"

const HomeComp9 = () => {
    return (
        <>
            <div className='HomeComp9_Container'>
                <div className='HomeComp9_Holder'>
                    <h5 className='head1_HomeComp3' data-aos="fade-up">Products</h5>
                    <h2 className='head2_HomeComp3' data-aos="fade-up">Our Brand Products</h2>
                    <div className='BrandSlider'>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={10}
                            autoplay={{
                                delay: 3500,
                            }}
                            loop={true}
                            breakpoints={{
                                425: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                                1326: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                },
                                1440: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                },
                                2056: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                },
                            }}
                            modules={[Autoplay]}
                        >
                            <SwiperSlide>
                                <div className='BrandImageCont'>
                                    <img className='BrandImg' src={Brand1} alt='Brand1' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='BrandImageCont'>
                                    <img className='BrandImg' src={Brand2} alt='Brand2' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='BrandImageCont'>
                                    <img className='BrandImg' src={Brand3} alt='Brand3' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='BrandImageCont'>
                                    <img className='BrandImg' src={Brand4} alt='Brand4' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='BrandImageCont'>
                                    <img className='BrandImg' src={Brand5} alt='Brand5' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='BrandImageCont'>
                                    <img className='BrandImg' src={Brand6} alt='Brand6' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='BrandImageCont'>
                                    <img className='BrandImg' src={Brand7} alt='Brand7' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='BrandImageCont'>
                                    <img className='BrandImg' src={Brand8} alt='Brand8' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='BrandImageCont'>
                                    <img className='BrandImg' src={Brand9} alt='Brand9' />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp9