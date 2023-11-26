export type Marker = {
  lat: number;
  lng: number;
  name: string;
  storeId: string;
};

export type OnClickMarker = ({ marker }: { marker: Marker }) => void;

const createMarkers = ({
  map,
  MarkerLibrary,
  markers,
  onClickMarker,
}: {
  map: google.maps.Map;
  MarkerLibrary: google.maps.MarkerLibrary;
  markers: Marker[];
  onClickMarker: OnClickMarker;
}): google.maps.Marker[] =>
  markers.map((marker) => {
    const mapMarker = new MarkerLibrary.Marker({
      icon: {
        anchor: new google.maps.Point(0, 20),
        labelOrigin: new google.maps.Point(18, 10),
        //  chat bubble from Material Icons: https://fonts.google.com/icons?selected=Material+Icons:chat_bubble:&icon.query=chat&icon.platform=web
        //  path: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",
        path: "M40 2H4c-1.1 0-2 .9-2 2v18l4-4h34c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",
      },
      label: {
        fontSize: "12px",
        text: marker.name,
      },
      map,
      position: { lat: marker.lat, lng: marker.lng },
      title: marker.name,
    });

    mapMarker.addListener("click", () => {
      onClickMarker({ marker });
    });

    return mapMarker;
  });

export default createMarkers;
