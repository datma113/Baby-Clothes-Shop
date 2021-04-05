import { React, useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import classNames from "classnames";

import {getSizesAndQuantityInStock} from '../../redux/actions/index'
import QuantityInput from './QuantityInput'

const ProductDetailViews = ({ product, colors, sizes }) => {
    const dispatch = useDispatch()

    const inventory = useSelector(state => state.getSizeAndQuantityStock)
   
    const [currentIndexColors, setCurrentIndexColors] = useState(-1);
    const [currentIndexSizes, setCurrentIndexSizes] = useState(-1);

    const sellPrice = product.price * (1 - product.discount);

    const isPickedColor = (index) => {
        return currentIndexColors === index;
    };

    const setCurColor = (index) => {
        setCurrentIndexColors(index);
    };

    const isPickedSize = (index) => {
        return currentIndexSizes === index;
    };

    const setCurSize = (index) => {
        setCurrentIndexSizes(index);
    };

    const getAPI_SizeAndQuantityStock = (id, color) => {
        dispatch(getSizesAndQuantityInStock(id, color))
    }

    const colorsMap = colors.map((color, index) => {
        return (
            <span
                key={index}
                className={classNames(`pd-colors-picker `, { " isPicked": isPickedColor(index) })}
                onClick={() => {setCurColor(index); getAPI_SizeAndQuantityStock(product.id, color.color)}}
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
                onClick={() => setCurSize(index)}
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
        if(inventory[index] === undefined || currentIndexColors === -1)
            return <b> Vui lòng chọn màu và size! </b>
        else if( inventory[index].inventory === 0 )
            return <span style={{color: `red`}}> Đã hết hàng </span>
        return <b> {inventory[index].inventory} </b>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <img src={`./img/${product.url}`} alt="haha" className="pd-img" />
                </div>
                <div className="col-lg-7 mt-5">
                    <p> {product.category} </p>
                    <p> {product.name} </p>
                    <div>
                        {product.discount !== 0 && <strike>₫ {product.price}</strike>}
                        <span> ₫ {sellPrice} </span>
                    </div>
                    <div>
                        mô tả ngắn gọn ở đây? Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Accusantium ullam asperiores molestias? Similique, fugiat nesciunt!
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
                        <QuantityInput />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailViews;
