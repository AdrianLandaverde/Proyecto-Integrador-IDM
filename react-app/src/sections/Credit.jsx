import React from 'react';
import { Link } from 'react-router-dom';
import './Credit.css';

const Credit = () => {
    return (
        <div className='credit'>
            <h1>Welcome to the Credit Page</h1>
            <Link to="/app">Go to App</Link>
        </div>
    );
}

export default Credit;