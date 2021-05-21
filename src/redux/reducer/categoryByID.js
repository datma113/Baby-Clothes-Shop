import {SET_CATEGORY_BY_ID} from "../constants/types";

let initialCategory = {};

let reducer = (state = initialCategory, action) => {
     
     const {type, category} = action

    if (type === SET_CATEGORY_BY_ID) {
          state = category
          return state;       
    }

    return state;
};

export default reducer;
