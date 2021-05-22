import React from "react";
import { useDispatch } from "react-redux";

import { deleteCategory } from "../../redux/actions/actAdmin";

const Ucate_delete = ({ id, index }) => {
    const dispatch = useDispatch();
   

    const deleteCategoryHandle = () => {
     
        dispatch(deleteCategory(id))
            .then(() => {
                window.alert(` xóa loại sản phẩm thành công! `);
                window.location.reload();
            })
            .catch(() => {
                 window.alert(` Không thể xóa loại sản phẩm này! `)
            });
    };

    return (
        <div>
            <span
                type="button"
                className="us-update-btn text-danger"
                data-toggle="modal"
                data-target={`#modelIdDeleteCategory${index}`}
            >
                Xóa
            </span>

            <div
                className="modal fade"
                id={`modelIdDeleteCategory${index}`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Xóa loại sản phẩm</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">Bạn có muốn xóa Loại sản phẩm này không?</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => {
                                    deleteCategoryHandle()
                                }}
                            >
                                Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ucate_delete;
