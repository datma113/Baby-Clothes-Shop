import React from "react";
import { useDispatch } from "react-redux";
import {
    getProductByCategory,
    getSortingProductByKeyword,
} from "../../redux/actions/actFilterProduct";

const Collapse = () => {
    const dispatch = useDispatch();

    const titlesCollapse = ["Loại sản phẩm", "Lọc theo giá", "Lọc theo tên"];

    const contentsCollapseCategory = [
        { name: "Tất cả", type: "" },
        { name: "Áo thun", type: "Áo" },
        { name: "Quần", type: "Quần" },
        { name: "Váy", type: "Váy" },
    ];

    const getProductByCategoryAPI = (type) => {
        dispatch(getProductByCategory(type));
    };

    const getSortingProductByKeywordAPI = (type, keyword) => {
        dispatch(getSortingProductByKeyword(type, keyword));
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

    const objSortingByPrice = [
        { name: "tăng dần", type: "asc", keyword: "price" },
        { name: "giảm dần", type: "desc", keyword: "price" },
    ];

    const objSortingByName = [
        { name: "A-Z", type: "asc", keyword: "name" },
        { name: "Z-A", type: "desc", keyword: "name" },
    ];

    const ObjSortingByNameMap = objSortingByName.map((obj, index) => {
        return (
            <div
                className="card-body collapse-content"
                key={index}
                onClick={() => getSortingProductByKeywordAPI(obj.type, obj.keyword)}
            >
                {" "}
                {obj.name}{" "}
            </div>
        );
    });

    const ObjSortingByPriceMap = objSortingByPrice.map((obj, index) => {
        return (
            <div
                className="card-body collapse-content"
                key={index}
                onClick={() => getSortingProductByKeywordAPI(obj.type, obj.keyword)}
            >
                {" "}
                {obj.name}{" "}
            </div>
        );
    });

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
                    {index === 1 && ObjSortingByPriceMap}
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
