import React, {useState} from "react";

import { useDispatch, useSelector } from "react-redux";
import { saveCurrentQuantity } from "../../redux/actions/index";
import { setProductInCart } from "../../redux/actions/actCart";
import { useHistory } from "react-router";

const QuantityInput = ({ currentStock, currentQuantity, keyID }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(currentQuantity);
    const products = useSelector((state) => state.cart);

    const changeQuantity = (sign) => {
        /**
         * check each product
         * if correct key then update current quantity
         * and update current stock
         */
        products.forEach((element) => {
            if (element.key === keyID && sign === "+" && element.quantity < element.currentStock) {
                element.quantity++;
                sessionStorage.setItem(`LIST_ITEM`, JSON.stringify(products));
                dispatch(setProductInCart(products));    
                history.push("/cart")
            } 
            if(element.key === keyID && sign === "-" && element.quantity > 1 ) {
                element.quantity--;
                sessionStorage.setItem(`LIST_ITEM`, JSON.stringify(products));
                dispatch(setProductInCart(products));    
                history.push("/cart")
            }
        });
       
        return sign === "-" ? setQuantity(quantity - 1) : setQuantity(quantity + 1);
        
    };

    const checkNegative = () => {
        if (quantity < 1) setQuantity(1);
        dispatch(saveCurrentQuantity(quantity));
    };

    const checkOutOfStock = () => {
        if (quantity >= currentStock) setQuantity(currentStock);
        dispatch(saveCurrentQuantity(quantity));
    };

    
   
    return (
        <div className="quantity-input-container">
            <span className="incr-decr" onClick={() => changeQuantity("-")}>
                -
            </span>
            <span>
                <input type="text" value={quantity} readOnly onChange={checkNegative()} />
            </span>
            <span
                className="incr-decr"
                onClick={() => {
                    changeQuantity("+");
                    checkOutOfStock();
                }}
            >
                +
            </span>
        </div>
    );
};

export default QuantityInput;
