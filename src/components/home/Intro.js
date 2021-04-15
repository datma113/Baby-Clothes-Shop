import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Intro = ({ index, highlightText, text, animated }) => {
    return (
        <div
            style={{ cursor: "pointer" }}
            className={`intro-container wow animate__animated ${animated}`}
            data-wow-duration="32"
        >
            <Link to="/shop" className="intro-tag-a">
                <div className={`intro-bg-${index}`}>
                    <p className="decor text-warning">{highlightText}</p>
                    <p style={{ fontSize: "4rem" }}>{text}</p>
                </div>
            </Link>
        </div>
    );
};

Intro.propTypes = {
    index: PropTypes.number,
    highlightText: PropTypes.string,
    text: PropTypes.string,
};

export default Intro;
