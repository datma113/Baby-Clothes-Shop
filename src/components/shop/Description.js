import React from "react";

import { useSelector } from "react-redux";

const Description = () => {
    const product = useSelector((state) => state.getProductByID);
    return (
        <div className="container" style={{ marginTop: "10rem" }}>
            <div style={{ marginBottom: `2rem` }}>
                <span className="title-in-desc">Mô tả chi tiết:</span>
                <p> {product.longDescription} </p>
            </div>

            <div>
                <span className="title-in-desc">Xuất xứ:</span>
                <p> {product.origin} </p>
            </div>
            <div>
                <span className="title-in-desc">Chất liệu:</span>
                <p> {product.material} </p>
            </div>
        </div>
    );
};

export default Description;
