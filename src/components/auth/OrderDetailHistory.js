import React from "react";

const OrderDetailHistory = ({ orderDetailHistory }) => {
    const orderDetailHistoryMap = orderDetailHistory.map((order, index) => {
        let totalEach = order.price * order.quantity;
        totalEach = totalEach.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
        });
        return (
            <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td> {order.subProduct.name} </td>
                <td> {order.quantity} </td>
                <td>
                    {" "}
                    {order.price.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                    })}
                </td>
                <td>{totalEach} </td>
            </tr>
        );
    });

    const totalOrder = orderDetailHistory.reduce((a, b) => {
        return a + b.price * b.quantity;
    }, 0);

    return (
        <div>
            <table className="table table-bordered table-hover">
                <thead className="bg-primary text-center">
                    <tr>
                        <th>Stt</th>
                        <th>tên sản phẩm</th>
                        <th>số lượng</th>
                        <th>đơn giá</th>
                        <th>thành tiền</th>
                    </tr>
                </thead>
                <tbody>{orderDetailHistoryMap}</tbody>
            </table>
            <div className="d-flex flex-column align-items-end pr-5">
                <p>Tổng hóa đơn: </p>
                <p style={{color:`red`, fontSize:`3rem`}}>
                    {" "}
                    {totalOrder.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                    })}{" "}
                </p>
            </div>
        </div>
    );
};

export default OrderDetailHistory;
