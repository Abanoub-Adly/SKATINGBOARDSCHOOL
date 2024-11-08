import React, { Component, useRef } from 'react'
import logo from '../images/logo.png'
import menu from '../images/menu_icon.png'
import {FaSearch } from 'react-icons/fa'
import {FaUser  } from 'react-icons/fa'
import { NavLink, useLocation  } from 'react-router-dom'
import './NavbarPage.css'

export default function NavbarPage() {
    const ulRef = useRef()
    const handleClick = ()=>{
        ulRef.current.classList.toggle('disapled')
    }
    const location = useLocation();
return (
    <div className={location.pathname === '/home' ? 'navbar' : 'navbar Rout'}>
    <div className='logo'><img src={logo} alt='browser cannot support this img'></img></div>
    <div className='navUl'>
    <ul  ref={ulRef}>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/skating'>Skating</NavLink></li>
    <li><NavLink to='/shop'>Shop</NavLink></li>
    <li><NavLink to='/contact'>Contact Us</NavLink></li>
    </ul>
    </div>
    <div className='menu-icon' onClick={()=>handleClick()}><img src={menu} alt='browser cannot support this img'></img></div>
    <div className='search'>
    <h1><FaSearch size={19}  color='#5e5d5e' /></h1>
    <h1><FaUser  size={19} color='#5e5d5e' /></h1>
    </div>
    </div>
)}

