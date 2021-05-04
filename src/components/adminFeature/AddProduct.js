import React, { useState } from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { storage } from "../../firebase/index";
import {
    getSuppliers,
    addSupplier,
    getCategories,
    addCategory,
} from "../../redux/actions/actAdmin";

const AddProduct = () => {
    const dispatch = useDispatch();
    const suppliers = useSelector((state) => state.suppliers);
    const categories = useSelector((state) => state.categories);

    const [imgs, setimgs] = useState(null);
    const [tempUrl, settempUrl] = useState("");
    const [progressLoadImg, setprogressLoadImg] = useState(0);

    const [isAddSupplier, setisAddSupplier] = useState(false);
    const [isAddCategory, setisAddCategory] = useState(false);

    const [as_supplierName, setas_supplierName] = useState("");
    const [as_supplierEmail, setas_supplierEmail] = useState("");
    const [as_supplierPhone, setas_supplierPhone] = useState("");
    const [as_supplierAddress, setas_supplierAddress] = useState("");
   
    const [ac_categoryName, setac_categoryName] = useState("");
  
    const [hasNotError, setHasNotError] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const errorMessage = useSelector((state) => state.message);

    const addSuppilerForm = [
        {name: "Tên nhà cung cấp", value: as_supplierName},
        {name: "email", value: as_supplierEmail},
        {name:  "Số điện thoại", value: as_supplierPhone},
        {name: "Địa chỉ", value: as_supplierAddress},

    ]
  
    const addCategoryForm = [
        {name: "Tên loại sản phẩm", value: ac_categoryName}
    ];
    const [titles, settitles] = useState([
        { name: "Tên sản phẩm", badge: "Tên SP", status: "" },
        { name: "Giá Bán", badge: "Giá", status: "" },
        { name: "Xuất xứ", badge: "Xuất xứ", status: "" },
        { name: "Chiết khấu (Từ 0.0 đến 1.0)", badge: "Chiết khấu", status: "" },
        { name: "Chất liệu", badge: "Chất liệu", status: "" },
        { name: "Thuế (Từ 0.0 đến 1.0)", badge: "thuế", status: "" },
    ]);

    /**
     * map titles and relative function
     */
    const isCorrectIndex = (index) => {
        const lengthOfStr = titles[index].status.length;
        return lengthOfStr !== 0 ? false : true;
    };

    const setTempState = (event, index) => {
        const str = event.target.value;

        let tempObject = [...titles];
        tempObject[index] = { ...tempObject[index], status: str };

        settitles(tempObject);
    };

    const titlesMap = titles.map((title, index) => {
        return (
            <div className="form-group col-lg-6 add-product-right-txt-container" key={index}>
                <input
                    type="text"
                    className="add-product-right-txt-input"
                    placeholder={title.name}
                    onChange={(event) => {
                        setTempState(event, index);
                    }}
                />

                <span
                    className={classnames(
                        "badge badge-secondary add-product-right-txt-badge badge-info",
                        {
                            "d-none": isCorrectIndex(index),
                        }
                    )}
                >
                    {" "}
                    {title.badge}{" "}
                </span>
            </div>
        );
    });

    /**
     * upload image feature
     */
    const loading = () => {
        return progressLoadImg !== 0 || progressLoadImg !== 100 ? false : true;
    };

    const inputHandle = (event) => {
        const imgs = event.target.files; //1 file
        if (imgs) {
            let arr = [...imgs];
            setimgs(arr);
        }
    };

    const uploadImgHandle = () => {
        imgs.forEach((el) => {
            const uploadTask = storage.ref(`images/${el.name}`).put(el);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    console.log(progress);
                    setprogressLoadImg(progress);
                },
                (err) => {
                    console.log(err);
                },
                () => {
                    storage
                        .ref(`images`)
                        .child(el.name)
                        .getDownloadURL()
                        .then((url) => {
                            settempUrl(url);
                        });
                }
            );
        });
    };

    /**
     *call supplier api
     */
    const getSuppliersAPI = () => {
        dispatch(getSuppliers());
    };

    /**
     *  add supplier
     */

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
  

    const suppliersMap = suppliers.map((supplier, index) => {
        return <option key={index}> {supplier.name} </option>;
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

    const showAddSupplierFrom = () => {
        setisAddSupplier(!isAddSupplier);
    };

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
                setHasNotError(true);
                setIsLoading(false);
                setisAddSupplier(false);
                setDefaultInputOfAddSupplier();
                window.alert(` thành công`);
           
            })
            .catch(() => {
                setHasNotError(false);
                setIsLoading(false);
            });
    };
    /**
     *  add category
     */
   
     const getInputAddCategory = (event, index) => {
        switch (index) {
            case 0:
                setac_categoryName(event.target.value);
                break;
            default:
                return;
        }
    };

    const getCategoryAPI = () => {
        dispatch(getCategories());
    };

    const categoriesMap = categories.map((category, index) => {
        return <option key={index}> {category.name} </option>;
    });

    const setDefaultInputOfAddCategory = () => {
      setac_categoryName("")
    };
    const showAddCategoryForm = () => {
        setisAddCategory(!isAddCategory);
    };

    const addCategoryFormMap = addCategoryForm.map((item, index) => {
        return (
            <div className="form-group font-weight-bold col-10" key={index}>
                <input
                    type="text"
                    className="form-control change-password-input"
                    aria-describedby="helpId"
                    placeholder={item.name}
                    value={item.value}
                    onChange={(event) => {
                        getInputAddCategory(event, index);
                    }}
                />
            </div>
        );
    });
    const addCategoryAPI = () => {
        setIsLoading(true);

        dispatch(
            addCategory(ac_categoryName)
        )
            .then(() => {
                setHasNotError(true);
                setIsLoading(false);
                setisAddCategory(false);
                setDefaultInputOfAddCategory();
                window.alert(` thành công`);
            })
            .catch(() => {
                setHasNotError(false);
                setIsLoading(false);
            });
    };
    
    return (
        <div>
            <p className="add-product-header">Thêm sản phẩm mới</p>
            <div className="row">
                <div className="col-lg-4">
                    <div className="add-product-left-container">
                        {loading() && <progress value={progressLoadImg} max={100} />}
                        <div>
                            <img
                                src={
                                    tempUrl ||
                                    "http://via.placeholder.com/300?text=Vui lòng tải ảnh"
                                }
                                alt="image"
                                className="add-product-left-img"
                            />
                        </div>
                        <div className="form-group ">
                            <input
                                type="file"
                                className="form-control-file"
                                multiple
                                onChange={inputHandle}
                            />
                        </div>
                        <button className="btn btn-info" onClick={uploadImgHandle}>
                            Đăng tải
                        </button>
                    </div>
                </div>

                {/* text area */}

                <div className="col-lg-8 add-product-right">
                    <div className="row">{titlesMap}</div>
                    <div className="row mt-5">
                        <div className="form-group col-lg-4">
                            <label htmlFor="">Mô tả sơ lược:</label>
                            <textarea
                                className="form-control add-product-right-text-area"
                                rows="5"
                                placeholder="Nhập mô tả của bạn"
                            ></textarea>
                        </div>
                        <div className="form-group col-lg-8">
                            <label htmlFor="">Mô tả Chi tiết:</label>
                            <textarea
                                className="form-control add-product-right-text-area"
                                rows="5"
                                placeholder="Nhập mô tả của bạn"
                            ></textarea>
                        </div>
                    </div>

                    {/* add supplier  */}

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
                            Nhà cung cấp: <b style={{ color: `red` }}>Chưa thêm</b>
                        </span>
                        <div
                            className="modal fade"
                            id="modelId"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="modelTitleId"
                            aria-hidden="true"
                        >
                            <div
                                className="modal-dialog"
                                role="document"
                                style={{ marginTop: `15rem` }}
                            >
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
                                                    <select className="form-control select-text">
                                                        {suppliersMap}
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
                                                    <div className="col-12 mb-2">
                                                        Thêm nhà cung cấp
                                                    </div>

                                                    {addSuppilerFormMap}

                                                    <div className="col-10">
                                                        <div
                                                            className={classnames(
                                                                "alert alert-danger mt-4",
                                                                { "d-none": hasNotError }
                                                            )}
                                                            role="alert"
                                                        >
                                                            {errorMessage.message}
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
                                        <button type="button" className="btn btn-info btn-lg">
                                            Xác nhận
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* add category  */}

                    <div style={{ marginTop: `5rem` }}>
                        {" "}
                        <hr></hr>
                        <button
                            className="btn btn-info btn-lg"
                            data-toggle="modal"
                            data-target="#modelId1"
                            onClick={() => getCategoryAPI()}
                        >
                            Thêm loại sản phẩm
                        </button>
                        <span className="col-4">
                            Loại sản phẩm: <b style={{ color: `red` }}>Chưa thêm</b>
                        </span>
                        <div
                            className="modal fade"
                            id="modelId1"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="modelTitleId"
                            aria-hidden="true"
                        >
                            <div
                                className="modal-dialog"
                                role="document"
                                style={{ marginTop: `15rem` }}
                            >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Thêm Loại sản phẩm</h5>
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
                                            <span>Loại sản phẩm đã lưu:</span>
                                            <div className="row mb-5">
                                                <div className="col-10">
                                                    <select className="form-control select-text">
                                                        {categoriesMap}
                                                    </select>
                                                </div>
                                                <div className="col-2">
                                                    <button
                                                        className="btn btn-success"
                                                        onClick={() => showAddCategoryForm()}
                                                    >
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            {isAddCategory && (
                                                <div className="row">
                                                    <div className="col-12 mb-2">
                                                        Thêm Loại sản phẩm
                                                    </div>

                                                    {addCategoryFormMap}

                                                    <div className="col-10">
                                                        <div
                                                            className={classnames(
                                                                "alert alert-danger mt-4",
                                                                { "d-none": hasNotError }
                                                            )}
                                                            role="alert"
                                                        >
                                                            {errorMessage.message}
                                                        </div>
                                                    </div>
                                                    <div className="col-10">
                                                        <button
                                                            className="btn btn-info btn-lg btn-block"
                                                              onClick={() => addCategoryAPI()}
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
                                        <button type="button" className="btn btn-info btn-lg">
                                            Xác nhận
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
