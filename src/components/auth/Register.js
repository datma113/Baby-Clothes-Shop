import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../../redux/actions/actAuth";
import classNames from "classnames";

import { Link } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [hasNotError, setHasNotError] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const errorMessage = useSelector((state) => state.message);

    const [newRegister, setNewRegister] = useState({
        name: "",
        phone: "",
        email: "",
        accounts: {
            username: "",
            password: "",
        },
    });

    const getUsername = (event) => {
        setNewRegister({ ...newRegister, accounts: { ...newRegister.accounts, username: event.target.value } });
    };
    const getPassword = (event) => {
        setNewRegister({ ...newRegister, accounts: { ...newRegister.accounts, password: event.target.value } });
    };
    const getEmail = (event) => {
        setNewRegister({ ...newRegister, email: event.target.value });
    };
    const getConfirmpassword = (event) => {};
    const getPhone = (event) => {
        setNewRegister({ ...newRegister, phone: event.target.value });
    };
    const getName = (event) => {
        setNewRegister({ ...newRegister, name: event.target.value });
    };
    const registerhandle = (event) => {
        setIsLoading(true);
        //validation

        //call api
        dispatch(
            register(newRegister.name, newRegister.phone, newRegister.email, newRegister.accounts)
        )
            .then(() => {
                window.alert(`Đăng ký thành công`);
                history.push("/");
                window.location.reload();
            })
            .catch(() => {
                setIsLoading(false);
                setHasNotError(false);
            });
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container d-flex justify-content-center align-items-center ">
            <form className="form-container col-md-8 col-lg-6 col-xl-5 mb-5">
                <div style={{ textAlign: "center" }}>
                    <i className="far fa-smile fa-5x mb-3"></i>
                    <p style={{ fontSize: "3rem" }}> Đăng ký</p>
                </div>
                <div className="sign-in-container">
                    <div className="form-group">
                        <label htmlFor=""> Họ tên: </label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            onChange={getName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> Tài khoản: </label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            onChange={getUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> Mật khẩu: </label>
                        <input
                            type="password"
                            className="form-control  custom-input"
                            onChange={getPassword}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> Xác nhận mật khẩu: </label>
                        <input
                            type="password"
                            className="form-control  custom-input"
                            onChange={getConfirmpassword}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> Email: </label>
                        <input
                            type="text"
                            className="form-control  custom-input"
                            onChange={getEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> Phone: </label>
                        <input
                            type="text"
                            className="form-control  custom-input"
                            onChange={getPhone}
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
                        onClick={registerhandle}
                    >
                        {" "}
                        <div className={classNames({ "spinner-border": isLoading })}></div>&nbsp;
                        Đăng ký tài khoản
                    </button>

                    <div className="mt-3">
                        <Link to="/login">
                            <span className="register">Quay lại</span>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
