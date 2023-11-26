import React, { useEffect, useRef } from "react";
import MapWrapper from "./MapWrapper";
import MAP_OPTIONS from "./map-options";
import createMarkers, { Marker, OnClickMarker } from "./create-markers";

const Map = ({
  markers,
  onClickMarker,
}: {
  markers: Marker[];
  onClickMarker: OnClickMarker;
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(
      ref.current as unknown as HTMLElement,
      MAP_OPTIONS
    );

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
  }, [markers]);

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
}: {
  markers: Marker[];
  onClickMarker: OnClickMarker;
}) => (
  <MapWrapper>
    <Map markers={markers} onClickMarker={onClickMarker} />
  </MapWrapper>
);

export default MapWrapped;
