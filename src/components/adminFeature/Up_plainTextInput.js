import React, { useState, useEffect } from "react";
import classnames from "classnames";

const UP_plainTextInput = ({ plainTextOldValue }) => {
   
     
    const [clone, setClone] = useState({})

    useEffect(() => {
         setClone(plainTextOldValue)      
    }, [plainTextOldValue])

  
    return (
        <div className="row">
            {/* name */}
            <div className="form-group col-lg-6 add-product-right-txt-container">
                <input
                    type="text"
                    className="add-product-right-txt-input"
                    placeholder="Tên sản phẩm"
                    value={clone.name}
                    onChange={(e) => {   
                        setClone({...clone, [e.target.name]: e.target.value})
                    }}
                    name="name"
                />
                <span
                    className={classnames(
                        "badge badge-secondary add-product-right-txt-badge badge-success",
                        { "d-none": true }
                    )}
                >
                    Tên sản phẩm
                </span>
            </div>
            
        </div>
    );
};

export default UP_plainTextInput;
