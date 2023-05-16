import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createQueryClient } from "./queryClient";
import { queryFn, type ToUrl } from "./queryFn";

type QueryProviderProps = Readonly<{
  children: React.ReactNode;
  basePathOrToUrl: string | ToUrl;
}>;

export const QueryProvider = ({
  basePathOrToUrl,
  children,
}: QueryProviderProps) => {
  const queryClient = React.useMemo(
    () =>
      createQueryClient({
        onError: (error) => {
          console.error(error);
        },
        queryFn: queryFn(basePathOrToUrl),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
