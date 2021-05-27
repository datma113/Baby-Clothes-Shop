import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import {
    getProductByID,
    getColors,
    getSizes,
    getSizesAndQuantityInStock,
} from "../../redux/actions/index";

import QuantityInput from "./QuantityInput";
import { useParams } from "react-router";

const ProductDetailViews = () => {
    let isOutOfStock = false;
    let txtCurrentStock = "";
    let subProductId = "";

    const [txtMessWhenAddToCart, setTxtMessWhenAddToCart] = useState("");

    const LIST_ITEM = "LIST_ITEM";

    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector((state) => state.getProductByID);
    const currentQuantity = useSelector((state) => state.quantitySaved);
    const colors = useSelector((state) => state.getColors);
    const sizes = useSelector((state) => state.getSizes);

    console.log(product)


    const inventory = useSelector((state) => state.getSizeAndQuantityStock);
    const [currentSize, setcurrentSize] = useState("");

    const [currentIndexColors, setCurrentIndexColors] = useState(-1);
    const [currentIndexSizes, setCurrentIndexSizes] = useState(-1);

    const category = { ...product.category };

    const isPickedColor = (index) => {
        return currentIndexColors === index;
    };

    const setCurColor = (index) => {
        setCurrentIndexColors(index);
    };

    const isPickedSize = (index) => {
        return currentIndexSizes === index;
    };

    const setCurSizeAndIndex = (index, size) => {
        setcurrentSize(size);
        setCurrentIndexSizes(index);
    };

    const getAPI_SizeAndQuantityStock = (id, color) => {
        dispatch(getSizesAndQuantityInStock(id, color));
    };

    const colorsMap = colors.map((color, index) => {
        return (
            <span
                key={index}
                className={classNames(`pd-colors-picker `, { " isPicked": isPickedColor(index) })}
                onClick={() => {
                    setCurColor(index);
                    getAPI_SizeAndQuantityStock(product.id, color.color);
                }}
            >
                {color.color}
            </span>
        );
    });

    const sizesMap = sizes.map((size, index) => {
        return (
            <span
                key={index}
                className="pd-colors-picker"
                className={classNames(`pd-colors-picker `, { " isPicked": isPickedSize(index) })}
                onClick={() => setCurSizeAndIndex(index, size)}
            >
                {size.size}
            </span>
        );
    });

    /**
     * check inventory denpence on current size index
     * and render it
     */

    const renderInventory = (index) => {
        let text = "";
        //not selected size and color yet
        if (currentIndexColors === -1 || index === -1) return <b> Vui lòng chọn màu và size! </b>;
        else {
            inventory.map((inv) => {
                if (inv.size === currentSize.size) {
                    subProductId = inv.subProductId;
                    return inv.inventory === 0 ? (text = "out") : (text = inv.inventory);
                } else {
                    text = "out";
                }
            });
        }
        /**
         * check is out of stock and current stock
         * and save state
         */
        if (text === "out") isOutOfStock = true;
        else {
            isOutOfStock = false;
            txtCurrentStock = parseInt(text);
        }

        return text === "out" ? (
            <span style={{ color: `red`, fontWeight: `bold` }}> Đã hết hàng </span>
        ) : (
            <b> {text} </b>
        );
    };

    const areChosenColorAndSize = () => {
        return currentIndexColors === -1 || currentIndexSizes === -1 ? true : false;
    };

    const addToCart = (
        id,
        subProductId,
        name,
        quantity,
        colorIndex,
        sizeIndex,
        price,
        discount,
        currentStock
    ) => {
        let cart = JSON.parse(sessionStorage.getItem(LIST_ITEM));

        let itemList = [];
        let isDupplicate = false;
        /**
         * create obj to save object in sessionStorage
         *
         */
        let obj = {
            id,
            subProductId,
            name,
            quantity,
            color: colors[colorIndex].color,
            size: sizes[sizeIndex].size,
            price: price * (1 - discount),
            currentStock,
            key: `${id}${colors[colorIndex].color}${sizes[sizeIndex].size}`,
        };
        if (cart === null) {
            itemList.push(obj);
            sessionStorage.setItem(LIST_ITEM, JSON.stringify(itemList));
            setTxtMessWhenAddToCart("Thêm thành công vào giỏ hàng");
            setCurrentIndexColors(-1);
            setCurrentIndexSizes(-1);
        } else {
            cart.forEach((element) => {
                if (element.key === obj.key) {
                    isDupplicate = true;
                    element.quantity = element.quantity + obj.quantity;

                    if (element.quantity > parseInt(txtCurrentStock)) {
                        setTxtMessWhenAddToCart("Sản phẩm đã hết hàng");
                    } else {
                        sessionStorage.setItem(LIST_ITEM, JSON.stringify(cart));
                        setTxtMessWhenAddToCart("Thêm thành công vào giỏ hàng");
                        setCurrentIndexColors(-1);
                        setCurrentIndexSizes(-1);
                    }
                }
            });
            if (!isDupplicate) {
                cart.push(obj);
                sessionStorage.setItem(LIST_ITEM, JSON.stringify(cart));
                setCurrentIndexColors(-1);
                setCurrentIndexSizes(-1);
                setTxtMessWhenAddToCart("Thêm thành công vào giỏ hàng");
            }
        }
    };

    useEffect(() => {
        dispatch(getProductByID(id));
        dispatch(getColors(id));
        dispatch(getSizes(id));

        window.scrollTo(0, 500);
    }, []);

    const showImage = () => {
        if (product.imagesUrl === undefined) return null
        
        if(product.imagesUrl[0] !== undefined)
            return product.imagesUrl[0].url
    };

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-lg-5 pd-img-container">
                    <img src={showImage()} className="pd-img" />
                </div>
                <div className="col-lg-7 pd-views-container">
                    <p className="pd-category"> {category.name} </p>
                    <p className="pd-name"> {product.name} </p>
                    <div>
                        {product.discount !== 0 && <strike> {product.originPriceToString}</strike>}
                        <span className="pd-price"> {product.sellPriceToString} </span>
                    </div>
                   <div className="mt-3" style={{ fontSize: `1.5rem` }}>
                        {product.shortDescription}
                    </div>



                    <div className="pd-colors-picker-container">
                        <span className="pd-title">Màu sắc:</span>
                        {colorsMap}
                    </div>
                    <div className="pd-colors-picker-container">
                        <span className="pd-title">Size:</span>
                        {sizesMap}
                    </div>
                    <div className="pd-colors-picker-container">
                        <span className="pd-title">Có sẵn:</span>
                        {renderInventory(currentIndexSizes)}
                    </div>
                    <div className="pd-colors-picker-container row">
                        <span className="pd-title">Số lượng:</span>
                        <QuantityInput txtCurrentStock={txtCurrentStock} />
                    </div>
                    <div className="pd-colors-picker-container row">
                        <div
                            data-toggle="modal"
                            data-target="#modelId"
                            className={classNames(
                                "btn btn-primary pd-add-to-cart",
                                {
                                    disabled: isOutOfStock,
                                },
                                { disabled: areChosenColorAndSize() }
                            )}
                            onClick={() =>
                                addToCart(
                                    product.id,
                                    subProductId,
                                    product.name,
                                    currentQuantity,
                                    currentIndexColors,
                                    currentIndexSizes,
                                    product.price,
                                    product.discount,
                                    txtCurrentStock
                                )
                            }
                        >
                            thêm vào giỏ hàng
                        </div>

                        <div
                            className="modal fade"
                            id="modelId"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="modelTitleId"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div
                                        className="modal-body d-flex justify-content-center align-items-center"
                                        style={{ height: "15rem", fontSize: "3rem" }}
                                    >
                                        {txtMessWhenAddToCart}
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button "
                                            className="btn btn-danger"
                                            style={{ padding: `1rem 2rem` }}
                                            data-dismiss="modal"
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailViews;
