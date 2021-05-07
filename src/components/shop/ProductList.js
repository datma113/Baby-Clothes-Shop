import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProduct } from "../../redux/actions/actFilterProduct";

import Product from "./Product";

const ProductList = () => {
    const dispatch = useDispatch();
    const [conditionOfAPI, setconditionOfAPI] = useState({
        query: "",
        sortBy: "",
        type: "",
        page: 0,
    });
    /**
     * productList will changed
     *  when user click filter
     * then action will dispatched
     */
    const productList = useSelector((state) => state.allProductInShop);

    const productListMap = productList.map((product, index) => {
        /**
         * check marker in [hot, discount, default]
         *      default = 'DEF' => marker = ''
         *      hot = 'HOT' => marker = 'hot'
         *      discount = 'DIS' => marker = (String) discount
         */
        let marker = "";
        let discount = `${-product.discount * 100}%`;

        if (product.marker !== "DEF") {
            marker = product.marker === "HOT" ? "HOT" : discount;
        }

        return (
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 product-when-hover" key={index}>
                <Product
                    key={index}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    url={product.imagesUrl} //bug here
                    discount={product.discount}
                    views={product.views}
                    marker={marker}
                    category={product.category}
                    shortDesc={product.shortDescription}
                    views={product.views}
                />
            </div>
        );
    });

    /**
     * init filter products are "" (empty)
     *  */

    useEffect(() => {
        dispatch(getAllProduct({query: '', sortBy: '', type: '', page: 0}));
    }, []);

    const filterByCategory = (query) => {
        let tempCondition = {...conditionOfAPI};
        tempCondition.query = query;
        
        setconditionOfAPI(tempCondition);
        dispatch(
            getAllProduct(tempCondition)
        );
    };

    const filterByKeyword = (name, type) => {
        let tempCondition = {...conditionOfAPI};
        tempCondition.sortBy = name;
        tempCondition.type = type;
        dispatch(
            getAllProduct(tempCondition)
        );       
    }
    
    /**
     *****************************
     */
    const titlesCollapse = ["Loại sản phẩm", "Lọc theo giá", "Lọc theo tên"];

    const contentsCollapseCategory = [
        { name: "Tất cả", type: "" },
        { name: "Áo thun", type: "Áo" },
        { name: "Quần", type: "Quần" },
        { name: "Váy", type: "Váy" },
    ];
    const objSortingByPrice = [
        { name: "tăng dần", type: "asc", keyword: "price" },
        { name: "giảm dần", type: "desc", keyword: "price" },
    ];

    const objSortingByName = [
        { name: "A-Z", type: "asc", keyword: "name" },
        { name: "Z-A", type: "desc", keyword: "name" },
    ];
    const contentsCollapseCatagoryMap = contentsCollapseCategory.map((item, index) => {
        return (
            <div
                className="card-body collapse-content"
                key={index}
                onClick={() => filterByCategory(item.type)}
            >
                {" "}
                {item.name}{" "}
            </div>
        );
    });
    const ObjSortingByNameMap = objSortingByName.map((obj, index) => {
        return (
            <div className="card-body collapse-content" key={index}
            onClick={() => filterByKeyword(obj.keyword, obj.type)}
            >
                {" "}
                {obj.name}{" "}
             
            </div>
        );
    });
    const ObjSortingByPriceMap = objSortingByPrice.map((obj, index) => {
        return (
            <div className="card-body collapse-content" key={index}
            onClick={() => filterByKeyword(obj.keyword, obj.type)}
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
        <div className="container">
            {" "}
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                    {" "}
                    <div className="mt-5">
                        <div id="accordianId" role="tablist" aria-multiselectable="true">
                            {titlesCollapseMap}
                        </div>
                    </div>
                </div>
                <div className="row mt-5 mb-5 col-lg-9 ">{productListMap}</div>
            </div>
        </div>
    );
};

export default ProductList;
