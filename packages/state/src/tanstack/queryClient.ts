import { QueryClient } from "@tanstack/react-query";

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60, // Data is considered fresh for 1 minutes, cache for 1 min
        gcTime: 1000 * 60, // Inactive data is garbage collected after 1 minutes,garbage collect after 1 min
        // staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes, cache for 5 min
        // gcTime: 1000 * 60 * 30, // Inactive data is garbage collected after 30 minutes,garbage collect after 30 min
        retry: 2,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        refetchOnMount: false,
      },
      mutations: {
        retry: 2,
      },
    },
  });
}
