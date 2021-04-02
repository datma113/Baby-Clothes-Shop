import * as types from '../constants/types'

let proDuctDetail = {}

let reducer = (state = proDuctDetail, action) => {
     let newState = {...state}

     if( action.type === types.SET_PRODUCT_DETAIL ) {
          newState = action.productDetail
          return newState
     }

     return state;
}

export default reducer