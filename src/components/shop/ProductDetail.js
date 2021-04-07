import React from "react";
import { useSelector } from "react-redux";

import Background from '../Background'
import ProductDetailViews from './ProductDetailViews'
import Description from './Description'

const ProductDetail = () => {
     const productDetail = useSelector((state) => state.getProductDetail);
     const colors = useSelector(state => state.getColors)
     const sizes = useSelector(state => state.getSizes)
    
     
    return (
        <div>
            <Background text="-Chi tiết sản phẩm-"/>
            <ProductDetailViews
                product={productDetail}   
                colors={colors}
                sizes={sizes}
            />
            <Description/>
        </div>
    );
};

export default ProductDetail;
