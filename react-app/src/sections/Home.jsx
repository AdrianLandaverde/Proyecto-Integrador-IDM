import React from 'react';
import './Home.css';
import { Grid, Typography, Box } from '@material-ui/core';
import { FaPython, FaReact, FaHtml5, FaCss3, FaJs, FaGithub, FaAws } from 'react-icons/fa';
import { SiQlik, SiPandas, SiGeopandas, SiFolium, SiPlotly, SiFastapi, SiScikitlearn, SiMicrosoftaccess } from "react-icons/si";

const Home = () => {
    return (
        <div className='home'>

            <Box className="fullScreenContainer">
                <Grid container spacing={3} className="container">
                    <Grid item xs={12}>
                        <h1>Análisis Bancario</h1>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" className="description">
                            Recientemente, una destacada empresa bancaria solicitó a DataIQ una Prueba de Concepto (POC) en Qlik Sense para evaluar diversas herramientas de BI.
                        </Typography>

                        <Typography variant="body1" className="description">
                            Los principales aspectos a evaluar incluyen la integración de múltiples fuentes de información, un modelo de datos eficiente, la interpretación de reglas de negocio y un diseño innovador que facilite el análisis y la toma de decisiones.
                        </Typography>

                        <Typography variant="body1" className="description">
                            La POC se centrará en analizar Ofertas/Promociones de Crédito basadas en varios criterios de elegibilidad. Para ello, se proporcionaron datos de Access y reglas de negocio específicas.
                        </Typography>

                        <Typography variant="body1" className="description">
                            La efectividad en el uso de la herramienta será crucial para la decisión de la empresa, y se busca aprovechar tu experiencia en ingeniería de datos y matemáticas para innovar en el análisis de la información
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <img className="image" src="https://dataiq.mx/wp-content/uploads/2022/04/logo-DataIQ.png" alt="Company2" />
                            <img className="image" src="https://www.prisma-informatik.de/newsroom/wp-content/uploads/2019/06/Qlik-Logo_RGB-768x226.png" alt="Company3" />
                            <img className="image" src="images/tec.png" alt="Company1" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <h2>Nuestro Equipo</h2>
            <div className='team'>
                <a href="https://www.linkedin.com/in/adrian-landaverde-nava/" target="_blank" rel="noopener noreferrer">

                    <div className='team-member'>
                        <img src="images/adrian.JPG" alt="Team member 1" />
                        <p>Adrián Landaverde Nava</p>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/jes%C3%BAs-yair/" target="_blank" rel="noopener noreferrer">
                    <div className='team-member'>
                        <img src="images/yair.png" alt="Team member 2" />
                        <p>Jesús Yair Ramirez Islas</p>
                    </div>
                </a>

                <a href="hhttps://www.linkedin.com/in/luis-gerardo-lagunes-najera-b09399239/" target="_blank" rel="noopener noreferrer">
                    <div className='team-member'>
                        <img src="images/luis.jpeg" alt="Team member 3" />
                        <p>Luis Gerardo Lagunes Nájera</p>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/cristian-gl/" target="_blank" rel="noopener noreferrer">
                    <div className='team-member'>
                        <img src="images/cristian.jpeg" alt="Team member 4" />
                        <p>Cristian Gonzaga López</p>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/evelyn-geovanna/" target="_blank" rel="noopener noreferrer">
                    <div className='team-member'>
                        <img src="images/evelyn.jpg" alt="Team member 5" />
                        <p>Evelyn Geovanna Pérez Gómez</p>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/michael-steven-delgado-02956823b/" target="_blank" rel="noopener noreferrer">
                    <div className='team-member'>
                        <img src="images/michael.jpg" alt="Team member 6" />
                        <p>Michael Steven Delgado Caicedo</p>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/deborah-tirado-hern%C3%A1ndez-137902260/" target="_blank" rel="noopener noreferrer">
                    <div className='team-member'>
                        <img src="images/deborah.jpg" alt="Team member 7" />
                        <p>Deborah Tirado Hernández</p>
                    </div>
                </a>

            </div>


            <h2>Tecnologías Usadas</h2>

            <div className="icon-container">
                <FaPython className="programming-icon" id='iconPython' />
                <SiPandas className="programming-icon" id='iconPandas' />
                <SiGeopandas className="programming-icon" id='iconGeopandas' />
                <SiFolium className="programming-icon" id='iconFolium' />
                <SiPlotly className="programming-icon" id='iconPlotly' />
                <SiScikitlearn className="programming-icon" id='iconScikitlearn' />
                <SiFastapi className="programming-icon" id='iconFastapi' />
                <FaGithub className="programming-icon" id='iconGithub' />
                <FaAws className="programming-icon" id='iconAws' />
                <SiQlik className="programming-icon" id='iconQlik' />
                <SiMicrosoftaccess className="programming-icon" id='iconAccess' />
                <FaHtml5 className="programming-icon" id='iconHtml5' />
                <FaCss3 className="programming-icon" id='iconCss3' />
                <FaJs className="programming-icon" id='iconJs' />
                <FaReact className="programming-icon" id='iconReact' />
            </div>

        </div>
    );
}

export default Home;