import React from 'react'

import Intro from './Intro'

const ShopNow = () => {
     return (
          <div className="container" style={{marginTop:"10rem"}}>
                <div className="row">
                    <div className="col-lg-5 col-md-7">
                         <Intro
                         index={5}
                         highlightText="Siêu giảm giá"
                         text="lên đến 50%"
                         animated="animate__fadeInUp"  
                         />
                    </div>
                    <div className="col-lg-7 col-md-5">
                         <Intro
                         index={6}
                         highlightText="Shop ngay"
                         text="Bộ sưu tập độc đáo"
                         animated="animate__fadeInUp"  
                         />
                    </div>
                </div>
          </div>
     )
}

export default ShopNow
