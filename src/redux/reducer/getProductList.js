import * as types from '../constants/types'
let initState = []

let reducer = (state = initState, action) => {

     if(action.type === types.SET_LIST_PRODUCT) {
          let newState = [...state]
          newState = action.list
          return newState
     }

     return state;
}
export default reducer