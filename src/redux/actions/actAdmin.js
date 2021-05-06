import axios from "axios";
import {
    CHANGE_ADMIN_PAGE,
    SET_SUPPLIER,
    SET_CATEGORY,
    SET_MESSAGE_ADD_SUPPLIER,
    SET_MESSAGE_ADD_CATEGORY,
    SET_MESSAGE_ADD_PRODUCT
} from "../constants/types";

export const changeAdminPage = (index) => {
    return {
        type: CHANGE_ADMIN_PAGE,
        index,
    };
};

export const setSuppliers = (suppliers) => {
    return {
        type: SET_SUPPLIER,
        suppliers,
    };
};

export const getSuppliers = () => {
    const url = "http://localhost:8080/quan-ao-tre-em/api/suppliers";
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                dispatch(setSuppliers(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const addSupplier = (name, email, phone, address) => {
    const url = "http://localhost:8080/quan-ao-tre-em/api/supplier";
    return (dispatch) => {
        return axios
            .post(url, {
                name,
                email,
                phone,
                address,
            })
            .then((resp) => {
                dispatch({
                    type: SET_MESSAGE_ADD_SUPPLIER,
                    payload: resp.data.message,
                });
                return Promise.resolve();
            })
            .catch((err) => {
                const message =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();

                dispatch({
                    type: SET_MESSAGE_ADD_SUPPLIER,
                    payload: message,
                });
                return Promise.reject();
            });
    };
};

export const setCategories = (categories) => {
    return {
        type: SET_CATEGORY,
        categories,
    };
};

export const getCategories = () => {
    const url = "http://localhost:8080/quan-ao-tre-em/api/categories";
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                dispatch(setCategories(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};


export const addCategory = (name) => {
     const url = "http://localhost:8080/quan-ao-tre-em/api/category";
     return (dispatch) => {
         return axios
             .post(url, {
                 name
             })
             .then((resp) => {
                 dispatch({
                     type: SET_MESSAGE_ADD_CATEGORY,
                     payload: resp.data.message,
                 });
                 return Promise.resolve();
             })
             .catch((err) => {
                 const message =
                     (err.response && err.response.data && err.response.data.message) ||
                     err.message ||
                     err.toString();
 
                 dispatch({
                     type: SET_MESSAGE_ADD_CATEGORY,
                     payload: message,
                 });
                 return Promise.reject();
             });
     };
 };

 export const addProduct = (product) => {
     const url = "http://localhost:8080/quan-ao-tre-em/api/product"
     return dispatch => {
         return axios
         .post(url, product)
         .then(resp => {
            
            dispatch({
                type: SET_MESSAGE_ADD_PRODUCT,
                payload: resp.data.message
            })
            return Promise.resolve();
            
         })
         .catch(err => {
            const mess = 
            err.response && err.response.data && err.response.data.message
            || err.message || err.toString()

            dispatch({
                type: SET_MESSAGE_ADD_PRODUCT,
                payload: mess
            })
         })
     }
 }