import React from "react";
import { useHistory } from "react-router-dom";
import Background from "../Background";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem(`user`));
    const history = useHistory();
    const checkExistUser = () => {
        if (user.customer !== null) {
            return {
                id: user.customer.id,
                username: user.username,
                name: user.customer.name,
                email: user.email,
                phone: user.customer.phone,
            };
        } else {
            return {
                id: null,
                username: user.username,
                email: null,
                phone: null,
            };
        }
    };

    const directToAdmin = () => {
        history.push("/admin");
    };

    return (
        <div>
            <Background text="-Tài khoản của tôi-" />
            <div className="profile-container container">
                <div className="profile-content col-lg-8 row">
                    <div className="col-lg-5">
                        <img src="./img/user-profile.png" className="profile-content-img" />
                    </div>
                    {user.customer && (
                        <div className="col-lg-7 profile-content-profile">
                            <div>
                                <span className="profile-content-title">Tên:</span>
                                <span>{checkExistUser().name}</span>
                            </div>
                            <div>
                                <span className="profile-content-title">Tài khoản:</span>
                                <span>{checkExistUser().username}</span>
                            </div>

                            <div>
                                <span className="profile-content-title">Mật khẩu:</span>
                                <span>********</span>
                            </div>
                            <div>
                                <span className="profile-content-title">Email:</span>
                                <span>{checkExistUser().email}</span>
                            </div>
                            <div>
                                <span className="profile-content-title">Sdt:</span>
                                <span>{checkExistUser().phone}</span>
                            </div>
                        </div>
                    )}
                    {!user.customer && (
                        <div className="col-lg-7 profile-content-profile profile-admin">
                            <p>{checkExistUser().username}</p>
                            <button
                                type="button"
                                className="btn btn-primary profile-admin-btn "
                                data-toggle="button"
                                aria-pressed="false"
                                onClick={() => directToAdmin()}
                            >
                                Quản lý
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
