import classNames from "classnames";
import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addOrder } from "../../redux/actions/actCart";
import { setProductInCart } from "../../redux/actions/actCart";

const TotalOrder = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentProductInCart = useSelector((state) => state.cart);

    const user = JSON.parse(localStorage.getItem(`user`));

    let paymentMethod = "COD";
    const shipcode = [
        { name: "Tại cửa hàng", type: "STORE" },
        { name: "Lúc nhận hàng", type: "COD" },
    ];

    const createOrders = () => {
        let orders = [];
        /**
         * create data which backend needed
         */
        currentProductInCart.map((order) => {
            orders.push({
                quantity: order.quantity,
                price: order.price,
                subProductId: order.subProductId,
            });
        });
        return orders;
    };

    const checkPaymentMethod = (type) => {
        paymentMethod = type;
    };

    const shipcodeMap = shipcode.map((code, index) => {
        return (
            <div className="form-check radio-ship-address" key={index}>
                <label className="form-check-label">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="shipcode"
                        id=""
                        value="COD"
                        defaultChecked
                        onClick={() => checkPaymentMethod(code.type)}
                    />
                    {code.name}
                </label>
            </div>
        );
    });

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

    const orderHandling = () => {
        const orders = createOrders();
        
       /**
        * try creare order and add order to database
        * in case error throw alert: login with user role
        */
        try {
            let order = {
                shipAddress: user.customer.address,
                paymentMethod: paymentMethod,
                customerId: user.customer.id,
                orderDetails: orders,
            };
            dispatch(addOrder(order))
                .then(() => {
                    dispatch(setProductInCart([]));
                    sessionStorage.removeItem(`LIST_ITEM`);
                    window.alert(` Đặt hàng thành công!`);
                    history.push("/profile");
                })
                .catch(() => {
                    console.log(` thất bại`);
                });
        } catch (error) {
            window.alert(`Vui lòng đăng nhập bằng tài khoản user!`)
        }

        /**
         * add order and remove item in sessionStorage
         */
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3">
                    <p>Phương thức thanh toán</p>
                    {shipcodeMap}
                </div>

                <div className="col-lg-9 d-flex align-items-end flex-column">
                    <div className="total-price-title">Tổng thành tiền: </div>
                    <p className="total-price"> {getTotalOrderToString}</p>
                    <button
                        type="button"
                        className={classNames("btn btn-primary total-price-btn", {
                            disabled: checkIsEmptyCart(),
                        })}
                        onClick={() => orderHandling(paymentMethod)}
                    >
                        Mua hàng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TotalOrder;
