import { useQuery } from "@tanstack/react-query";
import getUbike from "../services/getUbike";

const useUbike = () =>
  useQuery({
    queryKey: ["ubike"],
    queryFn: getUbike,
  });

export default useUbike;
