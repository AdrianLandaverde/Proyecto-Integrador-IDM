// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <Link to="/Clients">Clients</Link>
                            <Link to="/Map">Map</Link>
                            <Link to="/Credit">Credit</Link>
                            <Link to="/Classification">Classification</Link>
                            <Link to="/Interpolation">Interpolation</Link>
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