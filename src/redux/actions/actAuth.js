import * as types from "../constants/types";

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

export const register = (name, phone, gmail, account) => {
    return (dispatch) => {
        return AuthServices.register(name, phone, gmail, account).then(
            (resp) => {
                dispatch({
                    type: types.REGISTER_SUCCESS,
                });

                dispatch({
                    type: types.SET_MESSAGE,
                    payload: resp.data.message,
                });
                return Promise.resolve();
            },
            (err) => {
                const mess =
                    (err.response && err.response.data && err.response.data.message) ||
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


export const logout = () => {
    return (dispatch) => {
        AuthServices.logout();

        dispatch({
            type: types.LOGOUT,
        });
    };
};
