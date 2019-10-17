import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import PropsTypes from 'prop-types';
import { Vehicle } from './Vehicle';

export const Vehicles = (props) => {

    
    const { vehicles, selectedVehicles, addOrRemoveSelectedVehicles } = props;
    


    return (
        <ListGroup>
            {vehicles && vehicles.length > 0 ?
             vehicles.map((vehicle) =>  <Vehicle
              vehicle={vehicle}
              selectedVehicles={selectedVehicles}
              addOrRemoveSelectedVehicles={addOrRemoveSelectedVehicles}/>)
             :<span>No vehicles present</span>
            }
        </ListGroup>
   );
}
Vehicles.propTypes = {
    vehicles: PropsTypes.array,
    selectedVehicles: PropsTypes.array,
    addOrRemoveSelectedVehicles: PropsTypes.func
}