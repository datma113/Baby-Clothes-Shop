import * as types from '../constants/types'

let initState = []

let reducer = (state = initState, action) => {
     let newState = [...state]
     if(action.type === types.SET_HOT_PRODUCT) {
          console.log(`unbelievable!`)
          return newState
     }
     return state;
}

export default reducer