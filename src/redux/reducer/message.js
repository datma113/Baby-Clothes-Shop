import {SET_MESSAGE} from "../constants/types";

const initialState = {};

const reducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case SET_MESSAGE:
            return {
                message: payload,
            };
        default:
            return state;
    }
};

export default reducer;
