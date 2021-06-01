import React, { useState } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { logout } from "../redux/actions/actAuth";

import logo from "../assets/img/logo.png";
const Nav = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [toggleState, setToggleState] = useState(false);
    
    //check user exist
    const currentUser = useSelector((state) => state.auth);
    

    //scroll state


    const CustomLink = ({ to, label, activeOnlyWhenExact }) => {
        return (
            <Route
                path={to}
                exact={activeOnlyWhenExact}
                children={({ match }) => {
                    let matchesClass = match ? "linkActive" : "";
                    return (
                        <li className={`nav-item `}>
                            <Link className={`nav-link custom-link-a ${matchesClass}`} to={to}>
                                {label}
                            </Link>
                        </li>
                    );
                }}
            />
        );
    };

    const routesLink = [
        { to: "/", exact: true, label: "Trang chủ" },
        { to: "/shop", exact: false, label: "Shop" },
        { to: "/cart", exact: false, label: "Giỏ hàng" },
        { to: "/contact", exact: false, label: "Liên hệ" },
    ];

    const routesLinkMap = routesLink.map((route, index) => {
        return (
            <CustomLink
                key={index}
                to={route.to}
                activeOnlyWhenExact={route.exact}
                label={route.label}
            />
        );
    });

    const toggleIcon = () => {
        setToggleState(!toggleState);
    };

    //toggle nav when responsive
    window.addEventListener("resize", () => {
        return window.innerWidth > 899 ? setToggleState(false) : setToggleState(true);
    });

    const logoutHandle = () => {
        dispatch(logout());
        sessionStorage.removeItem(`LIST_ITEM`)
        history.push("/");
        window.location.reload();

    };

    return (
        // nav-container
        <div className={`nav-container`}>
            <div className=" container-md">
                <div className="row " style={{ height: "8rem" }}>
                    <div className="col-2 col-md-2 d-flex align-items-center">
                        <img src={logo} style={{ height: "5rem" }} 
                        onClick={() =>  {
                            history.push("/");
                            window.scrollTo(0,0);
                        }}
                        />
                    </div>
                    <div
                        className="col-2 col-sm-5 col-md-5 bar-icon-container d-flex align-items-center"
                        onClick={toggleIcon}
                    >
                        <i className={classNames("fas fa-bars")}></i>
                    </div>
                    <div
                        className={classNames(
                            "col-xl-7 col-lg-7 col-md-7 col-sm-7 d-md-block nav-responsive",
                            { "toggle-event": toggleState }
                        )}
                    >
                        <ul className="nav h-100  nav-link-container">{routesLinkMap}</ul>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6  justify-content-end d-flex ">
                        {/**
                         * when user exist then not show this btn
                         */}
                        {!currentUser.isLoggin ? (
                            <Link to="/login">
                                <div className="login-container align-items-center d-flex">
                                    <i className="fas fa-user icon-login"></i>
                                    Đăng nhập
                                </div>
                            </Link>
                        ) : (
                            <div className="ll-container">
                                <Link to="/profile">
                                    <div className="login-container align-items-center d-flex">
                                        <i className="fas fa-user icon-login"></i>
                                        {currentUser.user.username.slice(0, 7)}
                                    </div>
                                </Link>
                                <div className="logout" onClick={() => logoutHandle()}>
                                    đăng xuất{" "}
                                    <span>
                                        {" "}
                                        <i
                                            className="fas fa-sign-out-alt"
                                            style={{ color: "red" }}
                                        ></i>
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
