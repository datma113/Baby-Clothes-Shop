import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Background from "../Background";
import ProfileLeftComp from "../auth/ProfileLeftComp";
import ProfileRightComp from "../auth/ProfileRightComp";

const Profile = () => {
    const history = useHistory();
   
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(`user`));
        if (user.roles.includes(`ROLE_ADMIN`)) history.push("/admin");
    }, []);

    return (
        <div>
            <Background text="-Tài khoản của tôi-" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <ProfileLeftComp />
                    </div>
                    <div className="col-lg-9">
                        <ProfileRightComp />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
