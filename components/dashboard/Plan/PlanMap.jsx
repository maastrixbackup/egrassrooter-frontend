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
  const TeamNew = "/images/plan/team_new.png";
  const Grassrooter = "/images/plan/Grassrooter.png";
  const Poolingagent = "/images/plan/poolingagent.png";
  const CampaignStaff = "/images/plan/campaign_staff.png";
  const Donors = "/images/plan/donors.png";
  const Sponsers = "/images/plan/sponsers.png";
  const Volunteer = "/images/plan/volunteers.png";
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
  const showTeamMarkets = () => {
    return data.team?.map((t, i) => {
      const lat = +t.latitude;
      const lng = +t.longitude;

      console.log({ lat, lng });

      if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
        let customTeamImage = TeamNew;
        return (
          <Marker key={i} position={{ lat, lng }} icon={customTeamImage} />
        );
      } else {
        console.warn(`Invalid coordinates for marker ${i}:`, { lat, lng });
        return null;
      }
    });
  };
  const showMemberMarkets = () => {
    return data.member?.map((t, i) => {
      const lat = +t.latitude;
      const lng = +t.longitude;
      let customMemberImage =Grassrooter;
      if (t.role_type == 1 || t.role_type == 2) customMemberImage = Grassrooter;
      else if (t.role_type == 3) customMemberImage = Poolingagent ;
      else if (t.role_type == 9) customMemberImage = CampaignStaff;
      else if (t.role_type == 5) customMemberImage = Donors;
      else if (t.role_type == 6) customMemberImage = Sponsers;
      else if (t.role_type == 7) customMemberImage = Volunteer;
      console.log({ lat, lng });

      if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
        return (
          <Marker key={i} position={{ lat, lng }} icon={customMemberImage} />
        );
      } else {
        console.warn(`Invalid coordinates for marker ${i}:`, { lat, lng });
        return null; 
      }
    });
  };

  return isLoaded ? (
    <div style={{ width: "100%", height: "100vh", marginTop: "3%" }}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7} onLoad={onLoad} onUnmount={onUnmount} >
        {data?.team && showTeamMarkets()}
        {data?.member && showMemberMarkets()}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
