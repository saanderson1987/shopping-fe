const MAP_STYLES = [
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
];

const MAP_OPTIONS = {
  center: { lat: 40.72283097424528, lng: -74.00074286846672 },
  fullscreenControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  styles: MAP_STYLES,
  zoom: 15.5,
};

export default MAP_OPTIONS;
