import fastapi
from fastapi.middleware.cors import CORSMiddleware
import plotly.express as px
import pandas as pd
from fastapi.responses import FileResponse
from fastapi.responses import HTMLResponse

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
    fig.update_layout(margin=dict(l=0, r=0, t=10, b=0), title_y=0.99, title_x=0.5,
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
    fig.update_layout(margin=dict(l=0, r=0, t=10, b=0), title_y=0.99, title_x=0.5,
                        plot_bgcolor='rgba(0, 0, 0, 0)', paper_bgcolor='rgba(0, 0, 0, 0)',
                        font=dict(color="white"), coloraxis_showscale=False)
    fig.update_traces(textinfo="label+value", marker=dict(line=dict(width=0, color='rgba(0,0,0,0)')))
    plot_html = fig.to_html(full_html=False)
    return HTMLResponse(content=plot_html)