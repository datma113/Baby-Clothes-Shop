import React from "react";

const ContactCard = ({ card }) => {
    const animated = "wow animate__animated animate__rotateInDownLeft";

    return (
        <div className={`contact-container-card d-flex flex-column justify-content-center align-items-center ${animated}`}>
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
