import { useCallback, useState } from "react";
import DefaultMap from "./components/DefaultMap";
import Message from "./components/Message";
import Cluster from "./components/Cluster";
import LineLayer from "./components/LineLayer.js";
import { unclusteredPointLayer } from "./constants/layers";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";
import useUbike from "./hooks/useUbike";
import SearchInput from "./components/SearchInput";
import Loading from "./components/Loading";
import useSearchInput from "./hooks/useSearchInput";
import BuildingsLayer from "./components/BuildingsLayer";

function App() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [cursor, setCursor] = useState("auto");
  const { data: ubike } = useUbike();
  const {
    departure,
    setDeparture,
    destination,
    setDestination,
    directions,
    isLoading,
  } = useSearchInput();

  const handleMouseEnter = useCallback((e) => {
    const features = e.features || [];
    setCursor("pointer");

    if (features.length > 0) {
      setPopupInfo({
        lngLat: features[0].geometry.coordinates,
        text: `${features[0].properties.name}, ${features[0].properties.sbi}輛車, ${features[0].properties.bemp}車位 `,
      });
    }
  }, []);

  const handleMouseLeave = useCallback((e) => {
    const features = e.features || [];
    setCursor("auto");

    if (features.length > 0) {
      setPopupInfo({
        lngLat: [],
        text: ``,
      });
    }
  }, []);

  return (
    <div>
      <Loading isLoading={isLoading} />
      <SearchInput
        departure={departure}
        setDeparture={setDeparture}
        destination={destination}
        setDestination={setDestination}
      />
      <Message text={popupInfo?.text} />
      <DefaultMap
        interactiveLayerIds={[unclusteredPointLayer.id]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        cursor={cursor}
        terrain={{ source: "mapbox-dem", exaggeration: 1.5 }}
        antialias={true}
      >
        <Cluster data={ubike} />
        <LineLayer data={directions} />
        <BuildingsLayer />
      </DefaultMap>
    </div>
  );
}

export default App;
