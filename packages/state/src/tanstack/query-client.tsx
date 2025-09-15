"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React = require("react");

// const [queryClient] = useState(
//   () =>
//     new QueryClient({
//       defaultOptions: {
//         queries: {
//           staleTime: 1000 * 60 * 5, // cache for 5 min
//           gcTime: 1000 * 60 * 30, // garbage collect after 30 min
//           retry: 2,
//           refetchOnWindowFocus: false,
//           refetchOnReconnect: true,
//           refetchOnMount: false,
//         },
//         mutations: {
//           retry: 1,
//         },
//       },
//     })
// );

// Create a client with custom default settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes, cache for 5 min
      gcTime: 1000 * 60 * 30, // Inactive data is garbage collected after 30 minutes,garbage collect after 30 min
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

export function QueryProvider({ children }: { children: ReactNode }) {
  // console.log(
  //   "✅ QueryProvider mounted with client:",
  //   queryClient.getDefaultOptions()
  // );

  // This code is for all users
  //window.__TANSTACK_QUERY_CLIENT__ = queryClient;

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* {process.env.NODE_ENV === "development" && ( */}
      <ReactQueryDevtools initialIsOpen={false} />
      {/* )} */}
    </QueryClientProvider>
  );
}

// import type { QueryClient as TanstackQueryClient } from "@tanstack/react-query";

// declare global {
//   interface Window {
//     __TANSTACK_QUERY_CLIENT__: TanstackQueryClient;
//   }
// }
