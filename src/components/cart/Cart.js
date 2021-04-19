import { React, useEffect } from "react";

import Background from "../Background";
import ProductInCart from "./ProductInCart";
import TotalOrder from "./TotalOrder";

const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Background text="-Giỏ hàng-" />
            <div>
                <ProductInCart />
                <TotalOrder />
            </div>
        </div>
    );
};

export default Cart;
