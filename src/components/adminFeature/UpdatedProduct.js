import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import classnames from 'classnames'

import UP_plainTextInput from "./Up_plainTextInput";
import UpdateBtn from './UpdateBtn'
import { getProductByID } from "../../redux/actions/index";

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
        tax: product.tax
    };

   
    return (
        <div className="container " style={{ paddingTop: `10rem` }}>
            <p className="add-product-header  text-success">Cập nhật sản phẩm</p>
            <div className="row">
                <div className="col-lg-4">
                    {/* upload image */}
                    <div>z</div>
                </div>
                {/* plain text input */}

                <div className="col-lg-8">
                    <UP_plainTextInput plainTextOldValue={plainTextOldValue} />
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
                    <UpdateBtn />
                </div>
            </div>
        </div>
    );
};

export default UpdatedProduct;
