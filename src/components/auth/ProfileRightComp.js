import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Dashboard from "./Dashboard";
import OrderHistory from "./OrderHistory";
import UserInfo from "./UserInfo";
import ChangePassword from "./ChangePassword";

import { logout } from "../../redux/actions/actAuth";

const ProfileRightComp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem(`user`));

    const indexOfProfile = useSelector((state) => state.profileIndex);

    if (indexOfProfile === 4) {
        dispatch(logout());
        history.push("/");
        window.location.reload();
    }

    useEffect(() => {}, []);

    return (
        <div className="right-profile-container">
            {indexOfProfile === 0 && !user.roles.includes(`ROLE_ADMIN`) && (
                <Dashboard name={user.customer.name} />
            )}
            {indexOfProfile === 1 && <UserInfo user={user} />}
            {indexOfProfile === 2 && <OrderHistory user={user} />}
            {indexOfProfile === 3 && <ChangePassword user={user} />}
        </div>
    );
};

export default ProfileRightComp;
