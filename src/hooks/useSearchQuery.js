import { useQuery } from "@tanstack/react-query";
import { getSearchTracked } from "../helpers/swapi";

export const useSearchQuery = (type, searchText) => {
  const query = searchText?.trim().toLowerCase();
  return useQuery({
    queryKey: [type, query],
    queryFn: () => getSearchTracked(type, query),
    enabled: !!query,
    staleTime: 1000 * 60 * 10
  });
};