import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllOrders } from "../../redux/actions/actAdmin";
import OrderDetail from "./OrderDetail";
const ManageOrders = () => {
    const dispatch = useDispatch();
    const allOrders = useSelector((state) => state.allOrders);
    useEffect(() => {
        dispatch(getAllOrders(0));
    }, []);

    const allOrdersMap = allOrders.map((order, index) => {
        return (
            <tr>
                <td> {index + 1} </td>
                <td> {order.orderDate} </td>
                <td> {order.paymentMethod} </td>
                <td>
                    {" "}
                    {order.total.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                    })}{" "}
                </td>
                <td>
                    {" "}
                    <OrderDetail customer={order.customer} orderDetail={order.orderDetails} index={index}/>{" "}
                </td>
            </tr>
        );
    });

    return (
        <div>
            <p className="add-product-header text-danger">Danh sách Hóa đơn</p>
            <table className="table table-hover table-striped text-center ">
                <thead>
                    <tr className="bg-danger text-light">
                        <th>STT</th>
                        <th>Ngày lập</th>
                        <th>PTTT</th>
                        <th>Tổng tiền</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>{allOrdersMap}</tbody>
            </table>
        </div>
    );
};

export default ManageOrders;
