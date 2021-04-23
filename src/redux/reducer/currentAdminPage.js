import { CHANGE_ADMIN_PAGE } from "../constants/types";

let initialPage = -1;

let reducer = (state = initialPage, action) => {
    const { type, index } = action;

    if (type === CHANGE_ADMIN_PAGE) {
        state = index;
        return state;
    }

    return state;
};

export default reducer;
