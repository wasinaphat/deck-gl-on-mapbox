/// app.js
import React, { useEffect, useState } from 'react';
import DeckGL from '@deck.gl/react';
import { LineLayer, ScatterplotLayer, ColumnLayer } from '@deck.gl/layers';
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
// 13.84510949906033, 100.44878155630131
// state in thailand
// const INITIAL_VIEW_STATE = {
//   longitude:100.44878155630131,
//   latitude: 13.84510949906033,
//   zoom: 11,
//   maxZoom: 20,
//   pitch: 30,
//   bearing: 0
// };

function Line({ viewState }) {
    const layer = new LineLayer({
        id: 'LineLayer',
        data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-segments.json',
        
        /* props from LineLayer class */
        
        getColor: d => [Math.sqrt(d.inbound + d.outbound), 140, 0],
        getSourcePosition: d => d.from.coordinates,
        getTargetPosition: d => d.to.coordinates,
        getWidth: 12,
        // widthMaxPixels: Number.MAX_SAFE_INTEGER,
        // widthMinPixels: 0,
        // widthScale: 1,
        // widthUnits: 'pixels',
        
        /* props inherited from Layer class */
        
        // autoHighlight: false,
        // coordinateOrigin: [0, 0, 0],
        // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
        // highlightColor: [0, 0, 128, 128],
        // modelMatrix: null,
        // opacity: 1,
        pickable: true,
        // visible: true,
        // wrapLongitude: false,
      });
      


  return (
    <DeckGL

      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[layer]}
      getTooltip={({object}) => object && `${object.from.name} to ${object.to.name}`}

    >

      {/* <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} /> */}
      <StaticMap mapStyle={mapStyle} mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />

    </DeckGL>


  );
}

export default Line;
