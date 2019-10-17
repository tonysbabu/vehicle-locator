import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PropsTypes from 'prop-types';



export const Vehicle = (props) => {
    const { vehicle, selectedVehicles, addOrRemoveSelectedVehicles } = props;
    const active = selectedVehicles.length > 0 ?
     selectedVehicles.some(selectedVehicle => vehicle.name === selectedVehicle.name ) : false
    return (
      <ListGroup.Item 
      onClick={() => { addOrRemoveSelectedVehicles(vehicle) }}
      active={active}
      >
     {vehicle.name}
     </ListGroup.Item>
    )
};
Vehicle.propTypes = {
    vehicle: PropsTypes.object,
    selectedVehicles: PropsTypes.array,
    addOrRemoveSelectedVehicles: PropsTypes.func
}
