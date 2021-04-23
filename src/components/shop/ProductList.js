import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductByCategory } from "../../redux/actions/actFilterProduct";

import Product from "./Product";
import Collapse from "./Collapse";

const ProductList = () => {
    const dispatch = useDispatch();
    /**
     * productList will changed
     *  when user click filter
     * then action will dispatched
     */
    const productList = useSelector((state) => state.shopProductFilter);

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
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 product-when-hover" >
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
                    shortDesc={product.shortDescription}
                    views={product.views}
                />
            </div>
        );
    });

    /**
     * init filter products are "" (empty)
     *  */

    useEffect(() => {
        dispatch(getProductByCategory(""));
    }, []);

    return (
        <div className="container">
            {" "}
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                    <Collapse />
                </div>
                <div className="row mt-5 mb-5 col-lg-9 ">{productListMap}</div>
            </div>
        </div>
    );
};

export default ProductList;
