import React, { useState } from "react";
import classNames from "classnames";
import {useDispatch} from 'react-redux'

import {getFilterProducts} from '../../redux/actions/actHome'
import { getHomeAllProducts } from "../../redux/actions/actHome";


const FeaturedProducts = () => {
    const dispatch = useDispatch()

    const [currentIndex, setIndex] = useState(0);

    const TYPE_ALL = "TYPE_ALL";
    const TYPE_SALE_OFF = "DIS";
    const TYPE_TOP_RATE = "HOT";

    const selectTypes = [
        { title: "Tất cả", type: TYPE_ALL },
        { title: "Sales off", type: TYPE_SALE_OFF },
        { title: "Top rated", type: TYPE_TOP_RATE },
    ];

    const getIndex = (index) => {
        setIndex(index);
    };

    const isActived = (index) => {
        return index === currentIndex;
    };

    /**
     * When click selectTypes element
     * Request to server to get filter product
     * Parameters consist of TYPE_ALL, TYPE_SALE_OFF, TYPE_TOP_RATE
     */
    const filterProductsAPI = (types) => {
        switch (types) {
            case TYPE_ALL:
                dispatch(getHomeAllProducts())
                break;
            default:
                dispatch(getFilterProducts(types))
                break;
        }
    };

    const selectTypesMap = selectTypes.map((item, index) => {
        return (
            <div
                key={index}
                onClick={() => {
                    getIndex(index);
                    filterProductsAPI(item.type);
                }}
                className={classNames({ "fp-actived": isActived(index) })}
            >
                {" "}
                {item.title}{" "}
            </div>
        );
    });

    return (
        <div className="container ">
            <div className="fp-container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 col-md-6 fp-container-left">
                        Sản phẩm ưa chuộng
                    </div>
                    <div className="col-lg-4 d-none d-lg-block  fp-container-center"> </div>
                    <div className="col-lg-4 col-sm-12  col-md-6 fp-container-right d-flex justify-content-center align-items-center">
                        {selectTypesMap}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
