/// app.js
import React, { useEffect, useState } from 'react';
import DeckGL from '@deck.gl/react';
import { LineLayer, ScatterplotLayer, ColumnLayer, PolygonLayer } from '@deck.gl/layers';
import { scaleLinear } from "d3-scale";
import { StaticMap } from 'react-map-gl';
import { MapView, FirstPersonView } from '@deck.gl/core';
import axios from "axios";
// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = '';


const mapStyle = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';
const INITIAL_VIEW_STATE = {
  longitude: -122.4,
  latitude: 37.74,
  zoom: 11,
  maxZoom: 20,
  pitch: 30,
  bearing: 0
};

const mockData =  [ 
  {"name":"Lafayette (LAFY)","code":"LF","address":"3601 Deer Hill Road, Lafayette CA 94549","entries":"3481","exits":"3616","coordinates":[-122.123801,37.893394]},
  {"name":"12th St. Oakland City Center (12TH)","code":"12","address":"1245 Broadway, Oakland CA 94612","entries":"13418","exits":"13223","coordinates":[-122.271604,37.803664]},
]
function Scatterplot({ viewState }) {
  const layer = new ScatterplotLayer({
    id: 'ScatterplotLayer',
    // data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json',
    data :mockData,
    
    /* props from ScatterplotLayer class */
    
    // filled: true,
    getFillColor: [255, 140, 0],
    getLineColor: [0, 0, 0],
    // getLineWidth: 1,
    getPosition: d => d.coordinates,
    getRadius: d => Math.sqrt(d.exits),
    // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
    lineWidthMinPixels: 1,
    // lineWidthScale: 1,
    // lineWidthUnits: 'meters',
    radiusMaxPixels: 100,
    radiusMinPixels: 1,
    radiusScale: 6,
    // radiusUnits: 'meters',
    stroked: true,
    
    /* props inherited from Layer class */
    
    // autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
    opacity: 0.8,
    pickable: true,
    // visible: true,
    // wrapLongitude: false,
  });
  

  return (
    <DeckGL

      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[layer]}
      getTooltip={({object}) => object && `${object.name}\n${object.address}`}
    >

      {/* <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} /> */}
      <StaticMap mapStyle={mapStyle} mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />

    </DeckGL>


  );
}

export default Scatterplot;
