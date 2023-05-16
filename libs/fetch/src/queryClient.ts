import {
  QueryClient,
  type QueryClientConfig,
  type QueryFunction,
} from "@tanstack/react-query";

// @TODO: this should be import.meta.env.DEV?
const isProd = process.env.NODE_ENV === "production";

export function createQueryClient(
  options: QueryClientConfig & {
    onError: (error: unknown) => void;
    queryFn: QueryFunction;
  }
) {
  return new QueryClient({
    ...options,
    defaultOptions: {
      ...options.defaultOptions,
      queries: {
        refetchOnWindowFocus: isProd,
        retry: isProd ? 3 : 0,
        staleTime: isProd ? 0 : 5 * 60 * 1000,
        useErrorBoundary: true,
        suspense: true,
        ...options.defaultOptions?.queries,
        onError: options.onError,
      },
    },
  });
}
