import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { apiRequest } from "../requests/apiRequest";

export const useApiQuery = (query, start) => {
  
  const searchWeb = useQuery({
    queryKey: [query, start, localStorage.getItem("tab")],
    queryFn: () => apiRequest(query, start),
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000,
    onError: (err) => {
      throw Error(`useQuery Error: ${err.message}`);
    },
  });

  const searchImages = useInfiniteQuery({
    queryKey: [query, localStorage.getItem("tab")],
    queryFn: ({ pageParam = 1 }) => apiRequest(query, pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    getPreviousPageParam: (lastPage) => lastPage.prevPage,
    staleTime: 5 * 60 * 1000,
    onError: (err) => {
      throw Error(`useQuery Error: ${err.message}`);
    },
  });

  switch (localStorage.getItem("tab")) {
    case "All":
      return searchWeb;
    case "Images":
      return searchImages;
    default:
      return "";
  }
};

