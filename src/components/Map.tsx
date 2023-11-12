// @ts-nocheck
import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Typography from "@mui/material/Typography";

const containerStyle = {
  width: "100vw",
  height: "100vw",
};

const center = {
  lat: 40.7236447,
  lng: -74.003265,
};

const Container = ({ children }) => (
  <Box
    sx={{
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      ...containerStyle,
    }}
  >
    {children}
  </Box>
);

const Map = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  console.log(map);
  console.log(map && map.data.map.center.lat());
  console.log(map && map.data.map.center.lng());

  const onLoad = React.useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  if (isLoaded) {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    );
  }

  if (loadError) {
    return (
      <Container>
        <Typography>Error loading map.</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

export default React.memo(Map);
