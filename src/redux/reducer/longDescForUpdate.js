import { UP_SET_LONG_DESC } from "../constants/types";

let initialImages = [];

const reducer = (state = initialImages, action) => {
    const { longDesc, type } = action;
    
    if (type === UP_SET_LONG_DESC) {
        state = longDesc;
        return state;
    } 
    return state;
};

export default reducer;
