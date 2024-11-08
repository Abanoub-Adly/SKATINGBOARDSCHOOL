import React from 'react'
import aboutImg from '../images/about.png'
import './about.css'
export default function About() {
    return (
        <div className='about-page'>
        <div className='container'>
        <div className='boxs-container'>
        <div className='content-box'>
        <h2><span>about</span> <span>skating</span> <span>school</span></h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variatioThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variationsns</p>
        <button>read more</button>
        </div>
        <div className='image-box'>
        <img src={aboutImg} alt='browser cannot support this  img'></img>
        </div>
        </div>
        </div>
        </div>
    )
}