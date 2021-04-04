import * as types from '../constants/types'
import axios from 'axios'

export const setHotFP = (hotProducts) => {
     return {
          type: types.SET_HOT_PRODUCT,
          hotProducts
     }
}

export const getHotFP = () => {
     const url = 'http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/product/marker/?marker=HOT'
     return dispatch => {
          return axios.get(url)
          .then( res => {
               dispatch(setHotFP(res.data))
          })
          .catch( err =>{
               console.log(err)
          })
     }
}

export const setSaleOffProducts = (saleProducts) => {
     return {
          type: types.SET_SALE_PRODUCT,
          saleProducts
     }
}

export const getSaleOffProducts = () => {
     const url = 'http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/product/marker/?marker=DIS'
     return dispatch => {
          return axios.get(url)
          .then( res => {
               dispatch(setSaleOffProducts(res.data))
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