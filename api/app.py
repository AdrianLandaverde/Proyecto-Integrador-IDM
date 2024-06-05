import fastapi
from fastapi.middleware.cors import CORSMiddleware
import plotly.express as px
import pandas as pd
from fastapi.responses import FileResponse
from fastapi.responses import HTMLResponse
import folium
from folium.plugins import MarkerCluster
from folium.plugins import HeatMap
from folium.map import LayerControl
import geopandas as gpd
import pickle
import shap
import matplotlib.pyplot as plt

app = fastapi.FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)

df_demograficos_sucursales= pd.read_csv('../data/df_demograficos_sucursales.csv')
color_main= '#30419B'

@app.get('/')
def hello_world():
    return {'hello': 'world'}

@app.get('/cuentas_estado/')
def top_estados(n_top_estados: int= 10):
    fig = px.treemap(df_demograficos_sucursales['estado'].value_counts().reset_index().iloc[:n_top_estados], 
                        path=['estado'], values='count', title='Cantidad de cuentas por estado',
                        color='count', labels={'count':'Cantidad'}, color_continuous_scale=px.colors.sequential.Blues)
    fig.update_layout(margin=dict(l=0, r=0, t=50, b=0), title_y=0.99, title_x=0.5,
                        plot_bgcolor='rgba(0, 0, 0, 0)', paper_bgcolor='rgba(0, 0, 0, 0)',
                        font=dict(color="white"), coloraxis_showscale=False)
    fig.update_traces(textinfo="label+value", marker=dict(line=dict(width=0, color='rgba(0,0,0,0)')))
    plot_html = fig.to_html(full_html=False)
    return HTMLResponse(content=plot_html)

@app.get('/cuentas_ciudad/')
def top_ciudades(n_top_ciudades: int= 10):
    fig = px.treemap(df_demograficos_sucursales['ciudad'].value_counts().reset_index().iloc[:n_top_ciudades], 
                        path=['ciudad'], values='count', title='Cantidad de cuentas por ciudad',
                        color='count', labels={'count':'Cantidad'}, color_continuous_scale=px.colors.sequential.Blues)
    fig.update_layout(margin=dict(l=0, r=0, t=50, b=0), title_y=0.99, title_x=0.5,
                        plot_bgcolor='rgba(0, 0, 0, 0)', paper_bgcolor='rgba(0, 0, 0, 0)',
                        font=dict(color="white"), coloraxis_showscale=False)
    fig.update_traces(textinfo="label+value", marker=dict(line=dict(width=0, color='rgba(0,0,0,0)')))
    plot_html = fig.to_html(full_html=False)
    return HTMLResponse(content=plot_html)

@app.get('/cuentas_mapa/')
def mapa_cuentas(n_top_estados: int= 10):
    gdf= gpd.read_file('../data/dest2019gw/dest2019gw.shp')
    gdf= gdf.replace({'MÃ©xico':'MEXICO'})
    gdf_plot= gdf.copy().sort_values(by='NOM_ENT').reset_index(drop=True)
    geo_json_data = gdf_plot.to_json()
    df_demograficos_sucursales= pd.read_csv('../data/df_demograficos_sucursales.csv')
    df_demograficos_sucursales= df_demograficos_sucursales.replace({'VERACRUZ':'VERACRUZ DE IGNACIO DE LA LLAVE', 'DF':'CIUDAD DE MEXICO'})
    df_resumen_estado= df_demograficos_sucursales.groupby(['estado']).count()['customeraccount'].reset_index()
    df_resumen_estado['geometry']= gdf_plot['geometry']
    df_resumen_estado['NOM_ENT']= gdf_plot['NOM_ENT']
    
    top_estados= list(df_resumen_estado.sort_values(by='customeraccount', ascending=False).iloc[:n_top_estados]['estado']) 
    df_resumen_estado= df_resumen_estado[df_resumen_estado['estado'].isin(top_estados)]
    df_demograficos_sucursales= df_demograficos_sucursales[df_demograficos_sucursales['estado'].isin(top_estados)]
    
    m = folium.Map(location=[23.562846, -102.5539989], zoom_start=5)

    fg1 = folium.FeatureGroup(name="Cluster clientes", show=False).add_to(m)

    marker_cluster = MarkerCluster().add_to(fg1)

    for i in (range(len(df_demograficos_sucursales))):
        folium.Marker(
            location=[df_demograficos_sucursales.iloc[i]['latitud'], df_demograficos_sucursales.iloc[i]['longitud']],
            popup=f"{df_demograficos_sucursales.iloc[i]['NOM_SUC']}"
        ).add_to(marker_cluster)
        
        
    fg2 = folium.FeatureGroup(name="Heatmap Clientes", show=False).add_to(m)

    data = df_demograficos_sucursales[['latitud', 'longitud']].values

    heatmap = HeatMap(data, radius=18).add_to(fg2)

    choropleth = folium.Choropleth(
        geo_data=geo_json_data,
        data=df_resumen_estado,
        columns=['NOM_ENT', 'customeraccount'],
        key_on='feature.properties.NOM_ENT',
        fill_color='RdYlGn',
        fill_opacity=0.7,
        line_opacity=0.2,
        legend_name='Number of Customers',
        name='Choropleth Clientes'
    ).add_to(m)
        
    LayerControl().add_to(m)
    
    return HTMLResponse(content=m._repr_html_())

from fastapi.responses import StreamingResponse
from io import BytesIO

@app.get('/model_tdc/')
def shap_tdc(n_test: int= 0):
    with open('../models/shap_tdc.pkl', 'rb') as file:
        shap_values= pickle.load(file)
    plt.clf() 
    shap.plots.waterfall(shap_values[n_test], show=False)
    buf = BytesIO()
    plt.savefig(buf, format='png', transparent=True, bbox_inches='tight', pad_inches=0.1)
    buf.seek(0)
    return StreamingResponse(buf, media_type='image/png')

@app.get('/model_prestamo/')
def shap_prestamo(n_test: int= 0):
    with open('../models/shap_prestamo.pkl', 'rb') as file:
        shap_values= pickle.load(file)
    plt.clf() 
    shap.plots.waterfall(shap_values[n_test], show=False)
    buf = BytesIO()
    plt.savefig(buf, format='png', transparent=True, bbox_inches='tight', pad_inches=0.1)
    buf.seek(0)
    return StreamingResponse(buf, media_type='image/png')

@app.get('/model_inmediauto/')
def shap_inmediauto(n_test: int= 0):
    with open('../models/shap_inmediauto.pkl', 'rb') as file:
        shap_values= pickle.load(file)
    plt.clf() 
    shap.plots.waterfall(shap_values[n_test], show=False)
    buf = BytesIO()
    plt.savefig(buf, format='png', transparent=True, bbox_inches='tight', pad_inches=0.1)
    buf.seek(0)
    return StreamingResponse(buf, media_type='image/png')