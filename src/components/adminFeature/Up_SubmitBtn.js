import React from 'react'

import {useSelector} from 'react-redux'
const Up_SubmitBtn = () => {
     const plainTextInputForUpdate = useSelector(state => state.plainTextInputForUpdate)
     const imagesForUpdate = useSelector(state => state.imagesForUpdate)
     
     const test = () => {
          console.log(plainTextInputForUpdate)
          console.log(imagesForUpdate)
     }
 
     return (
          <div>
               <button className="btn btn-dark" onClick={() => test()}>submit</button>
          </div>
     )
}

export default Up_SubmitBtn
