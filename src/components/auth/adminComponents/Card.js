import React from "react";

const Card = ({ sign, title, icon, bgColor, color }) => {
    return (
        <div className={`admin-cards bg-${bgColor} text-${color}`}>
            <div className="row">
                <div className="col-lg-8">
                    <h1 className="admin-cards-sign"> {sign} </h1>
                    <p className="admin-cards-title"> {title} </p>
                </div>
                <div className="col-lg-4 admin-cards-icon d-flex justify-content-start align-items-center">
                    <i class={icon}></i>
                </div>
            </div>
            <div className="admin-cards-more-info text-light d-flex justify-content-center align-items-center">
                Chọn&nbsp;
                <i class="fas fa-arrow-circle-right"></i>
            </div>
        </div>
    );
};

export default Card;
