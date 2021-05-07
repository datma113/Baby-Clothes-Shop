import { SET_TOTAL_PAGE_PRODUCTS } from "../constants/types";

let initProduct = 0;

let reducer = (state = initProduct, action) => {
    let { type, number } = action;

    switch (type) {
        case SET_TOTAL_PAGE_PRODUCTS:
            return number;
        default:
            return state;
    }
};

export default reducer;
