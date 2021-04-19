import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/actAuth";
import classNames from "classnames";

import { Link } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const errorMessage = useSelector((state) => state.message);
    const [hasNotError, setHasNotError] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const getUsername = (event) => {
        setUsername(event.target.value);
    };
    const getPassword = (event) => {
        setPassword(event.target.value);
    };

    const loginHandle = () => {
        setIsLoading(true);
        //validation

        //call api
        dispatch(login(username, password))
            .then(() => {
                history.push("/");
                window.location.reload();
            })
            .catch(() => {
                setHasNotError(false);
                setIsLoading(false);
            });
    };

    const onEnterPassword = (event) => {
        if (event.key === "Enter") loginHandle();
    };
    const onEnterUsername = (event) => {
        if (event.key === "Enter") loginHandle();
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <form className="form-container col-md-8 col-lg-6 col-xl-5 mb-5">
                <div style={{ textAlign: "center" }}>
                    <i className="far fa-smile fa-5x mb-3"></i>
                    <p style={{ fontSize: "3rem" }}> Đăng nhập</p>
                </div>
                <div className="sign-in-container">
                    <div className="form-group">
                        <label htmlFor=""> Username: </label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            onChange={getUsername}
                            onKeyUp={onEnterUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> Password: </label>
                        <input
                            type="password"
                            className="form-control  custom-input"
                            onChange={getPassword}
                            onKeyUp={onEnterPassword}
                        />
                    </div>
                    <div
                        className={classNames("alert alert-danger mt-4", { "d-none": hasNotError })}
                        role="alert"
                    >
                        {errorMessage.message}
                    </div>
                    <button
                        type="button"
                        className="btn btn-block btn-primary submit-btn"
                        onClick={loginHandle}
                    >
                        {" "}
                        <div className={classNames({ "spinner-border": isLoading })}></div>&nbsp;
                        Đăng nhập
                    </button>

                    <div className="mt-3">
                        Chưa có tài khoản? &nbsp;
                        <Link to="/register">
                            <span className="register">Đăng ký</span>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
