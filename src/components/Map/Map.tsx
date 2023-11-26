import React, { useEffect, useRef, useState } from "react";
import MapWrapper from "./MapWrapper";
import MAP_OPTIONS from "./map-options";
import createMarkers, { Marker, OnClickMarker } from "./create-markers";

type OnClickMap = () => void;

const Map = ({
  markers,
  onClickMap,
  onClickMarker,
}: {
  markers: Marker[];
  onClickMap: OnClickMap;
  onClickMarker: OnClickMarker;
}) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [MarkerLibrary, setMarkerLibrary] =
    useState<google.maps.MarkerLibrary | null>(null);
  const ref = useRef(null);

  useEffect(() => {
    (
      window.google.maps.importLibrary(
        "marker"
      ) as Promise<google.maps.MarkerLibrary>
    ).then(setMarkerLibrary);

    setMap(
      new window.google.maps.Map(
        ref.current as unknown as HTMLElement,
        MAP_OPTIONS
      )
    );
  }, []);

  useEffect(() => {
    if (map) {
      map.addListener("click", () => {
        onClickMap();
      });
    }
  }, [onClickMap, map]);

  useEffect(() => {
    if (MarkerLibrary && map) {
      createMarkers({
        map,
        MarkerLibrary,
        markers,
        onClickMarker,
      });
    }
  }, [map, MarkerLibrary, markers, onClickMarker]);

  return (
    <div
      id="map"
      ref={ref}
      style={{
        height: "100%",
        width: "100%",
      }}
    />
  );
};

const MapWrapped = ({
  markers,
  onClickMarker,
  onClickMap,
}: {
  markers: Marker[];
  onClickMap: OnClickMap;
  onClickMarker: OnClickMarker;
}) => (
  <MapWrapper>
    <Map
      markers={markers}
      onClickMap={onClickMap}
      onClickMarker={onClickMarker}
    />
  </MapWrapper>
);

export default MapWrapped;
