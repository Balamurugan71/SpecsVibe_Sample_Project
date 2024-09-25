import React from 'react'
import "./HomeComp8.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, EffectFade } from 'swiper/modules';

const HomeComp8 = () => {
    return (
        <>
            <div className='HomeComp8_Container'>
                <div className='HomeComp8_Holder'>
                    <h5 className='head1_HomeComp3' data-aos="fade-up">Testimonials</h5>
                    <h2 className='head2_HomeComp3' data-aos="fade-up">Our Customers Says About Us</h2>
                    <p className='para_HomeComp3' data-aos="fade-up">Our Customers Love Their Experience With Specs Vibe, Expert Care Transforming Vision, Transforming Lives</p>
                    <div className='HomeComp8_SliderContainer'>
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
                                <div className='SliderBox'>
                                    <div className='SliderContent'>
                                        <p className='SliderQuotes'>
                                            <FontAwesomeIcon className='qoutesIcon' icon={faQuoteLeft} />Specs Vibe is fantastic! Friendly staff, quick exam, and trendy frames.<FontAwesomeIcon className='qoutesIcon' icon={faQuoteRight} />
                                        </p>
                                        <p className='SliderName'>Jayashree</p>
                                        <p className='SliderPlace'>Sithalapakkam</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='SliderBox'>
                                    <div className='SliderContent'>
                                        <p className='SliderQuotes'>
                                            <FontAwesomeIcon className='qoutesIcon' icon={faQuoteLeft} />I loved my experience at Specs Vibe! The service and frames were great.<FontAwesomeIcon className='qoutesIcon' icon={faQuoteRight} />
                                        </p>
                                        <p className='SliderName'>Hansraj  bala</p>
                                        <p className='SliderPlace'>Thiruvanmiyur</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='SliderBox'>
                                    <div className='SliderContent'>
                                        <p className='SliderQuotes'>
                                            <FontAwesomeIcon className='qoutesIcon' icon={faQuoteLeft} />Specs Vibe truly cares about their customers with personalized service and attention to detail.<FontAwesomeIcon className='qoutesIcon' icon={faQuoteRight} />
                                        </p>
                                        <p className='SliderName'>Ashok Muthuswamy</p>
                                        <p className='SliderPlace'>Pallikaranai</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='SliderBox'>
                                    <div className='SliderContent'>
                                        <p className='SliderQuotes'>
                                            <FontAwesomeIcon className='qoutesIcon' icon={faQuoteLeft} />Thanks to Specs Vibe, I'm seeing the world in a new way with their advanced technology and expert care.<FontAwesomeIcon className='qoutesIcon' icon={faQuoteRight} />
                                        </p>
                                        <p className='SliderName'>Shaid mohammad</p>
                                        <p className='SliderPlace'>Pallikaranai</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='SliderBox'>
                                    <div className='SliderContent'>
                                        <p className='SliderQuotes'>
                                            <FontAwesomeIcon className='qoutesIcon' icon={faQuoteLeft} />Specs Vibe truly cares about customers! Personalized service, attention to detail, and stylish frames. I'm a happy customer!<FontAwesomeIcon className='qoutesIcon' icon={faQuoteRight} />
                                        </p>
                                        <p className='SliderName'>Srilekha</p>
                                        <p className='SliderPlace'>Madambakkam</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp8