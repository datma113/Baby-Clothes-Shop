import {SET_PRODUCT_BY_CATEGORY} from '../constants/types'
import axios from 'axios'

export const setProductByCategory = product => {
     return {
          type: SET_PRODUCT_BY_CATEGORY,
          product
     }
}
export const getProductByCategory = (type) => {
     const url = `http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/product/category/?q=${type}`
     return dispatch => {
          return axios.get(url)
          .then(res => {
               dispatch(setProductByCategory(res.data))
          })
          .catch(err => {
               console.log(err)
          })
     }
}