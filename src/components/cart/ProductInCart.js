import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setProductInCart, removeProductInCart } from "../../redux/actions/actCart";
import QuantityInCart from "./QuantityCart";

const ProductInCart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);

    const productsMap = products.map((product, index) => {
        let realPrice = product.price;
        let totalEachProduct = realPrice * product.quantity;

        const removeProduct = (index) => {
            dispatch(removeProductInCart(products, index));
        };
        return (
            <tr key={index}>
                <th className="text-center">{index + 1}</th>
                <th>{`${product.name} - ${product.size} - ${product.color}`}</th>
                <th className="text-center">
                    {realPrice.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                    })}
                </th>
                <th className="d-flex justify-content-center " style={{ borderBottom: "none" }}>
                    <QuantityInCart
                        currentStock={product.currentStock}
                        currentQuantity={product.quantity}
                        keyID={product.key}
                    />
                </th>
                <th className="text-center">
                    {" "}
                    {totalEachProduct.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                    })}
                </th>
                <th className="text-center cart-pop-item" onClick={() => removeProduct(index)}>
                    {" "}
                    x{" "}
                </th>
            </tr>
        );
    });

    useEffect(() => {
        let productsInCart = JSON.parse(sessionStorage.getItem("LIST_ITEM"));

        if (productsInCart !== null) {
            dispatch(setProductInCart(productsInCart));
        }
    }, []);
    return (
        <div className="container">
            <div className="table-when-responsive">
                <table className="table table-bordered table-hover table-container">
                    <thead className="bg-primary text-center">
                        <tr style={{ fontSize: "2rem" }}>
                            <th> STT</th>
                            <th>Tên sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th>.</th>
                        </tr>
                    </thead>
                    <tbody>{productsMap}</tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductInCart;
