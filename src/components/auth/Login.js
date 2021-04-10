import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/actAuth";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory()

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
                history.push("/")
                window.location.reload();      
            })
            .catch(() => {
                loading = false;
            });
    };
    return (
        <div className="container">
            <form encType="application/json" method="post">
                <div className="form-group">
                    <label htmlFor=""> username </label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        id=""
                        placeholder="username"
                        onChange={getUsername}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor=""> password </label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id=""
                        onChange={getPassword}
                    />
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={loginHandle}>
                    đăng nhập
                </button>
            </form>
        </div>
    );
};

export default Login;
