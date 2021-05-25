import React from "react";

const MapAPI = () => {
    const animated = "wow animate__animated animate__fadeInDownBig";

    return (
        <div className={animated}>
            <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8400013057744!2d106.68832461474932!3d10.823553592289564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175296b9d2fad5b%3A0x320b6ad67b332cb7!2zNDk3LzI0LzE3IMSQLiBQaGFuIFbEg24gVHLhu4ssIFBoxrDhu51uZyA1LCBHw7IgVuG6pXAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1619663305231!5m2!1sen!2s"
                allowfullscreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default MapAPI;
