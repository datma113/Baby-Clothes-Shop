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


/**
 * 
 * product and productdetail
 */
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

export const setProductDetail = (productDetail) => {
     return {
          type: types.SET_PRODUCT_DETAIL,
          productDetail
     }
}


export const getProductDetail = (id) => {
     const url = `http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/product/${id}`
     return dispatch => {
          return axios.get(url)
          .then( res => {
               dispatch(setProductDetail(res.data))
          })
          .catch( err =>{
               console.log(err)
          })
     }
}

export const setColors = (colors) => {
     return {
          type: types.SET_COLORS,
          colors
     }
}


export const getColors = (id) => {
     const url = `http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/product/colors/${id}`
     return dispatch => {
          return axios.get(url)
          .then( res => {
               dispatch(setColors(res.data))
          })
          .catch( err =>{
               console.log(err)
          })
     }
}

export const setSizes = (sizes) => {
     return {
          type: types.SET_SIZES,
          sizes
     }
}

export const getSizes = (id) => {
     const url = `http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/product/sizes/${id}`
     return dispatch => {
          return axios.get(url)
          .then( res => {
               dispatch(setSizes(res.data))
          })
          .catch( err =>{
               console.log(err)
          })
     }
}

