import React from 'react'
import Header from '../HeaderSec/Header'
import Footer from '../Components/Footer/Footer'
import BotPic from "../Components/BotPic/BotPic"
import ContactComp1 from '../Components/ContactComp/ContactComp1'
import ContactComp2 from '../Components/ContactComp/ContactComp2'

const Contact = () => {
    return (
        <>
            <Header />
            <ContactComp1 />
            <ContactComp2 />
            <Footer />
            <BotPic />
        </>
    )
}

export default Contact