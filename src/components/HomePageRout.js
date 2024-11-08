import React, { Fragment } from 'react'
import HomePage from './HomePage';
import NavbarPage from './NavbarPage';
import Skating from './Skating';
import About from './About';
import SkatingVideo from './SkatingVideo';
import SkatingShop from './SkatingShop';
import Testimonial from './Testimonial';
import Footer from './Footer';

export default function HomePageRout() {
    return (
        <Fragment>
        <NavbarPage />
        <HomePage />
        <Skating />
        <About />
        <SkatingVideo />
        <SkatingShop />
        <Testimonial />
        <Footer />
        </Fragment>
    )
}
