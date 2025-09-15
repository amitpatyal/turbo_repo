"use client";
import { createQueryClient } from "@repo/state";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

const Provider = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const [client] = useState(() => createQueryClient());
  return (
    <QueryClientProvider client={client}>
      <div>{children}</div>
    </QueryClientProvider>
  );
};

export default Provider;
