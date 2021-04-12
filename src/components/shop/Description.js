import React from 'react'

import { useSelector } from "react-redux";

const Description = () => {
     const product = useSelector((state) => state.getProductByID);
     return (
          <div className="container" style={{marginTop:"10rem"}}>
               <h1>Description</h1>
               <p> {product.longDescription} </p>
          </div>
     )
}

export default Description
