import {combineReducers} from 'redux'

import toggleNav from './toggleNav'
import getProductList from './getProductList'
import getProductDetail from './getProductDetail'
import getColors from './getColors'
import getSizes from './getSizes'
import getFeaturedProduct from './getFeaturedProduct'
import getSizeAndQuantityStock from './getSizeAndQuantityStock'
import currency from './currancy'

import auth from './auth'
import message from './message'
let reducer = combineReducers({
     toggleNav,
     getProductList,
     getProductDetail,
     getColors,
     getSizes,
     getFeaturedProduct,
     getSizeAndQuantityStock,
     auth,
     message,
     currency
})

export default reducer