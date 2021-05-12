import { UP_SET_SUBPRODUCTS } from "../constants/types";

let initialSubproducts = [];

const reducer = (state = initialSubproducts, action) => {
    const { subProducts, type } = action;

    if (type === UP_SET_SUBPRODUCTS) {
        state = subProducts;
        return state;
    }
    return state;
};

export default reducer;
