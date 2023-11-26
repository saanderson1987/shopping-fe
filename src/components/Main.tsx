import React, { useState } from "react";
import Map from "./Map/Map";
import Stores from "./Stores";

const markers = [
  { lat: 40.7240352, lng: -74.0003392, name: "Etro", storeId: "123" },
];

const Main = () => {
  const [idStoreOpen, setIdStoreOpen] = useState<string | null>(null);

  return (
    <>
      <Map
        markers={markers}
        onClickMarker={({ marker }) => setIdStoreOpen(marker.storeId)}
      />
      <Stores />
    </>
  );
};

export default Main;
