import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Background from "../Background";
import AddProduct from '../adminFeature/AddProduct'
import ManageProducts from '../adminFeature/ManageProducts'
import ManagerSuppliers from '../adminFeature/ManageSuppliers'
import ManagerAccounts from '../adminFeature/ManageAccounts'
import ManageOrders from '../adminFeature/ManageOrders'
import ManageCategory from '../adminFeature/ManageCategory'

import Card from "./Card";

const Admin = () => {
    const animated = "wow animate__animated animate__zoomIn ";


    const history = useHistory();
    const currentAdminPage = useSelector((state) => state.currentAdminPage);

    const cards = [
        {
            sign: "+",
            title: "Thêm sản phẩm",
            icon: "fas fa-suitcase",
            bgColor: "info",
            color: "light",
        },
        {
            sign: "*",
            title: "Hiển thị DSSP",
            icon: "fas fa-list",
            bgColor: "success",
            color: "light",
        },
        {
            sign: "U",
            title: "Tài khoản khách hàng",
            icon: "fas fa-user",
            bgColor: "warning",
            color: "dark",
        },
        {
            sign: "T",
            title: "Thống kê hóa đơn",
            icon: "fas fa-chart-pie",
            bgColor: "danger",
            color: "light",
        },
        {
            sign: "S",
            title: "Quản lý NCC",
            icon: "fas fa-people-carry",
            bgColor: "secondary",
            color: "light",
        },
        {
            sign: "C",
            title: "Quản lý Loại SP",
            icon: "fas fa-people-carry",
            bgColor: "dark",
            color: "light",
        }
    ];

    const cardsMap = cards.map((card, index) => {
        return (
            <div className={`col-sm-6 col-md-6 col-lg-4 mb-3 col-xl-3 ${animated}`} key={index}>
                <Card
                    sign={card.sign}
                    title={card.title}
                    icon={card.icon}
                    bgColor={card.bgColor}
                    color={card.color}
                    index={index}
                />
            </div>
        );
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(`user`));
        /**
         * check role admin
         */
        if ((user && !user.roles.includes(`ROLE_ADMIN`)) || !user) history.push(`/not-found`);
    }, []);

    return (
        <div className="admin-container">
            <Background text="-Quản trị-" />
            <div className="container">
                <div className="row">{cardsMap}</div>
            </div>
            <div className="container">
                <div className="admin-split"> </div>
            </div>
            <div className="container">
               {currentAdminPage === 0 && <AddProduct />}
               {currentAdminPage === 1 && <ManageProducts />}
               {currentAdminPage === 2 && <ManagerAccounts />}
               {currentAdminPage === 3 && <ManageOrders />}
               {currentAdminPage === 4 && <ManagerSuppliers />}
               {currentAdminPage === 5 && <ManageCategory />}
               
            </div>
        </div>
    );
};

export default Admin;
