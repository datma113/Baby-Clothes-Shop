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


export const setProductByID = (product) => {
     return {
          type: types.SET_PRODUCT_BY_ID,
          product
     }
}


export const getProductByID = (id) => {
     const url = `http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/product/${id}`
     return dispatch => {
          return axios.get(url)
          .then( res => {
               dispatch(setProductByID(res.data))
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

export const setSizesAndQuantityInStock = (data) => {
     return {
          type: types.SET_SIZE_AND_QUANTITY_STOCK,
          data
     }
}


export const getSizesAndQuantityInStock = (id, color) => {
     const url = `http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/product/size-and-inventory?id=${id}&color=${color}`
     return dispatch => {
          return axios.get(url)
          .then( res => {
               dispatch(setSizesAndQuantityInStock(res.data))
          })
          .catch( err =>{
               console.log(err)
          })
     }
}

export const saveCurrentQuantity = (quantity) => {
     return {
          type: types.SAVE_CURRENT_QUANTITY,
          quantity
     }
}
