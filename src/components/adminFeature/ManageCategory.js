import React from "react";

import AddCategory from "./AddCategory";
import ListCategory from "./ListCategory";

const ManageCategory = () => {
    return (
        <div>
            <div>
                <p className="add-product-header  text-dark">Quản lý Loại sản phẩm</p>
                <div className="row">
                    <div className="col-12">
                        <AddCategory />
                        <hr className="mt-5" />
                    </div>

                    <div className="col-12 mt-5">
                        <p>Danh sách nhà cung cấp</p>
                        <ListCategory />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageCategory;
