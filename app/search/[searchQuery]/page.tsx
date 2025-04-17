'use client';

import { useParams } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchResult from '@/app/search/[searchQuery]/SearchResult';

const queryClient = new QueryClient();

export default function SearchPage() {
  const { searchQuery } = useParams();

  if (!searchQuery) {
    return <div>Invalid search query</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SearchResult searchQuery={decodeURIComponent(searchQuery as string)} />
    </QueryClientProvider>
  );
}
