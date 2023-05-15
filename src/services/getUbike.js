import axios from "axios";

const getUbike = () =>
  axios({
    url: `https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json`,
  })
    .then((res) => res?.data)
    .then((data) => {
      return data?.map((item) => ({
        type: "Feature",
        properties: {
          name: item?.sna,
          bemp: item?.bemp,
          sbi: item?.sbi,
          tot: item?.tot,
        },
        geometry: {
          type: "Point",
          coordinates: [item?.lng, item?.lat, 0.0],
        },
      }));
    })
    .then((data) => ({
      type: "FeatureCollection",
      features: data,
    }));

export default getUbike;
