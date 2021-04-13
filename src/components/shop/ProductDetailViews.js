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
    let txtCurrentStock;
    const LIST_ITEM = "LIST_ITEM";

    const dispatch = useDispatch();
    const { id } = useParams();

    const product = useSelector((state) => state.getProductByID);
    const currentQuantity = useSelector((state) => state.quantitySaved);
    const colors = useSelector((state) => state.getColors);
    const sizes = useSelector((state) => state.getSizes);
    /**
     * when load page will dispatch convert currency
     * convert price (number) to String format VND
     */

    // const currency = useSelector((state) => state.currency);

    const inventory = useSelector((state) => state.getSizeAndQuantityStock);
    const [currentSize, setcurrentSize] = useState("");

    const [currentIndexColors, setCurrentIndexColors] = useState(-1);
    const [currentIndexSizes, setCurrentIndexSizes] = useState(-1);

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
                    return inv.inventory === 0 ? (text = "out") : (text = inv.inventory);
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

    const addToCart = (id, quantity, colorIndex, sizeIndex) => {
        let cart = JSON.parse(sessionStorage.getItem(LIST_ITEM));
        let itemList = [];
        let isDupplicate = false;
        let obj = {
            id,
            quantity,
            color: colors[colorIndex].color,
            size: sizes[sizeIndex].size,
            key: `${id}${colors[colorIndex].color}${sizes[sizeIndex].size}`,
        };
        if (cart === null) {
            itemList.push(obj);
            sessionStorage.setItem(LIST_ITEM, JSON.stringify(itemList));
        } else {
            cart.forEach((element) => {
                if (element.key === obj.key) {
                    isDupplicate = true;
                    element.quantity = element.quantity + obj.quantity;


                    if (element.quantity > parseInt(txtCurrentStock)) {
                        window.alert("??");
                    } else {
                        sessionStorage.setItem(LIST_ITEM, JSON.stringify(cart));
                        window.alert(`${element.quantity} : ${obj.quantity}`);
                    }
                    
                }
            });
            if (!isDupplicate) {
                cart.push(obj);
                sessionStorage.setItem(LIST_ITEM, JSON.stringify(cart));
                setCurrentIndexColors(-1);
                setCurrentIndexSizes(-1);
            }
        }
    };

    useEffect(() => {
        dispatch(getProductByID(id));
        dispatch(getColors(id));
        dispatch(getSizes(id));
    }, []);

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-lg-5">
                    <img src={`../img/${product.url}`} className="pd-img" />
                </div>
                <div className="col-lg-7 mt-5">
                    <p className="pd-category"> {product.category} </p>
                    <p className="pd-name"> {product.name} </p>
                    <div>
                        {product.discount !== 0 && <strike> {product.originPriceToString}</strike>}
                        <span className="pd-price"> {product.sellPriceToString} </span>
                    </div>
                    <div className="mt-3">{product.shortDescription}</div>
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
                                    currentQuantity,
                                    currentIndexColors,
                                    currentIndexSizes
                                )
                            }
                        >
                            thêm vào giỏ hàng
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailViews;
