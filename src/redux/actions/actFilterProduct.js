import { SET_PRODUCT_BY_CATEGORY, SORTING_PRODUCT_BY_KEYWORD } from "../constants/types";
import axios from "axios";

export const setProductByCategory = (product) => {
    return {
        type: SET_PRODUCT_BY_CATEGORY,
        product,
    };
};
export const getProductByCategory = (type) => {
    const url = `http://localhost:8080/quan-ao-tre-em/api/product/category/?q=${type}`;
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


export const sortingProductByKeyword = (product) => {
     return {
         type: SORTING_PRODUCT_BY_KEYWORD,
         product,
     };
 };
 export const getSortingProductByKeyword = (type, keyword) => {
     const url = `http://localhost:8080/quan-ao-tre-em/api/products?sort=${keyword}-${type}`;
     return (dispatch) => {
         return axios
             .get(url)
             .then((res) => {
                 dispatch(sortingProductByKeyword(res.data));
             })
             .catch((err) => {
                 console.log(err);
             });
     };
 };
