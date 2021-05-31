import React, { useState } from "react";
import classNames from "classnames";

import { useDispatch, useSelector } from "react-redux";

import { changeUserInfo } from "../../redux/actions/actProfile";

const UserInfo = () => {
    const animated = "wow animate__animated animate__zoomIn ";
    
    const dispatch = useDispatch();
    let user = JSON.parse(localStorage.getItem(`user`));

    const placeHolder = [
        { placeholder: "Họ tên", name: "name" },
        { placeholder: "Email", name: "email" },
        { placeholder: "Số điện thoại", name: "phone" },
        { placeholder: "Địa chỉ", name: "address" },
    ];

    const errorMessage = useSelector((state) => state.message);
    const [plainTextObject, setplainTextObject] = useState({
        name: user.username,
        email: user.customer.email,
        phone: user.customer.phone,
        address: user.customer.address,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [hasNotError, setHasNotError] = useState(true);

    const getInputOfUser = (event) => {
        setplainTextObject({ ...plainTextObject, [event.target.name]: event.target.value });
    };

    const updateUserInfoHandling = () => {
        setIsLoading(true);
        dispatch(
            changeUserInfo(
                user.customer.id,
                plainTextObject.name,
                plainTextObject.email,
                plainTextObject.phone,
                plainTextObject.address
            )
        )
            .then(() => {
                //save user in localStorage after updated
                user = {
                    ...user,
                    customer: {
                        ...user.customer,
                        name: plainTextObject.name,
                        email: plainTextObject.email,
                        phone: plainTextObject.phone,
                        address: plainTextObject.address,
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

    const placeHoderMap = placeHolder.map((item, index) => {
        let value = "";

        switch (index) {
            case 0:
                value = plainTextObject.name;
                break;
            case 1:
                value = plainTextObject.email;
                break;
            case 2:
                value = plainTextObject.phone;
                break;
            case 3:
                value = plainTextObject.address;
                break;
            default:
                break;
        }
        return (
            <div className="form-group font-weight-bold" key={index}>
                <input
                    type="text"
                    className="form-control change-password-input"
                    aria-describedby="helpId"
                    placeholder={item.placeholder}
                    name={item.name}
                    value={value}
                    onKeyUp={onKeyEnter}
                    onChange={(event) => {
                        getInputOfUser(event, index);
                    }}
                />
            </div>
        );
    });

    return (
        <div className={animated}>
            <div className={`profile-user-info`} style={{ fontSize: `2.5rem` }}>
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
                <span className="profile-user-info-title">Địa chỉ </span>
                <span>: {user.customer.address}</span>
            </div>
            <button
                type="button"
                className="btn btn-warning btn-lg mt-3"
                data-toggle="modal"
                data-target="#modelId"
            >
                Cập nhật
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
