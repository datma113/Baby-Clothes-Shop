import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { getCategories, addCategory, setCategoryForUpdate } from "../../redux/actions/actAdmin";
const Upcategory = ({ category }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const errorMessageFromCategory = useSelector((state) => state.messageForAddCategory);
    const [currentCategory, setcurrentCategory] = useState({});
    const [ac_categoryName, setac_categoryName] = useState("");
    const [showCategory, setshowCategory] = useState("");
    const [isAddCategory, setisAddCategory] = useState(false);
    const [hasNotErrorInCategory, sethasNotErrorInCategory] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const [isErrorCategory, setisErrorCategory] = useState(false);

    /**
     * initial set category in database
     */
    useEffect(() => {
        setcurrentCategory(category);
        setshowCategory(category.name);
        dispatch(setCategoryForUpdate(category));
    }, [category]);

    const getCategoriesAPI = () => {
        dispatch(getCategories());
    };

    const addCategoryForm = [{ name: "Loại sản phẩm", value: ac_categoryName }];

    const setDefaultInputOfAddCategory = () => {
        setac_categoryName("");
    };
    /**
     * call api add new category
     */
    const addCategoryAPI = () => {
        setIsLoading(true);

        dispatch(addCategory(ac_categoryName))
            .then(() => {
                sethasNotErrorInCategory(true);
                setIsLoading(false);
                setisAddCategory(false);
                setDefaultInputOfAddCategory();
                window.$("#modelId1").modal("hide");
                window.alert(` thành công`);
            })
            .catch(() => {
                sethasNotErrorInCategory(false);
                setIsLoading(false);
            });
    };
  
    const checkExistCategory = () => {
        const categoryId = currentCategory.id;
        return categoryId === undefined || categoryId.toString().length === 0
            ? "chưa thêm"
            : showCategory;
    };
   /**
    * update and save to store value of category
    * and then show it to front end
    */
    const selectCategoryHandle = () => {
        if (isErrorCategory) {
            dispatch(setCategoryForUpdate({ id: "", name: "" }));
            setshowCategory("Chưa thêm");
        } else {
            dispatch(setCategoryForUpdate(currentCategory));
            setshowCategory(currentCategory.name);
        }
        window.$("#modelId1").modal("hide");
    };

    const getInputAddCategory = (event, index) => {
        switch (index) {
            case 0:
                setac_categoryName(event.target.value);
                break;
        }
    };
     /**
     * when change category selected
     * check a category (null or have determined value)
     * and close modal
     */
    const getValueOfCategorySelected = (event) => {
        try {
            setisErrorCategory(false);
            const newCategory = JSON.parse(event.target.value);
            setcurrentCategory(newCategory);
        } catch (error) {
            setisErrorCategory(true);
        }
    };
    /**
     * show form input add category
     */
    const showAddCategoryForm = () => {
        setisAddCategory(!isAddCategory);
    };

    const suppliersMap = categories.map((supplier, index) => {
        return (
            <option key={index} value={JSON.stringify(supplier)}>
                {" "}
                {supplier.name}{" "}
            </option>
        );
    });
    const addSuppilerFormMap = addCategoryForm.map((item, index) => {
        return (
            <div className="form-group font-weight-bold col-10" key={index}>
                <input
                    type="text"
                    className="form-control change-password-input"
                    aria-describedby="helpId"
                    placeholder={item.name}
                    onChange={(event) => {
                        getInputAddCategory(event, index);
                    }}
                />
            </div>
        );
    });

    return (
        <div style={{ marginTop: `5rem` }}>
            <button
                className="btn btn-success btn-lg"
                data-toggle="modal"
                data-target="#modelId1"
                onClick={() => getCategoriesAPI()}
            >
                Thêm Loại sản phẩm
            </button>
            <span className="col-4">
                Loại sản phẩm: <b style={{ color: `red` }}> {checkExistCategory()} </b>
            </span>
            <div
                className="modal fade"
                id="modelId1"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document" style={{ marginTop: `15rem` }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thêm loại sản phẩm</h5>
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
                                <span>Loại sản phẩm có sẵn:</span>
                                <div className="row mb-5">
                                    <div className="col-10">
                                        <select
                                            className="form-control select-text"
                                            onChange={getValueOfCategorySelected}
                                        >
                                            <option> ___Chọn loại sản phẩm </option>;{suppliersMap}
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
                                        <div className="col-12 mb-2">Thêm Loại sản phẩm</div>

                                        {addSuppilerFormMap}

                                        <div className="col-10">
                                            <div
                                                className={classnames("alert alert-danger mt-4", {
                                                    "d-none": hasNotErrorInCategory,
                                                })}
                                                role="alert"
                                            >
                                                {errorMessageFromCategory.message}
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
                            <button
                                type="button"
                                className="btn btn-info btn-lg"
                                onClick={() => selectCategoryHandle()}
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

export default Upcategory;
