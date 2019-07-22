import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { GOOGLE_API_KEY } from "../config";

const mapStyles = {
  width: 352,
  height: 180
};

export const GoogleMap = props => {
  return (
    <Map
      google={props.google}
      zoom={15}
      style={mapStyles}
      initialCenter={{
        lat: props.lat,
        lng: props.lng
      }}
    >
      <Marker position={{ lat: props.lat, lng: props.lng }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: `${GOOGLE_API_KEY}`
})(GoogleMap);
