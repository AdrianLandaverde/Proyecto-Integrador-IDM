import React from 'react';
import './Clients.css';

const Clients = () => {
    return (
        <div className='clients'>
            <iframe className='iframeStyle' src='cuentas_por_tipo.html'></iframe>
            <iframe className='iframeStyle' src='cuentas_por_sexo.html'></iframe>
            <iframe className='iframeStyle' src='cuentas_por_tipo_cliente.html'></iframe>
            <iframe className='iframeStyle' src='ingresos_de_los_clientes.html'></iframe>
        </div>
    );
}

export default Clients;