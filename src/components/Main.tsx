import React, { useState, useCallback } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Map from "./Map/Map";
import { Marker } from "./Map/create-markers";
import Bottom from "./Bottom";
import { useQuery, gql } from "@apollo/client";
import { Typography } from "@mui/material";

const markers = [
  { lat: 40.7240352, lng: -74.0003392, name: "Etro", storeId: "123" },
];

const QUERY = gql`
  query Query($filter: String) {
    stores(filter: $filter) {
      stores {
        id
        name
        neighborhood {
          id
          name
        }
      }
    }
  }
`;

const Main = () => {
  const { data, error, loading } = useQuery(QUERY, {
    variables: {},
  });

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

  if (loading) return <CircularProgress />;
  if (error) return <Typography>Error loading page.</Typography>;

  console.log(data);

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
