import React from 'react';
import { Link } from 'react-router-dom';
import './Interpolation.css';

const Interpolation = () => {
    return (
        <div className='interpolation'>
            <h1>Welcome to the Interpolation Page</h1>
            <Link to="/app">Go to App</Link>
        </div>
    );
}

export default Interpolation;