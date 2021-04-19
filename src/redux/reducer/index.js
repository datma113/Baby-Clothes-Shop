import {combineReducers} from 'redux'
import getProductList from './getProductList'
import getProductByID from './getProductByID'
import getColors from './getColors'
import getSizes from './getSizes'
import getFeaturedProduct from './getFeaturedProduct'
import getSizeAndQuantityStock from './getSizeAndQuantityStock'
import shopProductFilter from './shopProductFilter'
import quantitySaved from './quantitySaved'
import cart from './cart'

import auth from './auth'
import message from './message'
let reducer = combineReducers({
     getProductList,
     shopProductFilter,
     getProductByID,
     getColors,
     getSizes,
     getFeaturedProduct,
     getSizeAndQuantityStock,
     auth,
     message,
     quantitySaved,
     cart
})

export default reducer