import { Tabs, Tab } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './Classification.css';

const Classification = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [dropdownValue1, setDropdownValue1] = useState('1');
    const [dropdownValue2, setDropdownValue2] = useState('1');
    const [dropdownValue3, setDropdownValue3] = useState('1');

    const [apiTdc, setApiTdc] = useState(`http://127.0.0.1:8000/model_tdc/?n_test=${dropdownValue1}`);
    const [apiPrestamo, setApiPrestamo] = useState(`http://127.0.0.1:8000/model_tdc/?n_test=${dropdownValue2}`);
    const [apiInmediauto, setApiInmediauto] = useState(`http://127.0.0.1:8000/model_tdc/?n_test=${dropdownValue3}`);

    const handleDropdownChange1 = (event) => {
        setDropdownValue1(event.target.value);
    };

    const handleDropdownChange2 = (event) => {
        setDropdownValue2(event.target.value);
    };

    const handleDropdownChange3 = (event) => {
        setDropdownValue3(event.target.value);
    };

    useEffect(() => {
        setApiTdc(`http://127.0.0.1:8000/model_tdc/?n_test=${dropdownValue1}`);
    }, [dropdownValue1]);


    useEffect(() => {
        setApiPrestamo(`http://127.0.0.1:8000/model_prestamo/?n_test=${dropdownValue2}`);
    }, [dropdownValue2]);


    useEffect(() => {
        setApiInmediauto(`http://127.0.0.1:8000/model_inmediauto/?n_test=${dropdownValue3}`);
    }, [dropdownValue3]);

    return (
        <div className='classification'>
            <Tabs
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{ style: { backgroundColor: '#30419B' } }}
            >
                <Tab label="Tarjeta de Crédito" />
                <Tab label="Préstamo personal" />
                <Tab label="Inmediauto" />
            </Tabs>
            {value === 0 &&
                <div className="grid-container">
                    <iframe src='tdc_confusion.html' className='grid-item'></iframe>
                    <img src="tdc_shap_bar.png" alt="Image 2" className="grid-item" />
                    <img src="tdc_shap_summary.png" alt="Image 3" className="grid-item" />
                    <div className="grid-item api">
                        <select className="dropdown" value={dropdownValue1} onChange={handleDropdownChange1}>
                            {Array.from({ length: 1401 }, (_, i) => i).map((num) => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                        <img
                            alt="API Image"
                            src={apiTdc}
                            className="iframe"
                        />
                    </div>
                </div>
            }
            {value === 1 &&
                <div className="grid-container">
                    <iframe src='prestamo_confusion.html' className='grid-item'></iframe>
                    <img src="prestamo_shap_bar.png" alt="Image 2" className="grid-item" />
                    <img src="prestamo_shap_summary.png" alt="Image 3" className="grid-item" />
                    <div className="grid-item api">
                        <select className="dropdown" value={dropdownValue2} onChange={handleDropdownChange2}>
                            {Array.from({ length: 1401 }, (_, i) => i).map((num) => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                        <img
                            alt="API Image"
                            src={apiPrestamo}
                            className="iframe"
                        />
                    </div>
                </div>
            }
            {value === 2 &&
                <div className="grid-container">
                    <iframe src='inmediauto_confusion.html' className='grid-item'></iframe>
                    <img src="inmediauto_shap_bar.png" alt="Image 2" className="grid-item" />
                    <img src="inmediauto_shap_summary.png" alt="Image 3" className="grid-item" />
                    <div className="grid-item api">
                        <select className="dropdown" value={dropdownValue3} onChange={handleDropdownChange3}>
                            {Array.from({ length: 1401 }, (_, i) => i).map((num) => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                        <img
                            alt="API Image"
                            src={apiInmediauto}
                            className="iframe"
                        />
                    </div>
                </div>
            }
        </div>
    );
}

export default Classification;