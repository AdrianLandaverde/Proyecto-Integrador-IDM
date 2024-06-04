import React from 'react';
import { Link } from 'react-router-dom';
import './Map.css';

const Map = () => {
    return (
        <div className='map'>
            <h1>Welcome to the Map Page</h1>
            <Link to="/app">Go to App</Link>
        </div>
    );
}

export default Map;