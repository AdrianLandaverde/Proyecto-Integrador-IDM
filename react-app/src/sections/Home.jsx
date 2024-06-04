// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <h1>Welcome to the Home Page</h1>
            <Link to="/app">Go to App</Link>
        </div>
    );
}

export default Home;