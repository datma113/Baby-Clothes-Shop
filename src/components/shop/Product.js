import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import classNames from "classnames";

const Product = ({ id, name, price, url, discount, views, marker, category, shortDesc }) => {
    let realPrice = price * (1 - discount);
    let customOriginPrice = price.toLocaleString("vi", { style: "currency", currency: "VND" });
    let customRealPrice = realPrice.toLocaleString("vi", { style: "currency", currency: "VND" });

    let shortenDesc = shortDesc.slice(0, 60)
    shortenDesc += '...'
 

    const animated = "wow animate__animated animate__zoomIn";

    const isHotProduct = marker === "HOT" ? true : false;

    const isDiscountProduct = marker !== "HOT" && marker.length > 0 ? true : false;

    return (
        <div className={`col-lg-3 d-flex flex-column product-container ${animated}`}>
            <div className="product-img-container">
                <img src={`./img/${url}`} alt="" className="w-100 h-100" />
                <div className={classNames("product-img-marker", { "is-hot": isHotProduct })}>
                    {" "}
                    {marker}{" "}
                </div>
            </div>
            <div className="product-content">
                <p className="product-content-category"> {category.name} </p>
                <div className="product-content-name"> {name} </div>
                <div className="product-content-shortDesc"> {shortenDesc} </div>
                <p className="product-content-views">
                    {" "}
                    <i className="fas fa-eye"></i>
                    &nbsp;
                    {views}{" "}
                </p>
                <div style={{ color: "red" }} className="mt-3">
                    {" "}
                    <span
                        style={{ color: "gray" }}
                        className={classNames("is-discount-product ", {
                            "d-none": !isDiscountProduct,
                        })}
                    >
                        {customOriginPrice}
                    </span>{" "}
                    {customRealPrice}{" "}
                </div>
            </div>
            <div className='product-content-link'>
                <Link to={`/product-detail/${id}`}>
                    Xem
                </Link>
            </div>
           
        </div>
    );
};

//{ id, name, price, url, discount, views, marker, category }
Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    discount: PropTypes.number,
    views: PropTypes.number,
    category: PropTypes.object,
};

export default Product;
