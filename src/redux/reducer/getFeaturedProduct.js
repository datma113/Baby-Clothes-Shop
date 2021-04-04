import * as types from '../constants/types'

let initState = []

let reducer = (state = initState, action) => {
     let newState = [...state]

     if(action.type === types.SET_HOT_PRODUCT) {
          newState = action.hotProducts  
          return newState;
     } 

     if(action.type === types.SET_SALE_PRODUCT) {
          newState = action.saleProducts
          return newState;
     } 

     if(action.type === types.SET_ALL_PRODUCTS) {
          newState = action.products
          console.log(`huhuhu`)
          return newState;
     } 


     return state;
}

export default reducer