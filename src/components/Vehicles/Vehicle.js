import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PropsTypes from 'prop-types';



export const Vehicle = (props) => {
    const { vehicle, hoveredVehicle, selectedVehicles, addOrRemoveSelectedVehicles } = props;
    const active = selectedVehicles.length > 0 ?
     selectedVehicles.some(selectedVehicle => vehicle.id === selectedVehicle.id ) : false;

    const hovered = hoveredVehicle && vehicle.id === hoveredVehicle.id ; 

    return (
      <ListGroup.Item 
      onClick={() => { addOrRemoveSelectedVehicles(vehicle) }}
      active={active}
      className={hovered?"hovered":''}
      >
     {vehicle.name}
     </ListGroup.Item>
    )
};
Vehicle.propTypes = {
    vehicle: PropsTypes.object,
    hovered: PropsTypes.object,
    selectedVehicles: PropsTypes.array,
    addOrRemoveSelectedVehicles: PropsTypes.func
}
