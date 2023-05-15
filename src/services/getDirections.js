import axios from "axios";

const getDirections = ({ profile, coordinates }) =>
  axios({
    url: `https://api.mapbox.com/directions/v5/${profile}/${coordinates}?geometries=polyline&alternatives=true&steps=true&overview=full&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,
  })
    .then((res) => res?.data)
    .then((data) => {
      const lineString = [];
      let previousPoint = {};

      data?.routes[0]?.legs[0]?.steps?.forEach((item, index) => {
        if (index !== 0) {
          lineString.push({
            type: "Feature",
            properties: {
              name: previousPoint?.name,
              distance: previousPoint?.distance,
              duration: previousPoint?.duration,
            },
            geometry: {
              type: "LineString",
              coordinates: [
                [
                  previousPoint?.coordinates[0],
                  previousPoint?.coordinates[1],
                  0.0,
                ],
                [item?.maneuver?.location[0], item?.maneuver?.location[1], 0.0],
              ],
            },
          });
        }

        previousPoint = {
          name: item?.name,
          distance: item?.distance,
          duration: item?.duration,
          coordinates: [
            item?.maneuver?.location[0],
            item?.maneuver?.location[1],
            0.0,
          ],
        };
      });

      return lineString;
    })
    .then((data) => ({
      type: "FeatureCollection",
      features: data,
    }));

export default getDirections;
