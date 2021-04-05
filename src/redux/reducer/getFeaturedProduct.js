import * as types from '../constants/types'

let initState = []

let reducer = (state = initState, action) => {
     let newState = [...state]

     if(action.type === types.SET_FILTER_PRODUCT) {
          newState = action.products  
          return newState;
     } 


     if(action.type === types.SET_ALL_PRODUCTS) {
          newState = action.products
          return newState;
     } 


     return state;
}

export default reducer