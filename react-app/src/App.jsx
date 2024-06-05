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
                            <NavLink to="/" activeClassName='active' exact>Inicio</NavLink>
                            <NavLink to="/Clientes" activeClassName='active'>Clientes</NavLink>
                            <NavLink to="/Demografía" activeClassName='active'>Demografía</NavLink>
                            <NavLink to="/Ofertas" activeClassName='active'>Ofertas</NavLink>
                            <NavLink to="/Clasificacion" activeClassName='active'>Clasificacion</NavLink>
                            <NavLink to="/Interpolacion" activeClassName='active'>Interpolacion</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Clientes" element={<Clients />} />
                    <Route path="/Demografía" element={<Map />} />
                    <Route path="/Ofertas" element={<Credit />} />
                    <Route path="/Clasificacion" element={<Classification />} />
                    <Route path="/Interpolacion" element={<Interpolation />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;