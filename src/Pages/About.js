import React, { useEffect } from 'react'
import Header from '../HeaderSec/Header'
import Footer from '../Components/Footer/Footer'
import BotPic from "../Components/BotPic/BotPic"
import AboutComp1 from '../Components/AboutComp/AboutComp1'
import AboutComp2 from '../Components/AboutComp/AboutComp2'
import HomeComp3 from '../Components/HomeComp/HomeComp3'
import HomeComp4 from '../Components/HomeComp/HomeComp4'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutComp3 from '../Components/AboutComp/AboutComp3'
import HomeComp9 from '../Components/HomeComp/HomeComp9'

const About = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            once: true,
        });
        AOS.refresh();
    }, [])
    return (
        <>
            <Header />
            <AboutComp1 />
            <AboutComp2 />
            <HomeComp4 />
            <HomeComp3 />
            <AboutComp3 />
            <HomeComp9 />
            <Footer />
            <BotPic />
        </>
    )
}

export default About