import { SET_PRODUCT_BY_CATEGORY, SORTING_PRODUCT_BY_KEYWORD } from "../constants/types";

let initProduct = [];

let reducer = (state = initProduct, action) => {
    let { type, product } = action;
    let newState = [...state];

    switch (type) {
        case SET_PRODUCT_BY_CATEGORY:
            newState = product.products;
            return newState;
            
        case SORTING_PRODUCT_BY_KEYWORD:
            newState = product.products
            return newState;
        default:
            return state;
    }
};

export default reducer;
