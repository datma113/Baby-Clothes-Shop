import { SET_ALL_PRODUCT_IN_SHOP, SET_TOTAL_PAGE_PRODUCTS } from "../constants/types";
import axios from "axios";

export const setListProduct = (product) => {
    return {
        type: SET_ALL_PRODUCT_IN_SHOP,
        product,
    };
};
export const getAllProduct = (obj) => {
    if(obj.sortBy.length !== 0)
        obj.sortBy = obj.sortBy + `-`;
    const url = `http://localhost:8080/quan-ao-tre-em/api/product/search/?q=${obj.query}&sort=${obj.sortBy}${obj.type}&page=${obj.page}`;
  
    return (dispatch) => {
        return axios    
            .get(url)
            .then((res) => {
                dispatch(setListProduct(res.data));
                dispatch(setCurrentPageProducts(res.data.totalPages))
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
export const setCurrentPageProducts = (number) => {
    return {
        type: SET_TOTAL_PAGE_PRODUCTS,
        number
    }
}


