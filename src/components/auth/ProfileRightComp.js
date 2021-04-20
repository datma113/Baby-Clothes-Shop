import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'

import Dashboard from "./Dashboard";
import OrderHistory from './OrderHistory'
import {logout} from '../../redux/actions/actAuth'

const ProfileRightComp = () => {
     const dispatch = useDispatch()
     const history = useHistory()
    const user = JSON.parse(localStorage.getItem(`user`));

    const indexOfProfile = useSelector((state) => state.profileIndex);

    if(indexOfProfile === 4) {
          dispatch(logout())
          history.push("/")
          window.location.reload();
    }

    return (
        <div className="right-profile-container">
            {indexOfProfile === 0 && <Dashboard name={user.customer.name} />}
            {indexOfProfile === 2 && <OrderHistory user={user} />}
           
        </div>
    );
};

export default ProfileRightComp;
