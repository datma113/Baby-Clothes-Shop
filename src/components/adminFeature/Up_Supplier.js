import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { getSuppliers, addSupplier, setSupplierForUpdate } from "../../redux/actions/actAdmin";
const Up_Supplier = ({ supplier }) => {
    const dispatch = useDispatch();
    const suppliers = useSelector((state) => state.suppliers);
    const errorMessageFromSupplier = useSelector((state) => state.messageForAddSupplier);
    const [currentSupplier, setcurrentSupplier] = useState({});
    const [as_supplierName, setas_supplierName] = useState("");
    const [as_supplierEmail, setas_supplierEmail] = useState("");
    const [as_supplierPhone, setas_supplierPhone] = useState("");
    const [as_supplierAddress, setas_supplierAddress] = useState("");
    const [showSupplier, setshowSupplier] = useState("");
    const [isAddSupplier, setisAddSupplier] = useState(false);
    const [hasNotErrorInSupplier, sethasNotErrorInSupplier] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setcurrentSupplier(supplier);
        setshowSupplier(supplier.name);
        dispatch(setSupplierForUpdate(supplier));

    }, [supplier]);

    const getSuppliersAPI = () => {
        dispatch(getSuppliers());
    };

    const addSuppilerForm = [
        { name: "Tên nhà cung cấp", value: as_supplierName },
        { name: "email", value: as_supplierEmail },
        { name: "Số điện thoại", value: as_supplierPhone },
        { name: "Địa chỉ", value: as_supplierAddress },
    ];

    const setDefaultInputOfAddSupplier = () => {
        setas_supplierAddress("");
        setas_supplierEmail("");
        setas_supplierName("");
        setas_supplierPhone("");
    };
    const addSupplierAPI = () => {
        setIsLoading(true);

        dispatch(
            addSupplier(as_supplierName, as_supplierEmail, as_supplierPhone, as_supplierAddress)
        )
            .then(() => {
                sethasNotErrorInSupplier(true);
                setIsLoading(false);
                setisAddSupplier(false);
                setDefaultInputOfAddSupplier();
                window.$("#modelId").modal("hide");
                window.alert(` thành công`);
            })
            .catch(() => {
                sethasNotErrorInSupplier(false);
                setIsLoading(false);
            });
    };

    const checkExistSupplier = () => {
        const supllierId = currentSupplier.id;
        return supllierId === undefined || supllierId.toString().length === 0
            ? "chưa thêm"
            : showSupplier;
    };

    const selectSupplierHandle = () => {
        dispatch(setSupplierForUpdate(currentSupplier));
        setshowSupplier(currentSupplier.name);
        window.$("#modelId").modal("hide");
    };

    const getInputAddSupplier = (event, index) => {
        switch (index) {
            case 0:
                setas_supplierName(event.target.value);
                break;
            case 1:
                setas_supplierEmail(event.target.value);
                break;
            case 2:
                setas_supplierPhone(event.target.value);
                break;
            case 3:
                setas_supplierAddress(event.target.value);
                break;
            default:
                return;
        }
    };
    const getValueOfSupplierSelected = (event) => {
        try {
            const newSupplier = JSON.parse(event.target.value);
            setcurrentSupplier(newSupplier);
        } catch (error) {
            const errSupplier = "___";
            const parseErr = { id: "", name: errSupplier, email: "", phone: "", address: "" };
            setcurrentSupplier(parseErr);
        }
    };

    const showAddSupplierFrom = () => {
        setisAddSupplier(!isAddSupplier);
    };

    const suppliersMap = suppliers.map((supplier, index) => {
        return (
            <option key={index} value={JSON.stringify(supplier)}>
                {" "}
                {supplier.name}{" "}
            </option>
        );
    });
    const addSuppilerFormMap = addSuppilerForm.map((item, index) => {
        return (
            <div className="form-group font-weight-bold col-10" key={index}>
                <input
                    type="text"
                    className="form-control change-password-input"
                    aria-describedby="helpId"
                    placeholder={item.name}
                    onChange={(event) => {
                        getInputAddSupplier(event, index);
                    }}
                />
            </div>
        );
    });

    return (
        <div style={{ marginTop: `5rem` }}>
            <button
                className="btn btn-info btn-lg"
                data-toggle="modal"
                data-target="#modelId"
                onClick={() => getSuppliersAPI()}
            >
                Thêm nhà cung cấp
            </button>
            <span className="col-4">
                Nhà cung cấp: <b style={{ color: `red` }}> {checkExistSupplier()} </b>
            </span>
            <div
                className="modal fade"
                id="modelId"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document" style={{ marginTop: `15rem` }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thêm nhà cung cấp</h5>
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
                            <div className="form-group">
                                <span>Nhà cung cấp có sẵn:</span>
                                <div className="row mb-5">
                                    <div className="col-10">
                                        <select
                                            className="form-control select-text"
                                            onChange={getValueOfSupplierSelected}
                                        >
                                            <option> ___Chọn nhà cung cấp </option>;{suppliersMap}
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <button
                                            className="btn btn-success"
                                            onClick={() => showAddSupplierFrom()}
                                        >
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <hr></hr>
                                {isAddSupplier && (
                                    <div className="row">
                                        <div className="col-12 mb-2">Thêm nhà cung cấp</div>

                                        {addSuppilerFormMap}

                                        <div className="col-10">
                                            <div
                                                className={classnames("alert alert-danger mt-4", {
                                                    "d-none": hasNotErrorInSupplier,
                                                })}
                                                role="alert"
                                            >
                                                {errorMessageFromSupplier.message}
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <button
                                                className="btn btn-info btn-lg btn-block"
                                                onClick={() => addSupplierAPI()}
                                            >
                                                <div
                                                    className={classnames({
                                                        "spinner-border text-light": isLoading,
                                                    })}
                                                ></div>
                                                &nbsp;Thêm
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger btn-lg"
                                data-dismiss="modal"
                            >
                                Đóng
                            </button>
                            <button
                                type="button"
                                className="btn btn-info btn-lg"
                                onClick={() => selectSupplierHandle()}
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Up_Supplier;
