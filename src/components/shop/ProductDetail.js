import React from "react";

import Background from '../Background'
import ProductDetailViews from './ProductDetailViews'
import Description from './Description'

const ProductDetail = () => {
    
      
    return (
        <div>
            <Background text="-Chi tiết sản phẩm-"/>
            <ProductDetailViews/>
            <Description/>
        </div>
    );
};

export default ProductDetail;
