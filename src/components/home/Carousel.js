import React from 'react'
import { Link } from 'react-router-dom'
import background1 from '../../assets/img/background-carousel1.jpg'
import background2 from '../../assets/img/background-carousel2.jpg'
import background3 from '../../assets/img/background-carousel3.jpg'

const Carousel = () => {
     
     const animated = 'wow animate__animated animate__fadeInUp'

     return (
          <div>
               <div id="carouselId" className="carousel slide" data-ride="carousel" data-interval={3000}>
                    <div className="carousel-inner"  role="listbox">
                         <div className="carousel-item active" >
                              <img className="img-carousel" src={background1} alt="First slide"/>
                              <div className="carousel-caption col-lg-12 col-md-8 col-8 ">
                                   <p className={`${animated}`}>Chào mừng đến với:</p>
                                   <p  className={`${animated} animate__delay-1s`}>DtoC Shop</p>
                                   <button className={`btn btn-warning btn-shop-now ${animated} animate__delay-2s`}><Link to="/shop">Mua sắm ngay</Link></button>
                              </div>
                         </div>
                         <div className="carousel-item">
                              <img className="img-carousel"  src={background2} alt="Second slide"/>
                              <div className="carousel-caption col-lg-12 col-md-8 col-8  ">
                                   <p>Sản phẩm chất lượng</p>
                                   <p>Siêu ưu đãi</p>
                                   <button className="btn btn-warning btn-shop-now"><Link to="/shop">Mua sắm ngay</Link></button>
                              </div>
                         </div>
                         <div className="carousel-item">
                              <img className="img-carousel"  src={background3} alt="Third slide"/>
                              <div className="carousel-caption col-lg-12 col-md-8 col-8 ">
                                   <p>Đa dạng mặt hàng</p>
                                   <p>dành cho trẻ em</p>
                                   <button className="btn btn-warning btn-shop-now"><Link to="/shop">Mua sắm ngay</Link></button>
                              </div>
                         </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                         <span className="sr-only">Next</span>
                    </a>
               </div>
          </div>
     )
}

export default Carousel
