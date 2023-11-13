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
  lat: 40.72332345541451,
  lng: -73.99905681610107,
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

  if (isLoaded) {
    return (
      <GoogleMap
        center={center}
        mapContainerStyle={containerStyle}
        options={{
          mapTypeControl: false,
          styles: [
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "administrative",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "poi",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "transit",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
          ],
        }}
        zoom={15.5}
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
