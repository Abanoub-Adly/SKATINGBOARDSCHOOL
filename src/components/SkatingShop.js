import React from 'react'
import shop from '../images/shop.png'
import './skatingShop.css'
export default function SkatingShop() {
    return (
        <div className='skatingShop'>
        <div className='shop-container'>
        <div className='shopImage-box'>
        <img src={shop} alt='browser cannot support this img'></img>
        </div>
        <div className='shopText-box'>
        <h2><span>Our Skate</span><span>Shop</span></h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variatioThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variationsns</p>
        <button>BUY NOW</button>
        </div>
        </div>
        </div>
    )
}
