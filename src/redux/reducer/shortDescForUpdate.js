import { UP_SET_SHORT_DESC } from "../constants/types";

let initialImages = [];

const reducer = (state = initialImages, action) => {
    const { shortDesc, type } = action;
    
    if (type === UP_SET_SHORT_DESC) {
        state = shortDesc;
        return state;
    } 
    return state;
};

export default reducer;
