import {SAVE_CURRENT_QUANTITY} from '../constants/types'

let initQuantity = 0

let reducer = (state = initQuantity, action) => {

     let {quantity, type} = action

     if( type === SAVE_CURRENT_QUANTITY ) {
          state = quantity
          return state
     }
     return state
}

export default reducer