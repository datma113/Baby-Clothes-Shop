import { SET_ALL_PRODUCTS_FOR_MANAGE } from "../constants/types";

let initProduct = [];

let reducer = (state = initProduct, action) => {
    let { type, products } = action;
    let newState = [...state];

    switch (type) {
        case SET_ALL_PRODUCTS_FOR_MANAGE:
            newState = products.products;
            return newState;
        default:
            return state;
    }
};

export default reducer;
