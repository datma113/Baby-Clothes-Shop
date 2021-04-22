import React, { useState } from "react";
import classNames from "classnames";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { changeUserInfo } from "../../redux/actions/actProfile";

const UserInfo = () => {
    const dispatch = useDispatch();
    let user = JSON.parse(localStorage.getItem(`user`));

    const placeHoder = ["Họ tên", "Email", "Số điện thoại", "Địa chỉ giao hàng"];

    const errorMessage = useSelector((state) => state.message);
    const [name, setName] = useState(user.username);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [hasNotError, setHasNotError] = useState(true);

    const getInputOfUser = (event, index) => {
        switch (index) {
            case 0:
                setName(event.target.value);
                break;
            case 1:
                setEmail(event.target.value);
                break;
            case 2:
                setPhone(event.target.value);
                break;
            case 3:
                setAddress(event.target.value);
                break;
            default:
                return;
        }
    };

    const updateUserInfoHandling = () => {
        setIsLoading(true);
        dispatch(changeUserInfo(user.customer.id, name, email, phone, address))
            .then(() => {
                //save user in localStorage after updated
                user = {
                    ...user,
                    customer: {
                        ...user.customer,
                        name,
                        email,
                        phone,
                        address,
                    },
                };

                localStorage.setItem(`user`, JSON.stringify(user));
                window.alert(` thành công`);
                window.location.reload();
            })
            .catch(() => {
                setIsLoading(false);
                setHasNotError(false);
            });
    };

    const onKeyEnter = (event) => {
        if (event.key === "Enter") updateUserInfoHandling();
    };

    const placeHoderMap = placeHoder.map((text, index) => {
        return (
            <div className="form-group font-weight-bold" key={index}>
                <input
                    type="text"
                    className="form-control change-password-input"
                    aria-describedby="helpId"
                    placeholder={text}
                    onKeyUp={onKeyEnter}
                    onChange={(event) => {
                        getInputOfUser(event, index);
                    }}
                />
            </div>
        );
    });

    return (
        <div>
            <div className="profile-user-info" style={{ fontSize: `2.5rem` }}>
                <span className="">
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
            <button
                type="button"
                className="btn btn-warning btn-lg mt-3"
                data-toggle="modal"
                data-target="#modelId"
            >
                sữa
            </button>

            <div
                className="modal fade"
                id="modelId"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sữa thông tin</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body p-5">{placeHoderMap}</div>
                        <div
                            className={classNames("alert alert-danger mt-4", {
                                "d-none": hasNotError,
                            })}
                            role="alert"
                        >
                            {errorMessage.message}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={updateUserInfoHandling}
                            >
                                <div
                                    className={classNames({
                                        "spinner-border text-light": isLoading,
                                    })}
                                ></div>
                                &nbsp; Lưu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
