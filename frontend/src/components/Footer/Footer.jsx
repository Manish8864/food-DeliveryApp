import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Hungry? We've got you covered. From lightning-fast delivery to the widest selection of local eats, we're built to save you time and satisfy every craving. Your next favorite meal is waiting.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-342-345-765</li>
                    <li>contact@GRUBHUB.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">copyright 2025 @ GRUBHUB.com = All Right Reserved.</p>
    </div>
  )
}

export default Footer