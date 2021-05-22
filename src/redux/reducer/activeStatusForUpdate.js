import { UP_SET_ACTIVE } from "../constants/types";

let initialStatus = false;

const reducer = (state = initialStatus, action) => {
    const { active, type } = action;
    
    if (type === UP_SET_ACTIVE) {
        state = active;
        return state;
    }
  
    return state;
};

export default reducer;
