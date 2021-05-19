import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addSupplier } from "../../redux/actions/actAdmin";

const AddSupplier = () => {
    const dispatch = useDispatch();
    const messageForAddSupplier = useSelector((state) => state.messageForAddSupplier);
    const [hasNotErr, sethasNotErr] = useState(true);
    const [isLoading, setisLoading] = useState(false);

    const plainTextInput = [
        { placeHolder: "Tên nhà cung cấp", name: "name" },
        { placeHolder: "Địa chỉ", name: "address" },
        { placeHolder: "Email", name: "email" },
        { placeHolder: "Số điện thoại", name: "phone" },
    ];

    const [plainTextObject, setplainTextObject] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
    });

    const getValueOfInput = (e) => {
        setplainTextObject({ ...plainTextObject, [e.target.name]: e.target.value });
    };

    const addSupplierHandle = () => {
        setisLoading(true);
        dispatch(
            addSupplier(
                plainTextObject.name,
                plainTextObject.email,
                plainTextObject.phone,
                plainTextObject.address
            )
        )
            .then(() => {
                window.alert("thêm nhà cung cấp thành công!");
                window.location.reload();
            })
            .catch(() => {
                window.alert("thêm nhà cung cấp thất bại");
                setisLoading(false);
                sethasNotErr(false);
            });
    };

    const checkErrMess = () => {
        return hasNotErr ? "d-none" : "";
    };

    const checkIsLoading = () => {
         return isLoading ? "" : "d-none"
    }

    const plainTextInputMap = plainTextInput.map((item, index) => {
        let value = "";

        switch (index) {
            case 0:
                value = plainTextObject.name;
                break;
            case 1:
                value = plainTextObject.address;
                break;
            case 2:
                value = plainTextObject.email;
                break;
            case 3:
                value = plainTextObject.phone;
                break;
            default:
                break;
        }

        return (
            <div className="form-group col-md-6" key={index}>
                <input
                    type="text"
                    className="form-control as-plain-text-input"
                    name={item.name}
                    value={value}
                    onChange={getValueOfInput}
                    placeholder={item.placeHolder}
                />
            </div>
        );
    });

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            {plainTextInputMap}

            <div
                className={`alert alert-danger mt-4 mb-5 text-center ${checkErrMess()}`}
                role="alert"
            >
                {messageForAddSupplier.message}
            </div>
            <div className="col-md-6">
                <button
                    className="btn btn-secondary btn-block"
                    onClick={() => addSupplierHandle()}
                >
                    <div className={`spinner-border text-light  ${checkIsLoading()} `}></div>
                    &nbsp; Thêm nhà cung cấp mới
                </button>
            </div>
        </div>
    );
};

export default AddSupplier;
