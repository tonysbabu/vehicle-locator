import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import MapContainer from "../Map/MapContainer";
import { Container, ListGroup } from "react-bootstrap";
import { MAP_API_KEY, places } from "../../constants";
import { Vehicles } from "../Vehicles/Vehicles";
import withAuth from '../Auth/WithAuth';

const Dashboard = props => {
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [hoveredVehicle, setHoveredVehicle] = useState('');
  const placesPresent = places && places.length > 0;
  const [currentLocation, setCurrentLocation] = useState({ latitude: placesPresent? places[0].latitude:'', longitude: placesPresent?places[0].longitude:''});

   useEffect(() => {
     getLocation();
   },[]);

   const getLocation = () =>  {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          setCurrentLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude })
      });
    } else {
        console.error("geolocation not supported");
    }
  }
  


  const addOrRemoveSelectedVehicles = vehicle => {
    console.log("vehicle", vehicle);

    let selectedVehiclesList = [...selectedVehicles];

    let index = selectedVehiclesList.findIndex(
      selectedVehicle => selectedVehicle.id === vehicle.id
    );

    console.log("index", index);

    if (index > -1) {
      selectedVehiclesList.splice(index, 1);
    } else {
      if (selectedVehiclesList.length === 2) {
        selectedVehiclesList = [vehicle];
      } else {
        selectedVehiclesList = [...selectedVehiclesList, vehicle];
      }
    }
    setSelectedVehicles(selectedVehiclesList);
  };

  const handleMarkerClick = (location) => {
       addOrRemoveSelectedVehicles(location);
  }

  const handleMarkerHover = (location) => {
       setHoveredVehicle(location);
  }

  const handleClearHoveredVehicle = () => {
      setHoveredVehicle('');
 }




  return (
    <Layout>
      <Container fluid bsPrefix="dashboard-container">
        <div className="vehicle-list-container">
          <ListGroup>
            <Vehicles
              vehicles={places}
              selectedVehicles={selectedVehicles}
              addOrRemoveSelectedVehicles={addOrRemoveSelectedVehicles}
              hoveredVehicle={hoveredVehicle}
            />
          </ListGroup>
        </div>
        <MapContainer
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${MAP_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div className="map-container" style={{ height: `100%` }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
          locations={places}
          selectedLocations={selectedVehicles}
          currentLocation={currentLocation}
          handleMarkerClick={handleMarkerClick}
          handleMarkerHover={handleMarkerHover}
          handleClearHoveredVehicle={handleClearHoveredVehicle}
        />
      </Container>
    </Layout>
  );
};

export default withAuth(Dashboard);
