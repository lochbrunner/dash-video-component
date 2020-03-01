#!/usr/bin/env python3

import dash_video_component
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_video_component.DashVideoComponent(
        id='video',
        source='http://media.w3.org/2010/05/bunny/movie.mp4',
        fluid=False,
        height=640,
        width=1024,
        state='pause',
    ),
    html.Button('play', id='play-button'),
    html.Button('pause', id='pause-button'),
    html.Button('seek', id='seek-button'),
    dcc.Input(
        id='time-input',
        placeholder='Enter a time...',
        type='number',
        value=0
    )
])


@app.callback([Output('video', 'state'), Output('video', 'time')],
              [Input('play-button', 'n_clicks_timestamp'),
               Input('pause-button', 'n_clicks_timestamp'),
               Input('seek-button', 'n_clicks_timestamp')],
              [State('time-input', 'value')])
def update_video(play_clicked, pause_clicked, seek_clicked, time):
    play_clicked = 0 if play_clicked is None else play_clicked
    pause_clicked = 0 if pause_clicked is None else pause_clicked
    seek_clicked = 0 if seek_clicked is None else seek_clicked

    if pause_clicked > play_clicked and pause_clicked > seek_clicked:
        return 'pause', None
    if play_clicked > pause_clicked and play_clicked > seek_clicked:
        return 'play', None
    if seek_clicked > pause_clicked and seek_clicked > play_clicked:
        return None, time


if __name__ == '__main__':
    app.run_server(debug=True)
