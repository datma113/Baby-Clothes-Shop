import React from "react";

const OrderDetail = ({ customer, orderDetail, index }) => {
    
    const orderDetailMap = orderDetail.map((order, index) => {
      

        let totalPrice = order.price * order.quantity;

        totalPrice = totalPrice.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
        });

        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td> {order.subProduct.name} </td>
                <td> {order.quantity} </td>
                <td>
                    {" "}
                    {order.price.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                    })}{" "}
                </td>
                <td> {totalPrice} </td>
            </tr>
        );
    });

    const totalPrice = orderDetail.reduce((a, b) => {
        return a + b.price * b.quantity;
    }, 0);

    return (
        <div>
            <span
                type="button"
                className="us-update-btn text-info"
                data-toggle="modal"
                data-target={`#modelId${index}`}
                onClick={() => console.log(index)}
            >
                Xem
            </span>

            <div
                style={{ marginTop: `10rem` }}
                className="modal fade"
                id={`modelId${index}`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
            >
                <div className="modal-dialog order-detail-modal" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Chi tiết hóa đơn</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="order-detail-customer-info">
                                <div>
                                    <span className="order-detail-customer-info-title">
                                        <b>Tên khách hàng</b>{" "}
                                    </span>
                                    <span>: {customer.name} </span>
                                </div>
                                <div>
                                    <span className="order-detail-customer-info-title">
                                        <b>Địa chỉ</b>{" "}
                                    </span>
                                    <span>: {customer.address} </span>
                                </div>
                                <div>
                                    <span className="order-detail-customer-info-title">
                                        <b>Số điện thoại</b>
                                    </span>
                                    <span>: {customer.phone} </span>
                                </div>
                                <div>
                                    <span className="order-detail-customer-info-title">
                                        <b>Email</b>{" "}
                                    </span>
                                    <span>: {customer.email}</span>
                                </div>
                            </div>
                            <table className="table table-hover text-center mt-5">
                                <thead>
                                    <tr className="bg-danger">
                                        <th>STT</th>
                                        <th>Tên sản phẩm</th>
                                        <th>số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody> {orderDetailMap} </tbody>
                            </table>
                            <div className="order-detail-customer-total">
                                Tổng tiền:{" "}
                                {totalPrice.toLocaleString("vi", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
