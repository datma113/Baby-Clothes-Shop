import React from "react";

const ProductDetailViews = ({product, colors, sizes}) => {
     const sellPrice = product.price * (1 - product.discount)

     const colorsMap = colors.map((color, index) => {
          return <span key={index} className="pd-colors-picker">
               {color.color}
          </span>
     }) 
   
     return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <img src={`./img/${product.url}`} alt="haha" className="pd-img" />
                </div>
                <div className="col-lg-7 mt-5">
                    <p> {product.category} </p>
                    <p> {product.name} </p>
                    <div>
                         {product.discount !== 0 && <strike>₫ {product.price}</strike>}
                         <span> ₫ {sellPrice} </span>
                    </div>
                    <div className="pd-colors-picker-container">
                         <span className="pd-title">Màu sắc:</span>
                        {colorsMap}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailViews;
