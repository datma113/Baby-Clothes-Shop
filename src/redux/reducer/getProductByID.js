import * as types from "../constants/types";

let initialProduct = {};

let reducer = (state = initialProduct, action) => {
    let newState = { ...state };

    if (action.type === types.SET_PRODUCT_BY_ID) {
        newState = action.product;
       
        const categoryName = newState.category.name

        newState = {...newState,
            category: categoryName
        }
          /**
           * convert discount and price
           * toString origin price and sell price to VND currancy
           */
        let sellPrice = newState.price * (1 - newState.discount);
        
        newState = {
            ...newState,
            originPriceToString: newState.price.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
            }),
            sellPriceToString: sellPrice.toLocaleString("vi", { style: "currency", currency: "VND" }),
        };
        return newState;
    }

    return state;
};

export default reducer;
