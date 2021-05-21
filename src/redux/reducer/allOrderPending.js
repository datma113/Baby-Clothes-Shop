import { SET_ALL_ORDERS_PENING } from "../constants/types";

let inittialOrders = [];

let reducer = (state = inittialOrders, action) => {
    let { type, orders } = action;

    switch (type) {
        case SET_ALL_ORDERS_PENING:
           state = orders.orders
            return state;
      
        default:
            return state;
    }
};

export default reducer;
