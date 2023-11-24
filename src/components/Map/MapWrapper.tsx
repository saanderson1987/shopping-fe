import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const Container = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      width: "100vw",
      height: "100vw",
    }}
  >
    {children}
  </Box>
);

const MapWrapper = ({ children }: { children: React.ReactElement }) => (
  <Container>
    <Wrapper
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string}
      render={(status) => {
        switch (status) {
          case Status.LOADING:
            return <CircularProgress />;
          case Status.FAILURE:
            return <Typography>Error loading map.</Typography>;
          case Status.SUCCESS:
            return children;
        }
      }}
    />
  </Container>
);

export default MapWrapper;
