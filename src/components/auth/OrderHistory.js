import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrderHistory, getOrderDetailHistory } from "../../redux/actions/actProfile";
import OrderDetailHistory from "./OrderDetailHistory";

const OrderHistory = ({ user }) => {
    const animated = "wow animate__animated animate__zoomIn ";
    
    const dispatch = useDispatch();
    const orderHistory = useSelector((state) => state.orderHistory);

    const orderDetailHistory = useSelector(state => state.orderDetailHistory)


    const showOrderDetail = (id) => {
        dispatch(getOrderDetailHistory(id));
    };

    const listOrderMap = orderHistory.map((order, index) => {
        return (
            <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td> {order.orderDate.slice(0, 10)} </td>
                <td> {order.paymentMethod} </td>
                <td> {order.status} </td>

                <td>
                    {" "}
                    {order.total.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                    })}{" "}
                </td>
                <td className="show-order-detail">
                    <span
                        className="text-dark show-order-detail-btn"
                        data-toggle="modal"
                        data-target="#modelId"
                        onClick={() => showOrderDetail(order.id)}
                    >
                        xem
                    </span>

                    <div
                        className="modal fade"
                        id="modelId"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="modelTitleId"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-body text-dark">
                                    <OrderDetailHistory orderDetailHistory={orderDetailHistory}/>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-dismiss="modal"
                                    >
                                        ????ng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        );
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getOrderHistory(user.customer.id));
    }, []);

    return (
        <div>
            <table className={`table table-bordered table-hover ${animated}`}>
                <thead className="bg-warning text-center">
                    <tr>
                        <th>Stt</th>
                        <th>Ng??y l???p hd</th>
                        <th>Ph????ng th???c</th>
                        <th>tr???ng th??i</th>
                        <th>T???ng th??nh ti???n</th>
                        <th>Chi ti???t</th>
                    </tr>
                </thead>
                <tbody>{listOrderMap}</tbody>
            </table>
        </div>
    );
};

export default OrderHistory;
