import React from 'react'
import './Hero.css'
import hand_icon from '../../assets/hand_icon.png'
import hero_img from '../../assets/hero_image.png'
import arrow_img from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrival Only</h2>
            <div className='hand-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
            <div className='hero-left-button'>
                <span>Latest Collection</span>
                <img src={arrow_img} alt="" />
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero