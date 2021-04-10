import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../../redux/actions/actAuth";

import { Link } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    let newRegister = {
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
    };

    let loading = false;

    const getUsername = (event) => {
        newRegister.username = event.target.value;
    };
    const getPassword = (event) => {
        newRegister.password = event.target.value;
    };
    const getEmail = (event) => {
        newRegister.email = event.target.value;
    };
    const getConfirmpassword = (event) => {
        newRegister.confirmPassword = event.target.value;
    };

    const registerhandle = (event) => {
        loading = true;
        //validation

        //call api
        dispatch(register(newRegister.username, newRegister.email, newRegister.password))
            .then(() => {
                window.alert(`Đăng ký thành công`);
                history.push("/");
                window.location.reload();
            })
            .catch((err) => {
               console.log(err)
               console.log(`loi~ sml`)
                loading = false;
            });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <form className="form-container col-md-8 col-lg-6 col-xl-5 mb-5">
                <div style={{ textAlign: "center" }}>
                    <i className="far fa-smile fa-5x mb-3"></i>
                    <p style={{ fontSize: "3rem" }}> Đăng ký</p>
                </div>
                <div className="sign-in-container">
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
                    <div className="alert alert-danger mt-4" role="alert">
                        Throw lỗi regex ở đây!
                    </div>
                    <button
                        type="button"
                        className="btn btn-block btn-primary submit-btn"
                        onClick={registerhandle}
                    >
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
