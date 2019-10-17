import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import  MapDirectionsRenderer  from './MapDirectionsRenderer';

const mapContainer = (props) => {
  const { locations, currentLocation } = props;
  return (
    <GoogleMap defaultZoom={10}
     defaultCenter={{ lat: currentLocation.latitude, lng: currentLocation.longitude }}>
      {props.isMarkerShown && locations.map((location) => 
      <Marker position={{ lat: location.latitude, lng: location.longitude}}/>) 
      }
       {locations.length >= 2? <MapDirectionsRenderer
        places={props.locations}
        travelMode={window.google.maps.TravelMode.DRIVING}
      />: null}
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(mapContainer));
