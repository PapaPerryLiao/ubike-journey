import Map, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";

function DefaultMap({ children, ...props }) {
  return (
    <Map
      initialViewState={{
        longitude: 121,
        latitude: 23.5,
        zoom: 7,
        bearing: 80,
        pitch: 80,
      }}
      style={{
        width: "100vw",
        height: "100vh",
      }}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      maxPitch={85}
      terrain={{ source: "mapbox-dem", exaggeration: 1.5 }}
      {...props}
    >
      <GeolocateControl position="top-right" />
      <FullscreenControl position="top-right" />
      <NavigationControl position="top-right" />
      <ScaleControl />
      {children}
    </Map>
  );
}

export default DefaultMap;
