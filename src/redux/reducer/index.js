import {combineReducers} from 'redux'

import toggleNav from './toggleNav'
import getProductList from './getProductList'

let reducer = combineReducers({
     toggleNav,
     getProductList,
     
})

export default reducer