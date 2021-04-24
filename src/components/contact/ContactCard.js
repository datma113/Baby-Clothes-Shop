import React from "react";

const ContactCard = ({ card }) => {
    return (
        <div className="contact-container-card d-flex flex-column justify-content-center align-items-center">
            <div>
                <i className={`${card.icon} contact-container-card-icon`}></i>
            </div>
            <div>
                <p className="contact-container-card-name">{card.name}</p>
            </div>
            <p className="contact-container-card-text"> {card.text}</p>
        </div>
    );
};

export default ContactCard;
