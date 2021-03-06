import {combineReducers} from 'redux'
import getProductList from './getProductList'
import getProductByID from './getProductByID'
import getColors from './getColors'
import getSizes from './getSizes'
import getFeaturedProduct from './getFeaturedProduct'
import getSizeAndQuantityStock from './getSizeAndQuantityStock'
import allProductInShop from './allProductInShop'
import quantitySaved from './quantitySaved'
import cart from './cart'
import profileIndex from './profileIndex'
import orderHistory from './orderHistory'
import orderDetailHistory from './orderDetailHistory'
import currentAdminPage from './currentAdminPage'
import suppliers from './suppliers'
import categories from './categories'
import messageForAddCategory from './messageForAddCategory'
import messageForAddSupplier from './messageForAddSupplier'
import messageForAddProduct from './messageForAddProduct'
import totalPageProducts from './totalPageProducts'
import totalpageProductsForManage from './totalpageProductsForManage'
import allProductsForManage from './allProductsForManage'
import plainTextInputForUpdate from './plainTextInputForUpdate'
import imagesForUpdate from './imagesForUpdate'
import shortDescForUpdate from './shortDescForUpdate'
import longDescForUpdate from './longDescForUpdate'
import supplierForUpdate from './supplierForUpdate'
import categoryForUpdate from './categoryForUpdate'
import subProductsForUpdate from './subProductsForUpdate'
import messageForUpdateProduct from './messageForUpdateProduct'
import supplierByID from './supplierByID'
import allAccounts from './allAccounts'
import allOrders from './allOrders'
import totalPageOrders from './totalPageOrders'
import allOrderPending from './allOrderPending'
import auth from './auth'
import message from './message'
import categoryByID from './categoryByID'
import activeStatusForUpdate from './activeStatusForUpdate'
let reducer = combineReducers({
     getProductList,
     allProductInShop,
     getProductByID,
     getColors,
     getSizes,
     getFeaturedProduct,
     getSizeAndQuantityStock,
     auth,
     message,
     quantitySaved,
     cart,
     profileIndex,
     orderHistory,
     orderDetailHistory,
     currentAdminPage,
     suppliers,
     categories,
     messageForAddCategory,
     messageForAddSupplier,
     messageForAddProduct,
     totalPageProducts,
     totalpageProductsForManage,
     allProductsForManage,
     plainTextInputForUpdate,
     imagesForUpdate,
     longDescForUpdate,
     shortDescForUpdate,
     supplierForUpdate,
     categoryForUpdate,
     subProductsForUpdate,
     messageForUpdateProduct,
     supplierByID,
     allAccounts,
     allOrders,
     totalPageOrders,
     allOrderPending,
     categoryByID,
     activeStatusForUpdate

})

export default reducer