/// app.js
import React, { useEffect, useState, useCallback } from 'react';
import DeckGL from '@deck.gl/react';
import { FlyToInterpolator } from 'deck.gl';
import { LineLayer, ScatterplotLayer, ColumnLayer, PolygonLayer } from '@deck.gl/layers';
import { scaleLinear } from "d3-scale";
import { StaticMap } from 'react-map-gl';
import { Deck, MapView, FirstPersonView, OrthographicView } from '@deck.gl/core';
import axios from "axios";
// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = '';


const mapStyle = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';


function ViewState({ viewState }) {
    const [initialViewState, setInitialViewState] = useState({
        latitude: 37.7751,
        longitude: -122.4193,
        zoom: 10,
        bearing: 0,
        pitch: 0,
    });

    const goToNYC = useCallback(() => {
        setInitialViewState({
            longitude: -74.1,
            latitude: 40.7,
            zoom: 14,
            pitch: 0,
            bearing: 0,
            transitionDuration: 8000,
            transitionInterpolator: new FlyToInterpolator()
        })
    }, []);
    return (
        <div>
            <DeckGL

                initialViewState={initialViewState}
                controller={true}
            >

                {/* <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} /> */}
                <StaticMap mapStyle={mapStyle} mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
                <button onClick={goToNYC} style={{ width: '200px' }}>New York City</button>
            </DeckGL>

        </div>


    );
}


export default ViewState;
