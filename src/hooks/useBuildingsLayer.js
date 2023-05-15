import { useEffect, useState } from "react";
import { useMap } from "react-map-gl";

const useBuildingsLayer = () => {
  const { current: map } = useMap();
  const { layerId, setLayerId } = useState();

  useEffect(() => {
    map &&
      map.on("style.load", () => {
        const layers = map.getStyle().layers;
        const labelLayerId = layers.find(
          (layer) => layer.type === "symbol" && layer.layout["text-field"]
        ).id;

        setLayerId(labelLayerId);
      });
  }, [map, setLayerId]);

  return {
    layerId,
  };
};

export default useBuildingsLayer;
