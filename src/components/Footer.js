import React from 'react'
import { BsTelephoneFill } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { Link, NavLink } from 'react-router-dom';
import './footer.css'
export default function Footer() {
    const time = new Date();
    const currentYear= time.getFullYear();
    return (
        <div className='footer'>
        <div className='container'>
        <div className='contact-boxs'>
        <div className='contact-box'>
        <h2>Contact Us</h2>
        <ul>
        <li><SiGooglemaps size={15} color="#5326d3" /><span>Locations</span></li>
        <li><BsTelephoneFill size={15} color="#5326d3" /><span>Call +01 1234567890</span></li>
        <li><SiGmail size={15} color="#5326d3" /><span>demo@gmail.com</span></li>
        </ul>
        </div>
        <div className='socialcontact-box'>
        <h2>Newsletter</h2>
        <div className='Newsletter'>
        <div className='inputs'>
        <input type='text' placeholder='Enter Your Email'></input>
        <input type='text' placeholder='Enter Your Email'></input>
        </div>
        <Link className='subscribe'>Subscribe</Link>
        </div>
        <div className='Useful_Link'>
        <h2>Useful Link</h2>
        <ul>
        <li><FaFacebook className='social' size={30}  /></li>
        <li><FaTwitter className='social' size={30}  /></li>
        <li><FaInstagram className='social' size={30}  /></li>
        <li><TiSocialInstagram className='social' size={30}  /></li>
        </ul>
        </div>
        <ul className='social_ul'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/skating'>Skating</NavLink></li>
        <li><NavLink to='/shop'>Shop</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
        </ul>
        </div>
        </div>
        </div>
        <p className='parghraph_footer'>© {currentYear} All Rights Reserved. Design by Free html Templates</p>
        </div>
    )
}
