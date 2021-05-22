import axios from "axios";
import {
    CHANGE_ADMIN_PAGE,
    SET_SUPPLIER,
    SET_CATEGORY,
    SET_MESSAGE_ADD_SUPPLIER,
    SET_MESSAGE_ADD_CATEGORY,
    SET_MESSAGE_ADD_PRODUCT,
    SET_TOTAL_PAGE_PRODUCTS_FOR_MANAGE,
    SET_ALL_PRODUCTS_FOR_MANAGE,
    UP_SET_PLAIN_TEXT_INPUT,
    UP_SET_IMAGES,
    UP_SET_SHORT_DESC,
    UP_SET_LONG_DESC,
    UP_SET_SUPPLIER,
    UP_SET_CATEGORY,
    UP_SET_SUBPRODUCTS,
    SET_MESSAGE_FOR_UPDATE_PRODUCT,
    CLEAR_MESSAGE_FOR_UPDATE_PRODUCT,
    SET_SUPPLIER_BY_ID,
    US_UPDATE_SUPPLIER,
    AC_SET_ACCOUNTS,
    SET_ALL_ORDERS,
    SET_TOTAL_PAGE_ORDERS,
    SET_ALL_ORDERS_PENING,
    UCATE_UPDATE_CATEGORY,
    SET_CATEGORY_BY_ID,
    UP_SET_ACTIVE
} from "../constants/types";

/**
 * access token 
 */

 const user = JSON.parse(localStorage.getItem("user"));
 const token = user.accessToken

 //config token
 axios.interceptors.request.use(
     config => {
         config.headers.authorization = `Bearer ${token}`
         return config;
     },
     err => {
         return Promise.reject(err);
     }
 )


export const changeAdminPage = (index) => {
    return {
        type: CHANGE_ADMIN_PAGE,
        index,
    };
};

export const setSuppliers = (suppliers) => {
    return {
        type: SET_SUPPLIER,
        suppliers,
    };
};

