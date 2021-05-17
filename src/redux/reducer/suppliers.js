import {SET_SUPPLIER}  from '../constants/types'

let initialSuppliers = []

let reducer = (state = initialSuppliers, action) => {
     let newState = [...state]
     const {type, suppliers} = action;

     if(type === SET_SUPPLIER) {
          newState = suppliers
          return newState
     }
     return state;
}

export default reducer