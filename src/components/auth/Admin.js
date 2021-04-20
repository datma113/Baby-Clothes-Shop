import React, {useEffect} from 'react'
import {  useHistory } from 'react-router-dom'

const Admin = () => {
     const history = useHistory();
          
     useEffect(() => {
        const user = JSON.parse(localStorage.getItem(`user`))
     
        if(user && !user.roles.includes(`ROLE_ADMIN`) || !user)
          history.push(`/not-found`);
        

     }, [])


     return (
          <div className="admin-container">
               sadasd
          </div>
     )
}

export default Admin
