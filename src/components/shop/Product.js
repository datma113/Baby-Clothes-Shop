import React from "react";

import classNames from "classnames";

const Product = ({ name, price, url, discount, views, marker, category }) => {
    const animated = 'wow animate__animated animate__zoomIn'

    const isHotProduct = marker === "HOT" ? true : false;

    const isDiscountProduct = (marker !== "HOT" && marker.length > 0) ? true : false;

    return (
        <div className={`col-lg-3 d-flex flex-column product-container ${animated}`}>
            <div className="product-img-container">
                <img src={`./img/${url}`} alt="" className="w-100 h-100" />
                <div className={classNames("product-img-marker", { "is-hot": isHotProduct })}>
                    {" "}
                    {marker}{" "}
                </div>
            </div>
            <div className="product-content-container">
                <div className="product-catagory-text"> {category} </div>
                <div style={{fontWeight:"bold", fontSize:"2.2rem"}}> {name} </div>
                <div style={{color:"red"}} className="mt-3">
                    {" "}
                    <span
                         style={{color:"gray"}}
                        className={classNames("is-discount-product ", {
                            "d-none": !isDiscountProduct,
                        })}
                    >
                        ₫ {price}
                    </span>{" "}
                    ₫ {price * (1-discount)}{" "}
                </div>
            </div>

            <a className="product-detail-hover" href="#">
                 chi tiết
            </a>
            <div className="overlay">

            </div>
        </div>
    );
};

export default Product;
