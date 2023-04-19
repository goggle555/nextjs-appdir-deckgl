"use client";

import DeckGL from "@deck.gl/react/typed";
import { LineLayer } from "@deck.gl/layers/typed";
import { Map } from "react-map-gl";
import maplibregl from "maplibre-gl";
import 'maplibre-gl/dist/maplibre-gl.css';

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781],
  },
];

export default function DeckGLViewer() {
  const layers = [new LineLayer({ id: "line-layer", data })];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <Map
        mapLib={maplibregl}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json"
      />
    </DeckGL>
  );
}
