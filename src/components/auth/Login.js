import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/actAuth";

import { Link } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    let username = "";
    let password = "";
    let loading = false;

    const getUsername = (event) => {
        username = event.target.value;
    };
    const getPassword = (event) => {
        password = event.target.value;
    };

    const loginHandle = (event) => {
        loading = true;
        //validation

        //call api
        dispatch(login(username, password))
            .then(() => {
                history.push("/");
                window.location.reload();
            })
            .catch(() => {
                loading = false;
            });
    };

    const onFocusPassword = (event) => {
        if (event.key === "Enter") loginHandle();
    };
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
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> Password: </label>
                        <input
                            type="password"
                            className="form-control  custom-input"
                            onChange={getPassword}
                            onKeyUp={onFocusPassword}
                        />
                    </div>
                    <div className="alert alert-danger mt-4" role="alert">
                        Throw lỗi regex ở đây!
                    </div>
                    <button
                        type="button"
                        className="btn btn-block btn-primary submit-btn"
                        onClick={loginHandle}
                    >
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
