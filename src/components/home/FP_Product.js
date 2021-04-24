import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getHomeAllProducts } from "../../redux/actions/actHome";
import Product from "../shop/Product";

const FP_Products = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.getFeaturedProduct);

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
            <div className="col-lg-3 col-md-4 col-sm-6  product-when-hover" key={index}>
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
                />
            </div>
        );
    });

    useEffect(() => {
        dispatch(getHomeAllProducts());
    }, []);

    const animated = "wow animate__animated animate__zoomIn";

    return (
        <div className={`${animated} container mt-5`}>
            <div className="row">{productListMap}</div>
        </div>
    );
};

export default FP_Products;
