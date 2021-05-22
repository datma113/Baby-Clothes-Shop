import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCategories } from "../../redux/actions/actAdmin";
import Ucate_Update from "./Ucate_Update";
import Ucate_delete from "./Ucate_delete";
const ListCategory = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);

    const categoriesMap = categories.map((category, index) => {
        return (
            <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>{category.name}</td>

                <td>
                    {" "}
                    <Ucate_Update id={category.id} />
                </td>
                <td>
                    {" "}
                    <Ucate_delete id={category.id} index={index} />
                </td>
            </tr>
        );
    });

    useEffect(() => {
        dispatch(getCategories());
    }, []);
    return (
        <div>
            <table className="table  table-border table-suppliers table-hover">
                <thead className="bg-dark text-light">
                    <tr className="text-center">
                        <th>STT</th>

                        <th>Loại sản phẩm</th>
                        <th> Chỉnh sữa </th>
                        <th> xóa </th>
                    </tr>
                </thead>
                <tbody>{categoriesMap}</tbody>
            </table>
        </div>
    );
};

export default ListCategory;
