#!/usr/bin/env python3

import dash_video_component
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_video_component.DashVideoComponent(
        id='input',
        source='http://media.w3.org/2010/05/bunny/movie.mp4',
        fluid=False,
        height=640,
        width=1024
    ),
    html.Div(id='output')
])


if __name__ == '__main__':
    app.run_server(debug=True)
