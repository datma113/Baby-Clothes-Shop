import { SET_ALL_PRODUCT_IN_SHOP } from "../constants/types";

let initProduct = [];

let reducer = (state = initProduct, action) => {
    let { type, product } = action;
    let newState = [...state];

    switch (type) {
        case SET_ALL_PRODUCT_IN_SHOP:
            newState = product.products;
            return newState;
        default:
            return state;
    }
};

export default reducer;
