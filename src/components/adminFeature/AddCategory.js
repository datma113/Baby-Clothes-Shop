import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addCategory } from "../../redux/actions/actAdmin";
const AddCategory = () => {
    const dispatch = useDispatch();
    const messageForAddCategory = useSelector((state) => state.messageForAddCategory);

    const [hasNotErr, sethasNotErr] = useState(true);
    const [isLoading, setisLoading] = useState(false);
    const checkErrMess = () => {
        return hasNotErr ? "d-none" : "";
    };

    const checkIsLoading = () => {
        return isLoading ? "" : "d-none";
    };

    const plainTextInput = [{ placeHolder: "Tên nhà cung cấp" }];

    const [plainTextObject, setplainTextObject] = useState({
        name: "",
    });
    const getValueOfInput = (e) => {
        setplainTextObject({ ...plainTextObject, name: e.target.value });
    };

    const plainTextInputMap = plainTextInput.map((item, index) => {

     return (
         <div className="form-group col-md-6" key={index}>
             <input
                 type="text"
                 className="form-control as-plain-text-input"
                 value={plainTextInput.name}
                 onChange={getValueOfInput}
                 placeholder={item.placeHolder}
             />
         </div>
     );
 });

    const addCategoryHandle = () => {
        setisLoading(true);
        dispatch(addCategory(plainTextObject.name))
            .then(() => {
                window.alert("thêm loại sản phẩm thành công!");
                window.location.reload();
            })
            .catch(() => {
                window.alert("thêm Loại sản phẩm thất bại");
                setisLoading(false);
                sethasNotErr(false);
            });
    };
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center flex-column">
                {plainTextInputMap}

                <div
                    className={`alert alert-danger mt-4 mb-5 text-center ${checkErrMess()}`}
                    role="alert"
                >
                    {messageForAddCategory.message}
                </div>
                <div className="col-md-6">
                    <button
                        className="btn btn-dark btn-block"
                        onClick={() => addCategoryHandle()}
                    >
                        <div className={`spinner-border text-light  ${checkIsLoading()} `}></div>
                        &nbsp; Thêm loại sản phẩm mới
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCategory;
