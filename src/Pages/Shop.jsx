import React from 'react'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import TopProducts from '../components/TopProducts/TopProducts'
import Banner from '../components/Banner/Banner'
import Subscribe from '../components/Subscribe/Subscribe'
import Testimonials from '../components/Testimonials/Testimonials'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Products/>
      <TopProducts />
      <Banner/>
      <Subscribe/>
      <Testimonials />
    </div>
  )
}

export default Shop