export const getSuppliers = () => {
    const url = "http://localhost:8080/quan-ao-tre-em/api/suppliers";
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                dispatch(setSuppliers(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const addSupplier = (name, email, phone, address) => {
    const url = "http://localhost:8080/quan-ao-tre-em/api/supplier";
    return (dispatch) => {
        return axios
            .post(url, {
                name,
                email,
                phone,
                address,
            })
            .then((resp) => {
                dispatch({
                    type: SET_MESSAGE_ADD_SUPPLIER,
                    payload: resp.data.message,
                });
                return Promise.resolve();
            })
            .catch((err) => {
                const message =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();

                dispatch({
                    type: SET_MESSAGE_ADD_SUPPLIER,
                    payload: message,
                });
                return Promise.reject();
            });
    };
};

export const setCategories = (categories) => {
    return {
        type: SET_CATEGORY,
        categories,
    };
};

export const getCategories = () => {
    const url = "http://localhost:8080/quan-ao-tre-em/api/categories";
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                dispatch(setCategories(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const addCategory = (name) => {
    const url = "http://localhost:8080/quan-ao-tre-em/api/category";
    return (dispatch) => {
        return axios
            .post(url, {
                name,
            })
            .then((resp) => {
                dispatch({
                    type: SET_MESSAGE_ADD_CATEGORY,
                    payload: resp.data.message,
                });
                return Promise.resolve();
            })
            .catch((err) => {
                const message =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();

                dispatch({
                    type: SET_MESSAGE_ADD_CATEGORY,
                    payload: message,
                });
                return Promise.reject();
            });
    };
};

export const addProduct = (product) => {
    const url = "http://localhost:8080/quan-ao-tre-em/api/product";
    return (dispatch) => {
        return axios
            .post(url, product)
            .then((resp) => {
                dispatch({
                    type: SET_MESSAGE_ADD_PRODUCT,
                    payload: resp.data.message,
                });
                return Promise.resolve();
            })
            .catch((err) => {
                const mess =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();

                dispatch({
                    type: SET_MESSAGE_ADD_PRODUCT,
                    payload: mess,
                });
                return Promise.reject();
            });
    };
};

export const setProductsForManage = (products) => {
    return {
        type: SET_ALL_PRODUCTS_FOR_MANAGE,
        products,
    };
};
export const setTotalPageProductsForManage = (number) => {
    return {
        type: SET_TOTAL_PAGE_PRODUCTS_FOR_MANAGE,
        number,
    };
};

export const getProductsForManage = (obj) => {
    const url = `http://localhost:8080/quan-ao-tre-em/api/product/category/?q=${obj.query}&page=${obj.page}`;

    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                dispatch(setProductsForManage(res.data));
                dispatch(setTotalPageProductsForManage(res.data.totalPages));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const setActiveStatus = (active) => {
    return {
        type: UP_SET_ACTIVE,
        active,
    };
};

export const setPlainTextForUpdate = (plainTexts) => {
    return {
        type: UP_SET_PLAIN_TEXT_INPUT,
        plainTexts,
    };
};

export const setImagesForUpdate = (images) => {
    return {
        type: UP_SET_IMAGES,
        images,
    };
};

export const setShortDescForUpdate = (shortDesc) => {
    return {
        type: UP_SET_SHORT_DESC,
        shortDesc,
    };
};

export const setLongDescForUpdate = (longDesc) => {
    return {
        type: UP_SET_LONG_DESC,
        longDesc,
    };
};
export const setSupplierForUpdate = (supplier) => {
    return {
        type: UP_SET_SUPPLIER,
        supplier,
    };
};
export const setCategoryForUpdate = (category) => {
    return {
        type: UP_SET_CATEGORY,
        category,
    };
};
export const setSubproductsForUpdate = (subProducts) => {
    return {
        type: UP_SET_SUBPRODUCTS,
        subProducts,
    };
};

export const updateProduct = (updatedProduct) => {
    const url = "http://localhost:8080/quan-ao-tre-em/api/product";
    return (dispatch) => {
        return axios
            .put(url, updatedProduct)
            .then((resp) => {
                dispatch({
                    type: SET_MESSAGE_FOR_UPDATE_PRODUCT,
                    payload: resp.data.message,
                });
                return Promise.resolve();
            })
            .catch((err) => {
                const mess =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();

                dispatch({
                    type: SET_MESSAGE_FOR_UPDATE_PRODUCT,
                    payload: mess,
                });

                return Promise.reject();
            });
    };
};

export const clearMessageUpdateProduct = () => {
    return {
        type: CLEAR_MESSAGE_FOR_UPDATE_PRODUCT,
    };
};

export const setSupplierbyID = (supplier) => {
    return {
        type: SET_SUPPLIER_BY_ID,
        supplier,
    };
};

export const getSupplierByID = (id) => {
    const url = `http://localhost:8080/quan-ao-tre-em/api/supplier/${id}`;
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                dispatch(setSupplierbyID(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const updateSupplier = (supplier) => {
    const url = "http://localhost:8080/quan-ao-tre-em/api/supplier";
    return (dispatch) => {
        return axios
            .put(url, supplier)
            .then((resp) => {
                dispatch({
                    type: US_UPDATE_SUPPLIER,
                    payload: resp.data.message,
                });
                return Promise.resolve();
            })
            .catch((err) => {
                const message =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();

                dispatch({
                    type: SET_MESSAGE_ADD_SUPPLIER,
                    payload: message,
                });
                return Promise.reject();
            });
    };
};

export const deleteSupplier = (id) => {
    console.log(id)
    const url = `http://localhost:8080/quan-ao-tre-em/api/supplier/${id}`;
    return (dispatch) => {
        return axios
            .delete(url)
            .then((resp) => {
                return Promise.resolve();
            })
            .catch((err) => {
                console.log(err);
                return Promise.reject();
            });
    };
};

export const setAllAccounts = (accounts) => {
    return {
        type: AC_SET_ACCOUNTS,
        accounts,
    };
};

export const getAllAccounts = (id) => {
    const url = `http://localhost:8080/quan-ao-tre-em/api/accounts`;
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                dispatch(setAllAccounts(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
//default order completed
export const setAllOrders = (orders) => {
    return {
        type: SET_ALL_ORDERS,
        orders,
    };
};

export const setAllOrdersPending = (orders) => {
    return {
        type: SET_ALL_ORDERS_PENING,
        orders,
    };
};

export const setTotalPageOrders = (number) => {
    return {
        type: SET_TOTAL_PAGE_ORDERS,
        number,
    };
};

export const getAllOrders = (page, status = "COMPLETED&CANCELED") => {
    if (status === "COMPLETED&CANCELED") {
        const urlC = `http://localhost:8080/quan-ao-tre-em/api/orders?size=10&page=${page}&status=COMPLETED&status=CANCELED`;
        return (dispatch) => {
            return axios
                .get(urlC)
                .then((res) => {
                    dispatch(setTotalPageOrders(res.data.totalPages));
                    dispatch(setAllOrders(res.data));
                })
                .catch((err) => {
                    console.log(err);
                });
        };
    } else {
        return (dispatch) => {
            const urlP = `http://localhost:8080/quan-ao-tre-em/api/orders?status=${status}&size=50`;
            return axios
                .get(urlP)
                .then((res) => {
                    dispatch(setAllOrdersPending(res.data));
                })
                .catch((err) => {
                    console.log(err);
                });
        };               
    }
    
};

export const confirmOrder = (order) => {
    const url = `http://localhost:8080/quan-ao-tre-em/api/order`;
    return (dispatch) => {
        return axios
            .put(url, order)
            .then((resp) => {
                return Promise.resolve();
            })
            .catch((err) => {
                console.log(err);
                return Promise.reject();
            });
    };
};

export const cancelOder = (order) => {
    const url = `http://localhost:8080/quan-ao-tre-em/api/order`;
    return (dispatch) => {
        return axios
            .put(url, order)
            .then((resp) => {
                return Promise.resolve();
            })
            .catch((err) => {
                console.log(err);
                return Promise.reject();
            });
    };
};

export const setCategoryByID = (category) => {
    return {
        type: SET_CATEGORY_BY_ID,
        category,
    };
};

export const getCategoryByID = (id) => {
    const url = `http://localhost:8080/quan-ao-tre-em/api/category/${id}`;
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                dispatch(setCategoryByID(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const updateCategory = (category) => {
    const url = "http://localhost:8080/quan-ao-tre-em/api/category";
    return (dispatch) => {
        return axios
            .put(url, category)
            .then((resp) => {
                dispatch({
                    type: UCATE_UPDATE_CATEGORY,
                    payload: resp.data.message,
                });
                return Promise.resolve();
            })
            .catch((err) => {
                const message =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();

                dispatch({
                    type: SET_MESSAGE_ADD_CATEGORY,
                    payload: message,
                });
                return Promise.reject();
            });
    };
};


export const deleteCategory = (id) => {
    console.log(id)
    const url = `http://localhost:8080/quan-ao-tre-em/api/category/${id}`;
    return (dispatch) => {
        return axios
            .delete(url)
            .then((resp) => {
                return Promise.resolve();
            })
            .catch((err) => {
                console.log(err);
                return Promise.reject();
            });
    };
};
