import * as types from '../constants/types'
let productList = []

let reducer = (state = productList, action) => {

     if(action.type === types.SET_LIST_PRODUCT) {
          let newState = [...state]
          newState = action.list.products
          return newState
     }

     return state;
}
export default reducer