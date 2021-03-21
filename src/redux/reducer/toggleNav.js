import * as types from '../constants/types'
let initState = true


let reducer = (state = initState, action) => {
     if( action.type === types.TOGGLE_NAV )
          state = !state
     else if( action.type === types.WINDOW_RESIZE ) {
          state = false
     }
          
     return state
}

export default reducer