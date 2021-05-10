import React from 'react'

import {useSelector} from 'react-redux'
const UpdateBtn = () => {
     const plainTextInputForUpdate = useSelector(state => state.plainTextInputForUpdate)

     const test = () => {
          console.log(plainTextInputForUpdate)
     }
 
     return (
          <div>
               <button className="btn btn-dark" onClick={() => test()}>submit</button>
          </div>
     )
}

export default UpdateBtn
