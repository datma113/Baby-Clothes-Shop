import React from 'react'

import {useSelector} from 'react-redux'
const Up_SubmitBtn = () => {
     const plainTextInputForUpdate = useSelector(state => state.plainTextInputForUpdate)
     const imagesForUpdate = useSelector(state => state.imagesForUpdate)
     const shortDescForUpdate = useSelector(state => state.shortDescForUpdate)
     const longDescForUpdate = useSelector(state => state.longDescForUpdate)
     const supplierForUpdate = useSelector(state => state.supplierForUpdate)
     const categoryForUpdate = useSelector(state => state.categoryForUpdate)
     const test = () => {
          console.log(plainTextInputForUpdate)
          console.log(imagesForUpdate)
          console.log(shortDescForUpdate)
          console.log(longDescForUpdate)
          console.log(supplierForUpdate)
          console.log(categoryForUpdate)
     }
 
     return (
          <div>
               <button className="btn btn-dark" onClick={() => test()}>submit</button>
          </div>
     )
}

export default Up_SubmitBtn
