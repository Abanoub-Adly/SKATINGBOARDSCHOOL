import React from 'react'
import skat1 from '../images/sakt1.png'
import skat2 from '../images/sakt2.png'
import skat3 from '../images/sakt3.png'
import './skatingVideo.css'
export default function SkatingVideo() {
    return (
        <div className='skatingVideo'>
        <h1>Skating Video</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
        <div className='video-boxs'>
        <div className='video-box'>
        <img src={skat1} alt='browser cannot support this img'></img>
        <button>SEE MORE</button>
        </div>
        <div className='video-box'>
        <img src={skat2} alt='browser cannot support this img'></img>
        <button>SEE MORE</button>
        </div>
        <div className='video-box'>
        <img src={skat3} alt='browser cannot support this img'></img>
        <button>SEE MORE</button>
        </div>
        </div>
        </div>
    )
}
