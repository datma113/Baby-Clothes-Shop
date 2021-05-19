import React from "react";

import AddSupplier from "./AddSupplier";
import ListSupplier from "./ListSupplier";

const ManageSuppliers = () => {
    return (
        <div>
            <p className="add-product-header  text-secondary">Quản lý Nhà cung cấp</p>
            <div className="row">
                <div className="col-12">
                    <AddSupplier />
                <hr className="mt-5"/>

                </div>

                <div className="col-12 mt-5">
                    <p>Danh sách nhà cung cấp</p>
                    <ListSupplier />
                </div>
            </div>
        </div>
    );
};

export default ManageSuppliers;
