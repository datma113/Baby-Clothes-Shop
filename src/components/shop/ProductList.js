import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProduct } from "../../redux/actions/actFilterProduct";

import Product from "./Product";

const ProductList = () => {
    const dispatch = useDispatch();
    const [currentIndexOfGroupProduct, setcurrentIndexOfGroupProduct] = useState(0)
    const [currentIndexOfFilterByname, setcurrentIndexOfFilterByname] = useState(-1)
    const [currentIndexOfFilterByPrice, setcurrentIndexOfFilterByPrice] = useState(-1)
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
    /**
     *  pagination
     */
    const totalPageProducts = useSelector((state) => state.totalPageProducts);
    let totalPageProductsArr = [...Array(totalPageProducts)];
    const [currentPage, setCurrentPage] = useState(0);

    const productListMap = productList.map((product, index) => {
        /**
         * check marker in [hot, discount, default]
         *      default = 'DEF' => marker = ''
         *      hot = 'HOT' => marker = 'hot'
         *      discount = 'DIS' => marker = (String) discount
         */
        let marker = "";
        let discount = `${(-product.discount * 100).toFixed(2)}%`;

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
                    url={product.imagesUrl}
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
        dispatch(getAllProduct({ query: "", sortBy: "", type: "", page: 0 }));
    }, []);

    const filterByCategory = (query) => {
        let tempCondition = { ...conditionOfAPI };
        tempCondition.query = query;
        tempCondition.page = 0;
        setCurrentPage(0);
       
        setconditionOfAPI(tempCondition);
        dispatch(getAllProduct(tempCondition));
    };

    const filterByKeyword = (name, type) => {
        let tempCondition = { ...conditionOfAPI };
        tempCondition.sortBy = name;
        tempCondition.type = type;
        tempCondition.page = 0;
        setCurrentPage(0);

        dispatch(getAllProduct(tempCondition));
    };

    /**
     *****************************
     */
    const titlesCollapse = ["Phân Nhóm", "Lọc theo giá", "Lọc theo tên"];
   
    const contentsCollapseCategory = [
        { name: "Tất cả", type: "" },
        { name: "Áo", type: "Áo" },
        { name: "Quần", type: "Quần" },
        { name: "Váy", type: "Váy" },
    ];
    const objSortingByPrice = [
        { name: "Tăng dần", type: "asc", keyword: "price" },
        { name: "Giảm dần", type: "desc", keyword: "price" },
    ];

    const objSortingByName = [
        { name: "A-Z", type: "asc", keyword: "name" },
        { name: "Z-A", type: "desc", keyword: "name" },
    ];

    const isCurrentIndexOfGroupProduct = (index) => {
        return currentIndexOfGroupProduct === index ? "bg-warning text-light" : ""
    }
    const isCurrentIndexOfFilterByPrice = (index) => {

        return currentIndexOfFilterByPrice === index ? "bg-warning text-light" : ""
    }
    const isCurrentIndexOfFilterByName = (index) => {

        return currentIndexOfFilterByname === index ? "bg-warning text-light" : ""
    }
    

    const contentsCollapseCatagoryMap = contentsCollapseCategory.map((item, index) => {
        return (
            <div
                className={`card-body collapse-content ${isCurrentIndexOfGroupProduct(index)}`}
                key={index}
                onClick={() => { 
                    filterByCategory(item.type)
                    setcurrentIndexOfGroupProduct(index)
                    setcurrentIndexOfFilterByPrice(-1)
                    setcurrentIndexOfFilterByname(-1)
                }}
            >
                {" "}
                {item.name}{" "}
            </div>
        );
    });
    const objSortingByNameMap = objSortingByName.map((obj, index) => {
        return (
            <div
                className={`card-body collapse-content ${isCurrentIndexOfFilterByName(index)}`}
                key={index}
                onClick={() => {
                    filterByKeyword(obj.keyword, obj.type)
                    setcurrentIndexOfFilterByname(index);
                    setcurrentIndexOfFilterByPrice(-1)
                }}
            >
                {" "}
                {obj.name}{" "}
            </div>
        );
    });
    const objSortingByPriceMap = objSortingByPrice.map((obj, index) => {
        return (
            <div
                className={`card-body collapse-content ${isCurrentIndexOfFilterByPrice(index)}`}
                key={index}
                onClick={() =>{ 
                    filterByKeyword(obj.keyword, obj.type)
                    setcurrentIndexOfFilterByPrice(index)
                    setcurrentIndexOfFilterByname(-1)
                }}
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
                    {index === 1 && objSortingByPriceMap}
                    {index === 2 && objSortingByNameMap}
                </div>
            </div>
        );
    });
    /**
     * click in number of pagination
     * to change current page
     */
    const changeCurrentPageOfProducts = (index) => {
        let tempCondition = { ...conditionOfAPI };
        tempCondition.page = index;
        setconditionOfAPI(tempCondition);
        dispatch(getAllProduct(tempCondition));
        window.scrollTo(0, 300);
    };

    const updateCurrentpage = (index) => {
        setCurrentPage(index);
    };
    const isCurrentPage = (index) => {
        return currentPage === index ? "active" : "";
    };

    /**
     * previous page button handle
     */
    const goPreviousPage = () => {
        let validNumber = currentPage - 1;

        if (validNumber >= 0) {
            let tempCondition = { ...conditionOfAPI };
            tempCondition.page = validNumber;

            setCurrentPage(validNumber);
            setconditionOfAPI(tempCondition);

            dispatch(getAllProduct(tempCondition));
            window.scrollTo(0, 300);
        }
    };
    /**
     * next page button handle
     */
    const goNextPage = () => {
        let validNumber = currentPage + 1;

        if (validNumber < totalPageProducts) {
            let tempCondition = { ...conditionOfAPI };
            tempCondition.page = validNumber;

            setCurrentPage(validNumber);
            setconditionOfAPI(tempCondition);

            dispatch(getAllProduct(tempCondition));
            window.scrollTo(0, 300);
        }
    };

    const paginationsMap = totalPageProductsArr.map((x, index) => {
        return (
            <li
                key={index}
                className={`page-item  ${isCurrentPage(index)}`}
                onClick={() => {
                    changeCurrentPageOfProducts(index);
                    updateCurrentpage(index);
                }}
            >
                <a style={{ cursor: `pointer` }} className="page-link mr-2">
                    {index + 1}
                </a>
            </li>
        );
    });

    const searchProduct = (e) => {
        if (e.key === "Enter") {
            dispatch(getAllProduct({ query: e.target.value, sortBy: "", type: "", page: 0 }));
        }

    };
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
                <div className="row mt-5 mb-5 col-lg-9">
                    <div className="form-group col-lg-12">
                        <input
                            type="text"
                            className="form-control search-product"
                            placeholder="Tìm kiếm sản phẩm..."
                            onKeyUp={searchProduct}
                        />
                    </div>

                    {productListMap}
                    <div className="col-12 mt-5">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li
                                    className="page-item mr-2"
                                    style={{ cursor: `pointer` }}
                                    onClick={() => goPreviousPage()}
                                >
                                    <a className="page-link">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                {paginationsMap}
                                <li className="page-item" onClick={() => goNextPage()}>
                                    <a className="page-link">
                                        <span aria-hidden="true" style={{ cursor: `pointer` }}>
                                            &raquo;
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
