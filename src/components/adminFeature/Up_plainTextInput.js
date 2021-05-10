import React, { useState, useEffect } from "react";
import classnames from "classnames";

const UP_plainTextInput = ({ plainTextOldValue }) => {
    const [cloneProduct, setcloneProduct] = useState({});

    useEffect(() => {
        setcloneProduct(plainTextOldValue);
    }, [plainTextOldValue]);

    const { name, price, discount, tax, origin, material } = cloneProduct;
    const plainTextInput = [
        { name: "name", placeHolder: "tên sản phẩm", badge: "Tên sp", currentValue: "" },
        { name: "price", placeHolder: "Giá bán", badge: "Tên sp", currentValue: "" },
        { name: "origin", placeHolder: "Xuất xứ", badge: "Tên sp", currentValue: "" },
        { name: "discount", placeHolder: "giảm giá", badge: "Tên sp", currentValue: "" },
        { name: "material", placeHolder: "Chất liệu", badge: "Tên sp", currentValue: "" },
        { name: "tax", placeHolder: "Thuế", badge: "Tên sp", currentValue: "" },
    ];

    const setValueOfPlainTextInput = (e) => {
        setcloneProduct({ ...cloneProduct, [e.target.name]: e.target.value });
    };

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
                        setValueOfPlainTextInput(e, index);
                    }}
                    name={obj.name}
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
        );
    });

    return <div className="row">{plainTextInputMap}</div>;
};

export default UP_plainTextInput;
