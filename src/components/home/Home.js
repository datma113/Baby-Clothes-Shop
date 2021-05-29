import React, {useEffect} from "react";

import Carousel from "./Carousel";
import FeaturedProducts from "./FeaturedProducts";
import FP_Product from "./FP_Product";
import IntroComp from "./IntroComp";
import ShopNow from "./ShopNow";
import ListLogo from "./ListLogo";
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Carousel />  
            <IntroComp />
            <FeaturedProducts />
            <FP_Product />
            <ShopNow />
            <ListLogo />
        </div>
    );
};

export default Home;
