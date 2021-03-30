import * as types from '../constants/types'
import axios from 'axios'

export const toggleNav = () => {
     return {
          type: types.TOGGLE_NAV
     }
}

export const resizeWindow = () => {
     return {
          type: types.WINDOW_RESIZE
     }
}

export const setProductList = list => {
     return {
          type: types.SET_LIST_PRODUCT,
          list
     }
}

export const getProductList = () => {
     const url = 'http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/products'
     return dispatch => {
          return axios.get(url)
          .then( res => {
               dispatch(setProductList(res.data))
          })
          .catch( err =>{
               console.log(err)
          })
     }
}