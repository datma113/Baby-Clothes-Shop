import React from 'react'

const Logo = ({index}) => {
     return (
          <div className="col-lg ">
               <img src={`./img/home-logo-${index}.jpg`} className="home-logo" alt=""/>
          </div>
     )
}

export default Logo
