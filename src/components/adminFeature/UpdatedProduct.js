import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import classnames from "classnames";

import Up_plainTextInput from "./Up_plainTextInput";
import Up_SubmitBtn from "./Up_SubmitBtn";
import Up_Supplier from "./Up_Supplier";
import Up_Category from "./Up_Category";
import Up_Description from "./Up_Description";
import Up_SizeAndColorList from './Up_SizeAndColorList'

import { getProductByID } from "../../redux/actions/index";
import { clearMessageUpdateProduct } from "../../redux/actions/actAdmin";

import Up_UploadImages from "./Up_UploadImages";

const UpdatedProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProductByID(id));
        dispatch(clearMessageUpdateProduct())
    }, []);

    const product = useSelector((state) => state.getProductByID);
    const messageForUpdateProduct = useSelector(state => state.messageForUpdateProduct)
    const [hasNotErrorUpdateProduct, sethasNotErrorUpdateProduct] = useState(true)

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

    const category = {...product.category}

    const hiddenProperty = {
        id: product.id,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        views: product.views
    }

    const showError = () => {
        console.log(messageForUpdateProduct)
    }
    showError();
    
   
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
                    <Up_Category category={category} />
                </div>
            </div>
            <div>
                <Up_SizeAndColorList subProducts={product.subProducts} />
            </div>

            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                    <div className="col-10">
                        <div
                            className={classnames("alert alert-danger mt-4 mb-5 text-center ", {
                                // "d-none": hasNotErrorUpdateProduct
                            })}
                            role="alert"
                        >
                           {messageForUpdateProduct.message}
                        </div>
                    </div>
                    <Up_SubmitBtn hiddenProperty={hiddenProperty}/>
                </div>
            </div>
        </div>
    );
};

export default UpdatedProduct;
