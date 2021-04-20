import { UPDATE_PROFILE_INDEX } from "../constants/types";

let initialIndex = 0;

const reducer = (state = initialIndex, action) => {
    const { index, type } = action;

    if (type === UPDATE_PROFILE_INDEX) {
        state = index;
        return state;
    }
  
    return state;
};

export default reducer;
