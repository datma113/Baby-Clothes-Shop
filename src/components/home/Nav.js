import React from "react";
import {Link, Route} from 'react-router-dom'

import logo from "../../assets/img/logo.png";
const Nav = () => {

    const CustomLink = ({to, label, activeOnlyWhenExact}) => {
        return <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
            let matchesClass = match ? "linkActive nav-item" : "nav-item"
            return  <li className={matchesClass}>
                        <Link className="nav-link" to={to}>
                            {label}
                        </Link>
                    </li>
        }}  />
    }

    const routesLink = [
        {to: '/', exact: true, label: 'Trang chủ'},
        {to: '/shop', exact: false, label: 'Shop'},
        {to: '/cart', exact: false, label: 'Giỏ hàng'},
        {to: '/contact', exact: false, label: 'Liên hệ'},
    ]

    const routesLinkMap = routesLink.map((route, index) => {
        return <CustomLink key={index} to={route.to} activeOnlyWhenExact={route.exact}  label={route.label} />
    })

    return (
        <div className="nav-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 col-2">
                        <img src={logo} style={{ height: "5rem" }} />
                    </div>
                    <div className="d-sm-none col-3 bar-icon-container d-flex align-items-center">
                            <i className="fas fa-bars"></i>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-8 d-sm-block d-none" >
                        <ul className="nav h-100  nav-link-container">
                            {routesLinkMap}
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
