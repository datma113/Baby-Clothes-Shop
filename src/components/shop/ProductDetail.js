import React from "react";
import { useSelector } from "react-redux";

const ProductDetail = () => {
     const productDetail = useSelector((state) => state.getProductDetail);
     const colors = useSelector(state => state.getColors)
     const sizes = useSelector(state => state.getSizes)

     const productID = productDetail.id;
     const price = productDetail.price;
     const views = productDetail.views;

     const sizesMap = sizes.map((size, index) => {
         return  <div key={index}>
         {size.size}
     </div>
     })

     const colorsMap = colors.map((color, index) => {
         return <div key={index}>
             {color.color}
         </div>
     })
 
    return (
        <div className="container">
            product detail and some data
               {productID} <br></br>
               {price}<br></br>
               {views}
               <div>
                   {colorsMap}
               </div>
               <div>
                   {sizesMap}
               </div>
        </div>
    );
};

export default ProductDetail;
