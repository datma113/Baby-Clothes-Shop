import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductList } from "../../redux/actions/index";
import Product from "./Product";
import Collapse from './Collapse'

const ProductList = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.getProductList);

    const productListMap = productList.map((product, index) => {
        /**
         * check marker in [hot, discount, default]
         *      default = 'DEF' => marker = ''
         *      hot = 'HOT' => marker = 'hot'
         *      discount = 'DIS' => marker = (String) discount
         */
        let marker = "";
        let discount = `${-product.discount * 100}%`;

        if (product.marker !== "DEF") {
            marker = product.marker === "HOT" ? "HOT" : discount;
        }

        return (
            <Product
                key={index}
                id={product.id}
                name={product.name}
                price={product.price}
                url={product.url}
                discount={product.discount}
                views={product.views}
                marker={marker}
                category={product.category}
            />
        );
    });

    useEffect(() => {
        dispatch(getProductList());
    }, []);

    return (
        <div className="container">
            {" "}
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <Collapse />
                </div>
                <div className="row mt-5 mb-5 col-lg-9">{productListMap}</div>
            </div>
        </div>
    );
};

export default ProductList;
