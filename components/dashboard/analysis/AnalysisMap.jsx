import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '600px'
};

const center = {
    lat: 37.7749, // Latitude for San Francisco (example)
    lng: -122.4194 // Longitude for San Francisco (example)
};

const AnalysisMap = ({ data }) => {
    return (
        <div class="target_map_frame">
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default AnalysisMap;
