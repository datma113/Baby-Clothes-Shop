import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Background from "../Background";
import Card from "./adminComponents/Card";

const Admin = () => {
    const history = useHistory();

    const cards = [
        { sign: "+", title: "Thêm sản phẩm", icon: "fas fa-suitcase", bgColor: "info", color: "light" },
        { sign: "*", title: "Hiển thị DSSP", icon: "fas fa-list", bgColor: "success", color: "light" },
        { sign: "U", title: "Tài khoản khách hàng", icon: "fas fa-user-plus", bgColor: "warning", color: "dark" },
        { sign: "T", title: "Thống kê", icon: "fas fa-chart-pie", bgColor: "danger", color: "light" },
    ];

    const cardsMap = cards.map((card, index) => {
        return (
            <div className={`col-md-3`} key={index}>
                <Card
                    sign={card.sign}
                    title={card.title}
                    icon={card.icon}
                    bgColor={card.bgColor}
                    color={card.color}
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
        </div>
    );
};

export default Admin;
