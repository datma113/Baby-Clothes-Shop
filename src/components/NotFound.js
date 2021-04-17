import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container text-danger notfound">
            <i className="fas fa-exclamation-triangle fa-4x"></i>
            404 Page not found
            <div>
                <Link to="/">Quay về trang chủ</Link>
            </div>
        </div>
    );
};

export default NotFound;
