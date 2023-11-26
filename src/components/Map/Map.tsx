import React, { useEffect, useRef } from "react";
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
  const ref = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(
      ref.current as unknown as HTMLElement,
      MAP_OPTIONS
    );

    map.addListener("click", () => {
      onClickMap();
    });
    (
      window.google.maps.importLibrary(
        "marker"
      ) as Promise<google.maps.MarkerLibrary>
    ).then((MarkerLibrary) => {
      createMarkers({
        map,
        MarkerLibrary,
        markers,
        onClickMarker,
      });
    });
  }, [markers, onClickMap, onClickMarker]);

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
