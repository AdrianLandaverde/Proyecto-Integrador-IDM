import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Map.css';

const Map = () => {
    const [value1, setValue1] = useState(10);
    const [value2, setValue2] = useState(10);
    const [graphEstados, setgraphEstados] = useState('');
    const [graphCiudades, setgraphCiudades] = useState('');
    const [graphMap, setgraphMap] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8000/cuentas_estado/?n_top_estados=${value1}`)
            .then(response => response.text())
            .then(data => setgraphEstados(data));
    }, [value1]);

    useEffect(() => {
        fetch(`http://localhost:8000/cuentas_ciudad/?n_top_ciudades=${value2}`)
            .then(response => response.text())
            .then(data => setgraphCiudades(data));
    }, [value2]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/cuentas_mapa/?n_top_estados=${value1}`)
            .then(response => response.text())
            .then(data => setgraphMap(data));
    }, [value1]);

    return (
        <div className='map'>
            <div className='content'>
                <div className='slider-container'>
                    <div>
                        <h4>Número de Estados</h4>
                        <input type="range" min="0" max="32" value={value1} onChange={e => setValue1(e.target.value)} />
                        <label>{value1}</label>
                    </div>
                    <div>
                        <h4>Número de Ciudades</h4>
                        <input type="range" min="0" max="363" value={value2} onChange={e => setValue2(e.target.value)} />
                        <label>{value2}</label>
                    </div>
                </div>
                <iframe srcDoc={graphMap} title="API Response" className='graph_map' />

            </div>
            <div className='contentMap'>
                <iframe srcDoc={graphEstados} title="API Response" className='graph_demographic' />
                <iframe srcDoc={graphCiudades} title="API Response" className='graph_demographic' />
            </div>

        </div>
    );
}

export default Map;