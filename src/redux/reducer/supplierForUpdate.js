import { UP_SET_SUPPLIER } from "../constants/types";

let initialImages = [];

const reducer = (state = initialImages, action) => {
    const { supplier, type } = action;
    
    if (type === UP_SET_SUPPLIER) {
        state = supplier;
        return state;
    } 
    return state;
};

export default reducer;
