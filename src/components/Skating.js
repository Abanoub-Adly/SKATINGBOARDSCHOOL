import React from 'react'
import class1 from '../images/class1.png'
import class2 from '../images/class2.png'
import class3 from '../images/class3.png'
import './skating.css'
export default function Skating() {
    return (
        <div className='skating'>
        <div className='container'>
        <h1>Our Skating Class</h1>
        <p>There are many variations of passages of Lorem</p>
        <div className='skating-boxs'>
        <div className='skating-box'>
        <div className='text-content'>
        <img src={class1} alt='browser cannot support this img'></img>
        <h2>Skateboard</h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations</p>
        </div>
        <button>read more</button>
        </div>
        <div className='skating-box'>
        <div className='text-content'>
        <img src={class2} alt='browser cannot support this img'></img>
        <h2>Skateboard</h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations</p>
        </div>
        <button>read more</button>
        </div>
        <div className='skating-box'>
        <div className='text-content'>
        <img src={class3} alt='browser cannot support this img'></img>
        <h2>Skateboard</h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations</p>
        </div>
        <button>read more</button>
        </div>
        </div>
        </div>
        </div>
    )
}
