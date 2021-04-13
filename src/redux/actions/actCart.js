import {
    SET_PRODUCT_IN_CART,
    REMOVE_PRODUCT_IN_CART,
    GET_TOTAL_OF_ORDER,
} from "../constants/types";

export const setProductInCart = (products) => {
    return {
        type: SET_PRODUCT_IN_CART,
        products,
    };
};

export const removeProductInCart = (products, index) => {
    return {
        type: REMOVE_PRODUCT_IN_CART,
        products,
        index,
    };
};

export const getTotalOfOrder = (products) => {
    return {
        type: GET_TOTAL_OF_ORDER,
        products,
    };
};
