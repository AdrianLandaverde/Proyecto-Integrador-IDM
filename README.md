# 🤖Proyecto-Integrador-IDM🤖

Este es el proyecto final de la carrera de Ingeniería en Ciencia de Datos y Matemáticas del Tecnológico de Monterrey, Campus Estado de México. El proyecto consistió en analizar una base de datos una empresa bancaria. En el pdf se enceuntra una descripción más a detalle de los datos que nos fueron entregados.

## 👥 Integrantes

![Adrián](https://img.shields.io/badge/Landaverde%20Nava-white?style=for-the-badge&label=Adrian&labelColor=darkblue)
![Jesús Yair](https://img.shields.io/badge/Ramirez%20Islas-white?style=for-the-badge&label=Jesús%20Yair&labelColor=darkblue)
![Luis Gerardo](https://img.shields.io/badge/Lagunes%20Nájera-white?style=for-the-badge&label=Luis%20Gerardo&labelColor=darkblue)
![Cristian](https://img.shields.io/badge/Gonzaga%20López-white?style=for-the-badge&label=Cristian&labelColor=darkblue)
![Evelyn Geovanna](https://img.shields.io/badge/Pérez%20Gómez-white?style=for-the-badge&label=Evelyn%20Geovanna&labelColor=darkblue)
![Michael Steven](https://img.shields.io/badge/Delgado%20Caicedo-white?style=for-the-badge&label=Michael%20Steven&labelColor=darkblue)
![Deborah](https://img.shields.io/badge/Tirado%20Hernández-white?style=for-the-badge&label=Deborah&labelColor=darkblue)

## 🔧Tecnologías utilizadas

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![GeoPandas](https://img.shields.io/badge/GeoPandas-23A9E1?style=for-the-badge&logo=geopandas&logoColor=white)
![Folium](https://img.shields.io/badge/Folium-7BAADF?style=for-the-badge&logo=folium&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=for-the-badge&logo=plotly&logoColor=white)
![Scikit Learn](https://img.shields.io/badge/Scikit_Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Qlik](https://img.shields.io/badge/Qlik-FCA326?style=for-the-badge&logo=qlik&logoColor=white)
![Microsoft Access](https://img.shields.io/badge/Microsoft_Access-A4373A?style=for-the-badge&logo=microsoft-access&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

## 📖Descripción del proyecto

Se realizó una aplicación web con Frontend en React y Backed en FastAPI (Python). Esta aplicación Web tiene 6 secciones:

1. **Inicio**: Sección donde se muestra una breve descripción del proyecto y los integrantes del equipo.

2. **Dashboard - Información de clientes**: Sección donde se muestra un dashboard interactivo con información de los clientes de la empresa bancaria.

3. **Dashboard - Información demográfica**: Sección donde se muestra un dashboard interactivo con información demográfica (mapas) de los clientes de la empresa bancaria.

4. **Dashboard - Información de ofertas**: Sección donde se muestra un dashboard interactivo con información de las ofertas de la empresa bancaria.

5. **Modelos de Machine Learning**: Sección donde se muestran los modelos de Machine Learning desarrollados para el proyecto.

6. **Interpolación**: Sección donde se muestra un mapa de México con las principales variables de cada uno de los modelos de Machine Learning interpoladas a todo el país.

## 📦Estructura del repositorio

    📂 Project Directory
    ├── 🖥️ api
    │   └── Contiene el código de la API que se utilizó para el despliegue de algunos modelos de Machine Learning y gráficas interactivas.
    ├── 💾 data
    │   └── Contiene los datos utilizados en el proyecto.
    ├── 📊 graphs
    │   └── Contiene las gráficas interactivas y estáticas generadas en el proyecto.
    ├── 🤖 models
    │   └── Contiene los modelos de Machine Learning y shap values generados en el proyecto.
    ├── 📚 notebooks
    │   └── Contiene los notebooks de Jupyter utilizados en el proyecto, donde se realizaron exploraciones de datos y análisis.
    └── ⚛️ react-app
        └── Contiene el código de la aplicación web desarrollada para el proyecto.

## 🔢Instrucciones para correr la aplicación web

1. Clonar el repositorio en tu máquina local.
2. Abrir una terminal y navegar a la carpeta `react-app`.
3. Instalar las dependencias del proyecto con el comando `npm install`.
4. Correr la aplicación con el comando `npm run dev`.
5. La aplicación estará disponible en `http://localhost:5173/`.
6. Abrir una segunda terminal y navegar a la carpeta `api`.
7. Instalar las dependencias del proyecto con el comando `pip install -r requirements.txt`.
8. Correr la API con el comando `uvicorn app:app --reload`.

