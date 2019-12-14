import React, { Fragment } from 'react'
import Header from '../container/Header/index'
import Hero from '../container/Hero/index'
import SectionBrands from '../container/SectionBrands/index'
import SectionFeaturedProducts from '../container/SectionFeaturedProducts'
import Footer from '../container/Footer'
const Homepage = props =>{
    return(
        <Fragment><Header></Header>
        {/* <Hero></Hero> */}
        <SectionBrands></SectionBrands>
        <SectionFeaturedProducts></SectionFeaturedProducts>
        <Footer></Footer>
        </Fragment>

    )
}

export default Homepage;