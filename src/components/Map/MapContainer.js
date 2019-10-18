import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import  MapDirectionsRenderer  from './MapDirectionsRenderer';

const mapContainer = (props) => {
  const { locations, selectedLocations, currentLocation, handleClearHoveredVehicle, handleMarkerClick, handleMarkerHover } = props;
  return (
    <GoogleMap defaultZoom={12}
     defaultCenter={{ lat: currentLocation.latitude, lng: currentLocation.longitude }}>
      {props.isMarkerShown && locations.map((location) => 
      <Marker position={{ lat: location.latitude, lng: location.longitude}}
       onClick={() => handleMarkerClick(location)}
       onMouseOver={() => handleMarkerHover(location)}
       onMouseOut={handleClearHoveredVehicle}
       />) 
      }
       {selectedLocations.length >= 2? <MapDirectionsRenderer
        places={selectedLocations}
        travelMode={window.google.maps.TravelMode.DRIVING}
      />: null}
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(mapContainer));
