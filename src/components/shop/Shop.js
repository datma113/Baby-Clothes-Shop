import { React, useEffect } from "react";

import ProductList from "./ProductList";
import Background from "../Background";

const Shop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Background text="-Shop-" />
            <ProductList />
        </div>
    );
};

export default Shop;
