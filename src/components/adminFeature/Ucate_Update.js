import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCategoryByID, updateCategory } from "../../redux/actions/actAdmin";

const Ucate_Update = ({ id }) => {
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
         id: id,
        name: "",
    });
    const getValueOfInput = (e) => {
        setplainTextObject({ ...plainTextObject, name: e.target.value });
    };

    const plainTextInputMap = plainTextInput.map((item, index) => {
        return (
            <div className="form-group col-12" key={index}>
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
    const getCategoryAPI = () => {
          dispatch(getCategoryByID(id))
     };

    const updateCategoryHandle = () => {
          setisLoading(true);
        dispatch(updateCategory(plainTextObject))
            .then(() => {
                window.alert("Cập nhật nhà cung cấp thành công!");
                window.location.reload();
            })
            .catch(() => {
                window.alert("Cập nhật nhà cung cấp thất bại");
                setisLoading(false);
                sethasNotErr(false);
            });
  
 };

    return (
        <div>
            <span
                className="us-update-btn "
                data-toggle="modal"
                data-target={`#modelId${id}`}
                onClick={() => getCategoryAPI()}
            >
                Cập nhật
            </span>

            <div
                className="modal fade"
                id={`modelId${id}`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document" style={{ marginTop: `10rem` }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Cập nhật Loại sản phẩm</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {plainTextInputMap}
                            <div
                                className={`alert alert-danger mt-4 mb-5 text-center ${checkErrMess()}`}
                                role="alert"
                            >
                                {messageForAddCategory.message}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">
                                Hủy
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => updateCategoryHandle()}
                            >
                                <div
                                    className={`spinner-border text-light  ${checkIsLoading()} `}
                                ></div>
                                &nbsp; Lưu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ucate_Update;
