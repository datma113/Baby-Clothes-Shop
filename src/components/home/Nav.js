import React from "react";

import logo from "../../assets/img/logo.png";
const Nav = () => {
    return (
        <div className="nav-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 col-6">
                        <img src={logo} style={{ height: "5rem" }} />
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-8 d-sm-block d-none" >
                        <ul className="nav h-100  nav-link-container">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    Trang chủ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Shop
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Giỏ hàng
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Liên hệ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-6  justify-content-end d-flex ">
                        <div className="login-container align-items-center d-flex">
                            <i className="fas fa-user icon-login"></i>
                            login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
