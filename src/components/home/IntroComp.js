import React from "react";

import Intro from "./Intro";
const IntroComp = () => {
    return (
        <div className="container mt-5 mb-5 ">
            <div className="row">
                <div className="col-lg-4">
                    <Intro
                        index={1}
                        highlightText="rẻ bất ngờ"
                        text="không lo giá cả"
                        animated="animate__fadeInUp"  
                    />
                </div>
                <div className="col-lg-8">
                    <div className="d-flex flex-column">
                        <div className="row">
                            <div className="col-lg-8">
                                <Intro
                                    index={2}
                                    highlightText="men style"
                                    text="thời trang chất lừ"
                                    animated="animate__fadeInDown "
                                />
                            </div>
                            <div className="col-lg-4">
                                <Intro
                                    index={3}
                                    highlightText="baby"
                                    text="thoải mái"
                                    animated="animate__fadeInDown "
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12" style={{ marginTop: "30px" }}>
                                <Intro
                                    index={4}
                                    highlightText="up to 50%"
                                    text="Đa dạng loại"
                                    animated="animate__fadeInUp "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroComp;
