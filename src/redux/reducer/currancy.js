import * as types from "../constants/types";

let initialState = {};

let reducer = (state = initialState, action) => {
    if (action.type === types.CONVERT_CURRANCY) {
        let currency = action.currency;

        let price = currency.price;
        let discountPrice = currency.price * (1 - currency.discount);
      
        currency.price = price.toLocaleString("vi", { style: "currency", currency: "VND" });
        currency.discount = discountPrice.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
        });
        state = currency;
        return state;
    }
    return state;
};

export default reducer;
