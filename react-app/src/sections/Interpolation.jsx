import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import './Interpolation.css';

const Interpolation = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='interpolation'>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Tarjeta de crédito" />
                <Tab label="Préstamo Personal" />
                <Tab label="Inmediauto" />
            </Tabs>
            {value === 0 && <img src="kriging_capacidad_pago_tdc.png" alt="Image 1" className="full-screen-image"/>}
            {value === 1 && <img src="kriging_capacidad_pago_prestamo.png" alt="Image 2" className="full-screen-image"/>}
            {value === 2 && <img src="kriging_capacidad_pago_inmediauto.png" alt="Image 3" className="full-screen-image"/>}
        </div>
    );
}

export default Interpolation;