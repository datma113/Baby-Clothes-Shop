import React from 'react'

const FP_Products = () => {
     const animated = 'wow animate__animated animate__fadeInUp'
     return (
          <div className={`FP-product-container ${animated}`} style={{border:"solid red 3px"}}>
               <div className="FP-product-container-top">
                    <img src="" alt=""/>
                    <p>Đang phát triển</p>
                    <p>chờ database hoàn thành!</p>
               </div>
          </div>
     )
}

export default FP_Products

