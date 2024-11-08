import { Fragment } from 'react'
import NavbarPage from './NavbarPage';
import Footer from './Footer';
import Skating from './Skating';
export default function SkatingPageRout() {
    return (
        <Fragment>
        <NavbarPage />
        <Skating />
        <Footer />
        </Fragment>
    )
}
