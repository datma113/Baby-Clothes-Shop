import * as types from '../constants/types'
import axios from 'axios'

export const setHotFP = (hotProduct) => {
     return {
          type: types.SET_HOT_PRODUCT,
          hotProduct
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