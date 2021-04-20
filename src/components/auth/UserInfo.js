import React from 'react'

const UserInfo = ({user}) => {
     console.log(user)
     return (
          <div>
               <div className="profile-user-info">
                    <span className="profile-user-info-title">Họ tên: </span>
                    <span>{user.customer.name}</span>
               </div>
          </div>
     )
}

export default UserInfo
