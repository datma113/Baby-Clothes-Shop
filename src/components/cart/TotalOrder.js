import { React } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTotalOfOrder } from "../../redux/actions/actCart";
const TotalOrder = () => {
    const currentProductInCart = useSelector((state) => state.cart);

    console.log(currentProductInCart);
    const getTotalOrder = currentProductInCart.reduce((a, b) => {
        return a + b.price * b.quantity;
    }, 0);

    const getTotalOrderToString = getTotalOrder.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
    });
    return (
        <div className="container mt-5">
            <div className=" d-flex align-items-end flex-column">
                <div className="total-price-title">Tổng thành tiền: </div>
                <p className="total-price"> {getTotalOrderToString}</p>
                <button type="button" class="btn btn-primary total-price-btn">Mua hàng</button>
            </div>
        </div>
    );
};

export default TotalOrder;
