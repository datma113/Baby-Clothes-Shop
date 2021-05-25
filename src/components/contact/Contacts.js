import React from "react";

import MapAPI from "./MapAPI";
import ContactCard from "./ContactCard";

const Contacts = () => {
    const contactCards = [
        { name: "Liên lạc", text: "(+84) 912 366 093", icon: "fas fa-phone fa-2x" },
        {
            name: "Địa chỉ",
            text: "297/24/3 Phan Văn Trị, p5, Q. Gò Vấp, TP HCM",
            icon: "fas fa-map-marker-alt  fa-2x",
        },
        { name: "Giờ mở cửa", text: "7h30 - 22h30", icon: "far fa-clock fa-2x" },
        { name: "email", text: "datma113112111@gmail.com", icon: "far fa-envelope-open fa-2x" },
    ];


    const contactCardsMap = contactCards.map((card, index) => {
        return (
            <div key={index} className="col-lg-3 col-sm-6">
                <ContactCard card={card} />
            </div>
        );
    });

    return (
        <div className={`contact-container`}>
            <div className={`container`}>
                <div className="row mb-5">{contactCardsMap}</div>
            </div>

            <MapAPI />
        </div>
    );
};

export default Contacts;
