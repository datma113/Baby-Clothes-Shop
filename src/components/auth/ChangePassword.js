import React from "react";
import classNames from "classnames";

const ChangePassword = ({ user }) => {

     
    const hasNotError = () => {
        return false;
    };

    const placeHoder = ["Nhập mật khẩu cũ", "Nhập mật khẩu mới", "Xác nhận mật khẩu"];

    const placeHoderMap = placeHoder.map((text, index) => {
        return (
            <div class="form-group font-weight-bold" key={index}>
                <input
                    type="password"
                    class="form-control change-password-input"
                    aria-describedby="helpId"
                    placeholder={text}
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
                    className={classNames("alert alert-danger mt-4", { "d-none": hasNotError() })}
                    role="alert"
                >
                    error
                </div>
                <button
                    type="button"
                    class="btn btn-lg btn-warning"
                    aria-pressed="false"
                    autocomplete="off"
                >
                    {" "}
                    xác nhận
                </button>
            </div>
        </div>
    );
};

export default ChangePassword;
