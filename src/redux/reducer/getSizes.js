import * as types from '../constants/types'

let initSizes = []


let reducer = (state = initSizes, action) => {

     if(action.type === types.SET_SIZES) {
          let newState = [...state]
          newState = action.sizes
          return newState
     }

     return state;
}
export default reducer