import {SET_SUPPLIER_BY_ID} from "../constants/types";

let initialSupplier = {};

let reducer = (state = initialSupplier, action) => {
     
     const {type, supplier} = action

    if (type === SET_SUPPLIER_BY_ID) {
          state = supplier
          return state;       
    }

    return state;
};

export default reducer;
