import React, { useEffect } from 'react'
import Header from '../HeaderSec/Header'
import Footer from '../Components/Footer/Footer'
import HomeComp1 from '../Components/HomeComp/HomeComp1'
import HomeComp2 from '../Components/HomeComp/HomeComp2'
import HomeComp3 from '../Components/HomeComp/HomeComp3'
import HomeComp4 from '../Components/HomeComp/HomeComp4'
import HomeComp5 from '../Components/HomeComp/HomeComp5'
import HomeComp6 from '../Components/HomeComp/HomeComp6'
import HomeComp7 from '../Components/HomeComp/HomeComp7'
import HomeComp8 from '../Components/HomeComp/HomeComp8'
import HomeComp9 from '../Components/HomeComp/HomeComp9'
import BotPic from "../Components/BotPic/BotPic"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
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
            <HomeComp1 />
            <HomeComp2 />
            <HomeComp3 />
            <HomeComp4 />
            <HomeComp5 />
            <HomeComp6 />
            <HomeComp7 />
            <HomeComp8 />
            <HomeComp9 />
            <Footer />
            <BotPic />
        </>
    )
}

export default Home