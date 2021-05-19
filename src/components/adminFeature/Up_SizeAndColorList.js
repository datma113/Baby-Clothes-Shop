import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setSubproductsForUpdate } from "../../redux/actions/actAdmin";
const Up_SizeAndColorList = ({ subProducts }) => {
    const dispatch = useDispatch();
    const [subproductsValue, setsubproductsValue] = useState([]);

    useEffect(() => {
        if (subProducts === undefined) setsubproductsValue([]);
        else {
            setsubproductsValue(subProducts);
            dispatch(setSubproductsForUpdate(subProducts));
        }
    }, [subProducts]);

    const setSubproductValueOfSize = (data, index) => {
        /**
         * shallow clone subproducts
         */
        let tempSubproducts = [...subproductsValue];
        tempSubproducts[index] = { ...tempSubproducts[index], size: data };

        /**
         * set new value for subproducts
         */
        setsubproductsValue(tempSubproducts);
        dispatch(setSubproductsForUpdate(tempSubproducts));
    };

    const setSubproductValueOfColor = (data, index) => {
        /**
         * shallow clone subproducts
         */
        let tempSubproducts = [...subproductsValue];
        tempSubproducts[index] = { ...tempSubproducts[index], color: data };

        /**
         * set new value for subproducts
         */
        setsubproductsValue(tempSubproducts);
        dispatch(setSubproductsForUpdate(tempSubproducts));
    };
    const setSubproductValueOfInv = (data, index) => {
        /**
         * shallow clone subproducts
         */
        let tempSubproducts = [...subproductsValue];
        tempSubproducts[index] = { ...tempSubproducts[index], inventory: data };

        /**
         * set new value for subproducts
         */
        setsubproductsValue(tempSubproducts);
        dispatch(setSubproductsForUpdate(tempSubproducts));
    };

    const removeSubproduct = (index) => {
        let tempSubproducts = [...subproductsValue];
        tempSubproducts.splice(index, 1);
        setsubproductsValue(tempSubproducts);
        dispatch(setSubproductsForUpdate(tempSubproducts));
    };

    const addSubproduct = () => {

     let subproductsClone = [...subproductsValue]
        const newSubproduct = {
             id: '',
            name: "",
            createdAt: '',
            updatedAt: '',
            size: "",
            color: "",
            inventory: "",
        };
        subproductsClone = [...subproductsClone, newSubproduct]
        setsubproductsValue(subproductsClone);
        dispatch(setSubproductsForUpdate(subproductsClone));
   
    };

    const subproductsMap = subproductsValue.map((subp, index) => {
        return (
            <div
                className="form-group col-lg-3 col-md-4 col-sm-6 add-product-right-txt-container"
                key={index}
                style={{ marginBottom: `5rem` }}
            >
                <div className="subproducts-flag d-flex justify-content-center align-items-center">
                    {index + 1}
                </div>
                <div
                    className="subproducts-clear d-flex justify-content-center align-items-center"
                    onClick={() => removeSubproduct(index)}
                >
                    x
                </div>
                <div className="subproducts-custom">
                    <input
                        type="text"
                        className="add-product-right-txt-input"
                        placeholder="Size"
                        value={subproductsValue[index].size}
                        onChange={(event) => {
                            setSubproductValueOfSize(event.target.value, index);
                        }}
                    />
                    <input
                        type="text"
                        className="add-product-right-txt-input"
                        placeholder={`Màu`}
                        value={subproductsValue[index].color}
                        onChange={(event) => {
                            setSubproductValueOfColor(event.target.value, index);
                        }}
                    />

                    <input
                        type="text"
                        className="add-product-right-txt-input"
                        placeholder={`Số lượng tồn`}
                        value={subproductsValue[index].inventory}
                        onChange={(event) => {
                            setSubproductValueOfInv(event.target.value, index);
                        }}
                    />

                    {/* 
                           bug
                          <span
                              className={classnames(
                                  "badge badge-secondary add-product-right-txt-badge badge-info",
                                  {
                                      "d-none": false,
                                  }
                              )}
                          >
                              {" "}
                              {subp.size}{" "}
                          </span> */}
                </div>
            </div>
        );
    });

    return (
        <div className="mt-5 row subproducts-container">
            <div className="col-12 subproducts-title">Thêm Size, Màu và Số lượng tồn</div>
            {subproductsMap}
            <div
                className="col-lg-1 subproduct-block d-flex flex-column justify-content-center align-items-center"
                onClick={() => addSubproduct()}
            >
                <i className="far fa-plus-square fa-2x"></i>
            </div>
        </div>
    );
};

export default Up_SizeAndColorList;
