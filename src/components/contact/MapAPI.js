import React, { useEffect } from "react";

import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const MapAPI = () => {
     const map = () => {
          return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 10.8231, lng: 106.6297 }} />;
      };

      const WrappedMap = withScriptjs(withGoogleMap(map));
      
  
    return (
        <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,
            places&key=AIzaSyCahRR6f9cxMOrtYlHnJpxz7dt6pEe3Ha0`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );
};

export default MapAPI;
