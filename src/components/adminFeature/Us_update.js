import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateSupplier, getSupplierByID } from "../../redux/actions/actAdmin";

const Us_update = ({ id }) => {
    const dispatch = useDispatch();
    const supplierByID = useSelector((state) => state.supplierByID);
    const messageForAddSupplier = useSelector(state => state.messageForAddSupplier)
    const [hasNotErr, sethasNotErr] = useState(true);
    const [isLoading, setisLoading] = useState(false);

    const [supplierClone, setsupplierClone] = useState({
        id: id,
        name: "",
        address: "",
        email: "",
        phone: "",
    });

    const plainTextInput = [
        { placeHolder: "Tên nhà cung cấp", name: "name" },
        { placeHolder: "Địa chỉ", name: "address" },
        { placeHolder: "Email", name: "email" },
        { placeHolder: "Số điện thoại", name: "phone" },
    ];

    const getValueOfInput = (e) => {
        setsupplierClone({ ...supplierClone, [e.target.name]: e.target.value });
    };

    const updateSupplierHandle = () => {
        setisLoading(true);
           dispatch(updateSupplier(supplierClone))
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

    const checkErrMess = () => {
        return hasNotErr ? "d-none" : "";
    };

    const checkIsLoading = () => {
        return isLoading ? "" : "d-none";
    };
    const getSupplierAPI = () => {
        dispatch(getSupplierByID(id));
    };

    const plainTextInputMap = plainTextInput.map((item, index) => {
        let value = "";
        switch (index) {
            case 0:
                value = supplierClone.name;
                break;
            case 1:
                value = supplierClone.address;
                break;
            case 2:
                value = supplierClone.email;
                break;
            case 3:
                value = supplierClone.phone;
                break;
            default:
                break;
        }

        return (
            <div className="form-group " key={index}>
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
        <div>
            <span
                className="us-update-btn "
                data-toggle="modal"
                data-target={`#modelId${id}`}
                onClick={() => getSupplierAPI()}
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
                            <h5 className="modal-title">Cập nhật nhà cung cấp</h5>
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
                                {messageForAddSupplier.message}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => updateSupplierHandle()}
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

export default Us_update;
