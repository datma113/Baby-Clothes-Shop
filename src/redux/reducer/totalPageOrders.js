import { SET_TOTAL_PAGE_ORDERS } from "../constants/types";

let initialPage = 0;

let reducer = (state = initialPage, action) => {
    let { type, number } = action;

    switch (type) {
        case SET_TOTAL_PAGE_ORDERS:
            return number;
        default:
            return state;
    }
};

export default reducer;
