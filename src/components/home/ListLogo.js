import React from "react";

import Logo from "./Logo";
const ListLogo = () => {
    const listLogo = [1, 2, 3, 4, 5];

    const listLogoMap = listLogo.map((logo, index) => {
        return <Logo index={logo} key={index}/>;
    });
    return (
        <div className="home-logo-background">
            <div className="container">
                <div className="row">{listLogoMap}</div>
            </div>
        </div>
    );
};

export default ListLogo;
