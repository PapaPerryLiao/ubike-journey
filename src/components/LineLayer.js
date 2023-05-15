import mapboxgl from "mapbox-gl";
import { Layer, Source, useMap } from "react-map-gl";
import { lineLayer } from "../constants/layers";
import { useEffect } from "react";

function LineLayer({ data }) {
  const { current: map } = useMap();

  useEffect(() => {
    if (!data) return;

    const coordinates = data?.features?.map(
      ({ geometry }) => geometry?.coordinates
    );

    const bounds = new mapboxgl.LngLatBounds(
      coordinates[0][0],
      coordinates[0][0]
    );

    for (const coord of coordinates) {
      bounds.extend(coord);
    }

    map.fitBounds(bounds, {
      padding: 50,
    });
  }, [map, data]);

  return (
    <Source id="directions" type="geojson" data={data}>
      <Layer {...lineLayer} />
    </Source>
  );
}

export default LineLayer;
