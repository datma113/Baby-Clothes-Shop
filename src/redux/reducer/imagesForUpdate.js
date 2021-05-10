import { UP_SET_IMAGES } from "../constants/types";

let initialImages = [];

const reducer = (state = initialImages, action) => {
    const { images, type } = action;
    
    if (type === UP_SET_IMAGES) {
        state = images;
        return state;
    } 
    return state;
};

export default reducer;
