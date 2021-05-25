import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { logout } from "../../redux/actions/actAuth";

const Logout = () => {
     const history = useHistory();
    const dispatch = useDispatch();
    const logoutHandle = () => {
        dispatch(logout());
        history.push("/");
        window.location.reload();
    };
    return (
        <div>
            <div>Bạn có muốn đăng xuất không?</div>
            <br></br>
            <button
                type="button"
                class="btn btn-warning btn-lg text-light"
                onClick={() => logoutHandle()}
            >
                Đăng xuất
            </button>
        </div>
    );
};

export default Logout;
