import React from "react";

const Background = ({ text }) => {
    return (
        <div className="background-container d-flex justify-content-center align-items-center">
                <p>{text}</p>
        </div>
    );
};

export default Background;
