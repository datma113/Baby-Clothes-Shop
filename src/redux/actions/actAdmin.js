import axios from 'axios'
import {CHANGE_ADMIN_PAGE, SET_SUPPLIER, GET_SUPPLIER} from '../constants/types'


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