import React, { useEffect } from 'react'
import Header from '../HeaderSec/Header'
import Footer from '../Components/Footer/Footer'
import BotPic from "../Components/BotPic/BotPic"
import ProductComp1 from '../Components/ProductComp/ProductComp1'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductComp4 from '../Components/ProductComp/ProductComp4'
import ProductComp3 from '../Components/ProductComp/ProductComp3'
import ProductComp2 from '../Components/ProductComp/ProductComp2'
import HomeComp4 from '../Components/HomeComp/HomeComp4'
import HomeComp9 from '../Components/HomeComp/HomeComp9'
import ProductComp1a from '../Components/ProductComp/ProductComp1a'

const Product = () => {
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
            <ProductComp1 />
            <ProductComp1a />
            <ProductComp2 />
            <HomeComp4 />
            <ProductComp3 />
            <ProductComp4 />
            <HomeComp9 />
            <Footer />
            <BotPic />
        </>
    )
}

export default Product