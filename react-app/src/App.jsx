// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './sections/Home';
import Clients from './sections/Clients';
import Map from './sections/Map';
import Credit from './sections/Credit';
import Classification from './sections/Classification';
import Interpolation from './sections/Interpolation';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <nav className='nav'>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName='active' exact>Home</NavLink>
                            <NavLink to="/Clients" activeClassName='active'>Clients</NavLink>
                            <NavLink to="/Map" activeClassName='active'>Map</NavLink>
                            <NavLink to="/Credit" activeClassName='active'>Credit</NavLink>
                            <NavLink to="/Classification" activeClassName='active'>Classification</NavLink>
                            <NavLink to="/Interpolation" activeClassName='active'>Interpolation</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Clients" element={<Clients />} />
                    <Route path="/Map" element={<Map />} />
                    <Route path="/Credit" element={<Credit />} />
                    <Route path="/Classification" element={<Classification />} />
                    <Route path="/Interpolation" element={<Interpolation />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;