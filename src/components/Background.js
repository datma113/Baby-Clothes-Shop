import React from "react";

const Background = ({ text }) => {
    const animated = 'wow animate__animated animate__fadeInDown'
    return (
        <div className={`background-container d-flex justify-content-center align-items-center`}>
            <p className={animated}>{text}</p>
        </div>
    );
};

export default Background;
