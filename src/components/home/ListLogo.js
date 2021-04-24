import React from "react";

import Logo from "./Logo";
const ListLogo = () => {
    const listLogo = [1, 2, 3, 4, 5];

    const listLogoMap = listLogo.map((logo, index) => {
        return (
            <div className="col-lg col-md-4  col-6 mt-5" key={index}>
                <Logo index={logo} />
            </div>
        );
    });
    return (
        <div className="home-logo-background">
            <div className="container home-logo-container">
                <div className="row ">{listLogoMap}</div>
               
            </div>
        </div>
    );
};

export default ListLogo;
