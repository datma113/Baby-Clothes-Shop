import {SET_CATEGORY}  from '../constants/types'

let initialSuppliers = []

let reducer = (state = initialSuppliers, action) => {
     let newState = [...state]
     const {type, categories} = action;

     if(type === SET_CATEGORY) {
          newState = categories
          return newState
     }
     return state;
}

export default reducer