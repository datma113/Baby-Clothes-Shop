import React, { useEffect } from "react";

import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

const MapAPI = () => {
    const map = () => {
        return (
            <GoogleMap defaultZoom={18} defaultCenter={{ lat: 10.8193, lng: 106.6951 }}>
                <Marker position={{ lat: 10.8194, lng: 106.695 }} />
            </GoogleMap>
        );
    };

    const WrappedMap = withScriptjs(withGoogleMap(map));
   
    return (
        <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places
            &key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );
};

export default MapAPI;
