import React, { useState } from "react";
import classNames from "classnames";

import Product from "./FP_Product";

const FeaturedProducts = () => {
    const [currentIndex, setIndex] = useState(0);

    const selectTypes = [
        { title: "Tất cả", type: "all" },
        { title: "Sales off", type: "saleoff" },
        { title: "Top rated", type: "toprated" },
    ];

    const getIndex = (index) => {
        return () => {
            setIndex(index);
        };
    };

    const isActived = (index) => {
        return index === currentIndex;
    };

    const selectTypesMap = selectTypes.map((item, index) => {
        return (
            <div
                key={index}
                onClick={getIndex(index)}
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
                    <div className="col-lg-4 col-sm-12 col-md-6 fp-container-left">Sản phẩm ưa chuộng</div>
                    <div className="col-lg-4 d-none d-lg-block  fp-container-center"> </div>
                    <div className="col-lg-4 col-sm-12  col-md-6 fp-container-right d-flex justify-content-center align-items-center">
                        {selectTypesMap}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <Product />
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
