import classNames from "classnames";
import { React, useState } from "react";
import { useSelector } from "react-redux";

const TotalOrder = () => {
    const currentProductInCart = useSelector((state) => state.cart);
    const [isEmptyCart, setIsEmptyCart] = useState(true);

    const getTotalOrder = currentProductInCart.reduce((a, b) => {
        return a + b.price * b.quantity;
    }, 0);

    const checkIsEmptyCart = () => {
        return getTotalOrder === 0 ? true : false;
    };


    const getTotalOrderToString = getTotalOrder.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
    });
    return (
        <div className="container mt-5">
            <div className=" d-flex align-items-end flex-column">
                <div className="total-price-title">Tổng thành tiền: </div>
                <p className="total-price"> {getTotalOrderToString}</p>
                <button
                    type="button"
                    className={classNames("btn btn-primary total-price-btn", {
                        disabled: checkIsEmptyCart(),
                    })}
                >
                    Mua hàng
                </button>
            </div>
        </div>
    );
};

export default TotalOrder;
