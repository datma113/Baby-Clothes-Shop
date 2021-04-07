import React,{useState} from 'react'

const QuantityInput = () => {
     const [quantity, setQuantity] = useState(0)

     const changeQuantity = (sign) => {
          return sign === '-' ? setQuantity(quantity-1) : setQuantity(quantity+1)
     }
     const checkNegative = () => {
          if(quantity < 0)
               setQuantity(0)
     }
     
     return (
          <div className="quantity-input-container">
               <span className="incr-decr" onClick={() => changeQuantity("-")}>-</span>
               <span><input type="text" value={quantity}  readOnly onChange={checkNegative()}/></span>
               <span className="incr-decr" onClick={() => changeQuantity("+")}>+</span>
          </div>
     )
}

export default QuantityInput
