import * as types from '../constants/types'

let initColor = []

let reducer = (state = initColor, action) => {
     let newState = [...state]
     if(action.type === types.SET_COLORS) {
          newState = action.colors
          return newState
     }
     return state;
}

export default reducer