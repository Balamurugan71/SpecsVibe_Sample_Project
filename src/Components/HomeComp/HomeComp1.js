import React from 'react'
import "./HomeComp1.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, EffectFade } from 'swiper/modules';

const HomeComp1 = () => {
    return (
        <>
            <div className='Slider_Hero_Container'>
                <div className='Slider_Hero_Holder'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 3500,
                        }}
                        effect={'fade'}
                        loop={true}
                        breakpoints={{
                            425: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            1326: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            1440: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            2056: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                        }}
                        modules={[Autoplay, EffectFade]}
                    >
                        <SwiperSlide>
                            <div className='Slider_Image1'>
                                <div className='Slider_Overlay'>
                                    <div className='Slider_Overlay_Container'>
                                        <div className='Slider_Content' data-aos="fade-up">
                                            <h1 className='SliderH1'>Transforming Your <span className='text-white d-block'>View At Home</span></h1>
                                            <h3 className='SliderH3'>The perfect blend of vision and fashion.</h3>
                                            <button className='HeroButton'><a className='HeroButtonLink' href='/service'>View our works</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='Slider_Image2'>
                                <div className='Slider_Overlay'>
                                    <div className='Slider_Overlay_Container'>
                                        <div className='Slider_Content' data-aos="fade-up">
                                            <h1 className='SliderH1'>Transforming Your <span className='text-white d-block'>Life At Home</span></h1>
                                            <h3 className='SliderH3'>Clearly the best choice for your eyes.</h3>
                                            <button className='HeroButton'><a className='HeroButtonLink' href='/service'>View our works</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default HomeComp1