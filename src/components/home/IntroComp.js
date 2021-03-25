import React from "react";

import Intro from "./Intro";
const IntroComp = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-lg-4">
                    <Intro index={1} highlightText="up to 50%" text="khóc luôn" />
                </div>
                <div className="col-lg-8">
                    <div className="d-flex flex-column">
                        <div className="row">
                            <div className="col-lg-8">
                                <Intro index={2} highlightText="up to 50%" text="cứu tao" />
                            </div>
                            <div className="col-lg-4">
                                <Intro index={3} highlightText="up to 50%" text="ai biết" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12" style={{ marginTop: "30px" }}>
                                <Intro index={4} highlightText="up to 50%" text="ghi gì ở đây?" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroComp;
