import React from 'react';
import { Link } from 'react-router-dom';
import './Clients.css';

const Clients = () => {
    return (
        <div className='clients'>
            <h1>Welcome to the Clients Page</h1>
            <Link to="/app">Go to App</Link>
        </div>
    );
}

export default Clients;