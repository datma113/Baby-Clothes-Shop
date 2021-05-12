import React from "react";

import { useSelector } from "react-redux";
const Up_SubmitBtn = ({ hiddenProperty }) => {
    const plainTextInputForUpdate = useSelector((state) => state.plainTextInputForUpdate);
    const imagesForUpdate = useSelector((state) => state.imagesForUpdate);
    const shortDescForUpdate = useSelector((state) => state.shortDescForUpdate);
    const longDescForUpdate = useSelector((state) => state.longDescForUpdate);
    const supplierForUpdate = useSelector((state) => state.supplierForUpdate);
    const categoryForUpdate = useSelector((state) => state.categoryForUpdate);
    const subProductsForUpdate = useSelector((state) => state.subProductsForUpdate);
    const updateProductHandle = () => {
        let currentYMD = new Date().toISOString().slice(0, 10);
        
        let currentHours = new Date().toString().slice(16, 24);
    
        let updatedTime = `${currentYMD} ${currentHours}`
      
       

        let updatedProduct = {
            id: "",
            name: "",
            price: 0,
            marker: "",
            discount: 0,
            views: 0,
            origin: "",
            tax: 0,
            shortDescription: "",
            longDescription: "",
            material: "",
            active: true,
            createdAt: "",
            updatedAt: "",
            supplier: {},
            category: {},
            subProducts: [],
            imagesUrl: [],
        };
        /**
         * implicit property
         */
        updatedProduct.id = hiddenProperty.id;
        updatedProduct.views = hiddenProperty.views;
        updatedProduct.createdAt = hiddenProperty.createdAt;
        updatedProduct.updatedAt = updatedTime;
        console.log(updatedProduct);
    };

    return (
        <div>
            <button className="btn btn-dark" onClick={() => updateProductHandle()}>
                Sữa sản phẩm
            </button>
        </div>
    );
};

export default Up_SubmitBtn;
