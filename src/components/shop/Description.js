import React from 'react'

import { useSelector } from "react-redux";

const Description = () => {
     const productDetail = useSelector((state) => state.getProductDetail);
     return (
          <div className="container" style={{marginTop:"10rem"}}>
               <h1>Description</h1>
               <p> {productDetail.longDescription} </p>
          </div>
     )
}

export default Description
