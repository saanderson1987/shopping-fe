import React from "react";
import Map from "./Map/Map";
import Stores from "./Stores";

const markers = [{ lat: 40.7240352, lng: -74.0003392, title: "test" }];

const Main = () => (
  <>
    <Map markers={markers} />
    <Stores />
  </>
);

export default Main;
