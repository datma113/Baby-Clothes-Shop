import * as types from "../constants/types";

let initState = [];

let reducer = (state = initState, action) => {
    if (action.type === types.SET_FILTER_PRODUCT) {
        state = action.products.products;
        return state;
    }

    if (action.type === types.SET_ALL_PRODUCTS) {
        state = action.products.products;
        return state;
    }
    return state;
};

export default reducer;
