import { Layer, Source } from "react-map-gl";
import {
  clusterCountLayer,
  clusterLayer,
  unclusteredPointLayer,
} from "../constants/layers";

function Cluster({ data }) {
  return (
    <Source
      id="ubike"
      type="geojson"
      data={data}
      cluster={true}
      clusterMaxZoom={14}
      clusterRadius={50}
    >
      <Layer {...clusterLayer} />
      <Layer {...clusterCountLayer} />
      <Layer {...unclusteredPointLayer} />
    </Source>
  );
}

export default Cluster;
