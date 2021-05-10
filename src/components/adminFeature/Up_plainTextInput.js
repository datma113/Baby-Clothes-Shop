import React, { useState, useEffect } from "react";
import classnames from "classnames";

const UP_plainTextInput = ({ plainTextOldValue }) => {
    const [cloneProduct, setcloneProduct] = useState({});

    useEffect(() => {
        setcloneProduct(plainTextOldValue);
    }, [plainTextOldValue]);

    const { name, price, discount, tax, origin, material } = cloneProduct;

    const [plainTextInput, setplainTextInput] = useState([
        { name: "name", placeHolder: "tên sản phẩm", badge: "Tên sp", currentValue: "1" },
        { name: "price", placeHolder: "Giá bán", badge: "Giá bán", currentValue: "1" },
        { name: "origin", placeHolder: "Xuất xứ", badge: "Xuất xứ", currentValue: "1" },
        { name: "discount", placeHolder: "giảm giá", badge: "Giảm giá", currentValue: "1" },
        { name: "material", placeHolder: "Chất liệu", badge: "Chất liệu", currentValue: "1" },
        { name: "tax", placeHolder: "Thuế", badge: "Thuế", currentValue: "1" },
    ])

    // const plainTextInput = [
    //     { name: "name", placeHolder: "tên sản phẩm", badge: "Tên sp", currentValue: "" },
    //     { name: "price", placeHolder: "Giá bán", badge: "Giá bán", currentValue: "" },
    //     { name: "origin", placeHolder: "Xuất xứ", badge: "Xuất xứ", currentValue: "" },
    //     { name: "discount", placeHolder: "giảm giá", badge: "Giảm giá", currentValue: "" },
    //     { name: "material", placeHolder: "Chất liệu", badge: "Chất liệu", currentValue: "" },
    //     { name: "tax", placeHolder: "Thuế", badge: "Thuế", currentValue: "" },
    // ]

    const setValueOfPlainTextInput = (e) => {
        setcloneProduct({ ...cloneProduct, [e.target.name]: e.target.value });
    };
    
    /**
     * current value of plainTextInput for show badge
     */
    const setCurrentValueForPlainTextInput = (e, index) => {
        let cloneArray = [...plainTextInput];
        
        let cloneObject = {...cloneArray[index]}  
        cloneObject.currentValue = e.target.value;

        cloneArray[index] = cloneObject;

       setplainTextInput(cloneArray);
    }

    const isNotShowBadge = (index) => {
        //check currentValue of each element to show badge
        return plainTextInput[index].currentValue ? false : true;
    }


    const plainTextInputMap = plainTextInput.map((obj, index) => {
        let value = null;

        switch (index) {
            case 0:
                value = name;
                break;
            case 1:
                value = price;
                break;
            case 2:
                value = origin;
                break;
            case 3:
                value = discount;
                break;
            case 4:
                value = material;
                break;
            case 5:
                value = tax;
                break;
            default:
                break;
        }
       
        return (
            <div className="form-group col-lg-6 add-product-right-txt-container" key={index}>
                <input
                    type="text"
                    className="add-product-right-txt-input"
                    placeholder={obj.placeHolder}
                    value={value}
                    onChange={(e) => {
                        setValueOfPlainTextInput(e);
                        setCurrentValueForPlainTextInput(e, index);
                    }}
                    name={obj.name}
                />
                <span
                    className={classnames(
                        "badge badge-secondary add-product-right-txt-badge badge-success",
                        { "d-none": isNotShowBadge(index) }
                    )}
                >
                    {obj.badge}
                </span>
            </div>
        );
    });

    return <div className="row">{plainTextInputMap}</div>;
};

export default UP_plainTextInput;
