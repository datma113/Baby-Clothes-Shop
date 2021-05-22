import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { getAllAccounts } from "../../redux/actions/actAdmin";

const ManageAccounts = () => {
    const dispatch = useDispatch();
    const allAccounts = useSelector((state) => state.allAccounts);

    const allAccountMap = allAccounts.map((account, index) => {
     

        return (
            <tr key={index} style={{fontSize:`1.5rem`}}>
                <th> {index + 1} </th>
                <th>{account.username} </th>
                <th>{account.customer.name} </th>
                <th>{account.customer.phone} </th>
                <th> <Link to={`/admin/account/${account.customer.id}`} className="text-dark"> Xem </Link> </th>
            </tr>
        );
    });

    useEffect(() => {
        dispatch(getAllAccounts());
    }, []);

    return (
        <div className="customer-account-table-container">
            <p className="add-product-header text-warning">Quản lý tài khoản khách hàng</p>
            <table className="table table-hover table-striped text-center customer-account-table">
                <thead className="bg-warning">
                    <tr>
                         <th>STT</th>
                        <th>Tải khoản</th>
                        <th>Tên KH</th>
                        <th>Số Điện Thoại</th>
                        <th>Hóa đơn đã lập</th>
                    </tr>
                </thead>
                <tbody>{allAccountMap}</tbody>
            </table>
        </div>
    );
};

export default ManageAccounts;
