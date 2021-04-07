import React from 'react'

import Carousel from './Carousel'
import FeaturedProducts from './FeaturedProducts'
import FP_Product from './FP_Product'
import IntroComp from './IntroComp'
import ShopNow from './ShopNow'
const Home = () => {
     return (
          <div>
               <Carousel />
               <FeaturedProducts />
               <FP_Product />
               <IntroComp /> 
               <ShopNow />
          </div>
     )
}

export default Home
