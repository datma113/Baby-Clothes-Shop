import React from "react";
import { useDispatch } from "react-redux";

import { deleteSupplier } from "../../redux/actions/actAdmin";


const Us_delete = ({ id }) => {
     const dispatch = useDispatch()
    
     const deteleSupplierHandle = (idOfSupplier) => {


          dispatch(deleteSupplier(idOfSupplier));
         
     }
    return (
        <div>
            <span
                type="button"
                className="us-update-btn "
                data-toggle="modal"
                data-target="#modelId"
            >
                Xóa
            </span>

            <div
                className="modal fade"
                id="modelId"
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
                            <button type="button" className="btn btn-primary"
                              onClick={() => deteleSupplierHandle(id)}
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
