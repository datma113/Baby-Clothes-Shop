import * as types from '../constants/types'

const user = JSON.parse(localStorage.getItem("user"))

const initialState = user
     ? {isLoggin: true, user}
     : {isLoggin: false, user: null}


const reducer = (state = initialState, action) => {
     const {payload, type} = action;

     switch (type) {
          case types.LOGIN_SUCCESS:
               return {
                    state,
                    isLoggin: true,
                    user: payload.user
               }
          case types.LOGIN_FAIL:
               return {
                    state,
                    isLoggin: false,
                    user: null
               }
          case types.REGISTER_SUCCESS:
               return {
                    state,
                    isLoggin: false,
                    user: null
               }
          case types.REGISTER_FAIL:
               return {
                    state,
                    isLoggin: false,
                    user: null
               }
          case types.LOGOUT:
               return {
                    state,
                    isLoggin: false,
                    user: null
               }
          default:
               return state
     }
}

export default reducer