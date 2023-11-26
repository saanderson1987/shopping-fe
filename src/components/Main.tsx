import React, { useState, useCallback } from "react";
import Map from "./Map/Map";
import { Marker } from "./Map/create-markers";
import Bottom from "./Bottom";

const markers = [
  { lat: 40.7240352, lng: -74.0003392, name: "Etro", storeId: "123" },
];

const Main = () => {
  const [idStoreOpen, setIdStoreOpen] = useState<string | null>(null);

  const onClickMap = useCallback(() => {
    if (idStoreOpen) {
      setIdStoreOpen(null);
    }
  }, [idStoreOpen, setIdStoreOpen]);

  const onClickMarker = useCallback(
    ({ marker }: { marker: Marker }) => {
      setIdStoreOpen(marker.storeId);
    },
    [setIdStoreOpen]
  );

  return (
    <>
      <Map
        markers={markers}
        onClickMap={onClickMap}
        onClickMarker={onClickMarker}
      />
      <Bottom idStoreOpen={idStoreOpen} />
    </>
  );
};

export default Main;
