import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "./useDebounce";
import getSearch from "@/src/queryOptions/get-search";

export function useSearchNews(searchText: string) {
  const debouncedSearchText = useDebounce(searchText ?? "", 1000);

  const shouldSearch =
    debouncedSearchText.trim().length >= 2;

  return useQuery({
    queryKey: ["search", debouncedSearchText],
    queryFn: async () => {
      console.log("request fired:", debouncedSearchText);
      return getSearch(debouncedSearchText);
    },
    enabled: shouldSearch,
    staleTime: 1000 * 60 * 10,
  });
}