import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { getProductsForManage } from "../../redux/actions/actAdmin";

const ManageProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProductsForManage);
    const totalPageProducts = useSelector((state) => state.totalpageProductsForManage);
    const [conditionOfAPI, setconditionOfAPI] = useState({
        query: "",
        page: 0,
    });


    let totalPageProductsArr = [...Array(totalPageProducts)];
    const [currentPage, setCurrentPage] = useState(0);

    const productsMap = products.map((product, index) => {
        const animated = "wow animate__animated animate__zoomIn animate__slow";

      
        let discount = `${(-product.discount * 100).toFixed(0)}%`;
        
      
        let realPrice = product.price * (1 - product.discount);

        let customOriginPrice = product.price.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
        });

        let customRealPrice = realPrice.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
        });

       
        let shortenDesc = product.shortDescription.slice(0, 60);
        shortenDesc += "...";

        const showImage = () => {
            if (product.imagesUrl.length > 0) return product.imagesUrl[0].url;
            else return null;
        };
    
        const isHotProduct = product.marker === "HOT" ? true : false;
        
        const newMarker = () => {
            let {marker} = product
            if(marker === "HOT") return "HOT"
            if(marker === "DEF") return ""
            return discount
        }

        const showDiscountPrice = () => {
            if(product.marker === "DEF" || product.marker === "HOT")
                return "d-none"
            else return ""
        }

        return (
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 product-when-hover" key={index}>
                <div className={`d-flex flex-column product-container ${animated}`}>
                    <div className="product-img-container">
                        <img src={showImage()} alt="" className="w-100 h-100" />
                        <div
                            className={classNames("product-img-marker", { "is-hot": isHotProduct })}
                        >
                            {" "}
                            {newMarker()}{" "}
                        </div>
                    </div>
                    <div className="product-content">
                        <p className="product-content-category"> {product.category.name} </p>
                        <div className="product-content-name"> {product.name} </div>
                        <div className="product-content-shortDesc"> {shortenDesc} </div>
                        <p className="product-content-views">
                            {" "}
                            <i className="fas fa-eye"></i>
                            &nbsp;
                            {product.views}{" "}
                        </p>
                        <div style={{ color: "red" }} className="mt-3">
                            {" "}
                            <span
                                style={{ color: "gray" }}
                                className={`is-discount-product ${showDiscountPrice()} `}
                            >
                                {customOriginPrice}
                            </span>{" "}
                            {customRealPrice}{" "}
                        </div>
                    </div>
                    <div className="product-content-link">
                        <Link to={`/admin/product/${product.id}`}>Cập nhật</Link>
                    </div>
                </div>
            </div>
        );
    });

    const updateCurrentpage = (index) => {
        setCurrentPage(index);
    };
    const isCurrentPage = (index) => {
        return currentPage === index ? "active" : "";
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

    const changeCurrentPageOfProducts = (index) => {
        let tempCondition = { ...conditionOfAPI };
        tempCondition.page = index;
        setconditionOfAPI(tempCondition);
        dispatch(getProductsForManage(tempCondition));
        window.scrollTo(0, 300);
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

            dispatch(getProductsForManage(tempCondition));
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

            dispatch(getProductsForManage(tempCondition));
            window.scrollTo(0, 300);
        }
    };

    useEffect(() => {
        dispatch(
            getProductsForManage({
                query: "",
                page: 0,
            })
        );
    }, []);

    return (
        <div>
            <p className="add-product-header text-success">Danh sách sản phẩm</p>
            <div className="row">
                {productsMap}
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
    );
};

export default ManageProducts;
