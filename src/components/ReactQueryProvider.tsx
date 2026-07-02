import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
