import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrderHistory } from "../../redux/actions/actProfile";

const OrderHistory = ({ user }) => {
    const dispatch = useDispatch();
    const orderHistory = useSelector((state) => state.orderHistory);

    const showOrderDetail = (id) => {
          
    };

    const listOrderMap = orderHistory.map((order, index) => {
        return (
            <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td> {order.orderDate.slice(0, 10)} </td>
                <td> {order.paymentMethod} </td>
                <td>
                    {" "}
                    {order.total.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                    })}{" "}
                </td>
                <td className="show-order-detail" onClick={() => showOrderDetail(order.id)}>Xem</td>
            </tr>
        );
    });

    useEffect(() => {
        dispatch(getOrderHistory(user.id));
    }, []);

    return (
        <div>
            <table className="table table-bordered table-hover">
                <thead className="bg-warning text-center">
                    <tr>
                        <th>Stt</th>
                        <th>Ngày lập hd</th>
                        <th>Phương thức</th>
                        <th>Tổng thành tiền</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>{listOrderMap}</tbody>
            </table>
        </div>
    );
};

export default OrderHistory;
