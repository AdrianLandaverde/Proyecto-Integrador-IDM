import fastapi
from fastapi.middleware.cors import CORSMiddleware
import plotly.express as px
import pandas as pd
from fastapi.responses import FileResponse

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
    fig= px.bar(df_demograficos_sucursales['estado'].value_counts().reset_index().iloc[:n_top_estados], 
                x='estado', y="count", title= 'Cantidad de cuentas por estado', text= 'count', 
                labels={'count':'Cantidad de cuentas', 'estado':'Estado'}, color_discrete_sequence=[color_main])
    fig.update_layout(margin=dict(l=0, r=0, t=10, b=0), title_y=0.99, title_x=0.5,
                plot_bgcolor='rgba(0, 0, 0, 0)', paper_bgcolor='rgba(0, 0, 0, 0)',
                font=dict(color="white"), xaxis={'showgrid': False}, yaxis={'showgrid': False})
    fig.write_html('output_plot.html')
    return FileResponse('output_plot.html')

@app.get('/cuentas_ciudad/')
def top_ciudades(n_top_ciudades: int= 10):
    fig= px.bar(df_demograficos_sucursales['ciudad'].value_counts().reset_index().iloc[:n_top_ciudades], 
                x='ciudad', y="count", title= 'Cantidad de cuentas por ciudad', text= 'count', 
                labels={'count':'Cantidad de cuentas', 'ciudad':'Ciudad'}, color_discrete_sequence=[color_main])
    fig.update_layout(margin=dict(l=0, r=0, t=10, b=0), title_y=0.99, title_x=0.5,
                plot_bgcolor='rgba(0, 0, 0, 0)', paper_bgcolor='rgba(0, 0, 0, 0)',
                font=dict(color="white"), xaxis={'showgrid': False}, yaxis={'showgrid': False})
    fig.write_html('output_plot.html')
    return FileResponse('output_plot.html')

@app.get('/cuentas_sucursal/')
def top_sucursales(n_top_sucursales: int= 10):
    fig= px.bar(df_demograficos_sucursales['NOM_SUC'].value_counts().reset_index().iloc[:n_top_sucursales], 
                x='NOM_SUC', y="count", title= 'Cantidad de cuentas por sucursal', text= 'count', 
                labels={'count':'Cantidad de cuentas', 'NOM_SUC':'Sucursal'}, color_discrete_sequence=[color_main])
    fig.update_layout(margin=dict(l=0, r=0, t=10, b=0), title_y=0.99, title_x=0.5,
                plot_bgcolor='rgba(0, 0, 0, 0)', paper_bgcolor='rgba(0, 0, 0, 0)',
                font=dict(color="white"), xaxis={'showgrid': False}, yaxis={'showgrid': False})
    fig.write_html('output_plot.html')
    return FileResponse('output_plot.html')