import React, {useState} from "react";

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

        let updatedTime = `${currentYMD} ${currentHours}`;

        const discount = parseFloat(plainTextInputForUpdate.discount);
        const price = parseInt(plainTextInputForUpdate.price)
        let updatedProduct = {
            id: "",
            name: "",
            price: 0,
            marker: "DEF",
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

        /**
         *   update plainTextInput
         */
        updatedProduct.name = plainTextInputForUpdate.name;
        updatedProduct.price = price;
        updatedProduct.origin = plainTextInputForUpdate.origin;
        updatedProduct.discount = discount;
        updatedProduct.material = plainTextInputForUpdate.material;
        updatedProduct.tax = plainTextInputForUpdate.tax;
       
        if(discount === 0) updatedProduct.marker = "DEF"
        else updatedProduct.marker = "DIS"
        
       
        /**
         * update Description
         */
        updatedProduct.longDescription = longDescForUpdate.longDesc
        updatedProduct.shortDescription = shortDescForUpdate.shortDesc
        /**
         * update supplier and category
         */
        updatedProduct.supplier = supplierForUpdate;
        updatedProduct.category = categoryForUpdate;
        /**
         * update images
         */
      
        updatedProduct.imagesUrl = imagesForUpdate;
          /**
         * update subproducts
         */
        updatedProduct.subProducts = subProductsForUpdate

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
