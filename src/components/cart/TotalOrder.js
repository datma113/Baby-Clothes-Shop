import classNames from "classnames";
import { React } from "react";
import { useSelector, useDispatch } from "react-redux";

const TotalOrder = () => {
    const dispatch = useDispatch()
    const currentProductInCart = useSelector((state) => state.cart);
     
    const getTotalOrder = currentProductInCart.reduce((a, b) => {
        return a + b.price * b.quantity;
    }, 0);

    console.log(getTotalOrder)

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
