import { AC_SET_ACCOUNTS } from "../constants/types";

let initialAccounts = [];

let reducer = (state = initialAccounts, action) => {
    let { type, accounts } = action;

    switch (type) {
        case AC_SET_ACCOUNTS:
           state = accounts
            return state;
        default:
            return state;
    }
};

export default reducer;
