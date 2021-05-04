import {SET_MESSAGE_ADD_SUPPLIER} from "../constants/types";

const initialState = {};

const reducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case SET_MESSAGE_ADD_SUPPLIER:
            return {
                message: payload,
            };    
        default:
            return state;
    }
};

export default reducer;
