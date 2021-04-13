import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setProductInCart, removeProductInCart } from "../../redux/actions/actCart";

const ProductInCart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);

    const productsMap = products.map((product, index) => {
        let realPrice = product.price;
        let totalEachProduct = realPrice * product.quantity;

        const removeProduct = index => {
          dispatch(removeProductInCart(products, index))
        }
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
                <th className="text-center">{product.quantity} </th>
                <th className="text-center">
                    {" "}
                    {totalEachProduct.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                    })}
                </th>
                <th className="text-center cart-pop-item" onClick={ () => removeProduct(index)}>
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
            <table className="table table-bordered table-hover">
                <thead className="bg-primary text-center">
                    <tr style={{ fontSize: "2rem" }}>
                        <th > STT</th>
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
    );
};

export default ProductInCart;
