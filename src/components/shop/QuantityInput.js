import React, { useState } from "react";

import {useDispatch} from 'react-redux'
import {saveCurrentQuantity} from '../../redux/actions/index'

const QuantityInput = ({ txtCurrentStock }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()


    const changeQuantity = (sign) => {
       
        return sign === "-" ? setQuantity(quantity - 1) : setQuantity(quantity + 1);
    };

    const checkNegative = () => {
        if (quantity < 1) setQuantity(1);
        dispatch(saveCurrentQuantity(quantity))
    };

    const checkOutOfStock = () => {
        if (quantity >= txtCurrentStock) setQuantity(txtCurrentStock);
        dispatch(saveCurrentQuantity(quantity))

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
