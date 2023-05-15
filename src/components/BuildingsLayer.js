import { Layer } from "react-map-gl";
import { buildings } from "../constants/layers";
import useBuildingsLayer from "../hooks/useBuildingsLayer";

function BuildingsLayer() {
  const { layerId } = useBuildingsLayer();

  return <Layer labelLayerId={layerId} {...buildings} />;
}

export default BuildingsLayer;
