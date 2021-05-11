import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import classnames from "classnames";

import Up_plainTextInput from "./Up_plainTextInput";
import Up_SubmitBtn from "./Up_SubmitBtn";
import Up_Supplier from "./Up_Supplier";
import Up_Description from "./Up_Description";

import { getProductByID } from "../../redux/actions/index";
import Up_UploadImages from "./Up_UploadImages";

const UpdatedProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProductByID(id));
    }, []);

    const product = useSelector((state) => state.getProductByID);

    

    const plainTextOldValue = {
        name: product.name,
        price: product.price,
        origin: product.origin,
        discount: product.discount,
        material: product.material,
        tax: product.tax,
    };

    const desc = {
        shortDesc: product.shortDescription,
        longDesc: product.longDescription
    }

    const supplier = {...product.supplier}

    return (
        <div className="container " style={{ paddingTop: `10rem` }}>
            <p className="add-product-header  text-success">Cập nhật sản phẩm</p>
            <div className="row">
                <div className="col-lg-4">
                    {/* upload image */}
                    <Up_UploadImages imagesUrl={product.imagesUrl} />
                </div>
                {/* plain text input */}
                <div className="col-lg-8">
                    <Up_plainTextInput plainTextOldValue={plainTextOldValue} />
                    <Up_Description desc={desc} />
                    <Up_Supplier  supplier={supplier}/>
                </div>
            </div>

            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                    <div className="col-10">
                        <div
                            className={classnames("alert alert-danger mt-4 mb-5 text-center ", {})}
                            role="alert"
                        >
                            error message
                        </div>
                    </div>
                    <Up_SubmitBtn />
                </div>
            </div>
        </div>
    );
};

export default UpdatedProduct;
