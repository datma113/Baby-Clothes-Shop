import axios from "axios";
import {
    UPDATE_PROFILE_INDEX,
    SET_ORDER_HISTORY,
    SET_ORDER_DETAIL_HISTORY,
    SET_MESSAGE
} from "../constants/types";

export const updateIndex = (index) => {
    return {
        type: UPDATE_PROFILE_INDEX,
        index,
    };
};

export const setOrderHistory = (order) => {
    return {
        type: SET_ORDER_HISTORY,
        order,
    };
};

export const getOrderHistory = (id) => {
    const url = `http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/orders/customer/${id}`;
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                dispatch(setOrderHistory(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};


export const setOrderDetailHistory = (orders) => {
    return {
        type: SET_ORDER_DETAIL_HISTORY,
        orders
    };
};

export const getOrderDetailHistory = (id) => {
    const url = `http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/order-detail/order/${id}`
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                dispatch(setOrderDetailHistory(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
}

export const changePassword = (username, oldPassword, newPassword) => {
    const url = `http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/account`
    return dispatch => {
        return axios
        .put(url, {
            username,
            oldPassword,
            newPassword
        })
        .then(resp => {
            dispatch({
                type: SET_MESSAGE,
                payload: resp.data.message
            })

            return Promise.resolve();
        })
        .catch(err => {
            const message = 
            (err.response && err.response.data && err.response.data.message ) ||
            err.message || err.toString();

            dispatch({
                type: SET_MESSAGE,
                payload: message
            })
            return Promise.reject();
        })
    }
}

export const changeUserInfo = (id, name, email, phone, address) => {
    const url = 'http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/customer';
    return dispatch => {
        return axios
        .put(url, {
            id,
            name,
            email,
            phone,
            address
        })
        .then((resp) => {
            dispatch({
                type: SET_MESSAGE,
                payload: resp.data.message
            })

            return Promise.resolve();
        })
        .catch((err) => {
            const message = 
            err.response && err.response.data && err.response.data.message 
            || err.message || err.toString()

            dispatch({
                type: SET_MESSAGE,
                payload: message
            })

            return Promise.reject();
        })
    }    

}
