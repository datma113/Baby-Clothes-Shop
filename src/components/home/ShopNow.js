import React from 'react'

import Intro from './Intro'

const ShopNow = () => {
     return (
          <div className="container" style={{marginTop:"10rem"}}>
                <div className="row">
                    <div className="col-lg-5">
                         <Intro
                         index={5}
                         highlightText="up to 50%"
                         text="khóc luôn"
                         animated="animate__fadeInUp"  
                         />
                    </div>
                    <div className="col-lg-7">
                         <Intro
                         index={6}
                         highlightText="up to 50%"
                         text="khóc luôn"
                         animated="animate__fadeInUp"  
                         />
                    </div>
                </div>
          </div>
     )
}

export default ShopNow
