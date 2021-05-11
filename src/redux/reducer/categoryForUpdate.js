import { UP_SET_CATEGORY } from "../constants/types";

let initialCategory = {};

const reducer = (state = initialCategory, action) => {
    const { category, type } = action;
    
    if (type === UP_SET_CATEGORY) {
        state = category;
        return state;
    } 
    return state;
};

export default reducer;
