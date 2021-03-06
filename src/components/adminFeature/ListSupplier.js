import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSuppliers } from "../../redux/actions/actAdmin";

import Us_update from "./Us_update";
import Us_delete from "./Us_delete";
const ListSupplier = () => {
    const animated = "wow animate__animated animate__zoomIn animate__slow";

    const dispatch = useDispatch();
    const suppliers = useSelector((state) => state.suppliers);

    const suppliersMap = suppliers.map((supplier, index) => {
        return (
            <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>{supplier.name}</td>
                <td>{supplier.address}</td>
                <td>{supplier.email}</td>
                <td>{supplier.phone}</td>
                <td>
                    {" "}
                    <Us_update id={supplier.id} />
                </td>
                <td>
                    {" "}
                    <Us_delete id={supplier.id} index={index} />
                </td>
            </tr>
        );
    });

    useEffect(() => {
        dispatch(getSuppliers());
    }, []);

    return (
        <div className="supplier-table-container">
            <table className={`table  table-border table-suppliers table-hover supplier-table ${animated}`}>
                <thead className="bg-secondary text-light">
                    <tr className="text-center">
                        <th>STT</th>

                        <th>Tên NCC</th>
                        <th>Địa chỉ</th>
                        <th>Email</th>
                        <th>Liên lạc</th>
                        <th>. </th>
                        <th> .</th>
                    </tr>
                </thead>
                <tbody>{suppliersMap}</tbody>
            </table>
        </div>
    );
};

export default ListSupplier;
