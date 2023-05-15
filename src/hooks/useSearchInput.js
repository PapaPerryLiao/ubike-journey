import { useState } from "react";
import useDebounce from "./useDebounce";
import useDirections from "./useDirections";

const useSearchInput = () => {
  const [departure, setDeparture] = useState("121.529111,25.033919");
  const [destination, setDestination] = useState("121.543676,25.033294");

  const { debouncedValue: departureValue, isLoading: isDepartureLoading } =
    useDebounce(departure, 2000);
  const { debouncedValue: destinationValue, isLoading: isDestinationLoading } =
    useDebounce(destination, 2000);

  const coordinates = `${departureValue};${destinationValue}`;

  const { data: directions, isLoading } = useDirections({
    profile: "mapbox/cycling",
    coordinates,
  });

  return {
    departure,
    setDeparture,
    destination,
    setDestination,
    directions,
    isLoading: isLoading || isDepartureLoading || isDestinationLoading,
  };
};

export default useSearchInput;
