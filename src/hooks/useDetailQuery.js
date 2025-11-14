import { useQuery } from "@tanstack/react-query";
import { getDetail } from "../helpers/swapi";

export const useDetailQuery = (type, id) =>
  useQuery({
    queryKey: [type, id],
    queryFn: () => getDetail(type, id),
    enabled: !!id,
    staleTime: 1000 * 60 * 10,
  });