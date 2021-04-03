import {combineReducers} from 'redux'

import toggleNav from './toggleNav'
import getProductList from './getProductList'
import getProductDetail from './getProductDetail'
import getColors from './getColors'
import getSizes from './getSizes'
import getFeaturedProduct from './getFeaturedProduct'

let reducer = combineReducers({
     toggleNav,
     getProductList,
     getProductDetail,
     getColors,
     getSizes,
     getFeaturedProduct
})

export default reducer