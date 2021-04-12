import { SET_PRODUCT_BY_CATEGORY } from "../constants/types";

let initProduct = [];

let reducer = (state = initProduct, action) => {
  
    let newState = [...state];

    if(action.type === SET_PRODUCT_BY_CATEGORY) {
          newState = action.product.products
          return newState
    }
    return state;
};

export default reducer;
