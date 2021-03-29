import React from "react";
import PropTypes from "prop-types";

const Intro = ({ index, highlightText, text, animated }) => {
    return (
        <div style={{ cursor: "pointer" }} className={`intro-container wow animate__animated ${animated}`} data-wow-duration="32">
            <a href="#" className="intro-tag-a">
                <div className={`intro-bg-${index}`}>
                    <p className="decor text-warning">{highlightText}</p>
                    <p style={{ fontSize: "4rem" }}>{text}</p>
                </div>
            </a>
        </div>
    );
};

Intro.propTypes = {
    index: PropTypes.number,
    highlightText: PropTypes.string,
    text: PropTypes.string,
};

export default Intro;
