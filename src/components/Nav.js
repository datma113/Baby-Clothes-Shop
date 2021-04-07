import React, {useState} from "react";
import { Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { toggleNav, resizeWindow } from "../redux/actions/index";
import logo from "../assets/img/logo.png";
const Nav = () => {
    const [hasScroll, sethasScroll] = useState(false)

    const CustomLink = ({ to, label, activeOnlyWhenExact }) => {
        return (
            <Route
                path={to}
                exact={activeOnlyWhenExact}
                children={({ match }) => {
                    let matchesClass = match ? "linkActive" : "";
                    return (
                        <li className={`nav-item ${matchesClass}`}>
                            <Link className="nav-link custom-link-a" to={to}>
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

    const dispatch = useDispatch();
    const toggleState = useSelector((state) => state.toggleNav);

    const toggleIcon = () => {
        dispatch(toggleNav());
    };

    const confirmState = () => {
        return toggleState;
    };

    window.addEventListener("resize", () => {
        dispatch(resizeWindow());
    });

    window.addEventListener("scroll", () => {
        hasShowNavWhenOnScroll();
    })

    const hasShowNavWhenOnScroll = () => {
        return window.pageYOffset > 1000 ? sethasScroll(true) : sethasScroll(false);
    };
 
    return (
        // nav-container
        <div
            className={classNames(`nav-container `, {
                "show-nav-when-scroll" : hasScroll
            })}
        >
            <div className=" container-md">
                <div className="row " style={{ height: "8rem" }}>
                    <div className="col-2 d-flex align-items-center">
                        <img src={logo} style={{ height: "5rem" }} />
                    </div>
                    <div
                        className="d-md-none col-5 bar-icon-container d-flex align-items-center"
                        onClick={toggleIcon}
                    >
                        <i className={classNames("fas fa-bars")}></i>
                    </div>
                    <div
                        className={classNames(
                            "col-xl-7 col-lg-7 col-md-7 col-sm-7 d-md-block nav-responsive",
                            { "toggle-event": confirmState() }
                        )}
                    >
                        <ul className="nav h-100  nav-link-container">{routesLinkMap}</ul>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6  justify-content-end d-flex ">
                        <div className="login-container align-items-center d-flex">
                            <i className="fas fa-user icon-login"></i>
                            Đăng nhập
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
