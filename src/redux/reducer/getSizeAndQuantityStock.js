import * as types from '../constants/types'

let init = []

let reducer = (state = init, action) => {
     let newState = [...state]
     if(action.type === types.SET_SIZE_AND_QUANTITY_STOCK) {
          newState = action.data
          return newState
     }
     return state;
}

export default reducer