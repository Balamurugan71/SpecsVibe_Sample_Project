import React, { useEffect } from 'react'
import Header from '../HeaderSec/Header'
import Footer from '../Components/Footer/Footer'
import BotPic from "../Components/BotPic/BotPic"
import ServiceComp1 from '../Components/ServiceComp/ServiceComp1'
import ServiceComp2 from '../Components/ServiceComp/ServiceComp2'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeComp4 from '../Components/HomeComp/HomeComp4'
import HomeComp9 from '../Components/HomeComp/HomeComp9'
import ServiceComp3 from '../Components/ServiceComp/ServiceComp3'
import ServiceComp4 from '../Components/ServiceComp/ServiceComp4'

const Service = () => {
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
            <ServiceComp1 />
            <ServiceComp2 />
            <HomeComp4 />
            <ServiceComp3 />
            <ServiceComp4 />
            <HomeComp9 />
            <Footer />
            <BotPic />
        </>
    )
}

export default Service