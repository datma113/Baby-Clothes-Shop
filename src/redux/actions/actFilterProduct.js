import { SET_ALL_PRODUCT_IN_SHOP } from "../constants/types";
import axios from "axios";

export const setListProduct = (product) => {
    return {
        type: SET_ALL_PRODUCT_IN_SHOP,
        product,
    };
};
export const getAllProduct = (query, sortBy, type, page) => {
    if(sortBy.length !== 0)
        sortBy = sortBy + `-`;
    const url = `http://localhost:8080/quan-ao-tre-em/api/product/category/?q=${query}&sort=${sortBy}${type}&page=${page}`;
    console.log(`url :`,url)
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                dispatch(setListProduct(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};


