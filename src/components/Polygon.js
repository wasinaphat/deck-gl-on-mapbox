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

function Polygon({ viewState }) {
  const layer = new PolygonLayer({
    id: 'PolygonLayer',
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-zipcodes.json',
    // data: mockData,


    /* props from PolygonLayer class */

    // elevationScale: 1,
    extruded: true,
    filled: true,
    getElevation: d => d.population / d.area / 10,
    getFillColor: d => [d.population / d.area / 60, 140, 0],
    getLineColor: [80, 80, 80],
    getLineWidth: d => 1,
    getPolygon: d => d.contour,
    // lineJointRounded: false,
    // lineMiterLimit: 4,
    // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
    lineWidthMinPixels: 1,
    // lineWidthScale: 1,
    // lineWidthUnits: 'meters',
    // material: true,
    stroked: true,
    wireframe: true,

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
      getTooltip={({ object }) => object && `${object.zipcode}
      Population: ${object.population}`}

    >

      {/* <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} /> */}
      <StaticMap mapStyle={mapStyle} mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />

    </DeckGL>


  );
}

export default Polygon;
