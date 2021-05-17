import {SET_MESSAGE_FOR_UPDATE_PRODUCT} from "../constants/types";

const initialState = {};

const reducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case SET_MESSAGE_FOR_UPDATE_PRODUCT:
            return {
                message: payload,
            };    
        default:
            return state;
    }
};

export default reducer;
