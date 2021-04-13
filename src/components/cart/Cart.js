import {React} from 'react'


import Background from '../Background'
import ProductInCart from './ProductInCart'
import TotalOrder from './TotalOrder'



const Cart = () => {
    

     return (
          <div>
               <Background text="-Giỏ hàng-"/>
               <ProductInCart />
               <TotalOrder />
          </div>
     )
}

export default Cart
