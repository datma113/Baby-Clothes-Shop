import React, { useEffect } from "react";

import Background from "../Background";
import ProductDetailViews from "./ProductDetailViews";
import Description from "./Description";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { getProductByID } from "../../redux/actions/index";
const ProductDetail = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const product = useSelector((state) => state.getProductByID);

    useEffect(() => {
        dispatch(getProductByID(id));
        window.scrollTo(0, 0);
    }, []);

    const goBackToShop = () => {
        history.goBack();
    }

    return (
        <div>
            <Background text="-Chi tiết sản phẩm-" />
            {product.active && (
                <div>
                    <ProductDetailViews />
                    <Description />
                </div>
            )}
            {!product.active && (
                <div className="stop-bussiness">
                    <p className="stop-bussiness-sorry">
                        Xin lỗi. Sản phẩm này đã ngừng kinh doanh!
                    </p>
                    <p className="stop-bussiness-back"
                        onClick={() => goBackToShop()}
                    >
                        {" "}
                        <i className="fas fa-arrow-left"></i>&nbsp;
                        Quay lại
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
