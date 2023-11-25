export type Marker = {
  lat: number;
  lng: number;
  title: string;
};

const createMarkers = ({
  infoWindow,
  map,
  MarkerLibrary,
  markers,
}: {
  infoWindow: google.maps.InfoWindow;
  map: google.maps.Map;
  MarkerLibrary: google.maps.MarkerLibrary;
  markers: Marker[];
}): google.maps.Marker[] =>
  markers.map(({ lat, lng, title }) => {
    const marker = new MarkerLibrary.Marker({
      position: { lat, lng },
      map,
      title,
    });

    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });

    return marker;
  });

export default createMarkers;
