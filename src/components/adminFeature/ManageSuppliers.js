import React from "react";

import AddSupplier from "./AddSupplier";
const ManageSuppliers = () => {
    return (
        <div>
            <p className="add-product-header  text-secondary">Quản lý Nhà cung cấp</p>
            <div className="row">
                <div className="col-12">
                    <AddSupplier />
                </div>
            </div>
        </div>
    );
};

export default ManageSuppliers;
