import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 9.082,
  lng: 8.6753,
};

function MyComponent({ data }) {
  const Blue = "/images/analysis/blue_baloon.png";
  const Green = "/images/analysis/green_baloon.png";
  const Red = "/images/analysis/red_baloon.png";
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const showAllStateMarkers = () => {
    return Object.entries(data.alldata || {}).map(([region, states], i) => {
      // Iterate through each state in the region
      return states.map((stateData, j) => {
        const { latitude, longitude, polling_unit_count, name } = stateData;
  
        const lat = parseFloat(latitude);
        const lng = parseFloat(longitude);
  
        let customIcon = Blue;
  
        if (polling_unit_count < 4000) customIcon = Green;
        else if (polling_unit_count > 5000) customIcon = Red;
  
        // Ensure the coordinates are valid
        if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
          return (
            <Marker
              key={`${i}-${j}`} // Unique key for each marker
              position={{ lat, lng }}
              icon={customIcon}
              title={name}
            />
          );
        }
  
        return null;
      });
    });
  };
  

  return isLoaded ? (
    <div style={{ width: "100%", height: "100vh", marginTop: "3%" }}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7} onLoad={onLoad} onUnmount={onUnmount} >
        {showAllStateMarkers()}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
