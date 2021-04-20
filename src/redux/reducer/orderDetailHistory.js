import { SET_ORDER_DETAIL_HISTORY } from "../constants/types";

let initialOrders = [];

const reducer = (state = initialOrders, action) => {
    const { orders, type } = action;

    if (type === SET_ORDER_DETAIL_HISTORY) {
          state = orders
          return state;
    }
  
    return state;
};

export default reducer;
