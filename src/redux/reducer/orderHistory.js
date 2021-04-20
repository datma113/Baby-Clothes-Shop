import { SET_ORDER_HISTORY } from "../constants/types";

let initialIndex = [];

const reducer = (state = initialIndex, action) => {
    const { order, type } = action;

    if (type === SET_ORDER_HISTORY) {
          state = order.orders
          console.log(state)
          return state;
    }
  
    return state;
};

export default reducer;
