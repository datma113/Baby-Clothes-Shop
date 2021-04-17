import React from "react";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem(`user`));

    
     const checkExistUser = () => {
          if( user.customer!== null ) {
               return {
                    id: user.customer.id,
                    username: user.customer.name,
                    email: user.email,
                    phone: user.customer.phone
               }
          } else {
               return {
                    id: null,
                    username: user.username,
                    email: null,
                    phone: null
               }
          }
     }
   
    return (
        <div className="profile-container container">
            <div className="profile-content col-lg-8 row">
                <div className="col-lg-5">
                    <img src="./img/user-profile.png" className="profile-content-img" />
                </div>
                <div className="col-lg-7 profile-content-profile">
                    <p>{checkExistUser().id}</p>
                    <p>{checkExistUser().username}</p>
                    <p>{checkExistUser().email}</p>
                    <p>{checkExistUser().phone}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
