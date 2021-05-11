import { UP_SET_SUPPLIER } from "../constants/types";

let initialSupplier = {};

const reducer = (state = initialSupplier, action) => {
    const { supplier, type } = action;
    
    if (type === UP_SET_SUPPLIER) {
        state = supplier;
        return state;
    } 
    return state;
};

export default reducer;
