import React from 'react'
import "./BotPic.css"
import whatsAppIcon from "../../assets/whatapp icon.png"

const BotPic = () => {
    return (
        <>
            <div className='BotIcon'>
                <a href='https://api.whatsapp.com/send?phone=9962321727'><img src={whatsAppIcon} alt='WhatsApp' /></a>
            </div>
        </>
    )
}

export default BotPic