import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {setShortDescForUpdate, setLongDescForUpdate } from '../../redux/actions/actAdmin'
const Up_Description = ({desc}) => {
     const [descClone, setdescClone] = useState({})
     const dispatch = useDispatch()
     
     useEffect(() => {
         setdescClone(desc)
         dispatch(setShortDescForUpdate({shortDesc: desc.shortDesc}))
         dispatch(setLongDescForUpdate({longDesc: desc.longDesc}))
     }, [desc])
     
    const {shortDesc, longDesc} = descClone

    const saveValueAndStoreShortDesc = (e) => {
          setdescClone({...descClone, shortDesc: e.target.value});
          dispatch(setShortDescForUpdate({shortDesc: e.target.value}))
    }
    
    const saveValueAndStoreLongDesc = (e) => {
     setdescClone({...descClone, longDesc: e.target.value});
     dispatch(setLongDescForUpdate({longDesc: e.target.value}))

}


    return (
        <div className="row" style={{paddingTop:`5rem`}}>
            <div className="form-group col-lg-4">
                <label htmlFor="">Mô tả sơ lược:</label>
                <textarea
                    className="form-control add-product-right-text-area"
                    rows="5"
                    value={shortDesc}
                    placeholder="Nhập mô tả của bạn"
                    onChange={saveValueAndStoreShortDesc}
                ></textarea>
            </div>
            <div className="form-group col-lg-8">
                <label htmlFor="">Mô tả Chi tiết:</label>
                <textarea
                    className="form-control add-product-right-text-area"
                    rows="5"
                    value={longDesc}
                    placeholder="Nhập mô tả của bạn"
                    onChange={saveValueAndStoreLongDesc}          
                ></textarea>
            </div>
        </div>
    );
};

export default Up_Description;
