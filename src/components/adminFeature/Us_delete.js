import React from "react";
import { useDispatch } from "react-redux";

import { deleteSupplier } from "../../redux/actions/actAdmin";

const Us_delete = ({ id, index }) => {
    const dispatch = useDispatch();
   

    const deteleSupplierHandle = () => {
     
        dispatch(deleteSupplier(id))
            .then(() => {
                window.alert(` xóa nhà cung cấp thành công! `);
                window.location.reload();
            })
            .catch(() => {
                 window.alert(` Không thể xóa nhà cung cấp này! `)
            });
    };

    return (
        <div>
            <span
                type="button"
                className="us-update-btn text-danger"
                data-toggle="modal"
                data-target={`#modelIdDeleteSupplier${index}`}
                onClick={() => {}}
            >
                Xóa
            </span>

            <div
                className="modal fade"
                id={`modelIdDeleteSupplier${index}`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Xóa nhà cung cấp</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">Bạn có muốn xóa nhà cung cấp này không?</div>
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
                                    deteleSupplierHandle()
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

export default Us_delete;
