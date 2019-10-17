import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import MapContainer from "./MapContainer";
import { Container, ListGroup } from "react-bootstrap";
import { MAP_API_KEY, places } from "../constants";
import { Vehicles } from "./Vehicles";

export const Dashboard = props => {
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({ latitude: '', longitude: '' });

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
      selectedVehicle => selectedVehicle.name === vehicle.name
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




  return (
    <Layout>
      <Container fluid bsPrefix="dashboard-container">
        <div className="vehicle-list-container">
          <ListGroup>
            <Vehicles
              vehicles={places}
              selectedVehicles={selectedVehicles}
              addOrRemoveSelectedVehicles={addOrRemoveSelectedVehicles}
            />
          </ListGroup>
        </div>
        <MapContainer
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${MAP_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div className="map-container" style={{ height: `400px` }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
          locations={selectedVehicles}
          currentLocation={currentLocation}
        />
      </Container>
    </Layout>
  );
};
