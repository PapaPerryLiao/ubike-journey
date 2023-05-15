import { useQuery } from "@tanstack/react-query";
import getDirections from "../services/getDirections";

const useDirections = ({ profile, coordinates }) =>
  useQuery({
    queryKey: ["directions", profile, coordinates],
    queryFn: () => getDirections({ profile, coordinates }),
  });

export default useDirections;
