import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import {
    getAllOrders,
    confirmOrder,
    spliceOrder,
    setAllOrdersPending,
} from "../../redux/actions/actAdmin";
import OrderDetail from "./OrderDetail";
const ManageOrders = () => {
    const dispatch = useDispatch();
    const allOrders = useSelector((state) => state.allOrders);
    const allOrderPending = useSelector((state) => state.allOrderPending);
    const [currentPage, setCurrentPage] = useState(0);
    const history = useHistory();


    useEffect(() => {
        dispatch(getAllOrders(0));
        dispatch(getAllOrders(0, "PENDING"));
    }, []);

    const totalPageOrders = useSelector((state) => state.totalPageOrders);
    let totalPageOrdersArr = [...Array(totalPageOrders)];

    const updateCurrentpage = (index) => {
        setCurrentPage(index);
    };

    const isCurrentPage = (index) => {
        return currentPage === index ? "active" : "";
    };
    const changeCurrentPageOfProducts = (index) => {
        dispatch(getAllOrders(index));
        window.scrollTo(0, 500);
    };

    const goPreviousPage = () => {
        let validNumber = currentPage - 1;

        if (validNumber >= 0) {
            setCurrentPage(validNumber);

            dispatch(getAllOrders(validNumber));
            window.scrollTo(0, 700);
        }
    };

    const goNextPage = () => {
        let validNumber = currentPage + 1;

        if (validNumber < totalPageOrders) {
            setCurrentPage(validNumber);

            dispatch(getAllOrders(validNumber));
            window.scrollTo(0, 700);
        }
    };

    const paginationsMap = totalPageOrdersArr.map((x, index) => {
        return (
            <li
                key={index}
                className={`page-item  ${isCurrentPage(index)}`}
                onClick={() => {
                    changeCurrentPageOfProducts(index);
                    updateCurrentpage(index);
                }}
            >
                <a style={{ cursor: `pointer` }} className="page-link mr-2">
                    {index + 1}
                </a>
            </li>
        );
    });
    /**
     * complete order
     */
    const allOrdersMap = allOrders.map((order, index) => {
        return (
            <tr key={index}>
                <td> {index + 1} </td>
                <td> {order.orderDate} </td>
                <td> {order.paymentMethod} </td>
                <td> {order.status} </td>

                <td>
                    {" "}
                    {order.total.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                    })}{" "}
                </td>
                <td>
                    {" "}
                    <OrderDetail
                        customer={order.customer}
                        orderDetail={order.orderDetails}
                        index={index}
                    />{" "}
                </td>
            </tr>
        );
    });
    /**
     * pending order
     */

    const a = []

    a[10] = "c"


    const confirmOrderAPI = (order, index) => {
          console.log(a[10])
          
          dispatch(confirmOrder(order))
              .then(() => {
                  window.alert(` Xác nhận thành công!`);
              })
              .catch(() => {});
    };


    const allOrderPendingMap = allOrderPending.map((order, index) => {
        const obj = {
            id: order.id,
            status: "COMPLETED",
        };

        return (
            <tr key={index}>
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
                    <OrderDetail
                        customer={order.customer}
                        orderDetail={order.orderDetails}
                        index={index}
                    />{" "}
                </td>
                <td
                    className="order-confirm "
                    onClick={() => {
                        confirmOrderAPI(obj, index);
                        
                    }}
                >
                   {` xác nhận `}
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
                        <th>Trạng thái</th>
                        <th>Tổng tiền</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>{allOrdersMap}</tbody>
            </table>
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <li
                        className="page-item mr-2"
                        style={{ cursor: `pointer` }}
                        onClick={() => goPreviousPage()}
                    >
                        <a className="page-link">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {paginationsMap}
                    <li className="page-item" onClick={() => goNextPage()}>
                        <a className="page-link">
                            <span aria-hidden="true" style={{ cursor: `pointer` }}>
                                &raquo;
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            <hr className="mt-5" />
            <p className="add-product-header text-danger">Danh sách Hóa đơn đang chờ xác nhận</p>

            <table className="table table-hover table-striped text-center ">
                <thead>
                    <tr className="bg-danger text-light">
                        <th>STT</th>
                        <th>Ngày lập</th>
                        <th>PTTT</th>
                        <th>Tổng tiền</th>
                        <th>Chi tiết</th>
                        <th>.</th>
                    </tr>
                </thead>
                <tbody>{allOrderPendingMap}</tbody>
            </table>
        </div>
    );
};

export default ManageOrders;
