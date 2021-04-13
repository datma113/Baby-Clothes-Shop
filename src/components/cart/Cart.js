import {React} from 'react'


import Background from '../Background'
import ProductInCart from './ProductInCart'
import TotalOrder from './TotalOrder'



const Cart = () => {
     return (
          <div>
               <Background text="-Giỏ hàng-"/>
               <div>
                    <ProductInCart />
                    <TotalOrder />
               </div>
              
          </div>
     )
}

export default Cart
