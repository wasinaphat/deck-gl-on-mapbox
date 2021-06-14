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

function Column({ viewState }) {
  const layer = new ColumnLayer({
    id: 'ColumnLayer',
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json',
    // data: mockData,

    /* props from ColumnLayer class */

    // angle: 0,
    // coverage: 1,
    diskResolution: 12,
    elevationScale: 100,
    extruded: true,
    // filled: true,
    getElevation: d => d.value * 50,
    getFillColor: d => [48, 128, d.value * 255, 255],
    getLineColor: [0, 0, 0],
    getLineWidth: 20,
    getPosition: d => d.centroid,
    // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
    // lineWidthMinPixels: 0,
    // lineWidthScale: 1,
    // lineWidthUnits: 'meters',
    // material: true,
    // offset: [0, 0],
    radius: 75,
    // stroked: false,
    // vertices: null,
    // wireframe: false,

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
      getTooltip={({ object }) => object && `height: ${object.value * 5000}m`}

    >

      {/* <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} /> */}
      <StaticMap mapStyle={mapStyle} mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />

    </DeckGL>


  );
}

export default Column;
