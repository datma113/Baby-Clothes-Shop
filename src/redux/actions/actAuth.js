import * as types from "../constants/types";
import axios from "axios";

import AuthServices from "../services/auth";

export const login = (userName, password) => {
    return (dispatch) => {
        return AuthServices.login(userName, password).then(
            (data) => {
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    payload: { user: data },
                });

                return Promise.resolve();
            },
            (err) => {
                const message =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();

                dispatch({
                    type: types.LOGIN_FAIL,
                });

                dispatch({
                    type: types.SET_MESSAGE,
                    payload: message,
                });
                return Promise.reject();
            }
        );
    };
};

export const register = (userName, email, password) => {
    return (dispatch) => {
        return AuthServices.register(userName, email, password).then(
            (resp) => {
                dispatch({
                    type: types.REGISTER_SUCCESS,
                });

                dispatch({
                    types: types.SET_MESSAGE,
                    payload: resp.data.message,
                });
                return Promise.resolve();
            },
            (err) => {
                const mess =
                    (err.data && err.data.response && err.data.response.message) ||
                    err.message ||
                    err.toString();

                dispatch({
                    type: types.REGISTER_FAIL,
                });

                dispatch({
                    type: types.SET_MESSAGE,
                    payload: mess,
                });
                return Promise.reject();
            }
        );
    };
};


