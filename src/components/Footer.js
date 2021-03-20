import React from "react";

import logo from "../assets/img/logo.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 d-flex flex-column ">
                        <div>
                            {" "}
                            <img src={logo} alt="" className="footer-logo"/>
                        </div>
                         <p>
                              DtoC là cửa hàng bán quần áo trẻ em trực tuyến giá rẻ với đa dạng các loại quần áo.
                         </p>
                         <p className="socal-link">
                              Social Link -
                         </p>
                         <div className="d-flex">
                              <div className="social-link-icon bg-light"><i class="fab fa-facebook-f"></i></div>
                              <div className="social-link-icon bg-light"><i class="fab fa-twitter"></i></div>
                             
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
