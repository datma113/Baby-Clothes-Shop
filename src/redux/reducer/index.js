import {combineReducers} from 'redux'

import toggleNav from './toggleNav'
import getProductList from './getProductList'
import getProductDetail from './getProductDetail'
import getColors from './getColors'
import getSizes from './getSizes'
import getFeaturedProduct from './getFeaturedProduct'
import getSizeAndQuantityStock from './getSizeAndQuantityStock'

let reducer = combineReducers({
     toggleNav,
     getProductList,
     getProductDetail,
     getColors,
     getSizes,
     getFeaturedProduct,
     getSizeAndQuantityStock
})

export default reducer