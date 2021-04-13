import React from "react";
import { useDispatch } from "react-redux";
import {
    getProductByCategory,
    getSortingProductByName,
} from "../../redux/actions/actFilterProduct";

const Collapse = () => {
    const dispatch = useDispatch();

    const contentsCollapseCategory = [
        { name: "Tất cả", type: "" },
        { name: "Áo thun", type: "Áo" },
        { name: "Quần", type: "Quần" },
        { name: "Váy", type: "Váy" },
    ];

    const getProductByCategoryAPI = (type) => {
        dispatch(getProductByCategory(type));
    };

    const getSortingProductByNameAPI = (type) => {
        dispatch(getSortingProductByName(type));
    };
    const contentsCollapseCatagoryMap = contentsCollapseCategory.map((item, index) => {
        return (
            <div
                className="card-body collapse-content"
                key={index}
                onClick={() => getProductByCategoryAPI(item.type)}
            >
                {" "}
                {item.name}{" "}
            </div>
        );
    });

    const ObjSortingByPrice = ["Tăng dần", "Giảm dần"];
    const ObjSortingByName = [
        { name: "A-Z", type: "asc" },
        { name: "Z-A", type: "desc" },
    ];

    const ObjSortingByNameMap = ObjSortingByName.map((obj, index) => {
        return (
            <div className="card-body collapse-content" key={index}
            onClick={() => getSortingProductByNameAPI(obj.type)}
            >
                {" "}
                {obj.name}{" "}
            </div>
        );
    });

    const titlesCollapse = ["Loại sản phẩm", "Sắp xếp theo giá", "Sắp xếp theo tên"];

    const mapElementsInCollapse = (object) => {
        return object.map((item, index) => {
            return (
                <div className="card-body collapse-content" key={index}>
                    {" "}
                    {item}{" "}
                </div>
            );
        });
    };

    const titlesCollapseMap = titlesCollapse.map((item, index) => {
        return (
            <div className="card" key={index}>
                <div
                    className="card-header"
                    role="tab"
                    id={`section${index}HeaderId`}
                    data-toggle="collapse"
                    data-parent="#accordianId"
                    aria-expanded="true"
                    aria-controls={`section${index}ContentId`}
                    href={`#section${index}ContentId`}
                >
                    <h3 className="m-3">{item}</h3>
                </div>
                <div
                    id={`section${index}ContentId`}
                    className="collapse in"
                    role="tabpanel"
                    aria-labelledby={`section${index}HeaderId`}
                >
                    {index === 0 && contentsCollapseCatagoryMap}
                    {index === 1}
                    {index === 2 && ObjSortingByNameMap}
                </div>
            </div>
        );
    });

    return (
        <div className="mt-5">
            <div id="accordianId" role="tablist" aria-multiselectable="true">
                {titlesCollapseMap}
            </div>
        </div>
    );
};

export default Collapse;
