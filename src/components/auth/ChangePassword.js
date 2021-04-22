import React, { useState } from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { changePassword } from "../../redux/actions/actProfile";

const ChangePassword = ({ user }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    let loading = false;
    //variable for change password
    const errorMessage = useSelector((state) => state.message);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [hasNotError, setHasNotError] = useState(true);

    const placeHoder = ["Nhập mật khẩu cũ", "Nhập mật khẩu mới", "Xác nhận mật khẩu"];

    const changePasswordHandling = () => {
        setIsLoading(true);

        dispatch(changePassword(user.username, oldPassword, newPassword))
            .then(() => {
                setHasNotError(true);
                window.alert(` đổi mật khẩu thành công!`);
                window.location.reload();
            })
            .catch(() => {
                setHasNotError(false);
                setIsLoading(false);
            });
    };

    const getInputOfUser = (event, index) => {
        switch (index) {
            case 0:
                setOldPassword(event.target.value);
                break;
            case 1:
                setNewPassword(event.target.value);
                break;
            case 2:
                setConfirmPassword(event.target.value);
                break;
            default:
                return;
        }
    };

    const placeHoderMap = placeHoder.map((text, index) => {
        return (
            <div className="form-group font-weight-bold" key={index}>
                <input
                    type="password"
                    className="form-control change-password-input"
                    aria-describedby="helpId"
                    placeholder={text}
                    onChange={(event) => {
                        getInputOfUser(event, index);
                    }}
                />
            </div>
        );
    });
    return (
        <div>
            <div className="profile-user-info mb-5" style={{ fontSize: `2.5rem` }}>
                <span className="">
                    {" "}
                    <i className="fas fa-user icon-login"></i>{" "}
                </span>
                <span>Đổi mật khẩu</span>
            </div>

            <div className="col-lg-5">
                {placeHoderMap}

                <div
                    className={classNames("alert alert-danger mt-4", { "d-none": hasNotError })}
                    role="alert"
                >
                    {errorMessage.message}
                </div>
                <button
                    type="button"
                    className="btn btn-lg btn-warning"
                    aria-pressed="false"
                    onClick={changePasswordHandling}
                >
                    <div className={classNames({ "spinner-border text-light": isLoading })}></div>&nbsp; xác
                    nhận
                </button>
            </div>
        </div>
    );
};

export default ChangePassword;
