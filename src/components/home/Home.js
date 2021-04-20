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
            <FeaturedProducts />
            <FP_Product />
            <IntroComp />
            <ShopNow />
            <ListLogo />
        </div>
    );
};

export default Home;
