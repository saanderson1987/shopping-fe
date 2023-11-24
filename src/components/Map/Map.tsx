import React, { useEffect, useRef } from "react";
import MapWrapper from "./MapWrapper";
import MAP_OPTIONS from "./map-options";

const markers = [{ lat: 40.7240352, lng: -74.0003392, title: "test" }];

const Map = () => {
  const ref = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(
      ref.current as unknown as HTMLElement,
      MAP_OPTIONS
    );

    const infoWindow = new window.google.maps.InfoWindow();

    (
      window.google.maps.importLibrary(
        "marker"
      ) as Promise<google.maps.MarkerLibrary>
    ).then((MarkerLib) => {
      const { Marker } = MarkerLib;
      markers.forEach(({ lat, lng, title }, i) => {
        const marker = new Marker({
          position: { lat, lng },
          map,
          title: `${i + 1}. ${title}`,
          // content: pin.element,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });
      });
    });
  }, []);

  return <div id="map" ref={ref} style={{ height: "100%", width: "100%" }} />;
};

const MapWrapped = () => (
  <MapWrapper>
    <Map />
  </MapWrapper>
);

export default MapWrapped;
