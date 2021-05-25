import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Dashboard from "./Dashboard";
import OrderHistory from "./OrderHistory";
import UserInfo from "./UserInfo";
import ChangePassword from "./ChangePassword";
import Logout from './Logout'

const ProfileRightComp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem(`user`));

    const indexOfProfile = useSelector((state) => state.profileIndex);

    // if (indexOfProfile === 4) {
    //     dispatch(logout());

    // }

    const checkRoleUser = (indexOfProfile) => {
        if (indexOfProfile === 0 && user) return !user.roles.includes(`ROLE_ADMIN`) ? true : false;
    };

    useEffect(() => {}, []);

    return (
        <div className="right-profile-container">
            {checkRoleUser(indexOfProfile) && <Dashboard name={user.customer.name} />}
            {indexOfProfile === 1 && <UserInfo  />}
            {indexOfProfile === 2 && <OrderHistory user={user} />}
            {indexOfProfile === 3 && <ChangePassword user={user} />}
            {indexOfProfile === 4 && <Logout  />}
        </div>
    );
};

export default ProfileRightComp;
