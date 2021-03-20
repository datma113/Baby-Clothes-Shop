import React from "react";

import logo from "../assets/img/logo.png";

const Footer = () => {
    const classIcon = ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-instagram', 'fab fa-skype']
    const address = ["TP. Hồ Chí Minh", "Hà Nội", "Vũng Tàu", "Đà Nẵng", "Cần Thơ"]
    const supportCustomer = ['Tư vấn?', 'liên hệ chúng tôi?','khác?']

    const classIconMap = classIcon.map( icon => {
        return <i className={`${icon} social-link-icon d-flex justify-content-center align-items-center`}></i>
    })

    const addressMap = address.map( address => {
        return (
            <div>
                <a href="#" className="d-flex align-items-center mb-3 address">
                    <i class="fas fa-angle-double-right"></i>&nbsp;&nbsp; {address}
                </a>
            </div>
        );
    });

    const supportCustomerMap = supportCustomer.map( x => {
        return (
            <div>
                <a href="#" className="d-flex align-items-center mb-3 address">
                    <i class="fas fa-angle-double-right"></i>&nbsp;&nbsp; {x}
                </a>
            </div>
        );
    });
    return (
        <div className="footer-container">
            <div className="container">
                <div className="row pb-5">
                    <div className="col-xl-3 d-flex flex-column ">
                        <div>
                            {" "}
                            <img src={logo} alt="" className="footer-logo" />
                        </div>
                        <p>
                            DtoC là cửa hàng bán quần áo trẻ em trực tuyến giá rẻ với đa dạng các
                            loại quần áo.
                        </p>
                        <p className="socal-link">Social Link -</p>
                        <div className="d-flex">
                            {classIconMap}
                        </div>
                    </div>

                    <div className="col-xl-3 mt-3">
                        <p className="footer-title">Các chi nhánh khác</p>
                        {addressMap}
                    </div>
                    <div className="col-xl-3 mt-3">
                        <p className="footer-title">Hỗ trợ khách hàng</p>
                        {supportCustomerMap}
                    </div>
                    <div className="col-xl-3 mt-3">
                        <p className="footer-title">Thông Tin Liên Hệ</p>
                        <div className="mt-3">
                            <p>Cửa hàng chính</p>
                            <p>297/24/3 Phan Văn Trị, Phường 5, Quận Gò Vấp, TP. Hồ Chí Minh</p>
                            <p>Số diện thoại: (+84) 12 66 093</p>
                            <p>Email: datma113112111@gmail.com</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
