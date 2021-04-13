import { SET_PRODUCT_BY_CATEGORY, SORTING_PRODUCT_BY_NAME } from "../constants/types";
import axios from "axios";

export const setProductByCategory = (product) => {
    return {
        type: SET_PRODUCT_BY_CATEGORY,
        product,
    };
};
export const getProductByCategory = (type) => {
    const url = `http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/product/category/?q=${type}`;
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                dispatch(setProductByCategory(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};


export const sortingProductByName = (product) => {
     return {
         type: SORTING_PRODUCT_BY_NAME,
         product,
     };
 };
 export const getSortingProductByName = (type) => {
     const url = `http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/products?sort=name-${type}`;
     return (dispatch) => {
         return axios
             .get(url)
             .then((res) => {
                 dispatch(sortingProductByName(res.data));
             })
             .catch((err) => {
                 console.log(err);
             });
     };
 };
