import React from "react";

const UserInfo = ({ user }) => {
    return (
        <div>
            <div className="profile-user-info" style={{fontSize:`2.5rem`}}>
                <span className="" >
                    {" "}
                    <i className="fas fa-user icon-login"></i>{" "}
                </span>
                <span>{user.username}</span>
            </div>
            <div className="profile-user-info mt-5">
                <span className="profile-user-info-title">Họ tên </span>
                <span>: {user.customer.name}</span>
            </div>
            <div className="profile-user-info">
                <span className="profile-user-info-title">Email </span>
                <span>: {user.customer.email}</span>
            </div>
            <div className="profile-user-info">
                <span className="profile-user-info-title">Số điện thoại </span>
                <span>: {user.customer.phone}</span>
            </div>
            <div className="profile-user-info">
                <span className="profile-user-info-title">Địa chỉ giao hàng </span>
                <span>: {user.customer.address}</span>
            </div>
        </div>
    );
};

export default UserInfo;
