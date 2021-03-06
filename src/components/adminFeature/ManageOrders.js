import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllOrders, confirmOrder, cancelOder } from "../../redux/actions/actAdmin";
import OrderDetail from "./OrderDetail";


const ManageOrders = () => {
    const animated = "wow animate__animated animate__zoomIn animate__slow";

    const dispatch = useDispatch();
    const allOrders = useSelector((state) => state.allOrders);
    const allOrderPending = useSelector((state) => state.allOrderPending);

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        dispatch(getAllOrders(0, "PENDING"));
        dispatch(getAllOrders(0));
        setpendingClone([...allOrderPending]);
    }, []);

    const [pendingClone, setpendingClone] = useState([]);

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
    const confirmOrderAPI = (order, index) => {
        let tempPen = [...pendingClone];
        tempPen[index] = { ...tempPen[index], showConfirmState: "???? x??c nh???n" };
        setpendingClone(tempPen);

        dispatch(confirmOrder(order))
            .then(() => {
                window.alert(` X??c nh???n th??nh c??ng!`);
            })
            .catch(() => {});
    };

    const showConfirm = (index) => {
        let tempPen = [...pendingClone];
        try {
            return tempPen[index].showConfirmState;
        } catch (error) {
            return "x??c nh???n";
        }
    };
   

    const cancelOrderAPI = (order, index) => {
        let tempPen = [...pendingClone];
        tempPen[index] = { ...tempPen[index], showConfirmState: "???? h???y" };
        setpendingClone(tempPen);

        const obj = {
            id: order.id,
            status: "CANCELED",
        };

        dispatch(cancelOder(obj))
            .then(() => {
                window.alert(` H???y th??nh c??ng!`);
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
                        index={index+allOrders.length}
                    />{" "}
                </td>
                <td
                    className="order-confirm "
                    onClick={() => {
                        confirmOrderAPI(obj, index);
                    }}
                >
                    {showConfirm(index)}
                </td>

                <td
                    className="order-confirm text-danger"
                    onClick={() => {
                        cancelOrderAPI(obj, index);
                    }}
                >
                    {showConfirm(index)}
                </td>
            </tr>
        );
    });

    return (
        <div>
            <p className="add-product-header text-danger">Danh s??ch H??a ????n</p>
            <div className="manage-order-table-container">
                <table className={`table table-hover  text-center manage-order-table ${animated}`}>
                    <thead>
                        <tr className="bg-danger text-light">
                            <th>STT</th>
                            <th>Ng??y l???p</th>
                            <th>PTTT</th>
                            <th>Tr???ng th??i</th>
                            <th>T???ng ti???n</th>
                            <th>Chi ti???t</th>
                        </tr>
                    </thead>
                    <tbody>{allOrdersMap}</tbody>
                </table>
            </div>

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
            <p className="add-product-header text-danger">Danh s??ch H??a ????n ??ang ch??? x??c nh???n</p>
            <div className="manage-order-table-container">
            <table className={`table table-hover  text-center manage-order-table ${animated}`}>
                    <thead>
                        <tr className="bg-danger text-light">
                            <th>STT</th>
                            <th>Ng??y l???p</th>
                            <th>PTTT</th>
                            <th>T???ng ti???n</th>
                            <th>Chi ti???t</th>
                            <th>X??c nh???n</th>
                            <th>H???y</th>
                        </tr>
                    </thead>
                    <tbody>{allOrderPendingMap}</tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;
