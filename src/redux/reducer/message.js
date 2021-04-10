import * as types from "../constants/types";

const initialState = {};

const reducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case types.SET_MESSAGE:
            return {
                message: payload,
            };
        case types.CLEAR_MESSAGE:
            return {
                message: "",
            };
        default:
            return state;
    }
};

export default reducer;
