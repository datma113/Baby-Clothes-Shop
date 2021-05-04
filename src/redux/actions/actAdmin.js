import axios from 'axios'
import {CHANGE_ADMIN_PAGE, SET_SUPPLIER, SET_MESSAGE} from '../constants/types'



export const changeAdminPage = (index) => {
     return {
          type: CHANGE_ADMIN_PAGE,
          index
     }
}



export const setSuppliers = suppliers => {
     return {
          type: SET_SUPPLIER,
          suppliers
     }
}
export const getSuppliers = () => {
     const url = 'http://localhost:8080/quan-ao-tre-em/api/suppliers'
     return dispatch => {
          return axios
          .get(url)
          .then( res => {
               dispatch(setSuppliers(res.data))
          })
          .catch(err => {
               console.log(err)
          })
     }
}

export const addSupplier = (name, email, phone, address) => {
     const url = 'http://localhost:8080/quan-ao-tre-em/api/supplier'   
     return dispatch => {
          return axios
          .post(url, {
               name,
               email,
               phone,
               address
          })
          .then(resp => {
               dispatch({
                    type: SET_MESSAGE,
                    payload: resp.data.message
               })
               return Promise.resolve();
          })
          .catch(err => {
               const message =
               err.response && err.response.data && err.response.data.message
               || err.message || err.toString();
               
               dispatch({
                    type: SET_MESSAGE,
                    payload: message
               })
               return Promise.reject();
          })
     }
}