import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import test1 from '../images/test1.png'
import test2 from '../images/test2.png'
import test3 from '../images/test3.png'
import te1 from '../images/te.png'
import te2 from '../images/te2.png'
import './testimonial.css'
export default function Testimonial() {

    const testContainerRef = useRef()
    const carsoulLeft = useRef()
    const carsoulRight = useRef()
    let arrayOfSrcs;
    useEffect(()=>{
        
        let test1ele = document.getElementById("test1")
        let test2ele = document.getElementById("test2")
        let test3ele = document.getElementById("test3")
        let test1Src = test1ele.getAttribute('src')
        let test2Src = test2ele.getAttribute('src')
        let test3Src = test3ele.getAttribute('src')
        let test1Name = document.querySelector('.test1Name').innerHTML
        let test2Name = document.querySelector('.test2Name').innerHTML
        let test3Name = document.querySelector('.test3Name').innerHTML
        arrayOfSrcs = [{'src' : test1Src, 'name' : test1Name},{'src' : test2Src, 'name' : test2Name},{'src' : test3Src, 'name' : test3Name} ]
        console.log(arrayOfSrcs)
    },[])
    const handlSwapLeft = ()=>{
        carsoulRight.current.classList.remove('active')
        carsoulLeft.current.classList.add('active')
        testContainerRef.current.style.animation = 'swap-ContentLeft .4s linear'
        arrayOfSrcs.sort(()=>Math.random() - 0.5)
        document.getElementById("test1").src = arrayOfSrcs[0].src
        document.getElementById("test2").src = arrayOfSrcs[1].src
        document.getElementById("test3").src = arrayOfSrcs[2].src
        document.querySelector('.test1Name').innerHTML = arrayOfSrcs[0].name
        document.querySelector('.test2Name').innerHTML = arrayOfSrcs[1].name
        document.querySelector('.test3Name').innerHTML = arrayOfSrcs[2].name
        setTimeout(() => {
            testContainerRef.current.style.animation = 'none'
        // remove animation from container
        }, 500);
    }
    const handlSwapRight = ()=>{
        carsoulLeft.current.classList.remove('active')
        carsoulRight.current.classList.add('active')
        testContainerRef.current.style.animation = 'swap-ContentRight .4s linear';
        arrayOfSrcs.sort(()=>Math.random() - 0.5)
        document.getElementById("test1").src = arrayOfSrcs[0].src
        document.getElementById("test2").src = arrayOfSrcs[1].src
        document.getElementById("test3").src = arrayOfSrcs[2].src
        document.querySelector('.test1Name').innerHTML = arrayOfSrcs[0].name
        document.querySelector('.test2Name').innerHTML = arrayOfSrcs[1].name
        document.querySelector('.test3Name').innerHTML = arrayOfSrcs[2].name
        setTimeout(() => {
            testContainerRef.current.style.animation = 'none'
        // remove animation from container
        }, 500);
    }
    return (
        <div className='testimonial'>
        <h1>Testimonial</h1>
        <div className='container'>
        <div className='secContainer' ref={testContainerRef}>
        <div className='testimonial-boxs'>
        <div className='testimonial-box'>
        <div className='image'>
        <img id='test2' src={test2} alt='browser cannot support this img'></img>
        </div>
        <h2 className='test2Name'>Michale</h2>
        <img src={te1} alt='browser cannot support this img'></img>
        <p>humour, or randomised words which don't look even slightly believable. If you are</p>
        </div>
        <div className='testimonial-box'>
        <div className='image'>
        <img id='test1' src={test1} alt='browser cannot support this img'></img>
        </div>
        <h2 className='test1Name'>Jone Lo</h2>
        <img src={te2} alt='browser cannot support this img'></img>
        <p>humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</p>
        </div>
        <div className='testimonial-box'>
        <div className='image'>
        <img id='test3' src={test3} alt='browser cannot support this img'></img>
        </div>
        <h2 className='test3Name'>Disol</h2>
        <img src={te1} alt='browser cannot support this img'></img>
        <p>humour, or randomised words which don't look even slightly believable. If you are</p>
        </div>
        </div>
        </div>
        </div>
        <div className='carsoul'>
        <NavLink to={'#'} className='carsoul-left' ref={carsoulLeft} onClick={()=>{handlSwapLeft()}}><FaArrowLeft color='white' /></NavLink>
        <NavLink to={'#'} className='carsoul-right' ref={carsoulRight} onClick={()=>{handlSwapRight()}} ><FaArrowRight color='white' /></NavLink>
        </div>
        </div>
    )
    }
