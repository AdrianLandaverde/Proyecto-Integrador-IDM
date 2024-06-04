import React from 'react';
import './Clients.css';

const Clients = () => {
    return (
        <div className='clients'>
            <iframe src='cuentas_por_tipo.html' width="50%" height="300px" style={{border: "none"}}></iframe>
            <iframe src='cuentas_por_sexo.html' width="50%" height="300px" style={{border: "none"}}></iframe>
            <iframe src='cuentas_por_tipo_cliente.html' width="50%" height="300px" style={{border: "none"}}></iframe>
            <iframe src='ingresos_de_los_clientes.html' width="50%" height="300px" style={{border: "none"}}></iframe>
        </div>
    );
}

export default Clients;