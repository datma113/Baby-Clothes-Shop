import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductList } from "../../redux/actions/index";
import Product from "./Product";

const ProductList = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.getProductList);

    const productListMap = productList.map( (product, index) =>{
         return <Product key={index}
               name={product.name}
               price={product.price}
               url={product.url}
               discount={product.discount}
               views={product.views}
         />
    })

    useEffect(() => {
        dispatch(getProductList());
    }, []);
    return (
        <div>
            <div className="row">
                {productListMap}
            </div>
        </div>
    );
};

export default ProductList;
