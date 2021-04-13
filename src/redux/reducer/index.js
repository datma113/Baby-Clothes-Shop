import {combineReducers} from 'redux'

import toggleNav from './toggleNav'
import getProductList from './getProductList'
import getProductByID from './getProductByID'
import getColors from './getColors'
import getSizes from './getSizes'
import getFeaturedProduct from './getFeaturedProduct'
import getSizeAndQuantityStock from './getSizeAndQuantityStock'
import shopProductFilter from './shopProductFilter'
import quantitySaved from './quantitySaved'

import auth from './auth'
import message from './message'
let reducer = combineReducers({
     toggleNav,
     getProductList,
     shopProductFilter,
     getProductByID,
     getColors,
     getSizes,
     getFeaturedProduct,
     getSizeAndQuantityStock,
     auth,
     message,
     quantitySaved
})

export default reducer