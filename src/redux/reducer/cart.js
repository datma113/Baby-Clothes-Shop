import {
    SET_PRODUCT_IN_CART,
    REMOVE_PRODUCT_IN_CART,
    
} from "../constants/types";

let initialProducts = [];

let reducer = (state = initialProducts, action) => {
    const { type, products, index } = action;
    switch (type) {
        case SET_PRODUCT_IN_CART:
            state = products;
            return state;

        case REMOVE_PRODUCT_IN_CART:
            let newState = [...state];
            newState.splice(index, 1);
            return newState;
        default:
            return state;
    }
};

export default reducer;
