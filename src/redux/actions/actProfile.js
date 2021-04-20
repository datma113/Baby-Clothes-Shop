import axios from "axios";
import { UPDATE_PROFILE_INDEX, SET_ORDER_HISTORY } from "../constants/types";

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
