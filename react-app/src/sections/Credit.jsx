import React from 'react';
import { Link } from 'react-router-dom';
import './Credit.css';

const Credit = () => {
    return (
        <div className='credit'>
            <iframe className='iframeStyleSmall' src='ofertas_por_producto_global.html'></iframe>
            <iframe className='iframeStyleSmall' src='ofertas_por_producto.html'></iframe>
            <iframe className='iframeStyleBig' src='ofertas_por_estaus_producto_global.html'></iframe>
            <iframe className='iframeStyleBig' src='ofertas_por_estaus_producto.html'></iframe>
            
        </div>
    );
}

export default Credit;