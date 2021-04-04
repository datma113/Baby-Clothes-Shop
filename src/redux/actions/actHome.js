import * as types from '../constants/types'
import axios from 'axios'


export const setFilterProducts = (products) => {
     return {
          type: types.SET_FILTER_PRODUCT,
          products
     }
}

export const getFilterProducts = (types) => {
     const url = `http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/product/marker/?marker=${types}`
     return dispatch => {
          return axios.get(url)
          .then( res => {
               dispatch(setFilterProducts(res.data))
          })
          .catch( err =>{
               console.log(err)
          })
     }
}


export const setHomeAllProducts = (products) => {
     return {
          type: types.SET_ALL_PRODUCTS,
          products
     }
}


export const getHomeAllProducts = () => {
     const url = 'http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/product/hot-or-discount'
     return dispatch => {
          return axios.get(url)
          .then( res => {
               dispatch(setHomeAllProducts(res.data))
          })
          .catch( err =>{
               console.log(err)
          })
     }
}