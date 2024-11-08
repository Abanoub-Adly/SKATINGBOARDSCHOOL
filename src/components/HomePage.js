import React, { useRef } from 'react'
import topIcon from '../images/top_icon.png'
import bannerImage from '../images/banner_img.png'
import './HomePage.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
// import {FaArrow} from 'react-icons/fa'
export default function HomePage() {
    const homeContainerRef = useRef()
    const carsoulLeft = useRef()
    const carsoulRight = useRef()
    const handlSwapLeft = ()=>{
        carsoulRight.current.classList.remove('active')
        carsoulLeft.current.classList.add('active')
        homeContainerRef.current.style.animation = 'swap-ContentLeft .4s linear';
        setTimeout(() => {
            homeContainerRef.current.style.animation = 'none'
        // remove animation from container
        }, 500);
    }
    const handlSwapRight = ()=>{
        carsoulLeft.current.classList.remove('active')
        carsoulRight.current.classList.add('active')
        homeContainerRef.current.style.animation = 'swap-ContentRight .4s linear';
        setTimeout(() => {
            homeContainerRef.current.style.animation = 'none'
        // remove animation from container
        }, 500);
    }
return (
<div className='home'>
    <div className='container' ref={homeContainerRef}>
    <div className='home-text'>
    <img src={topIcon} alt='browser cannot support this img'></img>
    <h3><span>skating</span> <span>board</span> <span>school</span></h3>
    <button>read more</button>
    </div>
    <div className='home-image'>
    <img src={bannerImage} alt='browser cannot support this img'></img>
    </div>
    </div>
    <div className='carsoul'>
    <NavLink to={'#'} clLinkssName='carsoul-left' ref={carsoulLeft} onClick={()=>{handlSwapLeft()}}><FaArrowLeft color='white' /></NavLink>
    <NavLink to={'#'} className='carsoul-right' ref={carsoulRight} onClick={()=>{handlSwapRight()}} ><FaArrowRight color='white' /></NavLink>
    </div>
</div>
)
}
<i class="fa fa-arrow-right" aria-hidden="true"></i>
