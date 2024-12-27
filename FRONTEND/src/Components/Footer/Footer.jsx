import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram_icon.png'
import pintester from '../../assets/pintester_icon.png'
import whatsApp from '../../assets/whatsapp_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt="" />
            <h1>SHOPPER</h1>
        </div>
        <ul className='footer-links'>
           <li>Company</li>
           <li>Products</li>
           <li>Offices</li>
           <li>About</li>
           <li>Contact</li>
        </ul>
        <ul className='footer-social-links'>
            <img src={instagram} alt="" />
            <img src={pintester} alt="" />
            <img src={whatsApp} alt="" />
        </ul>
        <hr/>
        <p className='copyright-text'>Copyright @2024 - All Right Reserved</p>
    </div>
  )
}

export default Footer