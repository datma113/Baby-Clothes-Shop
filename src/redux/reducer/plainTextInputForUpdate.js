import { UP_SET_PLAIN_TEXT_INPUT } from "../constants/types";

let initialPlainText = {};

const reducer = (state = initialPlainText, action) => {
    const { plainTexts, type } = action;
    
    if (type === UP_SET_PLAIN_TEXT_INPUT) {
        state = plainTexts;
        return state;
    }
  
    return state;
};

export default reducer;
