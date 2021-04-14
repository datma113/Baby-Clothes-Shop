import {
    SET_PRODUCT_IN_CART,
    REMOVE_PRODUCT_IN_CART,
    GET_PRODUCT_IN_CART
} from "../constants/types";

export const setProductInCart = (products) => {
    return {
        type: SET_PRODUCT_IN_CART,
        products,
    };
};

export const getProductInCart = () => {
    return {
        type: GET_PRODUCT_IN_CART,
    };
};

export const removeProductInCart = (products, index) => {
    return {
        type: REMOVE_PRODUCT_IN_CART,
        products,
        index,
    };
};

