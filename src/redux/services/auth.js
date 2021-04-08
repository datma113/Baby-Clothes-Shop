import axios from 'axios'
import * as types from '../constants/types'

const url = 'http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/auth/'

class AuthServices {
     login(userName, password) {
          return axios
          .post(`${url}signin`, {
               userName,
               password
          })
          .then( res => {
               if( res.data.accessToken ) {
                    localStorage.setItem("user", JSON.stringify(Response.data))
               }
               return res.data;
          })
     }

     logout() {
          localStorage.removeItem("user")
     }

     register(userName, email, password) {
          return axios
          .post(`${url}signup`, {
               userName,
               email,
               password
          })
     }
}

export default new AuthServices()