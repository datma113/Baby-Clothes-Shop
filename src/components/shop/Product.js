import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../redux/actions/index";
import { getColors } from "../../redux/actions/index";
import { getSizes } from "../../redux/actions/index";
import { convertCurrency } from "../../redux/actions/index";

import PropTypes from "prop-types";

import classNames from "classnames";

const Product = ({ id, name, price, url, discount, views, marker, category }) => {
    const dispatch = useDispatch();

    let realPrice = price * (1 - discount);
    let customOriginPrice = price.toLocaleString("vi", { style: "currency", currency: "VND" });
    let customRealPrice = realPrice.toLocaleString("vi", { style: "currency", currency: "VND" });

    const animated = "wow animate__animated animate__zoomIn";

    const isHotProduct = marker === "HOT" ? true : false;

    const isDiscountProduct = marker !== "HOT" && marker.length > 0 ? true : false;

    /**
     * click product-detail when hover on product
     * will get api ProductDetail, Color, Sizes
     * and save it to store each product depend on id
     */
    const getProductDetailAPI = (id) => {
        dispatch(getProductDetail(id));
        dispatch(getColors(id));
        dispatch(getSizes(id));
        dispatch(convertCurrency({ price, discount }));
    };

    const setChangeInSession = () => {
        sessionStorage.setItem(`changeItem`, JSON.stringify(true));
    };

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
                <div style={{ fontWeight: "bold", fontSize: "2.2rem" }}> {name} </div>
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

            <Link
                className="product-detail-hover"
                to="/product-detail"
                onClick={() => {
                    getProductDetailAPI(id);
                    setChangeInSession();
                }}
            >
                chi tiết
            </Link>
            <div className="overlay"></div>
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
    category: PropTypes.string,
};

export default Product;
