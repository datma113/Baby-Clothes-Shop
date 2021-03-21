import * as types from '../constants/types'

export const toggleNav = () => {
     return {
          type: types.TOGGLE_NAV
     }
}

export const resizeWindow = () => {
     return {
          type: types.WINDOW_RESIZE
     }
}